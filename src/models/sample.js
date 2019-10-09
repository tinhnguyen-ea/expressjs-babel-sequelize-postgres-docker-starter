module.exports = (sequelize, DataTypes) => {
  const Sample = sequelize.define('Sample', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Sample.associate = (models) => {};

  return Sample;
};
