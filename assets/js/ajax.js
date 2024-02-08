window.addEventListener('load', function (){
    console.log('correcto');
document.querySelector('#fase1').addEventListener('click',traerDatos2);
document.querySelector('#fase2').addEventListener('click',traerDatos2);


window.jsPDF = window?.jspdf?.jsPDF;

function traerDatos(){
    const xh = new XMLHttpRequest();
    xh.open('GET','prueba.json',true);
    xh.send();
    xh.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML= '';
            for(let item of datos){
               // console.log(item.local);
               res.innerHTML += `
               <tr>
                <th style="width: 100px;">${item.local}</td>
                <th style="width: 100px;">${item.visitante}</td>
                </tr>
               `

            }
        }
    }
}

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