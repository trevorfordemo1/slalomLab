# Slalom Lab


## Prereq installs Mac Installs

* chrome
* sublime or other editor

## Github

* Create a new account (or use old) github.com
  * You'll need to do email confirmation for new accounts
* Go to lab repo and fork: https://github.com/trevcor/slalomLab

* Check if you already have git installed

```
git —version
```

   * mac 10.11.1 will prompt you to install git if it’s missing
* cd into your workspace

```
git clone <forked repo>
````

* cd into directory

## Run the app

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
          - if /usr/local is not owned by your user then you can’t install global node packages!
          - I did
               - sudo chown -R $USER /usr/local
          - better to do
               - mkdir ~/npm
               - npm config set prefix ~/npm
               - export PATH=$PATH:$HOME/npm/bin (this only updates the path for the open shell)!!!!
      - install into default /usr/local
      - make sure that /usr/local/bin is in your $PATH
          - echo $PATH
      
      - install npm dependencies
          - npm install
      - install global gulp
          - gulp —version
          - npm install -g gulp
     - install bower globally
          - npm install -g bower
    - install protractor globally
          - npm install -g protractor
          - webdriver-manager update
     - run the app
          - node server.js
     - run grunt dev watcher
          - grunt dev
     - save a code change and see


