const express = require('express');

const User = require('../Model/User.js');

const router = express.Router();

router.post('/create-user',async (req, res) => {

    const { email, password } = req.body;
    
    try{

        //Se o email ja estiver cadastrado ele caira no if abaixo
        if(await User.findOne({ email })) return res.status(404).send({ error: 'Email ja registrado' });

        if(!email) return res.status(400).send({error: 'Por favor colocar o email'});

        if(!password) return res.status(400).send({ error: 'Por favor colocar o password' })

        const user = await User.create(req.body);

        user.password = undefined;

        user.save();

        res.json(user);

    }catch(error){

        res.status(404).json({

            status: 'error',
            error: error.message

        });
    }
});

module.exports = app => app.use('/user', router);