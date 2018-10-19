# back-end-graphql-workshop

## <a name="Prerequisites">Prerequisites</a>

Install MongoDB Community Edition with Homebrew:

```
brew update
brew install mongodb
```
create the “db” directory:
```
mkdir -p /data/db
```
Make sure that the /data/db directory has the right permissions:
```
> sudo chown -R `id -un` /data/db
> # Enter your password
```
Run the Mongo daemon:
```
mongod
```

If you want to see MongoDB graphically install RoboMongo from https://robomongo.org/download


## <a name="Install">Install</a>

To install the dependencies in the local **`node_modules`** folder, run:
```
npm install or npm i
```

By default, **`npm install`** installs all modules listed as dependencies in **`package.json`**.


### Environment variables:

In the proyecto you will see the file:
```
.env_example
```
Create a copy of the example file and rename it:
```
cp .env_example .env
```

### Starting the Application:

The npm start script runs the application. To run the project:

   1. In Terminal, run **`npm start`**.
   2. Open <http://localhost:4000/graphql> to access the GraphQL Terminal.

The page reloads when you make edits.

### Optional:
To run the seeders execute in the command line:
```
npm run seed Database
```