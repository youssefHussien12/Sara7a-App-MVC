import QRCode from 'qrcode'
import { Message } from '../../../database/models/message.model.js';



let messages = async (req, res, next) => {
   let url = `${req.protocol}://${req.get('host')}/user/${req.session.userId}`
    let qrCodeUrl;
    // With promises
  await  QRCode.toDataURL(url)
        .then(url => {
            qrCodeUrl = url
        })
        .catch(err => {
            console.error(err)
        })
        

      let messages =   await Message.find({user:req.session.userId})

    if (req.session.isLoggedIn) {
        res.render('messages.ejs', { qrCodeUrl, url , session: req.session , messages })
    } else {
        res.redirect('/login')
    }
}




export {
    messages
}