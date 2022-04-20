import joi from "joi";

 const carValidator = joi.object({
    // model:joi.string().min(2).max(20).required().message({
    //     'string.empty': 'model can not be empty',
    //     'string.min': 'model has to be greater ',
    //
    // }),
     model:joi.string().regex(/^[a-zA-ZА-яёЁіІїЇ]{1,20}$/).required().message({
         'string.pattern.base':'only bukwy'
     }),
    price: joi.number().min(0).max(2000).required(),
    year: joi.number().min(1880).max(new Date().getFullYear()).required()
})
export {
     carValidator
}