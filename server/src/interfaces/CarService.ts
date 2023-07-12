import { ICar } from './CarInterface'
import { Car } from "@prisma/client";


export interface CarService {
    getAllCars(): Promise<Car[]>;
    createCar(carData: ICar): Promise<ICar>;
  }