```
const { Sequelize, DataTypes } = require("sequelize");
```



**// 连接数据库**

```
const sequelize = new Sequelize(
  "test", // 数据库名
  "root", // 用户名
  "5655321098", // 密码
  {
    dialect: "mysql", // 数据库使用mysql
    host: "localhost", // 数据库服务器ip
    port: 3306, // 数据库服务器端口
    define: {
      underscored: true,
    },
  }
);

// 检查是否连接成功
try {
  sequelize.authenticate();
  console.log("ok");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
```



**// 定义模型,创建数据表**

*数据类型 DataTypes*

- `STRING`：字符串类型。
- `CHAR`：字符型，允许存储固定长度的字符串。
- `TEXT`：文本类型，适用于存储大段文本数据。
- `INTEGER`：整数类型。
- `BIGINT`：大整数类型。
- `FLOAT`：浮点数类型。
- `DOUBLE`：双精度浮点数类型。
- `DECIMAL`：十进制数类型。
- `BOOLEAN`：布尔类型。
- `DATE`：日期类型，不包括时间。
- `TIME`：时间类型，不包括日期。
- `DATEONLY`：仅日期类型。
- `DATETIME`：日期和时间类型。
- `BLOB`：二进制大对象类型，适用于存储二进制数据。
- `UUID`：通用唯一识别码类型。
- `STRING(100)`：指定字符串类型的最大长度为 100 个字符。
- `INTEGER.UNSIGNED`：指定无符号整数类型。
- `DECIMAL(10, 2)`：指定十进制数类型，并设置总共10位数，其中包含2位小数

```
const User = sequelize.define("User",{
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,  // 数据类型 DataTypes
    //   allowNull,            // 允许/关闭null值 默认为true
      defaultValue: "John Doe",// 默认值
      unique: true,            // 唯一约束
    },
  },{
    // Other model options go here
  }
);
//   我们可以使用 sequelize.models.User 访问我们的模型。
console.log(User === sequelize.models.User); //true

// User.sync(); // 如果表不存在，则创建该表（如果已经存在，则不执行任何操作）

// User.drop(); //要删除与模型相关的表：
```

 

**//实现增删改查**

```
// 往数据库添加单条数据
User.create({
    id: 1,
    name: 'test1',
    password: '123456'
})
 
// // 往数据库添加数据多条数据   遍历
// const addData = [{
//         id: 5,
//         name: 'yang5',
//         password: '123456'
//     },
//     {
//         id: 6,
//         name: 'yang6',
//         password: '123456'
//     }
// ]
 
// for (let i = 0; i < addData.length; i++) {
//     User.create({
//         id: addData[i].id,
//         name: addData[i].name,
//         password: addData[i].password
//     })
// }
 
// 修改往数据库数据(通过id去修改name或者password)
// User.update({
//     'name': 'test2'
// }, {
//     'where': { 'id': 1 }
// })
 
// 删除数据库中某条数据
// User.destroy({
//     'where': {
//         'id': 1
//     }
// })
 
// 查询所有
User.findAll().then((res) => {
    console.log(res)
})
 
// 查询单条
User.findOne({
    'where': {
        'id': 1
    }
}).then(res => {
    console.log(res)
})
```



