import ApiError from "../utils/apiError.util.js";

const paramsChecker = (requiredParamsList) => {
    return (req, res, next) => {
        const params = { ...req.body, ...req.headers, ...req.params };
        const paramNames = Object.getOwnPropertyNames(params);
        const result = requiredParamsList.every((current) =>
            paramNames.includes(current)
        );
        if (result) {
            next();
        } else {
            res.status(400).json(new ApiError(400, "Params missing!!"));
        }
    };
};

export default paramsChecker;
