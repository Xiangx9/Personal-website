const My = require("../model/my.model");

class MyService {
  async createGoods(goods) {
    const res = await My.create(goods);
    return res.dataValues;
  }

  async updateGoods(id, goods) {
    const res = await My.update(goods, { where: { id } });

    return res[0] > 0 ? true : false;
  }

  async findGoods(pageNum, pageSize) {
    // // 1. 获取总数
    // const count = await Goods.count()
    // // console.log(count)
    // // 2. 获取分页的具体数据
    // const offset = (pageNum - 1) * pageSize
    // const rows = await Goods.findAll({ offset: offset, limit: pageSize * 1 })

    const offset = (pageNum - 1) * pageSize;
    const { count, rows } = await My.findAndCountAll({
      offset: offset,
      limit: pageSize * 1,
    });
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    };
  }
}

module.exports = new MyService();
