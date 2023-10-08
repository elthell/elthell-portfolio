const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Project extends Model {}

Project.init(
    {
        // id
        // title
        // img
        // description
        // link
    },
    {

    }
);

module.exports = Project;