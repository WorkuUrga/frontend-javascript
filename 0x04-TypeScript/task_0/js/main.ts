interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const studentOne: Student= {
    firstName: 'Worku',
    lastName: 'Dinegde',
    age: 25,
    location: 'Addis Ababa',
} 
const studentTwo: Student = {
    firstName: 'Bethel',
    lastName: 'Dinegde',
    age: 15,
    location: 'Addis Ababa'
}
const studentList = [studentOne, studentTwo];

const table = document.createElement('table');
const header = document.createElement('tr');
header.innerHTML = `<th>First Name</th><th>Location</th>`
table.appendChild(header)

studentList.forEach(student => {
    const row = document.createElement('tr')
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`
    table.appendChild(row)
})
document.body.appendChild(table)