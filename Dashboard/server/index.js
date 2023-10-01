//express to  manage server-side code, handling routes, requests, responses, and various other aspects of web development
import express from "express";
//to parse the body of incoming HTTP requests
import bodyParser from "body-parser";
//Object Data Modeling (ODM) library for MongoDB, It provides a higher-level abstraction over the native MongoDB driver
import mongoose from "mongoose";
// to handle Cross-Origin Resource Sharing (CORS) policies. CORS is a security feature implemented by web browsers that restricts web pages from making requests to a different domain than the one that served the web page
import cors from "cors";
// to manage environment variables in your application
import dotenv from "dotenv";
// to enhance the security of your web applications by setting various HTTP headers and applying recommended security practices
import helmet from "helmet";
//It provides middleware that automatically logs information about incoming requests and outgoing responses
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

/* CONFIGURATION*/
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/*MONGOOSE SETUP */

const PORT = process.env.PORT || 9000;
//mongoose connect with few setup parameters
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log("Connect to server successfully"))
  )
  .catch((err) => console.log(`${err} did not connect to server`));
