/* Hacer un programa que dada una capital indique si se trata de uno de los nombres elegidos por El Profesor para alguno de los miembros de su equipo o no.
Necesitamos tenerlo para dentro de 10 días… ¡hay demasiados rehenes en juego! */
// OPCIÓN LARGA:
var nombre = "";
function atracador(miembro){alert("Alerta, " + miembro + " es un miembro de la banda de: La Casica de Papel.");}
while (isNaN(nombre) === false) { // Comprobar dato introducido;
    nombre = prompt("Dime la capital que tienes en mente");
    nombre = nombre.toUpperCase();
}
switch (nombre) {
    case "TOKIO":
        atracador(nombre);
        break;

    case "NAIROBI":
        atracador(nombre);
        break;

    case "BERLÍN":
        atracador(nombre);
        break;

    case "RÍO":
        atracador(nombre);       
        break;

    case "DENVER":
        atracador(nombre);
        break;

    case "MARSELLA":
        atracador(nombre);
        break;
    
    case "OSLO":
        atracador(nombre);
        break;

    case "HELSINKI":
        atracador(nombre);
        break;
    
    case "MOSCÚ":
        atracador(nombre);
        break;

    default:
        alert("La capital " + nombre + ", no corresponde al nombre de ningún miembro de la casa de papel ")
        break;
}

// ------------------------------------------------------------------------------------------
// ESTA LA MEJOR OPCIÓN:
var nombre = "";
var atracadores = ["TOKIO", "NAIROBI", "BERLÍN", "RÍO", "DENVER", "OSLO", "HELSINKI", "MOSCÚ"];
while (isNaN(nombre) === false) { nombre = prompt("Dime la capital que tienes en mente"); nombre = nombre.toUpperCase(); }
for (let i = 0; i < atracadores.length; i++) { 
    if (nombre === atracadores[i]) { alert("Alerta, " + nombre + " es un miembro de la banda de: La Casica de Papel.");
        break} 
    if (nombre != atracadores.length) { alert("La capital " + nombre + ", no corresponde al nombre de ningún miembro de la casa de papel ");
        break;
    }
}