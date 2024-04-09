const My = require("../model/my.model");
const User = require('../model/use.model')

class MyService {
  async createGoods(goods) {
    const res = await My.create(goods);
    return res.dataValues;
  }

  async updateGoods(id, goods) {
    const res = await My.update(goods, { where: { id } });

    return res[0] > 0 ? true : false;
  }

  async findGoods(name) {
    const users = await My.findAll({ where: { name } });
    let dataValues = {};
    users.map((item) => {
      dataValues = item.dataValues;
    });
    return {
      dataValues,
    };
  }
  async findUser(pageNum, pageSize) {
    try {
      // // 1. 获取总数
      // const count = await Goods.count()
      // // console.log(count)
      // // 2. 获取分页的具体数据
      // const offset = (pageNum - 1) * pageSize
      // const rows = await Goods.findAll({ offset: offset, limit: pageSize * 1 })
      const offset = (pageNum - 1) * pageSize;
      const { count, rows } = await User.findAndCountAll({
        offset: offset,
        limit: pageSize * 1,
      });
      return {
        pageNum,
        pageSize,
        total: count,
        list: rows,
      };
    } catch (err) {
      console.error(err);
    }
  }
  async updateAdmin(id, user) {
    const res = await User.update(user, { where: { id } });

    return res[0] > 0 ? true : false;
  }
}

module.exports = new MyService();
