// src/app.ts
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/userRoutes';
import connectDB from './config/database';


const app = express();

// Connect to the database
connectDB()

// // Enable CORS for all routes
// app.use(cors());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174","http://localhost:5175"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })  
  );

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.use('/', authRoutes);

// // Health check route
// app.get('/', (req, res) => {
//     res.send('Auth service is running');
// });

export default app;