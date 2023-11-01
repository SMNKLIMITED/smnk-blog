export default function handler(req, res) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port:465,
        host:"smtp.gmail.com",
        auth:{
            user: "",
            pass: ""
        },
        secure: true
    })

    const mailData = {
        from: 'shazaniyu@gmail.com',
        to: `${req.body.email}`,
        subject: `Message From ${req.body.email}`,
        text: req.body.email + " | Sent from: " + req.body.email,
        html: `<div>${req.body.mail}</div><p>Sent from:
        ${req.body.email}</p>`
      }
    console.log(req.body)

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
      res.status(200)
    }

  