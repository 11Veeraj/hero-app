const crypto = require('node:crypto');
const OrderProductModel = require('../models/order-product.model');

exports.createOrderFromCart = async (cartProducts, buyer) => {
    const orderedAt = new Date();
    const orderId = crypto.randomUUID();
    const orderProducts = [];
    for (let cartProduct of cartProducts) {
        const orderProduct = await OrderProductModel.create({
            buyer,
            orderedAt,
            product: cartProduct.product,
            quanity: cartProduct.quanity,
            orderId,
        });
        orderProducts.push(orderProduct);
    }
    return orderProducts;
};

exports.findOrderById = async (orderId) => {
    const orderedProducts = await OrderProductModel.find({ orderId });
    return orderedProducts;
};
