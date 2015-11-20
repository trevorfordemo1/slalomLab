# Slalom Lab


## Prereq installs Mac Installs

* chrome
* sublime or other editor

## Github

* Create a new account (or use old) github.com
  * You'll need to do email confirmation for new accounts

### 1. Getting the Code

* Go to lab repo and fork: https://github.com/trevcor/slalomLab

* Check if you already have git installed

```
git —version
```

* mac 10.11.1 will prompt you to install git if it’s missing
* if you arent prompted use http://git-scm.com/download/mac
* in terminal cd into your workspace

```
git clone <forked repo>
````

* cd into directory
* set active branch to develop
	
```
git checkout develop
```

## 2. Running the application

### Node

* see if node and npm are installed

```
node -v
npm -v
```

* go to https://nodejs.org/en/ to install.  Download the LTS version.
* CHECK usr/local permissions!  This can be a source of lots of node pain

```
cd /usr
ls -l
```
* if /usr/local is not owned by your user then you can’t install global node packages!
 * I changed ownership of the usr/local directory but I don't think that is the best approach.

```
sudo chown -R $USER /usr/local
```

* You will be better off just configuring npm to install global packages in a different location.
* Create a new directory in your user space

```
mkdir ~/npm
```
* Configure npm to use the new directory

```
npm config set prefix ~/npm
```

* Add the new location to your $PATH

```
export PATH=$PATH:$HOME/npm/bin (this only updates the path for the open shell)!!!!
```


* install into default /usr/local
* make sure that /usr/local/bin is in your $PATH

```
echo $PATH
```
      
* install npm dependencies

```
npm install
```

### Gulp

We use gulp to run our javascript builds and tests.

* install global gulp

```
gulp —version
npm install -g gulp
```

### Bower

Bower helps us manage our client side runtime dependencies.

* install bower globally

```
npm install -g bower
```

* start the node server to run the app

```
node server.js
```

* run unit tests

```
gulp test-unit
```

* run gulp dev watcher

```
gulp dev
```

* save a code change and see tests run

## 3.  Hosting in the cloud

* Create a Pivotal Web Services account: https://console.run.pivotal.io/register























## Sauce Labs

* install protractor globally
          - npm install -g protractor
          - webdriver-manager update


