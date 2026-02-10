import { User } from "../../../database/models/user.model.js";



let login = (req, res, next) => {
    res.render('login.ejs',{ session: null})
}
let handleLogin = async (req, res, next) => {

    let user = await User.findOne({email:req.body.email})
    if(!user || !user.password == req.body.password)
        return res.redirect('/login')

    req.session.isLoggedIn = true
    req.session.name = user.name
    req.session.userId = user._id.toString()

    res.redirect('/messages')
}




export {
    login,
    handleLogin
}