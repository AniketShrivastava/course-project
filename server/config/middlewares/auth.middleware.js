const AppError = require("../utils/appError");

const isLoggedIn = function(req,res,next){
    const {token} = req.cookies;
    if(!token){
        return next(new AppError('unauthenticated, please login',401))
    }
    const tokenDetails = jwt.verify(token,process.env.JWT_SECRET)
    if(!tokenDetails){
        return next(new AppError('unauthenticated, please login',401))

    }
    req.user = tokenDetails;

    next();
}

module.exports ={
    isLoggedIn
}