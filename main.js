const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS'
    ],

    aprobarCurso (nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};

function Student (name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    // aprobarCurso (nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito);
    // }
};

Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
};

const juanita = new Student('Juanita Alejandro', 15, ['Curso Definitivo de HTML y CSS',
'Curso Práctico de HTML y CSS']);