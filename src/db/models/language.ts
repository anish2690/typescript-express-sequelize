import { Model, STRING, DataTypes } from "sequelize";
import sequelize from "./_index";

export class Language extends Model {}

export default class LanguageModel {
  public id!: string;
  public label!: string;
  public name!: string;

  public createdAt!: Date;
  public updatedAt!: Date;
}

Language.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    label: STRING(255),
    name: STRING(50),
  },
  { sequelize, modelName: "languages", paranoid: true, underscored: true }
);
