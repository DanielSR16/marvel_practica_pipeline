
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
var api = require('marvel-api');

app.use(bodyParser.json());

var marvel = api.createClient({
    publicKey: 'bdf24f7ef92b51aeafb596078ebbec67'
  , privateKey: 'b40ca8bacc3fbd94be7b7a50eaa5de5202256121'
  });



app.get('/:number', (req, res) => {
    var number =  req.params.number
    marvel.characters.findAll(1, number)
    .then(function(resul){
        res.send('name: '+resul.data[0].name)
        
    })
    .fail(console.error)
    .done();
})

app.get('/', (req, res) => {
    res.send('Api funcionando cambio realizado en new rama xd')
})



app.listen(3000, function () {
    console.log('La Aplicación está funcionando en el puerto 3000');
});