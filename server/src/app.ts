import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { CarRepositoryPrisma } from '../src/implementations/CarRepositoryPrisma';
import { ICar } from '../src/interfaces/CarInterface';


const app = express()

app.use(express.json())
app.use(cors());
app.use(bodyParser.json())


const carRepository = new CarRepositoryPrisma();


app.get('/cars', async (req, res) => {
  try {
    const cars = await carRepository.getAllCars();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Erro na busca dos carros' });
  }
});


app.post('/cars', async (req, res) => {
  const carData: ICar = req.body;

  try {
    const createdCar = await carRepository.createCar(carData);
    res.json(createdCar);
  } catch (error) {
    res.status(500).json({ error: 'Erro na criação do carro' });
  }
});



app.listen(3005, () => {
    console.log(`Servidor iniciado na porta 3005`);
});
