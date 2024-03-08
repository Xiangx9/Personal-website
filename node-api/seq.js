const { Sequelize, DataTypes } = require("sequelize");

// 连接数据库
const sequelize = new Sequelize(
  "test", // 数据库名
  "root", // 用户名
  "5655321098", // 密码
  {
    dialect: "mysql", // 数据库使用mysql
    host: "localhost", // 数据库服务器ip
    port: 3306, // 数据库服务器端口
    // define: {
    //   underscored: true,
    // },
  }
);
// 检查是否连接成功
try {
  sequelize.authenticate();
  console.log("ok");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// 定义模型,创建数据表
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    user_name: {
      type: DataTypes.STRING, // 数据类型 DataTypes
      allowNull: false, // 允许/关闭null值 默认为true
      unique: true, // 唯一约束
      defaultValue: "John Doe", // 默认值
      primaryKey: true, //主键值 在整个表中必须是唯一的，并且不能为空。可通过primaryKey 设置为 true
      comment: "用户名, 唯一",
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: "密码",
    },
  },
  {
    // Other model options go here
  }
);
//   我们可以使用 sequelize.models.User 访问我们的模型。
// console.log(User === sequelize.models.User); //true

// User.sync(); // 如果表不存在，则创建该表（如果已经存在，则不执行任何操作）
// User.drop(); //要删除与模型相关的表：

// 创建实例 给数据库添加数据
const createUser = async (UserName) => {
  return await User.create(UserName);
};
// createUser({ user_name: "x", password: "123456" });

//删除实例
const destroyUser = async ({ id, user_name }) => {
  const whereOpt = { id };
  return await User.destroy({ where: whereOpt });
};
//  destroyUser({ id: 1});

//更新实例
const updateUser = async ({ id, user_name, password }) => {
  const whereOpt = { id };
  return await User.update({ user_name, password }, { where: whereOpt });
};
//  updateUser({ id: 1, user_name: "updateUser", password: "23456" });

// 查询单条
const findOneUser = async ({ id }) => {
  const whereOpt = { id };
  const users = await User.findOne({ where: whereOpt });
  console.log(111111, users.dataValues);
};
// findOneUser({ id: 2});

// 查询所有 从数据库读取整个表
const findAllUser = async ({ id}) => {
  const whereOpt = { id };
  const users = await User.findAll({ where: whereOpt });
  users.map((item) => {
    console.log(item.dataValues);
  });
};
findAllUser({ id: 2});