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
};

class LearningPathds {
    constructor (
        {
            name, 
            classes = []
        }
    ) 
    {
        this.name = name;
        this.classes = classes;
    }
};

class Course {
    constructor (
        {
            name, 
            courses = []
        }
    ) 
    {
        this.name = name;
        this.courses = courses;
    }
};

class Class {
    constructor (
        {
            name, 
            duration,
            view,
            image
        }
    ) 
    {
        this.name = name;
        this.duration = duration;
        this.view = view;
        this.image = image;
    }
}

const escuelaDeDesarrolloWeb = new LearningPathds(
    {
        name: 'Escuela de Desarrollo Web',
        courses: [
            cursoDefinitivoDeHTMLyCSS,
            cursoPracticoDeHTMLYCSS,
            cursoGratisDeProgramacionBasica
        ]
    }
);

const escuelaDeDataScience = new LearningPathds(
    {
        name: 'Escuela de Data Science',
        courses: [
            'Curso de Data Business',
            'Curso de Data Viz',
            cursoGratisDeProgramacionBasica
        ]
    }
);

const escuelaDeVideojuegos = new LearningPathds(
    {
        name: 'Escuela de Videojuegos',
        courses: [
            'Curso de Unity',
            'Curso de Unreal',
            cursoGratisDeProgramacionBasica
        ]
    }
);

const cursoGratisDeProgramacionBasica = new Course(
    {
        name: 'Curso Gratis de Programación Básica',
        classes: []
    }
);

const cursoDefinitivoDeHTMLyCSS = new Course(
    {
        name: 'Curso Definitivo de HTML y CSS',
        classes: []
    }
)

const cursoPracticoDeHTMLYCSS = new Course(
    {
        name: 'Curso Práctico de HTML y CSS',
        classes: []
    }
)


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
            escuelaDeVideojuegos
        ]
    }
);

