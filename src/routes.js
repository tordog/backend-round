const Router = require('express').Router;

const routes = Router();
let counter = 0;

routes.get('/200', function(req, res) {
    requestCounter('everythings good');
    res.send('OK');
});

routes.get('/noaccess/1', (req, res, next) => {
    requestCounter('requesting access 1');
    // The message we send back to the client is almost the same at the
    // route noaccess2, let's make them the same
    res.status(403).send("You don't have access to this route.");

    // throw new Error("You don't have access to this route.");
    // res.status(200).send(':\\');
});

routes.get('/noaccess/2', (req, res, next) => {
    requestCounter('requesting access 2');
    res.status(403).send("You don't have access to this route.")

    // res.status(200).send(':/')
});

routes.get('/internal', (req, res, next) => {
    requestCounter('1 I should pass my id down the rabbit hole');
    
    try{
        someInternalFunction('')
         res.status(200).send("No time to stop and talk I'm late I'm late I'm late");
    }catch(err){
        console.log(' Error caught')
        res.status(500).send("Deep from within")
    }
});

function requestCounter(message) {
    console.log("Unique id: " + counter, "Message: ", message);
    counter += 1;
}

function someInternalFunction() {


    if (true) {
        console.log('success');
    }else{
        console.log('1 my id should match the one that came before me');
        throw new Error("You do not have access to this route.");
    }
}



module.exports = routes;
