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
* Create develop branch and set active branch to develop
	
```
git branch develop
git checkout develop
```

* Push your new branch up to GitHub

```
git push origin develop
```

* Setup SSH keys https://help.github.com/articles/generating-ssh-keys/



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

* install global gulp.  first test if installed.

```
gulp —version
npm install -g gulp
```

### Bower

Bower helps us manage our client side runtime dependencies.

* install bower globally

```
bower --version
npm install -g bower
```

* run a bower install

```
cd app
bower install
cd ../
```

* Now we can start the node server to run the app.  You'll need to open another terminal after starting node.

```
node server.js
```

* We can also run unit tests

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
* You'll need to confirm your email address AND phone number.  You can't use the same number twice!  Create a google voice number if you need a new account.

* Create an org name

* Create a space using the UI

* Download and install the cli if you don't already have it installed.

*  Test if the cli installed correctly

```
cf --version
```

* Login to your space

```
cf login -a https://api.run.pivotal.io
```
 
* Enter credentials into cli

* Update your manifest file.  Each app has a manifest which describes hwo the app should run.  Each app needs a unique name so open up the manifest.yml file and add your name to the app name property.

* Push app to your space

```
cf push
```

* Navigate to <your-org-name>.  You can find the link in your Cloud Foundry dashboard.


## 4. Automating Builds

* Login to our Jenkins server.  http://52.6.164.105:8080/

* Credentials in the chat room.

* Create a new job.  Start the job name with your last name and select freestyle project.

* Scroll down to "Source Code Management" and add your repo to the job.

* Add the develop branch

* Test the build and make sure you can resolve the repo.



* Configure test report outputs.






















## BONUS:  Sauce Labs

* install protractor globally

```
npm install -g protractor
webdriver-manager update
```


