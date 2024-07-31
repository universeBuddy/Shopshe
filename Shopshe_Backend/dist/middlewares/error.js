export const errorMiddleWare = (err, req, res, next) => {
    err.message || (err.message = "Internal Server Error ");
    return res.status(400).json({
        success: false,
        message: err.message,
    });
};
export const TryCatch = (func) => {
    return (req, res, next) => {
        return Promise.resolve(func(req, res, next));
    };
};
