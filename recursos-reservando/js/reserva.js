var Reserva = function (horario, cantDePersonas, precioPersona, codigoDescuento) {
    this.horario = horario; //objeto tipo date por ejemplo (var Xmas95 = new Date(1995, 11, 25, 9, 30, 0));
    this.cantDePersonas = cantDePersonas; //numero
    this.precioPersona= precioPersona; //numero
    this.codigoDescuento = codigoDescuento; //string
};

function precioBaseReserva(cantDePersonas){
    var precio = cantDePersonas * this.precioPersona;
    return precio;
};

function precioDescuento(cantDePersonas, codigoDescuento){
    var descuento = 0;
    if(cantDePersonas >= 4 && cantDePersonas <= 6){
        descuento = 0.05;
    } if (cantDePersonas >= 7 && cantDePersonas <= 8) {
        descuento = 0.1;
    } if (cantDePersonas > 8){
        descuento = 0.15;
    }
    return descuento;
}

Reserva.prototype.precioFinalReserva = function(cantDePersonas){
var precioFinal = precio + adicionales - (precio * precioDescuento(cantDePersonas,codigoDescuento));
return precioFinal;
}