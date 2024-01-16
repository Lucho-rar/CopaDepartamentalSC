console.log('correcto');
document.querySelector('#fase1').addEventListener('click',traerDatos);
document.querySelector('#fase2').addEventListener('click',traerDatos2);

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

function traerDatos2(){
    const xh = new XMLHttpRequest();
    xh.open('GET','fase2.json',true);
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
                <td><img src="/assets/minis/${item.imagenlocal}" alt="Imagen">${item.local}</td>
                <td>${item.glocal}</td>
                <td>${item.gvisitante}</td>
                <td><img src="/assets/minis/${item.imagenvisita}" alt="Imagen">${item.visitante}</td>
                <td>${item.fecha}</td>
                <td>${item.estado}</td>
                <td></td>
                
                </tr>
               `

            }
        }
    }
}




