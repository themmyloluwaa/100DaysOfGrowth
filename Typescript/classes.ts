// Modifiers
// 1- public : can be called anywhere, anytime
// 2- private: can only be called by other methods in the class
// 3- can be called by other methods in the class or in child classes

class Vehicle {
  constructor(public color: string) {}
  public drive(): void {
    console.log("hi hi ");
  }
  protected honk(): void {
    console.log("beep beep");
  }
}

const truck = new Vehicle("green");

truck.drive();
// honk cannot be called by objects because it's protected
// truck.honk();

class Car extends Vehicle {
  constructor(public wheel: number, color: string) {
    super(color);
  }
  public drive(): void {
    console.log("vroom");
  }
  private turn(): void {
    console.log("360 turn");
  }
  public honkFromCar(): void {
    this.honk();
  }

  public turnFromCar(): void {
    this.turn();
  }
}

const bmw = new Car(10, "green");

bmw.drive();
// turn cannot be called because it's private
// bmw.turn()
bmw.turnFromCar();
bmw.honkFromCar();
