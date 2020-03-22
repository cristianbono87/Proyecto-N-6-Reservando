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
    return promedio.toPrecision(2);
}