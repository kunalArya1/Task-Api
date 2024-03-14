const asyncHadel = async (func)=>{
    return async (req,res,next)=>{
        try {
           await func(req,res,next);
        } catch (error) {
            error(next);
        }
    }
    return (req,res,next)=>{
        Promise.resolve(func(req,res,next)).catch((err) => err(next) )
    }
}


const customeErr = (err,req,res,next) =>{
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({
        message : err.message,
        errName : err.name,
    })
}

// Custome ApiRespone 

class ApiRes {
    constructor(statusCode ,data, message){
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}

// ApiError

class ApiErr extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.data= null;
        this.message = message 


        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this,constructor)
        }
    }
}