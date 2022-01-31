class learningPathds {
    constructor ({id, name, numberCourses, completedAt}) {
        this.id = id;
        this.name = name;
        this.numberCourses = numberCourses;
        this.completedAt = completedAt;
    };
}

const escuelaDeDesarrolloWeb = new learningPathds(
    {
        id: 1,
        name: 'Escuela de Desarrollo Web',
        numberCourses: 112,
        completedAt: 0
    }
);

const escuelaDeJavaScript = new learningPathds(
    {
        id: 2,
        name: 'Escuela de JavaScript',
        numberCourses: 21,
        completedAt: 0
    }
);

const escuelaDeBlockcahinYCriptomonedas = new learningPathds(
    {
        id: 3,
        name: 'Escuela de Blockchain y Criptomonedas',
        numberCourses: 26,
        completedAt: 0
    }
);

class Courses {
    constructor ({id, name, teacher, hours, numberClasses}) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.hours = hours;
        this.numberClasses = numberClasses;
    };
}

const cursoDefinitivoDeHTMLyCSS = new Courses(
    {
        id: 1,
        name: 'Curso Definitivo de HTML y CSS',
        teacher: 'Diego De Granda',
        hours: 8,
        numberClasses: 55
    }
);

const cursoGratisDeProgramacionBasica = new Courses(
    {
        id: 2,
        name: 'Curso Gratis de Programación Básica',
        teacher: 'Freddy Vega',
        hours: 10,
        numberClasses: 37
    }
);

class Student {
    constructor (
        {
            name,
            email,
            username,
            twitter = undefined,
            instagram = undefined,
            facebook = undefined,
            approvedCourses = [],
            learningPathds = []
        }
    ) 
    {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPathds = learningPathds;
    };
}

const juan2 = new Student(
    {
        name: 'JuanDC',
        usarname: 'juandc',
        usarname: 'juandc@juanito.com',
        twitter: 'fjuandc',
        approvedCourses: [
            cursoDefinitivoDeHTMLyCSS,
            cursoGratisDeProgramacionBasica
        ],
        learningPathds: [
            escuelaDeDesarrolloWeb,
            escuelaDeJavaScript,
            escuelaDeBlockcahinYCriptomonedas
        ]
    }
);

const miguelito2 = new Student(
    {
        name: 'Miguelito',
        usarname: 'miguelitofeliz',
        usarname: 'miguelito@miguelito.com',
        instagram: 'miguelito_feliz'
    }
);