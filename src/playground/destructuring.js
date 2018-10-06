// object destructuring

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
}

console.log(`${person.name} is ${person.age} years old.`)
const { name = 'Anonymous', age } = person
console.log(`${name} is ${age} years old. - destructured`)

console.log(`It is ${person.location.temp} in ${person.location.city}.`)
const { temp: temperature, city } = person.location
console.log(`It is ${temperature} in ${city}. - destructured`)


// array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
console.log(`You are in ${address[1]}, ${address[2]}.`)
// const [street, town, state, zip] = address
const [, town, state = 'New York'] = address
console.log(`You are in ${town}, ${state}. - destructured`)