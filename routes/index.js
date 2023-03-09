const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.unsubscribe((req, res) => {
    res.send(<p>Wrong Route!</p>)
});
module.exports = router;