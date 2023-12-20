const orderProductService = require('../services/order-product.service');

exports.track = async (req, res, next) => {
    try {
        const { orderId } = req.query;
        const orders = orderId ? await orderProductService.findOrderById(orderId) : null;

        res.render('tracking', {
            session: req.ression,
            userEmail: (req.session.buyer || req.session.seller).email || undefined,
            orderedProducts: orders,
            orderId,
        });
    } catch (err) {
        next(err);
    }
};
