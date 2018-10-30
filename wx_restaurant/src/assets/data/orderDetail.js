export const OrderDetail = {
    hallFoodOrder: {
        seller: {
            name: '望湘园',
            phone: 15726613190,
            discount: 6,
        },
        foods: [{
            name: '小鸡炖蘑菇',
            price: 20,
            count: 1,
        }, {
            name: '孜然羊肉',
            price: 65,
            count: 2,
        }, {
            name: '孜然羊肉',
            price: 65,
            count: 3,
        }],
        order: {
            nunber: 12345678910,
            payType: '在线支付',
            orderTime: '2017-07-17 10:25:30',
            consumeTime: '2017-07-18 10:00:00',
            tableNo: '店内19号',
            remark: '不要辣',
            state: 2,
        },
        unsubscribe: [{
            name: '计划有变取消',
        },
        {
            name: '其他原因',
        },
        {
            name: '信息填写错误，重新下单',
        }],
        ratingContent: {
            content: '',
            sumitType: false,
            score: [
                {
                    name: '口味',
                    score: 0,
                },
                {
                    name: '包装',
                    score: 0,
                },
                {
                    name: '服务',
                    score: 0,
                }],
        },
    },
    deliveryOrder: {
        seller: {
            name: '望湘园',
            description: '蜂鸟专送',
            phone: 15726613190,
            discount: 6,
        },
        foods: [{
            name: '小鸡炖蘑菇',
            price: 20,
            count: 1,
        }, {
            name: '孜然羊肉',
            price: 65,
            count: 2,
        }, {
            name: '孜然羊肉',
            price: 65,
            count: 3,
        }],
        order: {
            nunber: 12345678910,
            payType: '在线支付',
            orderTime: '2017-07-17 10:25:30',
            remark: '不要辣',
            state: 0,
            estimateDeliveryTime: '2017-07-18 13:00:00',
            deliveryTime: '2017-07-18 13:00:00',
        },
        receiverMessage: {
            adress: '西环广场T1-22',
            name: '王女士',
            phone: '13121280703',
            personNum: 3,
        },
        bill: {
            type: '个人',
        },
        unsubscribe: [{
            name: '计划有变取消',
        },
        {
            name: '其他原因',
        },
        {
            name: '信息填写错误，重新下单',
        }],
        ratingContent: {
            content: '',
            sumitType: false,
            score: [
                {
                    name: '口味',
                    score: 0,
                },
                {
                    name: '包装',
                    score: 0,
                },
                {
                    name: '服务',
                    score: 0,
                }],
        },
    },
    reserveOrder: {
        seller: {
            name: '望湘园',
            phone: 15726613190,
            discount: 6,
        },
        foods: [{
            name: '小鸡炖蘑菇',
            price: 20,
            count: 1,
        }, {
            name: '孜然羊肉',
            price: 65,
            count: 2,
        }, {
            name: '孜然羊肉',
            price: 65,
            count: 3,
        }],
        order: {
            nunber: 12345678910,
            payType: '在线支付',
            orderTime: '2017-07-17 10:25:30',
            consumeTime: '2017-07-18 10:00:00',
            state: 3,
            estimateTime: '2017-07-18 13:00:00',
        },
        reserveMessage: {
            name: '王女士',
            phone: '13121280703',
            personNum: 2,
        },
        unsubscribe: [{
            name: '计划有变取消',
        },
        {
            name: '其他原因',
        },
        {
            name: '信息填写错误，重新下单',
        }],
        ratingContent: {
            content: '',
            sumitType: false,
            score: [
                {
                    name: '口味',
                    score: 0,
                },
                {
                    name: '包装',
                    score: 0,
                },
                {
                    name: '服务',
                    score: 0,
                }],
        },
    },
    pickUpOrder: {
        seller: {
            name: '望湘园',
            phone: 15726613190,
            discount: 6,
        },
        foods: [{
            name: '小鸡炖蘑菇',
            price: 20,
            count: 1,
        }, {
            name: '孜然羊肉',
            price: 65,
            count: 2,
        }, {
            name: '孜然羊肉',
            price: 65,
            count: 3
        }],
    order: {
      nunber: 12345678910,
      orderTime: '2017-07-17 10:25:30',
      state: 3,
      pickUpTime: '2017-07-18 13:00:00',
      pickType: '自提',
      remark: '不放油盐',
    },
    reserveMessage: {
      name: '王女士',
      phone: '13121280703',
    },
    bill: {
      type: '个人'
    },
    unsubscribe: [{
      name: '计划有变取消',
    },
    {
      name: '其他原因'
    },
    {
      name: '信息填写错误，重新下单',
    }],
    ratingContent: {
      content: '',
      sumitType: false,
      score: [
        {
          name: '口味',
          score: 0
        },
        {
          name: '包装',
          score: 0
        },
        {
          name: '服务',
          score: 0
        }]
    }
  }
}
