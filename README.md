# Task-Manager-API

For run this app you can use node

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install the dependencies.

```bash
npm install 
```

### OR
You can use [ docker-compose](https://docs.docker.com/compose/) to run the environment.

```bash
docker-compose up 
```

## Usage
Set the Example.env to .env and if you aren't use docker replace with your environment variables for db connection (PostgreSQL)

```bash
#start the server
npm run start 

#start the development server
npm run dev

#generate the documentation
npm run doc
```
File Structure.
```
./src/
├── components
│   ├── task
│   │   ├── controller.js
│   │   ├── dal.js
│   │   └── index.js
│   └── user
│       ├── controller.js
│       ├── dal.js
│       └── index.js
├── middleware
│   ├── bodyparser.js
│   ├── index.js
│   └── validateJWT.js
├── services
│   ├── index.js
│   └── prisma.js
└── utils
    ├── errorHandel.js
    ├── generateJWT.js
    └── index.js
```

## Contributing
Ismael Torres Martinez

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)