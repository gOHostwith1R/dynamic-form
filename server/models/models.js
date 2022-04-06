const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Project = sequelize.define('project', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING },
  subtitle: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  catName: { type: DataTypes.STRING },
  dogName: { type: DataTypes.STRING },
  notice: { type: DataTypes.STRING },
  textNotRequired: { type: DataTypes.STRING },
  selectNotRequired: { type: DataTypes.STRING },
  item: { type: DataTypes.JSON },
});

module.exports = {
  Project,
};
