const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');

// home page will show TODO list and form 
router.get('/',homeController.getTODO);

//route to add TODO in list
router.post('/add-TODO',homeController.addTODO);

// route to delete TODO from list
router.get('/delete-TODO',homeController.deleteTODO);

module.exports=router;