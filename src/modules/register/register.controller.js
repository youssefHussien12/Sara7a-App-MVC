import { User } from "../../../database/models/user.model.js"



let register = (req, res, next) => {
    res.render('register.ejs',{ session: null})
}
let handleRegister = async (req, res, next) => {
    let isUser = await User.findOne({ email: req.body.email })
    if (isUser) return res.redirect('/register')
        let user = await User.insertMany(req.body)
    res.redirect('/login')
}




export {
    register,
    handleRegister
}