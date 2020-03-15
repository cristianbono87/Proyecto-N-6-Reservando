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

// Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.

    it("reservarHorario cualquiera", function () {  

        var horarioDeReserva = '13:00'
        restaurantEjemplo.reservarHorario(horarioDeReserva);
        var horariosConReserva = restaurantEjemplo.horarios;

        for (var i = 0; i < restaurantEjemplo.horarios.length; i++) {
            if (restaurantEjemplo.horarios[i] === horarioDeReserva) {
                var resultado = true
            }
            return resultado;
        }
        var esperado = false;
        expect(resultado).to.equal(esperado);
    });

// Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.
    
    it("reservar horario que no se encuentra disponible", function () {

        var horarioDeReserva = '45'
        var elementosAntesDeReserva = restaurantEjemplo.horarios.length;
        restaurantEjemplo.reservarHorario(horarioDeReserva);
        var elementosDespuesDeReserva = restaurantEjemplo.horarios.length;

        var resultado = elementosAntesDeReserva;
        var esperado = elementosDespuesDeReserva;
        expect(resultado).to.equal(esperado);
    });

// Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.

    it("reservar horario que no se encuentra disponible", function () {

        var elementosAntesDeReserva = restaurantEjemplo.horarios.length;
        restaurantEjemplo.reservarHorario();
        var elementosDespuesDeReserva = restaurantEjemplo.horarios.length;

        var resultado = elementosAntesDeReserva;
        var esperado = elementosDespuesDeReserva;
        expect(resultado).to.equal(esperado);
    });
});

//!---------------------------------------------------

describe("obtener puntuación", function () {

// Dado un restaurant con determinadas calificaciones, la puntuación(que es el promedio de ellas) se calcula correctamente.

    it("calcular promedio correctamente", function () {

        restaurantEjemplo.calificaciones = [10, 10]; //array con promedio conocido de valor 10

        var resultado = restaurantEjemplo.obtenerPuntuacion();
        var esperado = 10;
        expect(resultado).to.equal(esperado);
    });

// Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.

    it("corroborar promedio '0'", function () {

        restaurantEjemplo.calificaciones = [];

        var resultado = restaurantEjemplo.obtenerPuntuacion();
        var esperado = 0;
        expect(resultado).to.equal(esperado);
    });
});

//!---------------------------------------------------

describe("calificar", function () {

//comprobar que dada una nueva calificación entre 0 y 10 la misma sea agregada al array de califecaciones

    it("comprobar que calificacion valida se agrega al array", function () {
        var cantCalificaciones = restaurantEjemplo.calificaciones.length;
        restaurantEjemplo.calificar(1);
        var resultado = restaurantEjemplo.calificaciones.length;
        var esperado = cantCalificaciones + 1;
    });

//comprobar que dada una nueva calificación menor a 0 o mayor a 10 la misma no sea agregada al array de califecaciones

    it("comprobar que calificacion no valida no se agregue", function () {
        var cantCalificaciones = restaurantEjemplo.calificaciones.length;
        restaurantEjemplo.calificar(-1);
        restaurantEjemplo.calificar(11);
        var resultado = restaurantEjemplo.calificaciones.length;
        var esperado = cantCalificaciones;
    });

//comprobar que dada una nueva calificación de valores en string o NaN la misma no sea agregada al array de calificaciones

    it("comprobar que calificacion no valida no se agregue", function () {
        var cantCalificaciones = restaurantEjemplo.calificaciones.length;
        restaurantEjemplo.calificar('hola');
        restaurantEjemplo.calificar(NaN);
        restaurantEjemplo.calificar(true);
        var resultado = restaurantEjemplo.calificaciones.length;
        var esperado = cantCalificaciones;
    });

});

//!---------------------------------------------------

describe("buscar restaurante", function () {

    //comprobar que la funcion buscarRestaurante nos devuelva el restaurant correspondiente al id indicado

    it("comprobar que nos devuelva el objeto restaurant correcto segun id", function () {
        var restaurantIndicado = [1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]];
        restaurantEjemplo.calificar(1);
        var resultado = listado.buscarRestaurante(1); //el restaurant TAO Uptown corresponde al id conocido '1'
        var esperado = restaurantIndicado;
    });

    //comprobar que dado un id que no se encuentra disponible devuelva un mensaje de que no se encuentra disponible

    it("comprobar ausencia de restaurant segun id", function () {
        var resultado = listado.buscarRestaurante(-1);
        var esperado = "No se ha encontrado ningún restaurant";
    });

});

//!---------------------------------------------------

describe("obtener restaurante", function () {

    //comprobar que la funcion obtenerRestaurante filtra correctamente

    it("comprobar que la funcion responde correctamente a un filtro por rubro", function () {
        var restaurantes = this.listadoDeRestaurantes;
        for (var i = 0; i < restaurantes.length; i++) {
            if (restaurantes.rubro[i] === "Asiática") {
                var contador =+ 1
                console.log(contador)
            }
            return contador;
        };
        var resultado = contador;
        var esperado = (restaurantes.filter(restaurant => restaurant.rubro == "Asiática").length);
        expect(resultado).to.equal(esperado);
    });

});

//Testeá la función obtenerRestaurantes()
// Testeá la función obtenerRestaurantes() para comprobar su funcionamiento.En este paso, podés elegir vos la pruebas que quieras hacer.

//Función que recibe los filtros que llegan desde el HTML y filtra el arreglo de restaurantes.
//Solo se filtra si el valor recibido es distinto de null.
// Listado.prototype.obtenerRestaurantes = function (filtroRubro, filtroCiudad, filtroHorario) {
//     var restaurantesFiltrados = this.restaurantes;
//     if (filtroRubro !== null) {
//         restaurantesFiltrados = restaurantesFiltrados.filter(restaurant => restaurant.rubro == filtroRubro);
//     }

//     if (filtroCiudad !== null) {
//         restaurantesFiltrados = restaurantesFiltrados.filter(restaurant => restaurant.ubicacion == filtroCiudad);
//     }

//     if (filtroHorario !== null) {
//         restaurantesFiltrados = restaurantesFiltrados.filter(function (res) {
//             return res.horarios.some(horario => horario == filtroHorario);
//         });
//     }
//     return restaurantesFiltrados;
// }
