var pa11y =  require("pa11y");
var htmlReporter =  require("pa11y/reporter/html");
var fs = require("fs");

var url = "http://localhost:3000";
var test = pa11y();

test.run(url, (error, results) => {
    if(error) {
        console.log(error);
    }
    var html = htmlReporter.process(results, url);

    fs.writeFile("report.html", html);
});


