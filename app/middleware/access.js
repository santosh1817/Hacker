const adminAccess = function(req, res, next) {    
    if(req.user.role.includes("admin") ){
        next()
    }else{
        res.status("403").send({error: "the page does not exist" })
    }
}
module.exports = {
    adminAccess
}