/**
 * Created by swa158 on 26/07/17.
 */

const http = require("http"), URL = require('url').URL;

http.createServer(function(request, response){

    const parameters = new URL(request.url, 'http://localhost').searchParams.toString();
    // write the response

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

//Send the response body as "Hello  World"

    response.end('Here is your data: ' + parameters);
}).listen( 8081);
