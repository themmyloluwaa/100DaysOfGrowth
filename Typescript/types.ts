//  Various types in typescript

// 1 - type annotations
const age: number = 21;
const firstName: string = "Temiloluwa";
const isMarried: boolean = false;
const aNull: null = null;
const anUndefined: undefined = undefined;

//objects

const now: Date = new Date();

class Dog {}

const hunde: Dog = new Dog();

const numbers: number[] = [1, 2, 3];
const strings: string[] = ["A", "B", "CC"];
const booleans: boolean[] = [true, true, false];

const distance: { x; y: number } = {
  x: 10,
  y: 30,
};

const log: (i: number) => void = (i) => console.log(i);

// 2- type inference
const likes = 10;

// any type

//  note: try to avoid any types as much as possible
const coordinates = JSON.parse("{x:10}");

//3- exploring functions further
const add = (a: number, b: number): number => {
  return a + b;
};
// type inference for functions
// try to avoid this
const subtract = (a: number, b: number) => {
  return a - b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}
// anonymuous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// destructuring
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

// exploring objects further
const profile = {
  name: "alex",
  height: 20,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(height: number): void {
    this.height = height;
  },
};
// destructuring objects
const { height }: { height: number } = profile;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
