const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/dbaula2',
     {useNewUrlParser: true, useUnifiedTopology: true})

     .then(()=>console.log('Banco de Dados Open'))
     .catch(err=> console.log('Error ao se conectar no Banco', err.message));
     

