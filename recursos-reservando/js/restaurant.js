var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
        return this.horarios = this.horarios.filter(function (element) {
            return element !== horarioReservado;
        });
    };

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
            return 0;
        } else {
            return promedio(this.calificaciones);
    }
}

function sumatoria(array){
    var suma = 0;
    array.forEach(element => {
        suma += element;
    });
    return suma;
}

function promedio(array){
    var promedio = sumatoria(array)/array.length;
    return promedio;
}

//!continuar
/*Paso 5: Refactorizá las funciones obtenerRubros(), obtenerUbicaciones() y obtenerHorarios() aplicando la función map.
Estas funciones recorren todo el arreglo utilizando un ciclo for para obtener los atributos que necesitan de cada restaurante. Esta funcionalidad puede realizarse también utilizando la función map().

Modificá esta parte de las funciones aplicando la función map(). Vas a notar que tu código queda más limpio y se comprende más cuál es su objetivo.

Paso 6: Modificá la función buscarRestaurant(id) aplicando la función find().
Para encontrar un elemento con un determinado id, se recorre todo el arreglo de restaurantes utilizando un ciclo for. Esto también puede resolverse utilizando la función find().

Refactorizá la función buscarRestaurante(id) para que encuentre al restaurant con el id que recibe por parámetro utilizando la función find().*/