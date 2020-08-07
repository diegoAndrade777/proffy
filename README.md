<img src="web/src/assets/images/nextlevelweek2.png" align="center"></img>
<h1 align="center">Next Level Week II</h1>
<p align="center">Project <strong>Proffy</strong> developed during the Rocketseat Next Level Week II.
  <br/>
  The project consists of teachers offering classes to students, in the most diverse disciplines. The student has information about the teacher's price, contact details and contracts for his services.
</p>

<p align="center">
  <a aria-label="NodeJs version" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="ReactJs version" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
</p>
<h1 align="center">
  <img src="web/src/assets/images/construcao.gif"></img>
  <p align="center"> <strong>Work in progress...</strong> </p>
</h1>


## Instalation
To install the dependencies and to execute the **Backend**, clone the project on your computer an execute:
```bash
# Enter on backend directory
$ cd server

# Install dependencies
$ yarn install

# Run Migrates
$ yarn knex:migrate

# Start server
$ yarn start

# running on port 3333
```

## Backend

<img align="center" src="web/src/assets/images/backend.gif" width="600px"></img>

## Frontend

<img align="center" src="web/src/assets/images/frontend.gif"></img>

To run the React's Frontend use:
```bash
# Enter on frontend directory
$ cd web

# Install dependencies
$ yarn install

# Run
$ yarn start
```
When the process end, automatically will open the page `localhost:3000` on your web browser with de Project Proffy.

## Mobile

To run the Mobile app, use:
```bash
# Don't execute the following line if tou have the Expo (CLI) already intalled! 
yarn global add install expo-cli

# Enter on mobile directory
$ cd mobile

# Install dependencies
$ yarn install

# Run
$ yarn start

# Expo will open, just scan the qrcode on terminal or expo page
```
<img align="center" src="web/src/assets/image/mobile.gif" width="300px"></img>

Check the application deployed at Vercel here:    
https://diego-proffy.vercel.app/

## Licence

[MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/)

Made with ♥ by Diego Andrade :wave: [Get in touch!](https://www.linkedin.com/in/diego-rodrigo-de-andrade-98a0271a0/)
