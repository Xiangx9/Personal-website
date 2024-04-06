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
      comment: "个人介绍",
    },
    Work: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "工作经历",
    },
    Project: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "项目经历",
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
