import { ICar } from './CarInterface'
import { Car } from "@prisma/client";


export interface CarRepository {
    getAllCars(): Promise<Car[]>;
    createCar(carData: ICar): Promise<Car>;
  }