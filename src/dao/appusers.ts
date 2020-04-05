import * as uuid from "uuid";
import { AppUser } from "./../db/models/appuser";
import { Language } from "../db/models/language";

export function create(appUser: any): Promise<any> {
  return Language.findOne({
    where: { name: appUser.language },
  }).then((language) => {
    if (language)
      return AppUser.create({
        id: uuid.v1(),
        email: appUser.email,
        pwd: appUser.pwd,
        languageId: language.get("id"),
      });
  });
}

export function findAll(): Promise<any> {
  return AppUser.findAll({ include: [{ all: true }] });
}

export function login(appUser: any): Promise<any> {
  return AppUser.findOne({
    where: {
      email: appUser.email,
      pwd: appUser.pwd,
    },
    include: [Language],
  });
}
