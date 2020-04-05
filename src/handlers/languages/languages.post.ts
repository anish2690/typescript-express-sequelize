import { Request, Response } from "express";
import { LanguagesDao } from "../../dao/_index";
import winston from "winston";

export async function create(req: Request, res: Response) {
  return await LanguagesDao.create(req.body)
    .then((language) => res.status(201).send(language))
    .catch((error) => {
      winston.error(error);
      return res.status(400).json({ error: "Bad reqest" });
    });
}
