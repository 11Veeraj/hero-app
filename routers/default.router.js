const { Router } = require('express');
const defaultController = require('../controllers/default.controller');

const router = Router();

router.get('/', defaultController.home);
router.get('/map', (req, res, next) => res.render('sample', {session: req.session }))
router.get('/tracking', (req, res, next) => {
    try {
        res.render('tracking', { session: req.session  });
    } catch (err) {
        next(err);
    }
})
exports.defaultRouter = router;
