window.addEventListener('load', function (){
    console.log('correcto');
document.querySelector('#fase1').addEventListener('click',traerDatos2);
document.querySelector('#fase2').addEventListener('click',traerDatos2);

window.jsPDF = window?.jspdf?.jsPDF;

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
                    if(item.glocal != "-") {    // si tiene el caracter no se jugó el partido aun
                        datosEquipos[item.local].pj += 1;       //suma a ambos equipos el partido jugado
                        datosEquipos[item.visitante].pj += 1;
                        
                        datosEquipos[item.local].gf += item.glocal;     //aumento gf del local y le sumo gc con los goles del visitante
                        datosEquipos[item.local].gc += item.gvisitante;
                        
                        datosEquipos[item.visitante].gf += item.gvisitante; // idem pero para visitante
                        datosEquipos[item.visitante].gc += item.glocal;
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
            for (let equipo in datosEquipos) {
                console.log(datosEquipos[equipo].pj);
                res.innerHTML += `
                    <tr>
                        <td><img src="assets/minis/${datosEquipos[equipo].path}" alt="Imagen" class="table-image">${datosEquipos[equipo].nombre}</td>
                        <td>${datosEquipos[equipo].pj}</td>
                        <td>${datosEquipos[equipo].pg}</td>
                        <td>${datosEquipos[equipo].pe}</td>
                        <td>${datosEquipos[equipo].pp}</td>
                        <td>${datosEquipos[equipo].gf}</td>
                        <td>${datosEquipos[equipo].gc}</td>
                        <td>${datosEquipos[equipo].gf - datosEquipos[equipo].gc}</td>
                    </tr>
                `;
            }
        });
}

llenarStats()
traerDatos2()
function traerDatos2() {
    const xh = new XMLHttpRequest();
    xh.open('GET', 'data/fase1.json', true);
    xh.send();
    xh.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';
            for (let item of datos) {
                res.innerHTML += `
                    <tr>
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
                        <td></td>
                    </tr>
                `;
            }
        }
    }
}


function scrollTop(sectionId){
    const section = document.querySelector(sectionId);
    section.scrollIntoView({behavior: 'smooth'});
}

function exportarPDF() {
    const pdf = new jsPDF();  // Utiliza jsPDF directamente

    // Agregar encabezado
    pdf.text('Fixture', 20, 10);

    // Configurar opciones de la tabla
    const options = {
        startY: 20,
    };

    // Agregar contenido de la tabla
    pdf.autoTable({ html: '#customers_table', options });  // Utiliza '#customers_table'

    // Guardar o visualizar el PDF
    pdf.save('fixture.pdf'); // Guardar como 'fixture.pdf'
    // O puedes usar pdf.output('dataurlnewwindow'); para abrir en una nueva ventana
}
document.getElementById('toPDF').addEventListener('click', exportarPDF);

})