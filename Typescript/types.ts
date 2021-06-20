//  Various types in typescript

// 1 - type annotations
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

// 2- type inference
const likes = 10

// any type

//  note: try to avoid any types as much as possible
const coordinates = JSON.parse('{x:10}')
