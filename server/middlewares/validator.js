const { body, validationResult } = require('express-validator');

const registerParticularRules=[
    body('name', 'Name is required!').notEmpty(),
    body('email', 'enter a valid email').isEmail(),
    body('phone', 'Phone number is required!').notEmpty(),
    body('birth', 'Birth date is required!').notEmpty(),
    body('passport', 'Passport number is required!').isLength({min:7}),
    body('password', 'password must be at least 6 characters').isLength({min:6}),
]
const loginRules=[
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password is required').notEmpty()
]
const registerProfessionalRules=[
    body('name', 'Name is required!').notEmpty(),
    body('email', 'enter a valid email').isEmail(),
    body('phone', 'Phone number is required!').notEmpty(),
    body('birth', 'Birth date is required!').notEmpty(),
    body('password', 'password must be at least 6 characters').isLength({min:6}),
]
const validator=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}

module.exports={registerParticularRules, registerProfessionalRules, validator, loginRules}