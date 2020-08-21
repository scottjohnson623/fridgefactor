# Welcome to Fridge Factor <br> Saving the world one fridge at at time

<div align="center">
  <img src="./src/FridgeFactor.png" width="200">
</div>

Team -

- Tech Lead: Scott (https://github.com/scottjohnson623)
- Back-end Expert: Ayumi (https://github.com/Ayumi426)
- Jack-of-All-Trades: Jimmy (https://github.com/jimmytwilson)
- Front-end Craftsman: Vincent (https://github.com/TwenLeMammouth)

## Our awesome features

Access to our Sevice: https://www.heroku.com/fridgefactor

Hello fellow planet loving chefs!

Are you tired of looking in your fridge and seeing random leftover ingredients you have no idea what to do with? Or maybe you're bored of cooking the same things and you want some inspiration?

Fridge Factor is an app made for you!

---

### New User? Don't worry! You can still use our app.

**Here's how:**

When you first visit the homepage you will see a list of top recipes pulled from our extensive database. Search by receipe, search by food type or search by both to filter the list!

{ insert picture of our top page }

<div align="center">
  <img src="insert picture of our top page" width="860">
</div>

But you should really register (pretty please!), to access the <b>full</b> functionality of our app.

**Registering is easy!**

Just click the top register button, choose your username and password, submit and you're good to go!

What cool functions do you have access to now? <br>
Weeeell for starters, the top page should look like this:

{ insert picture of signed in top page }

<div align="center">
  <img src="insert picture of signed in top page" width="860">
</div>

Now you can...

- Save your made recipes
- Star recepies you'd like to save for later (these will show up on the right side bar)
- share your recipes by email

Future Planned Releases:

- Buying ingredients on Amazon
- More SNS sharing options
- Adding comments onto recipes
- Additional filtering of search results
- Displaying nutritional information
- Improving user experience/responsiveness

## Getting Started: How to **"Fridge Factor"** and Save the Planet

### First Steps

- Get a fridge

### Software Version

- node 12.x
- yarn 1.22.x
- psotgres 12.x

### Tested environment

- Mac OSX Catalina
- Heroku(node) + Heroku Postgres

### Install Dependencies

- type `yarn install` to install dependent softwares.

### Set up Database

#### Configure your connection to DB

- create .env file

```
DB_URL=postgres://username:password@localhost:5432/fridge_db
DB_USER=XusernameX
DB_PASSWORD=XpasswordX
DB_HOST=localhost
DB_PORT=5432
API_KEY= please sign up with RakutenAPI to get a key
PORT=9000
SECRET_KEY= choose anything you'd like!
```

**Change XusernameX, XpasswordX, API_KEY and SECRET_KEY**

#### Running default migration file and seeding

1. log in to postgres and create database "**fridge_db**"
2. connect to database "**fridge_db**"
3. run `yarn migrate` to run the default migration file
4. run `yarn seed` to seed the data.

Running the migration file will create 3 tables:

- User
- Starred_Recipes
- Made_Recipes

### Start Saving the Planet!

- type `yarn build` to build frontend packages.
- type `yarn start` to start backend API server.
  API server starts with port 9000 by default
  frontend server start with port 3000 by default.
- access to frontend server! you are on your way to saving the planet!
