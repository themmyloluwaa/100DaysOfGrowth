// An interface is a template that helps us create a new type of object

const oldBMW = {
  name: "bmw",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
};

printVehicle(oldBMW);

// improving the above code using interface

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicleTwo = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
};

printVehicleTwo(oldBMW);
