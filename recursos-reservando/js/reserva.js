var Reserva = function (horario, cantDePersonas, precioPersona, codigoDescuento) {
    this.horario = horario; //objeto tipo date por ejemplo (var Xmas95 = new Date(1995, 11, 25, 9, 30, 0));
    this.cantDePersonas = cantDePersonas; //numero
    this.precioPersona= precioPersona; //numero
    this.codigoDescuento = codigoDescuento; //string
};

function precioBaseReserva(Reserva){
    var precio = Reserva.cantDePersonas * Reserva.precioPersona;
    return precio;
};

//Esta funcion debe tener en cuenta el descuento por cantidad de personas y por cupon de descuento
function precioDescuento(Reserva){
    var descuento = {porcentaje:0,dinero:0,liberado:0}

        switch (Reserva.codigoDescuento) {
            case "DES15":
                descuento.porcentaje = 0.15;
                break;
            case "DES200":
                descuento.dinero = 200;
                break;
            case "DES1":
                descuento.liberado = 1
                break;
            default:
                break;
        }
        if(Reserva.cantDePersonas >= 4 && Reserva.cantDePersonas <= 6){
            descuento.porcentaje += 0.05;
        } if (Reserva.cantDePersonas >= 7 && Reserva.cantDePersonas <= 8) {
            descuento.porcentaje += 0.1;
        } if (Reserva.cantDePersonas > 8){
            descuento.porcentaje += 0.15;
        }
    var precioDeDescuento = (descuento.porcentaje*precioBaseReserva(Reserva)) + (descuento.dinero)+ (descuento.liberado*Reserva.precioPersona);
    return precioDeDescuento;
};

//Esta funcion debe tener en cuenta los adicionales por horario y por fin de semana
function precioAdicionales(Reserva){
    var recargo = 0;
    if (Reserva.horario.getHours() >= 13 && Reserva.horario.getHours() <= 14){
        recargo = 0.05;
    } if (Reserva.horario.getHours() >= 20 && Reserva.horario.getHours() <= 21){
        recargo = 0.05;
    }console.log(recargo); if (Reserva.horario.getDay() == 5 || Reserva.horario.getDay() == 6 || Reserva.horario.getDay() == 0){
        recargo += 0.1;
    }console.log(recargo);
    var precioRecargo = recargo*precioBaseReserva(Reserva);
    return precioRecargo;
};

Reserva.prototype.precioFinalReserva = function(Reserva){
var precioFinal = precioBaseReserva(Reserva) + precioAdicionales(Reserva) - precioDescuento(Reserva);
return precioFinal;
};