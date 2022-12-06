/* const http = require('http');


http.createServer((req, res) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');

    res.writeHead(200, {'Content-Type': 'application/csv'});


    res.write("id, nombre\n");
    res.write("1, juan\n");
    res.write("2, pedro\n")
    res.write("3, maria\n")
 

    

    res.end();

}).listen(3000);

console.log('Server running at http://localhost:3000/'); */