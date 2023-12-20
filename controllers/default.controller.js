const productService = require('../services/product.service');

exports.home = async(req, res, next) => {
    try {
        const products= await productService.latestProducts();
        const productas= await productService.mostBoughtProduct();
        res.render('index', {
            title: 'eNiryat: Home',
            session: req.session,
            products: products,
            productas:productas
        });
    } catch (err) {
        next(err);
    }
};
