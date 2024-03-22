const nodemailer=require('nodemailer')

const sendLoginMail = async (userEmail,subject,htmlTemplate) =>{
    try{
        //create a service gmail
        const transporter=nodemailer.createTransport({
            service:"Gmail",
            auth:{
                user:'achrefh1bli22@gmail.com',//sender ,it will send email to users of app
                pass:'sjxn mscp cilu fubl'//password of the app
            }
        })
        //mail options
        const mailOptions={
            from:process.env.APP_EMAIL_ADRESS,//sender
            to:userEmail,//to whom
            subject:subject,//what to send
            html:htmlTemplate // the template that will be displayed for user
        }
        //send the mail
        const info=await transporter.sendMail(mailOptions);
        console.log("Email sent" + info.response)
    }catch(err){
        console.log(err);
        throw new Error('internal server error (nodemailer)')
    }
}

module.exports={sendLoginMail};