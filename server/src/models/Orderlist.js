module.exports = (sequelize, DataTypes) => {
    const Orderlist = sequelize.define('Orderlist', {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      price: DataTypes.STRING,
      tel:DataTypes.STRING,
      dates: DataTypes.DATE,
    })
    return Orderlist
}