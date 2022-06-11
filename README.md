# MOAT
A custom rental property management solution, which allows a property manager to create a platform for their tenants to communicate upwards. A landlord is able to establish their buildings and provide tenants with access to just the building or property they are a part of. The tenant is able to create an account to begin posting maintenance issues, ratings, and communicate with the landlord.

## Heroku Deployment: 
https://protected-savannah-11948.herokuapp.com/

## Product Pitch:
https://youtu.be/4AfRl6Cwjr4

## Description:

* This program is designed to perform CRUD (Create, Read, Update, Delete) operations from a relational database on a front-end Rental Property Management Website.
* Backend: The back-end of this project was completed using Node.js, express server, mysql database, npm Sequelize and tested in a backend environment (Insomnia).
* Frontend: This front-end of this project was completed using npm handlebars, css, rendered with front-end javascript fetch requests.

## Built By:
* JavaScript
* Node.js
* express.js
* npm (mysql2)
* npm (sequelize)
* npm (dotenv)
* npm (express-handlebars)
* npm (express-session)
* npm (uniqid)

## Built-Logic:
1. Write out DB Models
2. Relations of DB models (Associations) drawn in an ER Diagram.
3. Work on Landlord and Tenant routes (login/logout) on backend && add sessions.
4. Work on Property, Unit, Issue and Comment routes on backend
5. Once routes on backend are tested (insomnia), go to frontend JS files (public/javascript) and connect end points from backend by rendering the get requests.
6. Inject data from backend to display on page (handlebars.js).
7. Then get to styling (stylesheets).

## Models && Associations Diagram (ER Diagram): 
-This is a middleman diagram to help us to convert our business idea into a database schema(sequelize api routes)
![image](https://user-images.githubusercontent.com/95199209/170776018-07866f16-d286-4a30-854d-7c272f76ea02.png)


## How to Install:
* Open Gitbash/terminal, navigate towards your project location from your root by using "cd ./ project location"
* Choose a clone option from the "MOAT" repository (either HTTPS or SSH should work)
* In Gitbash, type "git clone HTTPS or SSH"
* Once the clone is successful, navigate to the root directory of this repo.
* Enter `npm i` into the terminal to install all dependencies linked in the `package.json` file.

## How to initialize the database:
1. In your command window/gitbash shell, enter `mysql -u root -p` and then type your password of your sql account.
![image](https://user-images.githubusercontent.com/95199209/169615610-46de210e-2e5b-4b8b-8c59-6ee869850ec2.png)

2. type in `source db/schema.sql` to feed the relational tables into the database.
![image](https://user-images.githubusercontent.com/95199209/169615691-104af2c3-036e-46bc-9c4e-aca7b25d122d.png)

3. Create a `.env` file in your root directory, as the seeding the database requires connection to your database

4. (optional) In terminal, enter `npm run seed` to feed the database with test seeds.

## How to Use:
1. Cloud: Open the deployed heroku link, the project is hosted on the cloud and ready to be used!
![image](https://user-images.githubusercontent.com/95199209/171678843-e17833c8-7ec3-4b9e-8196-1807fb501911.png)

2. Local Machine: type `node server` in your gitbash shell and navigate to `http://localhost:3001/` in your browser window.


---

### ©️2022 Taimur Hasan, Kevin (Haoyu) Fang, Mikel Balazic, Tyler Flynn, Matthew Williams 
