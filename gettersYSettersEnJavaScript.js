class Course {
    #name;
    constructor (
        {
            name, 
            courses = []
        }
    ) 
    {
        this.#name = name;
        this.courses = courses;
    }

    get name () 
    {
        return console.log(`Name the course is: ${this.#name}`)
    }

    set name (newName) 
    {
        if (newName === 'Curso Malito de Programación Básica') {
            console.error('Web...no');
        } else {
            this.#name = newName;
        }
    }
};


const cursoGratisDeProgramacionBasica = new Course(
    {
        name: 'Curso Gratis de Programación Básica',
        classes: []
    }
);

const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS'
    ],

    aprobarCurso (nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },

    changeName (newName) 
    {
        this.name = newName;
        return console.log(`The new name is: ${this.name}`)
    }
};
