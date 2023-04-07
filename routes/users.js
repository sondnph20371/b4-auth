var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller')
var md = require('../middleware/user.middleware');


//viết middleware cho tất cả các router trong file này  
router.use( (req, res, next) => {
    console.log('---------> đi qua middleware <----------');
     next();
});

router.get('/',md.check_login, userCtrl.ListAll);

// route login
router.get('/login' ,userCtrl.Login);
router.post('/login',userCtrl.Login);

router.get('/reg',userCtrl.Reg);
router.post('/reg',userCtrl.Reg);

router.get('/logout', md.check_login, userCtrl.Logout); 






module.exports = router;
