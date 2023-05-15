const student1 = {
    name: "Martin",
    surname: "Smith",
    age: 23,
    grades: [1,1,3,4,3],
    getFullName: function () {
        return this.name + " " + this.surname;
    },
    getYearOfBirth: function () {
        return 2023-this.age;
    },
    getGradesAverage: function () {
        return this.grades.reduce((sum,grade)=>sum+grade)/this.grades.length;
    },
};

const student2 = {
    name: "Ann",
    surname: "Jackson",
    age: 22,
    grades: [1,2,1,2,3],
    getFullName: function () {
        return this.name + " " + this.surname;
    },
    getYearOfBirth: function () {
        return 2023-this.age;
    },
    getGradesAverage: function () {
        return this.grades.reduce((sum,grade)=>sum+grade)/this.grades.length;
    }, 
};

const student3 = {
    name: "Jasmin",
    surname: "Popovic",
    age: 24,
    grades: [3,2,1,1,3],
    getFullName: function () {
        return this.name + " " + this.surname;
    },
    getYearOfBirth: function () {
        return 2023-this.age;
    },
    getGradesAverage: function () {
        return this.grades.reduce((sum,grade)=>sum+grade)/this.grades.length;
    },

};

//Funktion die Objekte produziert

function studentCreator (name, surname, age, grades) {

    return {
            name: name,
            surname: surname,
            age: age,
            grades: grades,
            getFullName: function () {
            return this.name + " " + this.surname;
            },
            getYearOfBirth: function () {
                return 2023-this.age;
            },
            getGradesAverage: function () {
                return this.grades.reduce((sum,grade)=>sum+grade)/this.grades.length;
            },
        }
}


const student4 = studentCreator("Wojtek", "Urbanski", 40, [1,2,1,1,2]);
const student5 = studentCreator("Susanne", "Schmidt", 30, [3,2,4,5,2]);

//Constructor Function (Factory function)

function ObjectConstructor (name, surname, age, grades) {

    this.name = name;
    this.surname =  surname;
    this.age = age;
    this.grades = grades;

}

//PROTOTYPE 

ObjectConstructor.prototype.getFullName = function () {
    return this.name + " " + this.surname;
    }

ObjectConstructor.prototype.getYearOfBirth = function () {
    return 2023-this.age;
    }

const student6 = new ObjectConstructor("John","Johnson",28,[2,2,3,2,2]);
const student7 = new ObjectConstructor("Lilia","Kowalski",40,[2,5,3,1,1]);

//console.log( student7.getFullName() );

//ES6 Syntax für Classen

class StudentCreator {

    constructor(name, surname, age, grades) {
        this.name = name;
        this.surname =  surname;
        this.age = age;
        this.grades = grades; 
    }


    getYearOfBirth () {
        return 2023-this.age;
    }

    /* getGradesAverage () {
        return this.grades.reduce((sum,grade)=>sum+grade)/this.grades.length;
    }  */    

}

const student8 = new StudentCreator("Stefanie","Ericsson",25,[2,3,3,3,2]);
const student9 = new StudentCreator("Pemo","Krol",25,[2,1,1,4,2]);

//student8.setFullName();
console.log( student8 );

//Erweiterung von eine Klasse

const jsStudent = {
    name: "Martin",
    surname: "Smith",
    age: 23,
    grades: [1,1,3,4,3],
    javascript: true
}

class JSstudent extends StudentCreator {

    constructor(name, surname, age, grades) {

        super(name, surname, age, grades)

        this.javascript = true

    }

}

const student10 = new JSstudent("Andre","Xyz",28,[2,2,3,1,1]);

console.log( student10 );

