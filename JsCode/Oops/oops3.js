// set - get revision:

class Person {
    set FirstName(fn) {
        this.first_name = fn
    }
    get FirstName() {
        return this.first_name
    }

    set LastName(ln){
        this.last_name = ln
    }
    get LastName(){
        return this.last_name
    }

    set Age(ag){
        this.age = ag
    }
    get Age(){
        return this.age
    }

    set City(ct){
        this.city = ct
    }
    get City(){
        return this.city
    }
    displayName(){
        console.log(this.first_name + this.last_name)
    }

}

let tanvi = new Person()
console.log(tanvi)

tanvi.first_name = "tanvi"
tanvi.last_name = "thombre"
tanvi.age = 5
tanvi.city = "yeola"

console.log(tanvi)

tanvi.displayName()