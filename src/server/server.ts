import express from "express";
import { router } from "./routes/index";
import "dotenv/config";

export const server = express();

server.use(express.json());
server.use(router);






