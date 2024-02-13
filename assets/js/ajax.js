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
    "CLUB SPORTIVO SUARDI": {
        nombre: "CLUB SPORTIVO SUARDI",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "sportivo.png"
    },
    "ASOCIACION DEPORTIVA JUNIORS CLUB": {
        nombre: "ASOCIACION DEPORTIVA JUNIORS CLUB",
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
    "UNIÓN SOCIAL DE HERSILIA": {
        nombre: "UNIÓN SOCIAL DE HERSILIA",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "hersilia.png"
    },
    "UNION ARRUFO": {
        nombre: "UNION ARRUFO",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "cuda.png"
    },
    "FERRO DHO (SC)": {
        nombre: "FERRO DHO (SC)",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "ferro.png"
    },
    "CLUB ATLÉTICO INDEPENDIENTE (SC)": {
        nombre: "CLUB ATLÉTICO INDEPENDIENTE (SC)",
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
    },
    "TIRO FEDERAL MOISES VILLE": {
        nombre: "TIRO FEDERAL MOISES VILLE",
        gf: 0,
        gc: 0,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        path: "tiro.png"
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
                    const idLocal = item.local.nombre.completo;
                    const idVistante = item.visitante.nombre.completo;

                    const cantidadGolesLocal = Number(item.local.goles.length)
                    const cantidadGolesVisitante = Number(item.visitante.goles.length)

                    if(datosEquipos[idLocal] && datosEquipos[idVistante]) {   
  
                        // si tiene el caracter no se jugó el partido aun
                        datosEquipos[idLocal].pj += 1; //suma a ambos equipos el partido jugado
                        datosEquipos[idVistante].pj += 1;
                        
                        //aumento gf del local y le sumo gc con los goles del visitante 
                        datosEquipos[idLocal].gf += cantidadGolesLocal;
                        datosEquipos[idLocal].gc += cantidadGolesVisitante;
                        
                        // idem pero para visitante
                        datosEquipos[idVistante].gf += cantidadGolesVisitante; 
                        datosEquipos[idVistante].gc += cantidadGolesLocal;

                        datosEquipos[idVistante].pg += cantidadGolesVisitante > cantidadGolesLocal ? 1 : 0; 
                        datosEquipos[idVistante].pp += cantidadGolesVisitante < cantidadGolesLocal ? 1 : 0;
                        datosEquipos[idVistante].pe += cantidadGolesVisitante === cantidadGolesLocal ? 1 : 0;
                      
                        datosEquipos[idLocal].pg += cantidadGolesLocal > cantidadGolesVisitante ? 1 : 0; 
                        datosEquipos[idLocal].pp += cantidadGolesLocal < cantidadGolesVisitante ? 1 : 0;
                        datosEquipos[idLocal].pe += cantidadGolesLocal === cantidadGolesVisitante ? 1 : 0;
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
            
            const ordenadoPorPG = Object.entries(datosEquipos) // -> ['SPORTIVO, { nombre, fecha... }]
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
            let partidos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';
  
            const bgEstados = {
              "por jugar": 'bg-pendiente',
              "jugando": 'bg-ahora',
              "finalizado": 'bg-finalizado',
            }

            const formatearCantidadGoles = (estadoPartido, cantidadGoles)=> {
                return estadoPartido.toLowerCase() !== "por jugar" ? cantidadGoles : '-'
            }

            const formatearGolesJugadores = (goles)=> {
                const hayGoles = goles.length > 0 ? '⚽' : ''
                const golesPorJugador = goles
                    .map(gol=> `${gol.min ? `'${gol.min}` : ''} ${gol.jugador} ${gol.penal ? '(P)' : ''}`)
                    .join(';')

                return `${hayGoles} ${golesPorJugador}`
            }
         
            const formatearTAJugadores = (tarjetasAmarillas)=> {
              return tarjetasAmarillas
                .map(ta=> `${'🟨'.repeat(ta.cantidad)} ${ta.cantidad == 2 ? '🟥' : ''} ${ta.jugador}\n `)
                .join(';')
            }
            
            const formatearTRJugadores = tarjetasRojas => {
                return tarjetasRojas.length ? `🟥 ${tarjetasRojas.map(tr=> `${tr.jugador} \n`).join('; ')}` : ''
            }

            for (let partido of partidos) {

                res.innerHTML += `
                <tr class="row-match match-result">
                  <td class="fw-bold text-center">
                   <img width="15" height="15" class="object-fit-contain" src="/assets/minis/${partido.local.logo}" />
                   ${partido.local.nombre.completo}
                  </td>
                  <td class="text-center">${formatearCantidadGoles(partido.estado, partido.local.goles.length)}</td>
                  <td class="text-center">${formatearCantidadGoles(partido.estado, partido.visitante.goles.length)}</td>
                  <td class="fw-bold text-center">
                    <img width="15" height="15" class="object-fit-contain" src="/assets/minis/${partido.visitante.logo}" />
                    ${partido.visitante.nombre.completo}
                  </td>
                </tr>

                <tr class="row-info text-center">
                    <td class="small">
                    
                        <p class="mb-0 text-center">  
                          ${formatearGolesJugadores(partido.local.goles)}
                        </p>
                        
                        <p class="mb-0 text-center">
                          ${formatearTAJugadores(partido.local.info.amarillas)}
                          ${formatearTRJugadores(partido.local.info.rojas_directas)}
                        </p>

                    </td>
                    <td colspan="2" style="margin: 0 auto;text-align: center;"> 
      
                        <span class="badge ${bgEstados[partido.estado.toLowerCase()]}"> 
                        ${partido.estado.toUpperCase()}
                        </span>
                        <span class="small"> ${partido.fecha.toString()} </span>
                 
                    </td>
                 
                    <td class="small">
                        <p class="mb-0 text-center"> 
                            ${formatearGolesJugadores(partido.visitante.goles)}
                        </p>
                     
                        <p class="mb-0 text-center">
                            ${formatearTAJugadores(partido.visitante.info.amarillas)}
                            ${formatearTRJugadores(partido.visitante.info.rojas_directas)}
                        </p>

                    </td>
                </tr>
                <tr class="small">
                    <td colspan="4" class="celda-contexto ${partido.contexto.length > 0 ? 'cell-visible' : 'cell-hide'}"> 
                        ${partido.contexto.join(';')}
                    </td>
                </tr>
                `;
    
            }
        }
    }
}

traerDatos2()
})