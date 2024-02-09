const pdfConfigHorizontal = {
  orientation: 'l',   
  unit: 'mm',         
  format: [297, 210]  
};

const pdfConfigVertical = {
  orientation: 'p',   
  unit: 'mm',         
  format: [210, 297]  
};

let doc, pdfConfig;

let totalPagesExp = "{total_pages_count_string}";
let pageContent = function (data, titulo = '', subtitulo = '') {
    if(data.pageCount === 1){
      doc.setFontSize(16);
      doc.setFontStyle('bold');
      doc.setTextColor(0, 0, 0);
      doc.text(titulo, 14, 10);
      
      doc.setFontSize(10);
      doc.setFontStyle('normal');
      doc.setTextColor(133, 133, 133);
      doc.text(subtitulo, 14, 15);
    }
    
    // const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    // var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    
    // FOOTER
    // let str = "Pagina " + data.pageCount;
    
    // // Total page number plugin only available in jspdf v1.0+
    // if (typeof doc.putTotalPages == 'function') {
    //     str = str + " de " + totalPagesExp;
    // }

    // en realidad es el alto
    // doc.setLineWidth(8);
    // // setea el bg y color de esa linea
    // doc.setDrawColor(238, 238, 238);
    // doc.setTextColor(51, 50, 50);
    // // establece la posicion de la linea x1 | y1 | x2 | y2
    // doc.line(14, pageHeight - 11, pdfConfig.format[0] - 14, pageHeight - 11);

    // doc.setFontSize(10);
    // doc.setFontStyle('bold');
    // doc.text(str, 17, pageHeight - 10);
    
    // END FOOTER

    // const headerCeldas = data.table.headerRow.cells;
    // console.log(headerCeldas[0].styles);
    // headerCeldas[0].styles.halign = 'right';
  };

function imprimirTabla(tablaId, subtitulo, configuracion_personalizada = {}, download = false){
  const tablaHTML = document.getElementById(tablaId);
  const tablaJSON = doc.autoTableHtmlToJson(tablaHTML);

  const configuracion = {
    theme: 'grid',
    headerStyles : {
      fillColor : [25, 135, 84],
    },
    alternateRowStyles: {
      fillColor : [242, 250, 247]
    },
    addPageContent: function (data) {
      pageContent(data, 'Copa Departamental San Cristóbal', subtitulo)
    },
    // useCss: true,
    margin: { top: 20 },
    ...configuracion_personalizada,
  }
 
  doc.autoTable(tablaJSON.columns, tablaJSON.data, configuracion);

  // if (typeof doc.putTotalPages === 'function') {
  //   doc.putTotalPages(totalPagesExp);
  // }

  if(download){
    const nombre = subtitulo.trim() 
        ? subtitulo.toLowerCase().split(' ').join('_') 
        : `copa_departamental_${Date.now()}`; 

    doc.save(`${nombre}.pdf`)
  } else {
    const string = doc.output('datauristring');
    const iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
  
    var x = window.open();
    x.document.open();
    x.document.write(iframe);
    x.document.close();

  }
  
}

function imprimirTablaFixture (download){
  pdfConfig = pdfConfigHorizontal;
  doc = new jsPDF(pdfConfigHorizontal);

  imprimirTabla(
    'tabla_fixture_impresion',
    'Fixture fase 1 ida',
     {
      columnStyles: {
        1: { 
          halign: 'center',
        },
        2: {  
          halign: 'center',
        }
      },
    },
    download
  )

}

function exportarCSV(filename) {
  const wb = XLSX.utils.table_to_book(document.getElementById('tabla_fixture_impresion'));
  XLSX.writeFileXLSX(wb, filename);
}


