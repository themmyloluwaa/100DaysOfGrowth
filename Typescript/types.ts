//  Various types in typescript


const age: number = 21
const firstName: string = "Temiloluwa"
const isMarried: boolean = false
const aNull: null = null
const anUndefined: undefined = undefined

//objects

const now: Date = new Date()

class Dog {

}

const hunde: Dog = new Dog()

const numbers: number[] = [1, 2, 3]
const strings: string[] = ["A", "B", "CC"]
const booleans: boolean[] = [true, true, false]

const distance: { x, y: number } = {
  x: 10,
  y: 30
}

const log: (i: number) => void = (i) => console.log(i)