const express = require('express')
const mongoose = require('mongoose');
const User = require('./models/userModel.js')
const app = express();


// app.post('/enviar', (req, res) => {
//     const userData = new User({
//         username: req.body.usuario,
//         password: req.body.password,
//         email: req.body.email
//     });

//     userData.save((err) => {
//         if(err) {
//             res.status(500).send('Erro ao salvar os dados no banco de dados')
//         }else{
//             res.send('Dados salvos com sucesso!');
//         }
//     });
// });
 
mongoose.connect('mongodb+srv://victorsousa:ASEqnUQL4X854Q7i@cluster0.f8znuyf.mongodb.net/')
.then(() => {
    console.log('Conectado com o dba'),
    app.listen(5050, () => {
        console.log('Servidor rodando na porta 5050')
    })
}).catch(() =>
    console.log('error')
)

app.listen(8080);