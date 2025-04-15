import express from "express";
import { router } from "./routes/index";
import "dotenv/config";
import "./shared/services/tradutor";

export const server = express();

server.use(express.json());
server.use(router);
