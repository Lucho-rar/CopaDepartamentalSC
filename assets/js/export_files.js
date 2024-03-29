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

// let totalPagesExp = "{total_pages_count_string}";
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

function imprimirDescargarTabla({ download = false } = {}){
  const tablaHTML = document.getElementById('tabla_prueba_impresion');
  tablaHTML.querySelectorAll('tr.row-contexto').forEach(tr=> tr.remove())
  console.log(tablaHTML);

  const tablaJSON = doc.autoTableHtmlToJson(tablaHTML);

  const emojis = [
    { emoji: '⚽', label: 'Goles: ' },
    { emoji: '🟨', label: '(TA)' },
    { emoji: '🟥', label: '(TR)' }
  ]

  // for (let index = 0; index < tablaJSON.data.length; index++) {
  //   let row = tablaJSON.data[index];
    
  //   if(row.filter(Boolean).length === 3){
  //     const cellEmpty = document.createElement('td')
  //     cellEmpty.classList.add('cell-empty')
 
  //     row.splice(2, 0, cellEmpty);
  //   };
    
  // }

  const columnsWidth = (pdfConfigHorizontal.format[0] / 3) - 10

  const configuracion = {
    html: tablaHTML,
    theme: 'grid',
    headerStyles : {
      fillColor : [38, 38, 38],
    },
    alternateRowStyles: {
      fillColor : [242, 242, 242]
    },
    addPageContent: function (data) {
      pageContent(data, 'Fixture', '')
    },
    // useCss: true,
    margin: { top: 20 },
    columnStyles: {
      0: { 
        overflow: 'linebreak',
        halign: 'center',
        columnWidth: columnsWidth,
        lineWidth: 0,
      },
      1: { 
        overflow: 'linebreak',
        halign: 'center',
        columnWidth: columnsWidth,
        lineWidth: 0,
      },
      2: {  
        overflow: 'linebreak',
        halign: 'center',
        columnWidth: columnsWidth,
        lineWidth: 0,
      },
      // 3: {  
      //   overflow: 'linebreak',
      //   halign: 'center',

      //   // columnWidth: columnsWidth
      // }
    },
    createdCell: function (cell, data) {
      // if(cell?.raw?.parentElement?.classList.contains('row-info') || cell?.raw?.classList.contains('cell-empty')){
      //   if(cell.raw.getAttribute('colspan') === '2'){
      //     cell.styles.halign = 'center';
      //   }

      //   cell.styles.lineWidth = 0;
      // } else {
      //   cell.styles.lineWidth = 0;
      //   cell.styles.fillColor = [242, 250, 247];
      // }

      if(cell.text){
        emojis.forEach(({ emoji, label })=> {
          const newCellText = cell.text.map(txt=> txt.replaceAll(emoji.trim(), label).toUpperCase())
          cell.text = newCellText;
        })
      }
  
    },
  }
  doc.autoTable(tablaJSON.columns, tablaJSON.data, configuracion);
  
  
  // AGREGA TABLA ESTADISTICAS
  const tablaEstadisticas = document.getElementById('tabla_estadisticas');
  const tablaEstadisticasJSON = doc.autoTableHtmlToJson(tablaEstadisticas);

  // const finalY = ()=> doc.autoTable.previous.finalY;

  const configuracion_estadisticas = {
    theme: 'grid',
    // startY: 10,
    headerStyles : {
      fillColor : [38, 38, 38],
    },
    alternateRowStyles: {
      fillColor : [242, 242, 242]
    },
    createdCell: function (cell, data) {
      cell.styles.lineWidth = 0
    },
    addPageContent: function (data) {
      pageContent(data, 'Estadisticas', 'Datos por equipo')
    },
    margin: { top: 20 },
    // useCss: true,
    // margin: { top: 20 },
  }

  doc
    .addPage()
    .autoTable(tablaEstadisticasJSON.columns, tablaEstadisticasJSON.data, configuracion_estadisticas);
  
  // AGREGA TABLA GOLEADORES
  const tablaGoleadores = document.getElementById('tabla_goleadores');
  const tablaGoleadoresJSON = doc.autoTableHtmlToJson(tablaGoleadores);
  
  const configuracion_goleadores = {
    theme: 'grid',
    // startY: 10,
    margin: { top: 20 },
    headerStyles : {
      fillColor : [38, 38, 38],
    },
    alternateRowStyles: {
      fillColor : [242, 242, 242]
    },
    createdCell: function (cell, data) {
      cell.styles.lineWidth = 0
    },
    addPageContent: function (data) {
      pageContent(data, 'Goleadores', 'Tabla de goleadores')
    },
  }

  doc
    .addPage()
    .autoTable(tablaGoleadoresJSON.columns, tablaGoleadoresJSON.data, configuracion_goleadores);
  
  // if (typeof doc.putTotalPages === 'function') {
  //   doc.putTotalPages(totalPagesExp);
  // }

  if(download){
    const nombre = `copa_departamental_${Date.now()}`; 

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

function imprimirTablaFixtureYStats (esParaDescargar){
  pdfConfig = pdfConfigHorizontal;
  doc = new jsPDF(pdfConfigHorizontal);

  imprimirDescargarTabla({ download: esParaDescargar })
}

function exportarCSV(filename) {
  // const wb1 = XLSX.utils.table_to_book(document.getElementById('tabla_fixture_impresion'));
  // const wb2 = XLSX.utils.table_to_book(document.getElementById('tabla_estadisticas'));

  // XLSX.writeFileXLSX(wb1, wb2, filename);

  const wb1 = XLSX.utils.table_to_book(document.getElementById('tabla_fixture_impresion'));
  const wb2 = XLSX.utils.table_to_book(document.getElementById('tabla_estadisticas'));
  const wb3 = XLSX.utils.table_to_book(document.getElementById('tabla_goleadores'));

  // Fusionar las hojas de cálculo wb1 y wb2 en un solo workbook
  const mergedWorkbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(mergedWorkbook, wb1.Sheets[wb1.SheetNames[0]], 'Partidos');
  XLSX.utils.book_append_sheet(mergedWorkbook, wb2.Sheets[wb2.SheetNames[0]], 'Estadisticas');
  XLSX.utils.book_append_sheet(mergedWorkbook, wb3.Sheets[wb3.SheetNames[0]], 'Goleadores');

  // Escribir el archivo XLSX
  XLSX.writeFile(mergedWorkbook, filename);
}
