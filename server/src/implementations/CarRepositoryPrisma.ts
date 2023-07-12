import { PrismaClient, Car } from '@prisma/client';
import { ICar } from '../interfaces/CarInterface';
import { CarService } from '../interfaces/CarService'
import { CarRepository } from '../interfaces/CarRepository'



const prisma = new PrismaClient();

export class CarRepositoryPrisma implements CarRepository {
  async getAllCars(): Promise<Car[]> {
    const cars = await prisma.car.findMany();
    return cars;
  }

    async createCar(carData: ICar): Promise<Car> {

      const createdCar = await prisma.car.create({
          data: {
          model: carData.model,
          year: carData.year,
          color: carData.color,
          transmission: carData.transmission,
          description: carData.description,
          price: carData.price,
          isFavorite:carData.isFavorite,
          image: carData.image,
          category: carData.category,
          brand: carData.brand,
          }
      });
      return createdCar;
    }
}

