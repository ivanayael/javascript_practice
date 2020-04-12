document.write("Titulo: Ivana Curra");
var b = document.getElementById("trazado");
var a_trabajo = b.getContext("2d");

a_trabajo.beginPath();
a_trabajo.strokeStyle = "violet";
a_trabajo.moveTo(100,100);
a_trabajo.lineTo(250,250);
a_trabajo.stroke();
a_trabajo.closePath();