import { PrismaClient, Car } from '@prisma/client';
import { ICar } from '../interfaces/CarInterface';
import { CarService } from '../interfaces/CarService'
import { CarRepository } from '../interfaces/CarRepository'
import { CarRepositoryPrisma } from '../implementations/CarRepositoryPrisma'


const prisma = new PrismaClient();

export class CarServicePrisma implements CarService {
  private carRepository: CarRepositoryPrisma;

  constructor() {
    this.carRepository = new CarRepositoryPrisma();
  }

  async getAllCars(): Promise<Car[]> {
    return this.carRepository.getAllCars();
  }

  async createCar(carData: ICar): Promise<Car> {
    return this.carRepository.createCar(carData);
  }

}
