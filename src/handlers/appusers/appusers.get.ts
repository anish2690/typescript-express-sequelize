import { Request, Response } from "express";
import { AppUserDao } from "../../dao/_index";
import winston from "winston";

export function list(req: Request, res: Response) {
  return AppUserDao.findAll()
    .then((appusers) => res.status(200).send(appusers))
    .catch((error) => {
      winston.error(error);
      return res.status(400).json({ error: "Bad reqest" });
    });
}
