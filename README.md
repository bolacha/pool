# Robin Technical Challenge

All the API and Documentation can be found at this Website :

https://ulcas-pool.herokuapp.com/docs/

The only APIs that do not need authentication are : 

* /sessions
* /user

There is also an [PAW](https://paw.cloud/) document with the whole API at : 

https://ulcas-pool.herokuapp.com/poolrobin.paw


## Requirements to RUN

NodeJS - 8.11.3

PostgreSQL 

## Commands to run the application

Before anything , you will need to install all the packages : 

` npm install `

To run the project you will need to set the ENVIROMENT VARIABLES at the .env file in the root folder.

After that you will need to execute : 

` node ace migration:run `

This command will run all the migrations of the database.
And to start the application you will only need to execute 

` npm start `

## TODO

 * [x] create a new poll (with choices)
 * [x] add choices to an existing poll
 * [x] close a poll (disallow further responses)
 * [x] respond to a poll
 * [x] view all responses on a poll

## Deliverables

 * [x] your app's source code, under version control
 * [x] a link to your app, deployed (psst... Heroku has a free option!)
 * [x] a short write-up to a frontend engineer on how they could interact with your backend
 * [x] a short write-up of any assumptions you made (if the requirements were unclear)

## Assumptions

* The USER will need to be logged in for all the API . This will make the API more secure and votes will not be duplicated and Pools will not be close by accident
* The OPTIONS for the pools are created based on a list of options gave at the creation of the Pool , or after during the Option creating. This will make the Pools for "open" and anyone can use for theyre needs. 
* For the Frontend Engineer Deliverable , I made an Swagger documentation with the APIs that were created.

