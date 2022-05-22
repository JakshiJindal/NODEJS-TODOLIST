const Todo = require('../models/todolist');


// get TODOS list using get request
module.exports.getTODO=function(req,res){
    console.log(req.body);
    Todo.find({},function(err,lists){
        if(err){
            console.log('unable to fetch list');
            return;
        }
        return res.render('home',{
            todo_list:lists
        })
    })
}

// add TODO to list using post request
module.exports.addTODO=function(req,res){
    console.log(req.body);
    const date=req.body.date;
    // date=date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 
        Todo.create({
                description:req.body.description,
                category:req.body.category,
                date:date
                  },function(err,lists){
                    if(err){
                        console.log('unable to add list');
                        return;
                    }
                    console.log('***',lists);
                    return res.redirect('/');
                })
}

// delete TODO from list
module.exports.deleteTODO=function(req,res){
    console.log(req.query);
    let ids=req.query.id;
    Todo.deleteMany({'_id':{'$in':ids}},function(err){
        if(err){
            console.log('unable to delete');
            return;
        }
        return res.redirect('/');
    })
}

