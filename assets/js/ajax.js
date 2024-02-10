window.addEventListener('load', function (){
    console.log('correcto');
document.querySelector('#fase1').addEventListener('click',traerDatos2);
document.querySelector('#fase2').addEventListener('click',traerDatos2);

// window.jsPDF = window?.jspdf?.jsPDF;

let datosEquipos = {
    "UNION SAN GUILLERMO": {
        nombre: "UNION SAN GUILLERMO",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "ucyd.png"
    },
    "SPORTIVO SUARDI": {
        nombre: "SPORTIVO SUARDI",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "sportivo.png"
    },
    "JUNIORS SUARDI": {
        nombre: "JUNIORS SUARDI",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "juniors.png"
    },
    "ATL. LIBERTAD TRINIDAD": {
        nombre: "ATL. LIBERTAD TRINIDAD",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "calt.png"
    },
    "SAN LORENZO (A)": {
        nombre: "SAN LORENZO (A)",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "ambro.png"
    },
    "UNIÓN HERSILIA": {
        nombre: "UNIÓN HERSILIA",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "hersilia.png"
    },
    "UNION ARRUFO ": {
        nombre: "UNION ARRUFO ",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "cuda.png"
    },
    "FERRO DHO (SC) ": {
        nombre: "FERRO DHO (SC) ",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "ferro.png"
    },
    "INDEPENDIENTE (SC)": {
        nombre: "INDEPENDIENTE (SC)",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "indsc.png"
    },
    "ATL. UNIÓN DE CERES": {
        nombre: "ATL. UNIÓN DE CERES",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "cacu.png"
    },
    "CENTRAL ARG. OLÍMPICO": {
        nombre: "CENTRAL ARG. OLÍMPICO",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "ccao.png"
    }
};


function cargarStats() {
    return new Promise((resolve, reject) => {
        const xh = new XMLHttpRequest();
        xh.open('GET', 'data/fase1.json', true);
        xh.send();
        xh.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let datos = JSON.parse(this.responseText);
                for (let item of datos) {
                    if(item.glocal != "-" && datosEquipos[item.local]) {   
                         // si tiene el caracter no se jugó el partido aun
                        datosEquipos[item.local].pj += 1;       //suma a ambos equipos el partido jugado
                        datosEquipos[item.visitante].pj += 1;
                        
                        //aumento gf del local y le sumo gc con los goles del visitante 
                        datosEquipos[item.local].gf += Number(item.glocal);
                        datosEquipos[item.local].gc += Number(item.gvisitante);
                        
                        // idem pero para visitante
                        datosEquipos[item.visitante].gf += Number(item.gvisitante); 
                        datosEquipos[item.visitante].gc += Number(item.glocal);

                        datosEquipos[item.visitante].pg += Number(item.gvisitante) > Number(item.glocal) ? 1 : 0; 
                        datosEquipos[item.visitante].pp += Number(item.gvisitante) < Number(item.glocal) ? 1 : 0;
                        datosEquipos[item.visitante].pe += Number(item.gvisitante) === Number(item.glocal) ? 1 : 0;
                      
                        datosEquipos[item.local].pg += Number(item.glocal) > Number(item.gvisitante) ? 1 : 0; 
                        datosEquipos[item.local].pp += Number(item.glocal) < Number(item.gvisitante) ? 1 : 0;
                        datosEquipos[item.local].pe += Number(item.glocal) === Number(item.gvisitante) ? 1 : 0;
                    }
                }
                resolve(); // Resuelve la promesa una vez que los datos están procesados
            }
        }
    });
}

function llenarStats() {
    cargarStats()
        .then(() => {
            let res = document.querySelector('#res_stats');
            res.innerHTML = '';
            
            const ordenadoPorPG = Object.entries(datosEquipos)
                .sort((a,b)=> b[1].pp - a[1].pp) // de mayor a menor por partidos perdidos
                .sort((a,b)=> b[1].pe - a[1].pe) // de mayor a menor por partidos empatadas
                .sort((a,b)=> b[1].pg - a[1].pg) // de mayor a menor por partidos ganados
                .sort((a,b)=> {
                    const diffGolesB = b[1].gf - b[1].gc
                    const diffGolesA = a[1].gf - a[1].gc
                    return diffGolesB - diffGolesA
                }) // de mayor a menor por diff de goles

            for (let [_equipo, datosEquipos] of ordenadoPorPG) {
                // console.log(datosEquipos[equipo].pj);
                res.innerHTML += `
                    <tr>
                        <td><img src="assets/minis/${datosEquipos.path}" alt="Imagen" class="table-image">${datosEquipos.nombre}</td>
                        <td>${datosEquipos.pj}</td>
                        <td>${datosEquipos.pg}</td>
                        <td>${datosEquipos.pe}</td>
                        <td>${datosEquipos.pp}</td>
                        <td>${datosEquipos.gf}</td>
                        <td>${datosEquipos.gc}</td>
                        <td>${datosEquipos.gf - datosEquipos.gc}</td>
                    </tr>
                `;
            }

            // for (let equipo in datosEquipos) {
            //     // console.log(datosEquipos[equipo].pj);
            //     res.innerHTML += `
            //         <tr>
            //             <td><img src="assets/minis/${datosEquipos[equipo].path}" alt="Imagen" class="table-image">${datosEquipos[equipo].nombre}</td>
            //             <td>${datosEquipos[equipo].pj}</td>
            //             <td>${datosEquipos[equipo].pg}</td>
            //             <td>${datosEquipos[equipo].pe}</td>
            //             <td>${datosEquipos[equipo].pp}</td>
            //             <td>${datosEquipos[equipo].gf}</td>
            //             <td>${datosEquipos[equipo].gc}</td>
            //             <td>${datosEquipos[equipo].gf - datosEquipos[equipo].gc}</td>
            //         </tr>
            //     `;
            // }
        });
}

llenarStats()

function traerDatos2() {
    const xh = new XMLHttpRequest();
    xh.open('GET', 'data/fase1.json', true);
    xh.send();
    xh.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            let res_impresion = document.querySelector('#res_impresion');
            res.innerHTML = '';
            if(res_impresion !== null) res_impresion.innerHTML = '';
            
            for (let item of datos) {
                const celdasCompartidasHTML = `
                    <td>
                        <img src="assets/minis/${item.imagenlocal}" alt="Imagen" class="table-image">
                            ${item.local}
                        </td>
                        <td>${item.glocal}</td>
                        <td>${item.gvisitante}</td>
                        <td>
                            <img src="assets/minis/${item.imagenvisita}" alt="Imagen" class="table-image">
                            ${item.visitante}
                        </td>
                        <td>${item.fecha}</td>
                        <td>${item.estado}</td>
                `

                res.innerHTML += `
                    <tr>
                        ${celdasCompartidasHTML}
                        <td></td>
                    </tr>
                `;

                if(res_impresion !== null) res_impresion.innerHTML += `<tr> ${celdasCompartidasHTML} </tr>`;    
            }
        }
    }
}

traerDatos2()


// function scrollTop(sectionId){
//     const section = document.querySelector(sectionId);
//     section.scrollIntoView({behavior: 'smooth'});
// }

// function exportarPDF() {
//     const pdf = new jsPDF();  // Utiliza jsPDF directamente

//     // Agregar encabezado
//     pdf.text('Fixture', 20, 10);

//     // Configurar opciones de la tabla
//     const options = {
//         startY: 20,
//     };

//     // Agregar contenido de la tabla
//     pdf.autoTable({ html: '#customers_table', options });  // Utiliza '#customers_table'

//     // Guardar o visualizar el PDF
//     pdf.save('fixture.pdf'); // Guardar como 'fixture.pdf'
//     // O puedes usar pdf.output('dataurlnewwindow'); para abrir en una nueva ventana
// }
// document.getElementById('toPDF').addEventListener('click', exportarPDF);

})