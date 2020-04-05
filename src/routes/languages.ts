import { Express } from "express";
import { LanguageController } from "../handlers/_index";

export function routes(app: Express) {
  app.get("/api/languages", LanguageController.LanguageGet.list);
  app.post("/api/languages", LanguageController.LanguagePost.create);
}
