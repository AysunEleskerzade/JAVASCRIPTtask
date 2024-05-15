let persons = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },
    {
        name: "Madeline",
        age: 80,
        gender: "female"
    },
    {
        name: "Chery",
        age: 22,
        gender: "female"
    },
    {
        name: "Sam",
        age: 30,
        gender: "male"
    },
    {
        name: "Suzy",
        age: 4,
        gender: "female"
    }  
]
   let ageFunc = function (obj) {
    if (obj.age > 18){
        return '${obj.name{} Kinoya gede biler'
    } else{
        return '${obj.name} Kinoya gede bilmez'
    }
    }
    persons.forEach(obj => {
        console.log(ageFunc(obj));
    })
