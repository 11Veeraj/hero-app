const { ZodError } = require('zod');
const { EditSellerSchema } = require('./schemas/auth.schema');
const sellerService = require('../services/seller.service');
const { InvalidLoginException, ExistsException } = require('../exceptions');

exports.editSellerProfile = async (req, res, next) => {
    try {
        const {
            address,
            email,
            firstName,
            lastName,
            pinCode,
            codeAd,
            codeIec,
            gstin,
            lutDocument,
        } = await EditSellerSchema.parseAsync(req.body);

        await sellerService.edit({
            email,
            firstName,
            lastName,
            address,
            pinCode,
            codeAd,
            codeIec,
            gstin,
            lutDocument,
        });

        res.redirect(req.query.next || '/auth/profile');
    } catch (err) {
        if (err instanceof ZodError) {
            res.render('profile', {});
        } else if (err instanceof ExistsException) {
            res.render('profile', {});
        }
        next(err);
    }
};

exports.myAllProducts = async (req, res, next) => {
    try {
        res.render('myShop', { session: req.session });
    } catch (err) {
        next(err);
    }
};

exports.addProduct = async (req, res, next) => {
    try {
        res.render('product-list', { session: req.session });
    } catch (err) {
        next(err);
    }
};

exports.myOrders = async (req, res, next) => {
    try {
        res.render('sellerOrders', { session: req.session });
    } catch (err) {
        next(err);
    }
};