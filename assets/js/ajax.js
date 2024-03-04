window.addEventListener('load', function (){
    console.log('[CORRECTO]');

    const btnFaseUno = document.querySelector('#fase1');
    const btnFaseDos = document.querySelector('#fase2');//Fase 2 -> Fase 1 vuelta real.
    const btnFaseTres = document.querySelector('#fase3'); //Fase 3-> Fase 2 real
    const btnSemisCSC = document.querySelector('#semis_csc')


    const btnCSCselect = this.document.querySelector('#select_copa_sc');
    const btnLCselect = this.document.querySelector('#select_lc_apertura');
    const btnLC23select = this.document.querySelector('#select_lc_apertura_23');

    // Botones de fechas (primera)
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
    
    // Botones de fechas (sub 23)
    const btnf1_a24_23 = this.document.querySelector('#f1_a24_23')
    const btnf2_a24_23 = this.document.querySelector('#f2_a24_23')
    const btnf3_a24_23 = this.document.querySelector('#f3_a24_23')
    const btnf4_a24_23 = this.document.querySelector('#f4_a24_23')
    const btnf5_a24_23 = this.document.querySelector('#f5_a24_23')
    const btnf6_a24_23 = this.document.querySelector('#f6_a24_23')
    const btnf7_a24_23 = this.document.querySelector('#f7_a24_23')
    const btnf8_a24_23 = this.document.querySelector('#f8_a24_23')
    const btnf9_a24_23 = this.document.querySelector('#f9_a24_23')
    const btnf10_a24_23 = this.document.querySelector('#f10_a24_23')
    const btnf11_a24_23 = this.document.querySelector('#f11_a24_23')
    const btncuartos_a24_23 = this.document.querySelector('#cuartos_a24_23')
    const btnsemis_a24_23 = this.document.querySelector('#semis_a24_23')
    const btnfinal_a24_23 = this.document.querySelector('#final_a24_23')
  
    btnFaseUno.addEventListener('click', traerDatos_ida);
    btnFaseDos.addEventListener('click', traerDatos_vuelta);
    btnFaseTres.addEventListener('click', traerDatos_fase2);
    btnSemisCSC.addEventListener('click',traerDatos_semiscsc);

    btnf1_a24.addEventListener('click', traerDatos_fecha('lrfc/fecha1.json'));
    btnf2_a24.addEventListener('click', traerDatos_fecha('lrfc/fecha2.json'));
    btnf3_a24.addEventListener('click',traerDatos_fecha('lrfc/fecha3.json'));



    btnf1_a24_23.addEventListener('click', traerDatos_fecha('lrfcs23/fecha1.json'));
    btnf2_a24_23.addEventListener('click', traerDatos_fecha('lrfcs23/fecha2.json'));
    btnf3_a24_23.addEventListener('click',traerDatos_fecha('lrfcs23/fecha3.json'));

    // COPA DEPARTAMENTO SC
    let datosJugadores = {};
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

    // LIGA CERESINA
    const no_juegan_liga_ceresina = ['CLUB SPORTIVO SUARDI', 'ASOCIACION DEPORTIVA JUNIORS CLUB', 'TIRO FEDERAL MOISES VILLE', 'CLUB ATLÉTICO INDEPENDIENTE (SC)']
    let datosJugadores_lca24 = {};
    let datosEquipos_lca24 = {
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
        "UNION Y JUVENTUD": {
            nombre: "UNION Y JUVENTUD (B)",
            gf: 0,
            gc: 0,
            pj: 0,
            pg: 0,
            pe: 0,
            pp: 0,
            path: "bandera.png"
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
    }
    // REUTILIZA LOS QUE YA EXISTEN Y FILTRA LOS QUE NO VAN
    let deep_copy_datos_equipos = this.structuredClone(datosEquipos) // COPIA DE FORMA PROFUNDA EL OBJETO
    for (const key in deep_copy_datos_equipos) {
        if(!no_juegan_liga_ceresina.includes(key)){
            datosEquipos_lca24[key] = deep_copy_datos_equipos[key]
        }
    }

    let datosJugadores_lca24_sub23 = {};
    let datosEquipos_lca24_sub23 = this.structuredClone(datosEquipos_lca24)


    // FUNCIONES GENERALES
    function cargarGoles(datosJugadorParam, nombreEquipo, nombreJugador) {
        // Verificar si el equipo ya está en datosJugadores, si no, inicializarlo
        if (!datosJugadorParam[nombreEquipo]) {
            datosJugadorParam[nombreEquipo] = {};
        }

        // Verificar si el jugador ya está en el equipo
        if (!datosJugadorParam[nombreEquipo][nombreJugador]) {
            // Si el jugador no está inicializado, inicializarlo con goles en 1
            datosJugadorParam[nombreEquipo][nombreJugador] = {
                goles: 1,
                // tarjetasRojas: 0
                // Otros datos que desees agregar inicialmente
            };
        } else {
            // Si el jugador ya está inicializado, sumar 1 a la cantidad de goles
            datosJugadorParam[nombreEquipo][nombreJugador].goles++;
        }
    }

    function cargarStats (datos, datosEquipoParam, datosJugadoresParam){

        for (let item of datos) {

            const idLocal = item.local.nombre.completo;
            const idVistante = item.visitante.nombre.completo;

            const cantidadGolesLocal = Number(item.local.goles.length)
            const cantidadGolesVisitante = Number(item.visitante.goles.length)

            for (let gol of item.local.goles) {
                cargarGoles(datosJugadoresParam, idLocal, gol.jugador)
                //console.log(idLocal, gol.jugador);
            }
            for (let gol of item.visitante.goles) {
                cargarGoles(datosJugadoresParam, idVistante, gol.jugador)
                //console.log(idLocal, gol.jugador);
            }
            // for (let tarjetaRoja of item.local.info.rojas_directas) {
            //     cargarTarjetaRoja_lca24(idLocal, tarjetaRoja.jugador);
            // }
            // for (let tarjetaRoja of item.visitante.info.rojas_directas) {
            //     cargarTarjetaRoja_lca24(idVistante, tarjetaRoja.jugador);
            // }

            // TABLA POSICIONES
            if(datosEquipoParam[idLocal] && datosEquipoParam[idVistante] && item.estado!= "Por jugar") {   

                // si tiene el caracter no se jugó el partido aun
                //console.log(idLocal);
                datosEquipoParam[idLocal].pj += 1; //suma a ambos equipos el partido jugado
                datosEquipoParam[idVistante].pj += 1;
                //console.log(idVistante);
                //aumento gf del local y le sumo gc con los goles del visitante 
                datosEquipoParam[idLocal].gf += cantidadGolesLocal;
                datosEquipoParam[idLocal].gc += cantidadGolesVisitante;
                
                // idem pero para visitante
                datosEquipoParam[idVistante].gf += cantidadGolesVisitante; 
                datosEquipoParam[idVistante].gc += cantidadGolesLocal;

                datosEquipoParam[idVistante].pg += cantidadGolesVisitante > cantidadGolesLocal ? 1 : 0; 
                datosEquipoParam[idVistante].pp += cantidadGolesVisitante < cantidadGolesLocal ? 1 : 0;
                datosEquipoParam[idVistante].pe += cantidadGolesVisitante === cantidadGolesLocal ? 1 : 0;
            
                datosEquipoParam[idLocal].pg += cantidadGolesLocal > cantidadGolesVisitante ? 1 : 0; 
                datosEquipoParam[idLocal].pp += cantidadGolesLocal < cantidadGolesVisitante ? 1 : 0;
                datosEquipoParam[idLocal].pe += cantidadGolesLocal === cantidadGolesVisitante ? 1 : 0;
            }
        }

        return datosEquipoParam;
    }

    function llenarStats(datosVariable, datosJugadoresVariable) {
    
        let res = document.querySelector('#res_stats');
        let resGoleadores = document.querySelector('#res_goleadores');
        res.innerHTML = '';
        resGoleadores.innerHTML = '';
        // console.log(datosJugadores)
        const ordenadoPorPG = Object.entries(datosVariable) // -> ['SPORTIVO, { nombre, fecha... }]
            .sort((a,b)=> b[1].pp - a[1].pp) // de mayor a menor por partidos perdidos
            .sort((a,b)=> b[1].pe - a[1].pe) // de mayor a menor por partidos empatadas
            .sort((a,b)=> b[1].pg - a[1].pg) // de mayor a menor por partidos ganados
            .sort((a,b)=> {
                const diffGolesB = b[1].gf - b[1].gc
                const diffGolesA = a[1].gf - a[1].gc
                return diffGolesB - diffGolesA
            }) // de mayor a menor por diff de goles

        for (let [_equipo, datosVariable] of ordenadoPorPG) {
            // console.log(datosVariable[equipo].pj);
            res.innerHTML += `
                <tr>
                    <td><img src="assets/minis/${datosVariable.path}" alt="logo ${datosVariable.nombre}" class="table-image">${datosVariable.nombre}</td>
                    <td>${datosVariable.pj}</td>
                    <td>${datosVariable.pg}</td>
                    <td>${datosVariable.pe}</td>
                    <td>${datosVariable.pp}</td>
                    <td>${datosVariable.gf}</td>
                    <td>${datosVariable.gc}</td>
                    <td>${datosVariable.gf - datosVariable.gc}</td>
                </tr>
            `;
        }

        const array_data_jugadores = Object.entries(datosJugadoresVariable)
            // .map -> crea un nuevo arreglo con los datos del jugador su equipo y demas datos
            .map(([equipo, datos_jugadores])=> {
                const jugadores = Object.entries(datos_jugadores).map(([jugador, datos])=> {
                    if(jugador){
                        return { jugador, equipo, ...datos }
                    }
                })

                return jugadores
            })
            // aplana el arreglo a una dimension, para que sea mas facil recorrer, armar la tabla y 
            .flat() 
            // ordenarlo de mayor a menor
            .sort((a,b)=> b.goles - a.goles)

        if(array_data_jugadores.length){
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
        } else {
            resGoleadores.innerHTML = `<tr> <td colspan="3"> No hay datos aun </td> </tr>`
        }

    }

    // STATS COPA SAN CRISTOBAL 
    function cargarStats_csc(archivo) {
        return new Promise((resolve, reject) => {
            const xh = new XMLHttpRequest();
            xh.open('GET', `data/${archivo}`, true);
            xh.send();
            xh.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let datos = JSON.parse(this.responseText);
                    datosEquipos = cargarStats(datos, datosEquipos, datosJugadores)
            
                    resolve(); // Resuelve la promesa una vez que los datos están procesados
                }
            
            }
        });
    }

    function llenarStats_csc() {
        // console.log({datosEquipos, datosJugadores});
        llenarStats(datosEquipos, datosJugadores)
    }
 
    // STATS LIGA CERESINA 
    function cargarStats_lca24(archivo) {
        return new Promise((resolve, reject) => {
            const xh = new XMLHttpRequest();
            xh.open('GET', `data/lrfc/${archivo}`, true);
            xh.send();
            xh.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let datos = JSON.parse(this.responseText);
                    datosEquipos_lca24 = cargarStats(datos, datosEquipos_lca24, datosJugadores_lca24)
                    resolve(); // Resuelve la promesa una vez que los datos están procesados
                }
            
            }
        });
    }

    function cargarStats_lca24_s23(archivo) {
        return new Promise((resolve, reject) => {
            const xh = new XMLHttpRequest();
            xh.open('GET', `data/lrfcs23/${archivo}`, true);
            xh.send();
            xh.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let datos = JSON.parse(this.responseText);
                    cargarStats(datos, datosEquipos_lca24_sub23, datosJugadores_lca24_sub23)
                    resolve(); // Resuelve la promesa una vez que los datos están procesados
                }
            
            }
        });
    }


    function llenarStats_lca24() {
        // console.log({ datosEquipos_lca24, datosJugadores_lca24 });
        llenarStats(datosEquipos_lca24, datosJugadores_lca24)
    }
   
    function llenarStats_lca24_s23() {
        llenarStats(datosEquipos_lca24_sub23, datosJugadores_lca24_sub23)
    }

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

    // COPA SC
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
    
    function traerDatos_semiscsc(btnOrEvent) {
        //inicio_home();
        toggleActiveBtn(btnOrEvent?.target || btnOrEvent)
        btnCSCselect.classList.add('btn-active')
        //toggleActiveBtn(btnCSCselect)
        const xh = new XMLHttpRequest();
        xh.open('GET', 'data/semis.json', true);
        xh.send();
        xh.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let partidos = JSON.parse(this.responseText);
                llenarTablaHTMLPartidos(partidos)
            }
        }
    }

    const liga_ceresina_colors = ()=> {
        document.documentElement.style.setProperty("--first-color", "#253c99");
        document.documentElement.style.setProperty("--secondary-color", "#263985");
        document.documentElement.style.setProperty("--terciary-color", "#1b2f80");
    }
    const copa_colors = ()=> {
        document.documentElement.style.setProperty("--first-color", "#379044");
        document.documentElement.style.setProperty("--secondary-color", "#2d803a");
        document.documentElement.style.setProperty("--terciary-color", "#367841");
    }

    // LIGA CERESINA
    function traerDatos_fecha(carpetaArchivo) {
       return function (btnOrEvent) {
            toggleActiveBtn(btnOrEvent?.target || btnOrEvent)
  
            const xh = new XMLHttpRequest();
            xh.open('GET', `data/${carpetaArchivo}`, true);
            xh.send();
            xh.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let partidos = JSON.parse(this.responseText);
                    llenarTablaHTMLPartidos(partidos)
                }
            }
       }
    }

    function toggleMenus (activeMenuId){
        const menus = Array.from(document.querySelectorAll('#fases, #fechas_lrfc, #fechas_lrfc_23'))
        menus.forEach(menu=> menu.classList.add('hidden'))

        const menuActivo = menus.find(menu=> menu.id === activeMenuId);
        if(menuActivo){
            menuActivo.classList.remove("hidden")
        }
    }

    //toggleMenus("fases")

    async function llenarObjetoStats (){
        const filesPromises = [
            cargarStats_csc('fase1.json'), cargarStats_csc('fase1_vuelta.json'),cargarStats_csc('fase2.json'), cargarStats_lca24('fecha1.json'), cargarStats_lca24_s23('fecha1.json') 
        ] 
        return Promise.all(filesPromises)
    }

    // Llena todos los objetos una vez al inicio (de lo contrario sumaria los resultados)
    llenarObjetoStats() 
        .then(()=> {
            // Aca se llama a la copa que queramos 
            
            // Para la copa dpt
            //traerDatos_fase2(btnFaseTres);
            //llenarStats_csc()

            // Para la liga
            //liga_ceresina_colors()
            toggleMenus("fechas_lrfc")
            traerDatos_fecha('lrfc/fecha1.json')(btnf1_a24)
            llenarStats_lca24()
            btnLCselect.classList.add('btn-active')
        })

    btnCSCselect.addEventListener('click', function(e) {
        copa_colors()
        toggleMenus("fases")

        traerDatos_fase2(btnFaseTres);
        llenarStats_csc()
        btnCSCselect.classList.add('btn-active')
    });

    btnLCselect.addEventListener('click', function() {
        liga_ceresina_colors()
        toggleMenus("fechas_lrfc")

        traerDatos_fecha('lrfc/fecha1.json')(btnf1_a24)
        llenarStats_lca24()
        btnLCselect.classList.add('btn-active')
    });
   
    btnLC23select.addEventListener('click', function() {
        liga_ceresina_colors()

        toggleMenus("fechas_lrfc_23")

        traerDatos_fecha('lrfcs23/fecha1.json')(btnf1_a24_23)
        llenarStats_lca24_s23()
        btnLC23select.classList.add('btn-active')
    });

})