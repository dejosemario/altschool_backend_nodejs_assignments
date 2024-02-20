 function getAuthors(req, res){
    const {method} = req;
    if(method === "GET"){
        res.statusCode = 200;
        res.end(JSON.stringify({message: "This is GET /authors endpoint"}));
    }
    else if(method === "PUT"){
        res.statusCode = 200;
        res.end(JSON.stringify({message: "This is PUT /authors endpoint"}));
    }
    else if(method === "DELETE"){
        res.statusCode = 200;
        res.end(JSON.stringify({message: "This is DELETE /authors endpoint"}));
    }
    else if(method === "POST"){
        res.statusCode = 200;
        res.end(JSON.stringify({message: "This is POST /authors endpoint"}));
    }
    else{
        res.statusCode = 404;
        res.end(JSON.stringify({message: "Endpoint not found"}));
    }
 }