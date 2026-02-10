import { Message } from "../../../database/models/message.model.js"



let user = (req, res, next) => {
    res.render('user.ejs',{userId:req.params.id , session: null})
}

let sendMsg = async (req, res, next) => {
    req.body.user = req.params.id
    await Message.insertMany(req.body)
    res.redirect('/user/' + req.params.id)
}
let logout = async (req, res, next) => {
    req.session.destroy(function(err) {
        res.redirect('/login')
    })
}




export {
    user,
    sendMsg,
    logout

}