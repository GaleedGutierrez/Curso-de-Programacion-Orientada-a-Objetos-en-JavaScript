class Student2 {
    constructor (
        {
            name, 
            age, 
            cursosAprobados = [], 
            email, 
        }
    ) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso (nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    };
}

const miguelito = new Student2(
    {
        email: 'miguelito@platzi.com',
        name: 'Miguel', 
        age: 28
    }
);