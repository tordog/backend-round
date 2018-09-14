# Backend Round

## To start the server

`yarn start`

## ACs

* Implement contextual logging for the server
    * Every request that goes through this server should have a [unique ID](https://www.npmjs.com/package/uuid4) associated with it.
    * Every log message related to a request should be prefixed with this ID when logged

* The server should have the ability to handle all thrown errors from the server
    * It should translate errors to a human readable form with an appropriate [http status code](https://httpstatuses.com/)
    * All errors should be reuseable across the site
