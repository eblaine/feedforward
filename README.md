# feedforward
An Ionic application to assist Second Harvest Food Bank in communicating with its clients and volunteers.

# Development

You will need to install the ionic-CLI, as well as possibly Bower and NPM, if you don't have these already. Please contact Ellen Blaine (eblaine@stanford.edu) if this is an issue. 

After you've cloned the project and installed the above, run:
```
cd feedForwardApp
npm install
bower install
ionic serve
```

On my machine, this starts a server and launches the app automatically. 

Note that there are two apps running on this server. The first is an Ionic tabs application for mobile. It's located at a_domain:a_port/ (e.g. 0.0.0.0:8100/)

The second is a web application for Second Harvest employees. It's located at a_domain:a_port/admin.html
