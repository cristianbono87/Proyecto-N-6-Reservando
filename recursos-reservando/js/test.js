var should = chai.should;
var expect = chai.expect;
var assert = chai.assert;

//!---------------------------------------------------
// restaurant de ejemplo:"TAO Uptown"
// id: 1
// horarios: ["13:00", "15:30", "18:00"]

var restaurantEjemplo = listado.buscarRestaurante(1);
//!---------------------------------------------------

// var expect = chai.expect; // se agrega la función al programa

// expect(“casa”).to.be.a('string'); //se espera que “casa” sea un string

// expect([]).to.be.an(‘array’); //se espera que [] sea un arreglo

// expect(miValor).to.equal(3); //equal compara que miValor sea igual a 3

// expect({ a: 1 }).to.eql({ a: 1 }).but.not.equal({ a: 1 }); //eql compara cada valor del objeto. Para objetos usamos eql en vez de equal.

describe("reservarHorario", function () {

    it("cuando se reserva un horario el mismo se debe eliminar del arreglo horarios", function () {  

        // restaurantEjemplo.reservarHorario('13:00');
        // var resultado = restaurantEjemplo.horarios.includes('13:00');
        // var esperado = false;

        // expect(resultado).to.equal(esperado);
    });

    it("Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual", function () {

        var resultado = restaurantEjemplo.horarios.length;
        restaurantEjemplo.reservarHorario('45'); //valor que se sabe no se encuentra en el arreglo
        var esperado = restaurantEjemplo.horarios.length;
        // expect(resultado).to.equal(esperado);
    });

    it("Cuando se reserva un horario pasando como parámetro un espacio vacío, el arreglo debe mantenerse igual", function () {

        var resultado = restaurantEjemplo.horarios.length;
        restaurantEjemplo.reservarHorario();
        var esperado = restaurantEjemplo.horarios.length;
        // expect(resultado).to.equal(esperado);
    });
});

//!---------------------------------------------------

describe("obtener puntuación", function () {

    it("Calcular promedio correctamente", function () {

        restaurantEjemplo.calificaciones = [10, 10]; //array con promedio conocido de valor 10
        var resultado = restaurantEjemplo.obtenerPuntuacion();
        expect(resultado).to.equal(10);
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
