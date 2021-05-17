# SMS Microservice
 
The microservice is deployed on Heroku.

Developed as a part of an assignment for the course CS 474 – Enterprise Software Architecture.

Tech stack used – MongoDB, Express, and Node.js.

###### Note 
Following versions were used in the development of this demo:
- Node.js 14.16.1.
- Node Package Manager (npm) 7.12.1.

## Instructions to setup locally
### Installing modules
- Run the following commands in the terminal/console:
```bash
$ cd SMS_Microservice

$ npm install
```

### Running the servers
- Setup a MongoDB Atlas cluster under free tier plan and create a ```.env``` file in ```SMS_Microservice``` folders under the following schema:
```
MONGODB_URI="<YOUR-CONNECTION-STRING-HERE>"
```
- Add the variable ```TOKEN_SECRET="1234567890"``` in your ```.env``` file.
```bash
$ cd SMS_Microservice

$ node server.js
```
### Testing the APIs
- You can run the basic unit tests written for all the controller functions by entering the following command:
```bash
$ npm run test
```
- You can test the microservice with Postman (both using Heroku URL or locally) by importing the provided collection into your Postman client. They were exported via Postman Collection v2.1 in JSON format. There are separate folders named ```Local``` and ```Heroku``` giving you the freedom to test on both platforms.

## APIs and their behavior
### SMS Microservice
#### Inbound SMS
This API will be exposed to the client.

- Method – POST
- Route – ```http://localhost:3000/inbound/sms```

This will create an inbound SMS.

#### Outbound SMS
This API will be exposed to the client.

- Method – POST
- Route – ```http://localhost:3000/outbound/sms```

This will create an onbound SMS.

#### Default response
This will be the default response for all other methods and configurations

Status Code - 405

Basic unit tests are written for all the existing functions using Mocha and Chai which can be viewed in the ```/test/sms.js``` file.
