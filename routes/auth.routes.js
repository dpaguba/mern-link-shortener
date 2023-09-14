// conn router from express
const { Router } = require('express')
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../models/User')
// created router
const router = Router()

// /api/auth
router.post('/register', [
    check('email', 'Incorrect email').isEmail(),
    check('password', "Min. Password length is 6").isLength({
        min: 6
    })
], async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Invalid data"
            })
        }

        const { email, password } = req.body

        const candidate = await User.findOne({ email: email })

        if (candidate) {
            return res.status(400).json({
                message: `User with email : ${email} is already exist.`
            })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({
            email: email,
            password: hashedPassword
        })

        await user.save()

        res.status(201).json({
            message: "User was created."
        })



    } catch (e) {
        res.status(500).json({
            message: "Something went wrong..."
        })
    }
})

// /api/auth
router.post('/login', async (req, res) => {

})


//export router
module.exports = router