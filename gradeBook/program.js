var book = require("./lib/grades").book;
var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("First Response!");
});

app.get("/grade", function(req, res){
    var grades = req.query.grades.split(",");

    for( var i = 0; i < grades.length; i += 1){
        book.addGrade( parseInt(grades[i]) );
    }

    var ave = book.getAverage();
    var letter = book.getLetterGrade();

    res.send( "Your average grade is: " + ave + "\nGrade: " + letter );
});

app.listen( 3000 );
console.log( "server ready ..." );