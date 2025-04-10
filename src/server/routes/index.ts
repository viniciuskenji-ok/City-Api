import { Router } from "express";
import { StatusCodes } from "http-status-codes";

export const router =  Router();


router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/teste", (req, res) => {
    console.log(req.body);

    res.status(StatusCodes.OK).json(req.body);
});

