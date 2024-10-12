const student = {
name:'Adrian', 
email:'email@ase.ro',
yearsOld: 25, 
meet: function (){
    console.log(this.name); 
}
}

console.log(student.name);
console.log(student['name'])

