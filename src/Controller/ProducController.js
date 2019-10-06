const express = require('express');
const Product = require('../Model/Product');

const router = express.Router();

function tratarErro(field, message){
    if(!field) throw new Error(message);
}

router.post('/create', async (req, res) => {

    const { name, typeProduct, price, quantity } = req.body;

    try {

        tratarErro(name, 'Por favor passar o nome do produto');
        
        tratarErro(typeProduct, 'Por favor passar o tipo do produto');

        tratarErro(price, 'Por favor passar o preço do produto');

        tratarErro(quantity, 'Por favor passar a quantidade do produto');

    } catch (error) {

        res.status(400).json({
            error: 'Error',
            message: error.message
        })
 
     }

     try {
        
        const product = await Product.create(req.body);

        product.save();

        res.send(product);

     } catch (error) {

        res.status(500).json({
            error: 'Error',
            message: error.message
        })
         
     }

});

router.get('/product-list', async (req, res) => {

    const product = await Product.find();

    res.send(product);

});


router.get('/product-view/:id', async (req, res) => {

    const  id  = req.params.id;

    try {


        if(!id) throw new Error('Produto não encontrado');

        const product = await Product.findById(id); 

        res.send(product);
    

    } catch(error) {

       res.status(400).json({

            error: 'Error',
            message: error.message
       })

    }
   
});

router.put('/update-product/:id', async (req, res) => {
  
    const id = req.params.id;

    try{

        if(!id) throw new Error('Produto não encontrado')

        const product = await Product.findByIdAndUpdate(id, req.body, { new: true }); // parametro new: true retorna o registro ja atualizado

        product.save();

        res.send(product);

    }catch(error){

        res.status(400).json({
            error: 'Error',
            message: error.message
        })
    }
    
});


router.delete('/product/:id', async (req, res) => {
    const id = req.params.id;

    try{

        if(!id) throw new Error('Produto não encontrado');

        const product = await Product.findByIdAndDelete(id);

        res.send(product);

    }catch(error){

       res.status(400).json({
           error: 'Error',
           message: error.message
       })
    }
});



module.exports = app => app.use('/products', router);