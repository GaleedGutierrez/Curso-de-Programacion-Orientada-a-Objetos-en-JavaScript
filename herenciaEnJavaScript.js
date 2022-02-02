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

class FreeStudent extends Student {
    constructor (prarameters) {
        super(prarameters);
    };

    approvedCourse (newCourse) {
        let {approvedCourses, name} = this;
        if (newCourse.isFree) {
            approvedCourses.push(newCourse);
        } else {
            console.log(`Lo sentimos, ${name}, solo puedes tomar cursos abiertos.`);
        }
    }
};

class BasicStudent extends Student {
    constructor (prarameters) {
        super(prarameters);
    }

    approvedCourse (newCourse) {
        let {approvedCourse, name} = this;
        if (newCourse.lang !== 'English') {
            approvedCourse.push(newCourse);
        } else {
            console.log(`Lo sentimos, ${name}, solo puedes tomar cursos en inglés.`);
        }
    }
};

class ExpertStudent extends Student {
    constructor (prarameters) {
        super(prarameters);
    }

    approvedCourse (newCourse) {
        let {approvedCourse} = this;
        approvedCourse.push(newCourse);
    }
};

class Course {
    constructor (
        {
            name, 
            classes = [],
            isFree = false,
            lang = 'Spanish'
        }
    ) 
    {
        this.name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
};

const cursoGratisDeProgramacionBasica = new Course(
    {
        name: 'Curso Gratis de Programación Básica',
        classes: [],
        isFree: true
    }
);

const cursoDefinitivoDeHTMLyCSS = new Course(
    {
        name: 'Curso Definitivo de HTML y CSS',
        classes: []
    }
);

const cursoPracticoDeHTMLYCSS = new Course(
    {
        name: 'Curso Práctico de HTML y CSS',
        classes: [],
        lang: 'English'
    }
);

const juan = new FreeStudent(
    {
        name: 'JuanDC',
        usarname: 'juandc',
        email: 'juandc@juanito.com',
        twitter: 'fjuandc',
    }
);

const miguelito = new BasicStudent(
    {
        name: 'Miguel', 
        email: 'miguelito@platzi.com',
    }
);