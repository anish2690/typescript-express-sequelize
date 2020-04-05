import { Request, Response } from "express";
import { AppUserDao } from "../../dao/_index";
import winston from "winston";
import { validationResult } from "express-validator";

export async function create(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  return await AppUserDao.create(req.body)
    .then((appuser) => res.status(201).send(appuser))
    .catch((error) => {
      winston.error(error.message);
      return res.status(400).json({ error: "Bad reqest" });
    });
}

export function login(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  return AppUserDao.login(req.body);
}
