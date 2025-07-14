Welcome to Flights Service

28 Project Setup

clone the project on your local

Execute npm install on the same path as of your root directory of teh

downloaded project

Create a env file in the root directory and add the following environment

variable

\*PORT-3000

Inside the 'src/config folder create a new file 'config.json" and then add the following piece of json

````
{

"development": {

"username": <YOUR_DB_LOGIN_NAME>,

"password": <YOUR_DB_PASSWORD>,

"database": "Flights_Search_DB_DEV",

"host": "127.0.0.1",

"dialect": "mysql"

}

}


```
once the you've added your db config as listed above, go to the src folder from your terminal and exicute the "npx sequelize db:create"
````

```

```

## DB Design

--airplane Table
--Flight
--Airport
--city

    - a flight belongs to an airplane but one airplane can be used in multiple flights
    - a city belongs to many airpots but the one airport belongs to a city
    - one airpot belongs to the many fligts but a flights belongs to one airpot
