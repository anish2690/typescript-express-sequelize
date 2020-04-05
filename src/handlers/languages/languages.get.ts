import { Request, Response } from "express";
import { LanguagesDao } from "../../dao/_index";
import winston from "winston";

export function list(req: Request, res: Response) {
  return LanguagesDao.findAll()
    .then((languages) => res.status(200).send(languages))
    .catch((error) => {
      winston.error(error);
      return res.status(400).json({ error: "Bad reqest" });
    });
}
