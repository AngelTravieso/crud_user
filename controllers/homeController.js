const User = require('../models/User');


const leerUsuarios = async (req, res) => {

    try {

        const usuarios = await User.find().lean();

        res.render('home', { usuarios });

    } catch(error) {
        console.log(error);
        res.send('Ha ocurrido un error...');
    }

};


const agregarUsuario = async (req, res) => {

    const { user } = req.body;

    try {

        const usuario = new User({
            userName: user
        });

        await usuario.save();
        res.redirect('/');

    } catch(error) {
        console.log(error);
        res.send('Ha ocurrido un error...');
    }

};


module.exports = {
    leerUsuarios,
    agregarUsuario,
}