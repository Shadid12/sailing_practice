module.exports = {
	'new': function(req,res) {
	    res.view()
	},
	
	create: function(req,res,next){
	    User.create(req.params.all(), function userCreated(err, user){
	        if(err){
	            return next(err)
	        }
	        res.json(user)
	    } );
	}
};

