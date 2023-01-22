var name = "John"
var age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
runForLoop(["cat", "dog"])



const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}
console.log(filterForFriendly(people))

sum = (a,b) => {
    return a+b
}

mult = (a,b) => {
    return a*b
}


function personAge(fName, lName, age) {
    if (fName === "") {
        fName = "Jane"
    }
    if (lName === "") {
        lName = "Doe"
    }
    if (age === 0 || age === "") {
        age = 100
    }
    return `Hi ${fName} ${lName}, hows does it feel to be ${age}`
}
console.log(personAge("", "", 0))