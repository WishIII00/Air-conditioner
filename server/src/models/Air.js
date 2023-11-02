module.exports = ( sequelize, DataTypes ) => {
    const Air = sequelize.define('Air', {
      air_brand: DataTypes.STRING,
      air_name: DataTypes.STRING,
      air_btu: DataTypes.STRING,
      air_system: DataTypes.STRING,
      air_size: DataTypes.STRING,
      air_price: DataTypes.STRING
    })
    return Air
  }
  