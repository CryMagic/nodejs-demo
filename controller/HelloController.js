const getHelloView = function(req,res){
    return res.render('hello',{username: 'Trần Quốc Thiện'});
};
exports.getHelloView = getHelloView;