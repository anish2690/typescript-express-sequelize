import { Model, STRING, DataTypes } from "sequelize";
import sequelize from "./_index";
import { Language } from "./language";

export class AppUser extends Model {}

export default class AppUserModel {
  public id!: string;
  public email!: string;
  public pwd!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

AppUser.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: STRING(50),
    pwd: STRING(50),
  },
  { sequelize, modelName: "app_users", paranoid: true, underscored: true }
);

AppUser.belongsTo(Language, {
  foreignKey: "languageId",
});
