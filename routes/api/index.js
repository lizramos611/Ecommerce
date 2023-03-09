const router = require('express').Router();
const { route } = require('..');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

route.use('/categories' , categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);


module.exports = router;