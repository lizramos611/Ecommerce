const {Model, DataTypes} = require('sequalize');
const sequalize = require('../config/connection');


class Products extends Model {}

Products.init ( {
    id: {
        type: DataTypes.INTEGER,
        autoincremenet: true,
        allowNull: false,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING
    },
    product_price: {
        type: DataTypes.DECIMAL
    },
    product_stock: {
        type: DataTypes.INTEGER
    },
    category_id: {
        type: DataTypes.INTEGER
    }, 
    {
        sequalize,
        timestamps: false,
        freeeTableName: true,
        underscored: true,
        modelName: 'product'
    }
    
});

module.exports = Products;