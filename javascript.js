/*
const express = require('express')
const app = express()

//app.get('/', (req, res) => res.send('Hello World ! Nagagabourochno javascript'))

app.get("/", function(req,res){
    res.sendFile(__dirname+ "/" +'index.html')
})
app.listen(3008, () => console.log('Example app listening on port 3008!'))
*/


const express = require('express')
const app = express()

//app.get('/', (req, res) => res.send('Hello World ! Nagagabourochno javascript'))
app.use(express.static(__dirname));


app.get("/", function(req,res){
    res.sendFile(__dirname+ "/" +'index.html' )
})
app.get("/liste", function(req,res){
    res.sendFile(__dirname+ "/data.json" )
})
app.listen(3088, () => console.log('Example app listening on port 3088!'))











// $(document).ready(function(){
//     $(function(){
//     $('#list-tab').submit(function(e){
//     e.preventDefault();
//     var formulaire = $(this);
//     var post_url = formulaire.attr('action');
//     var post_data = formulaire.serialize();
//     // On peut ajouter une image de chargement pour faire patienter l'internaute
//     $('#loader3', formulaire).html('<img src=../../images/ajax-loader.gif />Please wait...');
//     //Appel AJAX
//     $.ajax({
//     type: 'POST',
//     url: post_url,
//     data: post_data,
//     success: function(msg) {
//     //Affichage du formulaire avec un effet
//     $(form).fadeOut(800, function(){
//     form.html(msg).fadeIn().delay(2000);
//     });
//     }
//     });
//     });
//     });
//     });
