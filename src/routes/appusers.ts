import { Express } from "express";
import { AppUserController } from "../handlers/_index";
import { check } from "express-validator";

export function routes(app: Express) {
  app.get("/api/appUsers", AppUserController.AppUserGet.list);
  app.post(
    "/api/appUsers",
    [
      check("pwd", "Password is required").notEmpty(),
      check("email", "Email is required").notEmpty(),
      check("email", "A valid email is required").isEmail(),
    ],
    AppUserController.AppUserPost.create
  );
  app.post(
    "/api/appUsers/login",
    [
      check("pwd", "Password is required").notEmpty(),
      check("email", "Email is required").notEmpty(),
      check("email", "A valid email is required").isEmail(),
    ],
    AppUserController.AppUserPost.login
  );
}
