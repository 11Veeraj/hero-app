const { Router } = require('express');
const sellerController = require('../controllers/seller.controller');
const { ensureNoAuth, ensureAuth, ensureRole } = require('../middlewares/auth.middleware');

const router = Router();

router.post(
    '/seller/editProfile',
    ensureAuth(),
    ensureRole('SELLER'),
    sellerController.editSellerProfile
);

router.get('/seller/myShop', ensureAuth(), ensureRole('SELLER'), sellerController.myAllProducts);

router.get('/product-list', ensureAuth(), ensureRole('SELLER'), sellerController.addProduct);

router.get('/seller/myOrders', ensureAuth(), ensureRole('SELLER'), sellerController.myOrders);

exports.sellerRouter = router;
