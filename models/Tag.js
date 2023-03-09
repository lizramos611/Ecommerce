const { Model, DataTypes} = require('sequalize');


const sequalize = require('../config/connection.js');

class Tag extends Model{}

//sql for tags
Tag.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tag_name: {
        type: DataTypes.STRING,
        allowNull: true
    } {
    sequalize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag'
}})
//exporting for tags
module.exports = Tag;