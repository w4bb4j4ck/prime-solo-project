![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# e-meal.io

## Description

_Duration: 2 Week Sprint_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it? 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam at massa in faucibus. Etiam volutpat, risus non mollis convallis, velit nisi pulvinar mi, eu faucibus orci nisi eget nibh. Integer a velit pretium, volutpat arcu eleifend, fringilla elit. Cras erat sapien, convallis venenatis tellus vitae, feugiat dictum felis.

Suspendisse euismod volutpat aliquet. Maecenas vulputate mauris in pellentesque facilisis. Phasellus varius malesuada semper. Cras sollicitudin diam mollis maximus aliquam.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
- 

## Installation

* Before installing, create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure.

1. Create a database named `prime-app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
The application starts with six basic recipes and will get bigger and better as you continue adding recipes to your database.

1. Every week a new plan will be generated randomly based on the recipes in your database
2. This plan will be emailed to the user along with the ingredients necessary to cook everything
3. The main page will
4. If you need to add a recipe simply login and go to the recipes tab. The button on the left upper corner adds recipes
5. xxx
6. xxx


## Built With

- React
- Redux
- Sagas
- Nivo API
- node-cron

## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)