interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
}
interface Directors {
    firstName: string;
    lastName: string;
    location: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    numberOfReports: number;
    [key:string]: any;
}
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
function printTeacher(firstName:string, lastName:string): string {
    return `${firstName.charAt(0)}.${lastName}`
}
const result = printTeacher('John', 'Doe')

interface studentConstructor {
    firstName: string;
    lastName: string;
}
interface  studentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}


class StudentClass implements studentClassInterface {
    firstName: string;
    lastName: string;
    constructor ({firstName, lastName}: studentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName    
        }
        workOnHomework(): string {
            return 'Currently working'
        }
        displayName(): string {
            return this.firstName
        }
}
const student1 = new StudentClass({firstName: 'Alice', lastName: 'Johnson'})
console.log(student1.displayName())
console.log(student1.workOnHomework())