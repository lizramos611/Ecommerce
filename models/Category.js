const {Model, DataTypes} = require('sequalize');

const sequalize = require('../config/connection.js');


class Category extends Model{}
//properties for category name and ID
Category.init({
    id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    
        sequalize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

//exporting Categories
module.exports = Category;