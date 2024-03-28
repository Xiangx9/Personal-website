const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const Goods = seq.define(
  "zd_my",
  {
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "姓名",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "姓名",
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "电话",
    },
    my: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "姓名",
    },
    Work: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "姓名",
    },
    Project: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "姓名",
    },
    // goods_num: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   comment: '商品库存',
    // },
  },
  {
    paranoid: true,
  }
);

// Goods.sync({ force: true })

module.exports = Goods;
