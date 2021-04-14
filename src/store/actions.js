const actions = {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      const oldInfo = context.state.cartList.find(item => item.iid === payload.iid)
      // 2.+1或者新添加
      if (oldInfo) {
        context.commit('addCounter', oldInfo)
        resolve('当前数量+1')
      } else {
        payload.count = 1
        // payload.checked = true
        context.commit('addTocart', payload)
        // context.state.cartList.push(payload)
        resolve('成功添加新商品')

      }
    })
  }
}

export default actions

