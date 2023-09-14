// conn router from express
const {Router} = require('express')
const bcrypt = require('bcryptjs');
const User = require('../models/User')
// created router
const router = Router()

// /api/auth
router.post('/register', async (req, res)=>{
    try {
        const {email, password} = req.body

        const candidate = await User.findOne({email : email})

        if(candidate){
            return res.status(400).json({
                message: `User with email : ${email} is already exist.`
            })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({
            email : email,
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
router.post('/login', async (req, res)=>{
    
})


//export router
module.exports = router