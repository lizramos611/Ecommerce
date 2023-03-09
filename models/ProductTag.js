const { Model, DataTypes } = require('sequalize');
const sequalize = require('../config/connection');


class ProductTag extends Model {}

ProductTag.init ({

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_id:{
        type: DataTypes.INTEGER
    },
    tag_id:{
        type:  DataTypes.INTEGER
    }{
    sequalize
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modeName: product_tag
})