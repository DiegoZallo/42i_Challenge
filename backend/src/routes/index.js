const { Router } = require('express');
const router = Router();

const twoNumberSum = require('./twoNumberSum');
const nonConstChg = require('./nonConstChg');

router.post('/twoNumberSum',twoNumberSum)
router.post('/nonConstChg',nonConstChg)

twoNumberSum

module.exports = router;