var should = chai.should;
var expect = chai.expect;
var assert = chai.assert;

//!---------------------------------------------------
// restaurant de ejemplo:"TAO Uptown"
// id: 1
// horarios: ["13:00", "15:30", "18:00"]

var restaurantEjemplo = listado.buscarRestaurante(1);
//!---------------------------------------------------

describe("reservarHorario", function () {

    it("cuando se reserva un horario el mismo se debe eliminar del arreglo horarios", function () {  

        restaurantEjemplo.reservarHorario('13:00');
        expect(restaurantEjemplo.horarios).to.not.includes('13:00');
    });

    it("Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual", function () {

        var resultado = restaurantEjemplo.horarios.length;
        restaurantEjemplo.reservarHorario('45'); //valor que se sabe no se encuentra en el arreglo
        expect(resultado).to.equal(restaurantEjemplo.horarios.length);
    });

    it("Cuando se reserva un horario pasando como parámetro un espacio vacío, el arreglo debe mantenerse igual", function () {

        var resultado = restaurantEjemplo.horarios.length;
        restaurantEjemplo.reservarHorario();
        expect(resultado).to.equal(restaurantEjemplo.horarios.length);
    });
});

//!---------------------------------------------------

describe("obtener puntuación", function () {

    it("Calcular promedio correctamente", function () {

        restaurantEjemplo.calificaciones = [10, 10]; //array con promedio conocido de valor 10
        var resultado = restaurantEjemplo.obtenerPuntuacion();
        expect(resultado).to.equal('10');
    });

    it("Dado un restaurant sin calificaciones, la puntuación debe ser cero", function () {

        restaurantEjemplo.calificaciones = [];
        var resultado = restaurantEjemplo.obtenerPuntuacion();
        expect(resultado).to.equal(0);
    });
});

//!---------------------------------------------------

describe("calificar", function () {

    it("Comprobar que dada una calificacion valida, la misma se agrega al array", function () {
        var antesDeCalificar = restaurantEjemplo.calificaciones.length;
        restaurantEjemplo.calificar(1);
        var despuesDeCalificar = restaurantEjemplo.calificaciones.length;
        expect(despuesDeCalificar).to.be.equal(antesDeCalificar + 1);
    });

    it("Comprobar que dada una nueva calificación menor a 0 o mayor a 10 la misma no sea agregada", function () {
        var antesDeCalificar = restaurantEjemplo.calificaciones.length;
        restaurantEjemplo.calificar(-1);
        restaurantEjemplo.calificar(11);
        var despuesDeCalificar = restaurantEjemplo.calificaciones.length;
        expect(antesDeCalificar).to.equal(despuesDeCalificar);
    });

    it("Comprobar que dada una nueva calificación de valores en string o NaN la misma no sea agregada", function () {
        var antesDeCalificar = restaurantEjemplo.calificaciones.length;
        restaurantEjemplo.calificar('hola');
        restaurantEjemplo.calificar(NaN);
        restaurantEjemplo.calificar(true);
        var despuesDeCalificar = restaurantEjemplo.calificaciones.length;
        expect(antesDeCalificar).to.equal(despuesDeCalificar);
    });

});

//!---------------------------------------------------

describe("buscar restaurante", function () {

    it("Comprobar que la funcion buscarRestaurante nos devuelva el restaurant correspondiente al id indicado", function () {
        //el restaurant TAO Uptown corresponde al id conocido '1'
        expect(listado.buscarRestaurante(1)).to.includes({nombre: "TAO Uptown"});
    });

    it("Comprobar que dado un id que no se encuentra disponible devuelva un mensaje de que no se encuentra disponible", function () {
        expect(listado.buscarRestaurante(-1)).to.equal("No se ha encontrado ningún restaurant");
    });

});

//!---------------------------------------------------

describe("obtener restaurante", function () {

    it("comprobar que la funcion responde correctamente a un filtro por rubro", function () {
        var restauranteFiltrado = listado.restaurantes.filter(function(elemento){
            return elemento.rubro == "Asiática";
        });

        var filtroRubro = "Asiática";
        var filtroCiudad = null;
        var filtroHorario = null;
        var obtenerRestaurant = listado.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)
        
        expect(restauranteFiltrado).to.eql(obtenerRestaurant);
    });

    it("comprobar que la funcion responde correctamente a un filtro por ciudad", function () {
        var restauranteFiltrado = listado.restaurantes.filter(function (elemento) {
            return elemento.ubicacion == "Nueva York";
        });

        var filtroRubro = null;
        var filtroCiudad = "Nueva York";
        var filtroHorario = null;
        var obtenerRestaurant = listado.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)

        expect(restauranteFiltrado).to.eql(obtenerRestaurant);
    });

    it("comprobar que la funcion responde correctamente a un filtro por horario", function () {
        var restauranteFiltrado = listado.restaurantes.filter(function (elemento) {
            return elemento.horarios.some(horario => horario == "13:00")
        });

        var filtroRubro = null;
        var filtroCiudad = null;
        var filtroHorario = "13:00";
        var obtenerRestaurant = listado.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)

        expect(restauranteFiltrado).to.eql(obtenerRestaurant);
    });

});

//!-----------------Test Guia 3: Funcionalidad de reserva-----------------------
//?-----------------------------------------------------------------------------

//Ejemplos de reserva
var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")
var reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")

describe("Precio de reserva",function(){

    it("comprobar que el calculo del precio base se realice correctamente",function(){
        var esperado = reserva1.precioPersona * reserva1.cantDePersonas;
        var resultado = precioBaseReserva(reserva1.cantDePersonas);
        expect(esperado).to.be.equal(resultado);
    })

    it("comprobar que el calculo del precio total se realice correctamente", function () {
        //se usa para el calculo la reserva 1: Adicionales 
        var precioBase = reserva1.cantDePersonas * reserva1.precioPersona;
        var esperado = precioBase + (precioBase*0.1) - (precioBase*0.1) - (reserva1.precioPersona);
        var resultado = Reserva.precioFinalReserva(reserva1.cantDePersonas, reserva1.codigoDescuento);
        expect(esperado).to.be.equal(resultado);
    })
})