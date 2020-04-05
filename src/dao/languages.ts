import { v4 as uuidv4 } from "uuid";
import { Language } from "./../db/models/language";
import winston from "winston";

export function create(language: any): Promise<any> {
  return Language.create({
    id: uuidv4(),
    label: language.label,
    name: language.name,
  });
}

export function findAll(): Promise<any> {
  return Language.findAll();
}
