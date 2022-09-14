const nodemailer=require('nodemailer')

const transport = nodemailer.createTransport({
    service: "Outlook",
    auth:{
        user: "nasr.hnana@outlook.fr",
        pass: "NASRhnanaOUTLOOKfr2022",
    }
})

module.exports.sendConfirmationEmail = (email, activationCode) => {
    transport.sendMail({
        from: "nasr.hnana@outlook.fr",
        to: email,
        subject: "Confirmer votre compte",
        html: `<h1>Email de Confirmation</h1>
        <h2>Bonjour </h2>
        <p>Pour activer votre compte, veuillez cliquer sur ce lien </p>
        <a href=http://localhost:3000/confirm/${activationCode}> Cliquer ici ! </a>
        </div>`,
    })
    .catch((err) => console.log(err));
}
module.exports.sendConfirmationNewEmail = (email, activationCode) => {
    transport.sendMail({
        from: "nasr.hnana@outlook.fr",
        to: email,
        subject: "Confirmer votre nouvelle adresse email",
        html: `<h1>Email de Confirmation de nouvelle adresse email</h1>
        <h2>Bonjour </h2>
        <p>Pour activer votre nouvelle adresse email, veuillez cliquer sur ce lien </p>
        <a href=http://localhost:3000/confirmNewEmail/${activationCode}> Cliquer ici ! </a>
        </div>`,
    })
    .catch((err) => console.log(err));
}