class Comment {
    constructor (
        {
            content,
            studentName,
            studentRole = 'Estudiante'
        }
    ) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    };

    publicar () {
        // debugger
        let {studentName, studentRole, likes, content} = this;
        console.log(`${studentName} (${studentRole})`);
        console.log(`${likes} likes`);
        console.log(content);
    };
};

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

    publicarComentario (commentContent) {
        let {name} = this;
        const comment = new Comment(
            {
                content: commentContent,
                studentName: name,
            }
        );
        comment.publicar();
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

class TeacherStudent extends Student {
    constructor (prarameters) {
        super(prarameters);
    }

    approvedCourse (newCourse) {
        let {approvedCourse} = this;
        approvedCourse.push(newCourse);
    }

    publicarComentario (commentContent) {
        let {name} = this;
        const comment = new Comment(
            {
                content: commentContent,
                studentName: name,
                studentRole: 'Profesor'
            }
        );
        comment.publicar();
    };
};

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

const freddy = new TeacherStudent(
    {
        name: 'Freddy Vega',
        usarname: 'freddier',
        email: 'freddyvega@freddyvega.com',
        instagram: 'freddiervega'
    }
);