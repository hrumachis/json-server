# Application
This project was generated with [JSONServer](https://github.com/typicode/json-server) version 0.14.0.

* Live demo version can be found here [Demo](https://staticdata.herokuapp.com)<br/>

## Running localy
From your app’s root directory run command `npm install -g json-server` ton install json server.<br/>
To run server run command `node server.js`
Navigate to `http://localhost:3000/`.

## Running remotly (Heroku)
Run these commands from your app’s root directory <br/>
Install heroku `npm install -g heroku`<br/>
Login into heroku account `heroku login`<br/>
After successfully login create new heroku application `heroku create newappname`<br/><br />
Deploy application to heroku<br/>
`git init`<br/>
`heroku git:remote -a newappname`<br/>
`git add .`<br/>
`git commit -m "first deploy"`<br/>
`git push heroku master`<br/>
<br/>

Navigate to `https://newappname.herokuapp.com`.