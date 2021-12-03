# Task-Manager-API

For run this app you can use node-17

## Requires
Change the "Example.env" to just ".env"
you need a connection to postgres on the ".env" file
like :
```
#DATABASE_URL="postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DB_NAME>?schema=<SCHEMA_TYPE>"
DATABASE_URL="postgresql://postgres:example@db:5432/TaskManager?schema=public"
```

## Install Dependencies

Use the package manager [npm](https://nodejs.org/en/) to install the dependencies.

```bash
npm install 
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

## Docker .
You can use [ docker-compose](https://docs.docker.com/compose/) to run the environment.

```bash
docker-compose up 
```

## File Structure.
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

## Documentation
Check the Documentations on the route "/doc" or for [postman](https://documenter.getpostman.com/view/13491016/UVJhCaFF)

## License
[MIT](https://choosealicense.com/licenses/mit/)