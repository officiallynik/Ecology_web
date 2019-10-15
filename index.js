var express = require('express'),
    app     = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get('/',function(req,res){
    res.render('index.ejs');
})

app.get("/main", function(req,res){
    var source = [];
    for(var i=2; i<=10; i++) source.push("/Main_images/Picture" + i +".JPG");
    res.render("main.ejs",{data:source});
});

app.listen(3000,function(){
    console.log('Server is running');
})