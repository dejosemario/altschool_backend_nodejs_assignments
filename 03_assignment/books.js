
function getBooks(req, res) {
    const {method} = req;
    if(method === "GET"){
        res.statusCode = 200;
        res.end(JSON.stringify({message: "This is GET /books endpoint"}));
    }
    else if(method === "PUT"){
        res.statusCode = 200;
        res.end(JSON.stringify({message: "This is PUT /books endpoint"}));
    }
    else if(method === "DELETE"){
        res.statusCode = 200;
        res.end(JSON.stringify({message: "This is DELETE /books endpoint"}));
    }
    else if(method === "POST"){
        res.statusCode = 200;
        res.end(JSON.stringify({message: "This is POST /books endpoint"}));
    }
    else{
        res.statusCode = 404;
        res.end(JSON.stringify({message: "Endpoint not found"}));
    }
 
    
}

module.exports = getBooks;