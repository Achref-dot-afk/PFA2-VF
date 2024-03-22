const nodemailer = require("nodemailer");


module.exports = async function sendMail(data){
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: 'achrefh1bli22@gmail.com', //change to Anpe host email
          pass: 'sjxn mscp cilu fubl',
        },
      });
        const message = {
          from: ` ${data.firstName}  ${data.lastName}  <${data.email}>`, 
          to: "achrefh1bli22@gmail.com", //change to email of the receiver which is anpe email
          subject: data.subject, 
          text: data.text, 
          
        };
      
        await transporter.sendMail(message,(err,info)=>{
          if(err){
              return err;
          }else{
              return info;
              
          }
        });
      
}
