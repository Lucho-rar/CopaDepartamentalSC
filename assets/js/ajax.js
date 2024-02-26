window.addEventListener('load', function (){
    console.log('[CORRECTO]');

    const btnFaseUno = document.querySelector('#fase1');
    const btnFaseDos = document.querySelector('#fase2');//Fase 2 -> Fase 1 vuelta real.
    const btnFaseTres = document.querySelector('#fase3'); //Fase 3-> Fase 2 real
    const btnCSCselect = this.document.querySelector('#select_copa_sc');
    const btnLCselect = this.document.querySelector('#select_lc_apertura');

    // Botones de fechas 
    const btnf1_a24 = this.document.querySelector('#f1_a24');
    const btnf2_a24 = this.document.querySelector('#f2_a24');
    const btnf3_a24 = this.document.querySelector('#f3_a24');
    const btnf4_a24 = this.document.querySelector('#f4_a24');
    const btnf5_a24 = this.document.querySelector('#f5_a24');
    const btnf6_a24 = this.document.querySelector('#f6_a24');
    const btnf7_a24 = this.document.querySelector('#f7_a24');
    const btnf8_a24 = this.document.querySelector('#f8_a24');
    const btnf9_a24 = this.document.querySelector('#f9_a24');
    const btnf10_a24 = this.document.querySelector('#f10_a24');
    const btnf11_a24 = this.document.querySelector('#f11_a24');
    
    btnFaseUno.addEventListener('click', traerDatos_ida);
    btnFaseDos.addEventListener('click', traerDatos_vuelta);
    btnFaseTres.addEventListener('click',traerDatos_fase2);
    btnLCselect.addEventListener('click',traerDatos_fecha1);
    btnf1_a24.addEventListener('click',traerDatos_fecha1);
    btnf2_a24.addEventListener('click',traerDatos_fecha2);


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

    let datosJugadores_lca24 = {};
    const nombreEquipo = "UNION SAN GUILLERMO"; // Por ejemplo
    const nombreJugador = "Juan Pérez"; // Nombre del jugador que deseas agregar


    let datosEquipos_lca24 = {
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
            nombre: "UNION Y JUVENTUD (B)",
            gf: 0,
            gc: 0,
            pj: 0,
            pg: 0,
            pe: 0,
            pp: 0,
            path: "bandera.png"
        },
        "ATL. TOSTADO": {
            nombre: "ATL. TOSTADO",
            gf: 0,
            gc: 0,
            pj: 0,
            pg: 0,
            pe: 0,
            pp: 0,
            path: "cat.png"
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
        "SAN LORENZO (T)": {
            nombre: "SAN LORENZO (T)",
            gf: 0,
            gc: 0,
            pj: 0,
            pg: 0,
            pe: 0,
            pp: 0,
            path: "slt.png"
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
        "ATL. SELVA": {
            nombre: "ATL. SELVA",
            gf: 0,
            gc: 0,
            pj: 0,
            pg: 0,
            pe: 0,
            pp: 0,
            path: "cas.png"
        }
    };

    function cargarTarjetaRoja_lca24(nombreEquipo, nombreJugador) {
        // Verificar si el equipo ya está en datosJugadores, si no, inicializarlo
        if (!datosJugadores_lca24[nombreEquipo]) {
            datosJugadores_lca24[nombreEquipo] = {};
        }

        // Verificar si el jugador ya está en el equipo
        if (!datosJugadores_lca24[nombreEquipo][nombreJugador]) {
            // Si el jugador no está inicializado, inicializarlo con tarjetas rojas en 1
            datosJugadores_lca24[nombreEquipo][nombreJugador] = {
                goles: 0,
                tarjetasAmarillas: 0,
                tarjetasRojas: 1,
                asistencias: 0,
                // Otros datos que desees agregar inicialmente
            };
        } else {
            // Si el jugador ya está inicializado, sumar 1 a la cantidad de tarjetas rojas
            datosJugadores_lca24[nombreEquipo][nombreJugador].tarjetasRojas++;
        }
    }

    function cargarGoles_lca24(nombreEquipo, nombreJugador) {
        // Verificar si el equipo ya está en datosJugadores, si no, inicializarlo
        if (!datosJugadores_lca24[nombreEquipo]) {
            datosJugadores_lca24[nombreEquipo] = {};
        }

        // Verificar si el jugador ya está en el equipo
        if (!datosJugadores_lca24[nombreEquipo][nombreJugador]) {
            // Si el jugador no está inicializado, inicializarlo con goles en 1
            datosJugadores_lca24[nombreEquipo][nombreJugador] = {
                goles: 1,
                tarjetasRojas: 0
                // Otros datos que desees agregar inicialmente
            };
        } else {
            // Si el jugador ya está inicializado, sumar 1 a la cantidad de goles
            datosJugadores_lca24[nombreEquipo][nombreJugador].goles++;
        }
    }
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

    function cargarStats_csc(archivo) {
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

    function cargarStats_lca24(archivo) {
        return new Promise((resolve, reject) => {
            const xh = new XMLHttpRequest();
            xh.open('GET', `data/lrfc/${archivo}`, true);
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
                            cargarGoles_lca24(idLocal,gol.jugador)
                            //console.log(idLocal, gol.jugador);
                        }
                        for (let gol of item.visitante.goles) {
                            cargarGoles_lca24(idVistante,gol.jugador)
                            //console.log(idLocal, gol.jugador);
                        }
                        for (let tarjetaRoja of item.local.info.rojas_directas) {
                            cargarTarjetaRoja_lca24(idLocal, tarjetaRoja.jugador);
                        }
                        for (let tarjetaRoja of item.visitante.info.rojas_directas) {
                            cargarTarjetaRoja_lca24(idVistante, tarjetaRoja.jugador);
                        }

                        if(datosEquipos_lca24[idLocal] && datosEquipos_lca24[idVistante] && item.estado!= "Por jugar") {   
    
                            // si tiene el caracter no se jugó el partido aun
                            //console.log(idLocal);
                            datosEquipos_lca24[idLocal].pj += 1; //suma a ambos equipos el partido jugado
                            datosEquipos_lca24[idVistante].pj += 1;
                            //console.log(idVistante);
                            //aumento gf del local y le sumo gc con los goles del visitante 
                            datosEquipos_lca24[idLocal].gf += cantidadGolesLocal;
                            datosEquipos_lca24[idLocal].gc += cantidadGolesVisitante;
                            
                            // idem pero para visitante
                            datosEquipos_lca24[idVistante].gf += cantidadGolesVisitante; 
                            datosEquipos_lca24[idVistante].gc += cantidadGolesLocal;

                            datosEquipos_lca24[idVistante].pg += cantidadGolesVisitante > cantidadGolesLocal ? 1 : 0; 
                            datosEquipos_lca24[idVistante].pp += cantidadGolesVisitante < cantidadGolesLocal ? 1 : 0;
                            datosEquipos_lca24[idVistante].pe += cantidadGolesVisitante === cantidadGolesLocal ? 1 : 0;
                        
                            datosEquipos_lca24[idLocal].pg += cantidadGolesLocal > cantidadGolesVisitante ? 1 : 0; 
                            datosEquipos_lca24[idLocal].pp += cantidadGolesLocal < cantidadGolesVisitante ? 1 : 0;
                            datosEquipos_lca24[idLocal].pe += cantidadGolesLocal === cantidadGolesVisitante ? 1 : 0;
                        }
                    }

                    resolve(); // Resuelve la promesa una vez que los datos están procesados
                }
            
            }
            
        });
    }

    function llenarStats_lca24() {
        Promise.all([cargarStats_lca24('fecha1.json')])
            .then(() => {
                let res = document.querySelector('#res_stats');
                let resGoleadores = document.querySelector('#res_goleadores');
                res.innerHTML = '';
                console.log(datosEquipos_lca24)
                const ordenadoPorPG = Object.entries(datosEquipos_lca24) // -> ['SPORTIVO, { nombre, fecha... }]
                    .sort((a,b)=> b[1].pp - a[1].pp) // de mayor a menor por partidos perdidos
                    .sort((a,b)=> b[1].pe - a[1].pe) // de mayor a menor por partidos empatadas
                    .sort((a,b)=> b[1].pg - a[1].pg) // de mayor a menor por partidos ganados
                    .sort((a,b)=> {
                        const diffGolesB = b[1].gf - b[1].gc
                        const diffGolesA = a[1].gf - a[1].gc
                        return diffGolesB - diffGolesA
                    }) // de mayor a menor por diff de goles

                for (let [_equipo, datosEquipos_lca24] of ordenadoPorPG) {
                    // console.log(datosEquipos[equipo].pj);
                    res.innerHTML += `
                        <tr>
                            <td><img src="assets/minis/${datosEquipos_lca24.path}" alt="logo ${datosEquipos_lca24.nombre}" class="table-image">${datosEquipos_lca24.nombre}</td>
                            <td>${datosEquipos_lca24.pj}</td>
                            <td>${datosEquipos_lca24.pg}</td>
                            <td>${datosEquipos_lca24.pe}</td>
                            <td>${datosEquipos_lca24.pp}</td>
                            <td>${datosEquipos_lca24.gf}</td>
                            <td>${datosEquipos_lca24.gc}</td>
                            <td>${datosEquipos_lca24.gf - datosEquipos_lca24.gc}</td>
                        </tr>
                    `;
                }

                const array_data_jugadores = Object.entries(datosJugadores_lca24)
                    // .map -> crea un nuevo arreglo con los datos del jugador su equipo y demas datos
                    .map(([equipo, datosJugadores_lca24])=> {
                        const jugadores = Object.entries(datosJugadores_lca24).map(([jugador, datos])=> {
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
            });
    }

    function llenarStats_csc() {
        Promise.all([cargarStats_csc('fase1.json'), cargarStats_csc('fase1_vuelta.json'),cargarStats_csc('fase2.json')])
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
                
            });
    }

    llenarStats_lca24()

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
        //inicio_home();
        toggleActiveBtn(btnOrEvent?.target || btnOrEvent)
        btnCSCselect.classList.add('btn-active')
        //toggleActiveBtn(btnCSCselect)
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
    traerDatos_fase2(btnFaseTres);

    function traerDatos_fecha1(btnOrEvent) {
        document.body.style.backgroundColor = "#000033";
        toggleActiveBtn(btnOrEvent?.target || btnOrEvent)
        
        const xh = new XMLHttpRequest();
        xh.open('GET', 'data/lrfc/fecha1.json', true);
        xh.send();
        xh.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let partidos = JSON.parse(this.responseText);
                llenarTablaHTMLPartidos(partidos)
            }
        }
    }
    function traerDatos_fecha2() {
        //toggleActiveBtn(btnOrEvent?.target || btnOrEvent)
        
        const xh = new XMLHttpRequest();
        xh.open('GET', 'data/lrfc/fecha2.json', true);
        xh.send();
        xh.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let partidos = JSON.parse(this.responseText);
                llenarTablaHTMLPartidos(partidos)
            }
        }
    }


    //traerDatos_fecha1_LRFC()
    //
    function inicio_home(){
        var fasesDiv = document.getElementsById("#fases");
        var fechasDiv = document.getElementById("#fechas_lrfc");
        fechasDiv.classList.add("hidden");
        fasesDiv.classList.remove("hidden");
    }
    
})