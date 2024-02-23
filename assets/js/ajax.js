window.addEventListener('load', function (){
    console.log('[CORRECTO]');

    const btnFaseUno = document.querySelector('#fase1');
    const btnFaseDos = document.querySelector('#fase2');//Fase 2 -> Fase 1 vuelta real.
    const btnFaseTres = document.querySelector('#fase3'); //Fase 3-> Fase 2 real

    btnFaseUno.addEventListener('click', traerDatos_ida);
    btnFaseDos.addEventListener('click', traerDatos_vuelta);
    btnFaseTres.addEventListener('click',traerDatos_fase2);
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

    let datosJugadores = {};

    const nombreEquipo = "UNION SAN GUILLERMO"; // Por ejemplo
    const nombreJugador = "Juan Pérez"; // Nombre del jugador que deseas agregar

    function cargarTarjetaRoja(nombreEquipo, nombreJugador) {
        // Verificar si el equipo ya está en datosJugadores, si no, inicializarlo
        if (!datosJugadores[nombreEquipo]) {
            datosJugadores[nombreEquipo] = {};
        }

        // Verificar si el jugador ya está en el equipo
        if (!datosJugadores[nombreEquipo][nombreJugador]) {
            // Si el jugador no está inicializado, inicializarlo con tarjetas rojas en 1
            datosJugadores[nombreEquipo][nombreJugador] = {
                goles: 0,
                tarjetasAmarillas: 0,
                tarjetasRojas: 1,
                asistencias: 0,
                // Otros datos que desees agregar inicialmente
            };
        } else {
            // Si el jugador ya está inicializado, sumar 1 a la cantidad de tarjetas rojas
            datosJugadores[nombreEquipo][nombreJugador].tarjetasRojas++;
        }
    }

    function cargarGoles(nombreEquipo, nombreJugador) {
        // Verificar si el equipo ya está en datosJugadores, si no, inicializarlo
        if (!datosJugadores[nombreEquipo]) {
            datosJugadores[nombreEquipo] = {};
        }

        // Verificar si el jugador ya está en el equipo
        if (!datosJugadores[nombreEquipo][nombreJugador]) {
            // Si el jugador no está inicializado, inicializarlo con goles en 1
            datosJugadores[nombreEquipo][nombreJugador] = {
                goles: 1,
                tarjetasRojas: 0
                // Otros datos que desees agregar inicialmente
            };
        } else {
            // Si el jugador ya está inicializado, sumar 1 a la cantidad de goles
            datosJugadores[nombreEquipo][nombreJugador].goles++;
        }
    }

    function cargarStats(archivo) {
        return new Promise((resolve, reject) => {
            const xh = new XMLHttpRequest();
            xh.open('GET', `data/${archivo}`, true);
            xh.send();
            xh.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let datos = JSON.parse(this.responseText);
                    for (let item of datos) {

                        const idLocal = item.local.nombre.completo;
                        const idVistante = item.visitante.nombre.completo;

                        const cantidadGolesLocal = Number(item.local.goles.length)
                        const cantidadGolesVisitante = Number(item.visitante.goles.length)
            
                        for (let gol of item.local.goles) {
                            cargarGoles(idLocal,gol.jugador)
                            //console.log(idLocal, gol.jugador);
                        }
                        for (let gol of item.visitante.goles) {
                            cargarGoles(idVistante,gol.jugador)
                            //console.log(idLocal, gol.jugador);
                        }
                        for (let tarjetaRoja of item.local.info.rojas_directas) {
                            cargarTarjetaRoja(idLocal, tarjetaRoja.jugador);
                        }
                        for (let tarjetaRoja of item.visitante.info.rojas_directas) {
                            cargarTarjetaRoja(idVistante, tarjetaRoja.jugador);
                        }

                        if(datosEquipos[idLocal] && datosEquipos[idVistante] && item.estado!= "Por jugar") {   
    
                            // si tiene el caracter no se jugó el partido aun
                            //console.log(idLocal);
                            datosEquipos[idLocal].pj += 1; //suma a ambos equipos el partido jugado
                            datosEquipos[idVistante].pj += 1;
                            //console.log(idVistante);
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
        Promise.all([cargarStats('fase1.json'), cargarStats('fase1_vuelta.json'),cargarStats('fase2.json')])
            .then(() => {
                let res = document.querySelector('#res_stats');
                let resGoleadores = document.querySelector('#res_goleadores');
                res.innerHTML = '';
                // console.log(datosJugadores)
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
                            <td><img src="assets/minis/${datosEquipos.path}" alt="logo ${datosEquipos.nombre}" class="table-image">${datosEquipos.nombre}</td>
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

                const array_data_jugadores = Object.entries(datosJugadores)
                    // .map -> crea un nuevo arreglo con los datos del jugador su equipo y demas datos
                    .map(([equipo, datos_jugadores])=> {
                        const jugadores = Object.entries(datos_jugadores).map(([jugador, datos])=> {
                            return { jugador, equipo, ...datos }
                        })

                        return jugadores
                    })
                    // aplana el arreglo a una dimension, para que sea mas facil recorrer, armar la tabla y 
                    .flat() 
                    // ordenarlo de mayor a menor
                    .sort((a,b)=> b.goles - a.goles)
    
                for (const data of array_data_jugadores) {
                    if (data.goles > 0) {
                        resGoleadores.innerHTML += `
                            <tr>
                                <td>${data.jugador}</td>
                                <td>${data.equipo}</td>
                                <td>${data.goles}</td>
                            </tr>
                        `;
                    }
                }
                // for (let equipo in datosJugadores) {
                //     for (let jugador in datosJugadores[equipo]) {
                //         if (datosJugadores[equipo][jugador].goles > 0) {
                //             resGoleadores.innerHTML += `
                //                 <tr>
                //                     <td>${jugador}</td>
                //                     <td>${equipo}</td>
                //                     <td>${datosJugadores[equipo][jugador].goles}</td>
                //                 </tr>
                //             `;
                //         }
                //     }
                // }

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

    // LEE DATOS DE LOS JSON Y LLENA LA TABLA DE POSICIONES/PARTIDOS
    function llenarTablaHTMLPartidos (partidos){
        let res = document.querySelector('#res');
        let tbody_fixture_impresion = document.querySelector('#tbody_fixture_impresion');
        res.innerHTML = '';
        tbody_fixture_impresion.innerHTML = '';

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
            return tarjetasAmarillas && tarjetasAmarillas.length 
                ? tarjetasAmarillas
                    .map(ta=> `${'🟨'.repeat(ta.cantidad)} ${ta.cantidad == 2 ? '🟥' : ''} ${ta.jugador}\n `)
                    .join(';')
                : ''
        }
        
        const formatearTRJugadores = tarjetasRojas => {
            return tarjetasRojas.length ? `🟥 ${tarjetasRojas.map(tr=> `${tr.jugador} \n`).join('; ')}` : ''
        }

        for (let partido of partidos) {

            tbody_fixture_impresion.innerHTML += `
                <tr>
                    <td> ${partido.local.nombre.completo} </td>
                    <td> 
                        ${formatearCantidadGoles(partido.estado, partido.local.goles.length).toString().trim()}  /   ${formatearCantidadGoles(partido.estado, partido.visitante.goles.length).toString().trim()}
                    </td>
                    <td> ${partido.visitante.nombre.completo} </td>
                </tr>
                <tr>
                    <td>
                        <p> ${formatearGolesJugadores(partido.local.goles)} </p>
                        <p> ${formatearTRJugadores(partido.local.info.rojas_directas).toString().trim()} </p>
                        <p> ${formatearTAJugadores(partido.local.info.amarillas)} </p>
                    </td>
                    <td>
                        ${partido.estado.toUpperCase()} / ${partido.fecha.toString()}
                    </td>
                    <td>
                        <p> ${formatearGolesJugadores(partido.visitante.goles)} </p>
                        <p> ${formatearTRJugadores(partido.visitante.info.rojas_directas).toString().trim()} </p>
                        <p> ${formatearTAJugadores(partido.visitante.info.amarillas)} </p>
                    </td>
                </tr>
            ` 

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
            <tr class="small row-contexto">
                <td colspan="4" class="celda-contexto ${partido.contexto.length > 0 ? 'cell-visible' : 'cell-hide'}"> 
                    ${partido.contexto.join(';')}
                </td>
            </tr>
            `;

        }
    }

    const toggleActiveBtn = (btnActive)=> {
        const btns = this.document.querySelectorAll('.fases_eliminatorias .btn')
        btns.forEach(btn=> btn.classList.remove('btn-active'))
        
        btnActive.classList.add('btn-active')
    }

    function traerDatos_ida(btnOrEvent) {
        toggleActiveBtn(btnOrEvent?.target || btnOrEvent)

        const xh = new XMLHttpRequest();
        xh.open('GET', 'data/fase1.json', true);
        xh.send();
        xh.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let partidos = JSON.parse(this.responseText);
                llenarTablaHTMLPartidos(partidos)
            }
        }
    }

    function traerDatos_vuelta(btnOrEvent) {
        toggleActiveBtn(btnOrEvent?.target || btnOrEvent)
        
        const xh = new XMLHttpRequest();
        xh.open('GET', 'data/fase1_vuelta.json', true);
        xh.send();
        xh.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let partidos = JSON.parse(this.responseText);
                llenarTablaHTMLPartidos(partidos)
            }
        }
    }
    //traerDatos_vuelta(btnFaseDos)
    function traerDatos_fase2(btnOrEvent) {
        toggleActiveBtn(btnOrEvent?.target || btnOrEvent)
        
        const xh = new XMLHttpRequest();
        xh.open('GET', 'data/fase2.json', true);
        xh.send();
        xh.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let partidos = JSON.parse(this.responseText);
                llenarTablaHTMLPartidos(partidos)
            }
        }
    }
    traerDatos_fase2(btnFaseTres)
})