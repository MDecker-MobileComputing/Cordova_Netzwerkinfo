# Cordova-App mit Netzwerk-Info-Plugin

Simple [Cordova](https://cordova.apache.org/) app to demonstrate the usage of 
a plugin (namely [this plugin](https://www.npmjs.com/package/cordova-plugin-network-information) to query the current network connection of the device) to access native feature of the mobile operating system.

<br>

----
## Building the app

After cloning or downloading this repository the following commands have to be executed:

````
    npm install
    cordova prepare
````    

<br>

After this please enter the following command to check whether Android is added as target platform:
````
    cordova platforms
````

<br>

Enter also the following command to check if the plugin for querying the network state is present:
````
    cordova plugins
````

<br>

To build the app (APK file for Android) enter the following command.

````
    cordova build
````

----
## License

See the [LICENSE file](LICENSE.md) for license rights and limitations (BSD 3-Clause License)
for the files in this repository except [jQuery](https://jquery.org/license/).
