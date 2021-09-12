function imprimirElemento(elemento) {
    var ventana = window.open('', 'PRINT', 'height=auto,width=auto');
    ventana.document.write('<html><head><title>' + document.title + '</title>');
    ventana.document.write('<link rel="stylesheet" href="ticket.css">');
    ventana.document.write('</head><body >');
    ventana.document.write(elemento.innerHTML);
    ventana.document.write('</body></html>');
    ventana.document.close();
    ventana.focus();
    ventana.onload = function () {  
      ventana.print();
      ventana.close();
    };
    return true;
  }
  
  document.querySelector("#btnImprimirDiv").addEventListener("click", function () {
    var div = document.querySelector("#imprimible");
    imprimirElemento(div);
  });
  
 