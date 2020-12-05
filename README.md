# Weather-app

EduCrack Backend test

### Features

- Created two tables
- USER - one which contains users information
- TASK - another contains the user tasks

### Prerequisites

```
Git should be installed in your local system
mongodb should be installed
```

### Installing

```
git remote add coworker git://vamshi0108/edu-crack.git
git fetch coworker
git checkout --track coworker/notes
git checkout weather-app
git pull
```

```
npm install all the required modules mentioned in package.json

Install mongodb and run the below command to run the db server locally

D:\Learning\mongodb\bin\mongod.exe --dbpath=D:\Learning\mongodb-data

Now API endpoints can be hit by using postman or chrome
```

### Authentication

```
Authorization : Bearer
All authorization details present in middleware/auth.js
Since this is a written exam, key is displayed publicly in connfig/dev.env
```

## npm Packages Used

```
-bcryptjs
-validator
-express
-jsonwebtoken
-mongoose
-env-cmd
-nodemon
```

## Built With

- [nodeJs](https://nodejs.org/en/)

## Authors

- **Vamshi Nagulapally** - _Initial work_ - [Git](https://github.com/vamshi0108)

###### Copyright 2020 Vamshi Nagulapally
