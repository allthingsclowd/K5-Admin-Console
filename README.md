# K5-Password-Retrieval-SPA
Quick and Dirty Angular Application to Simplify Windows Password Retrieval Process on Fujitsu K5 IaaS Platform

## environment setup
Step 1 - git clone https://github.com/allthingsclowd/K5-Password-Retrieval-SPA.git .
Step 2 - npm install -g @angular/cli

## create new angular spa
Step 3 - ng new K5-Password-Retrevial

## verify
Step 4 - cd K5-Password-Retrevial
Step 5 - ng serve
Step 6 - open browser and visit - http://localhost:4200/

## add bootstrap to make it pretty
Step 7 - npm install bootstrap@3 jquery --save
Step 8 - edit .angular-cli.json file as follows:

"styles": [
    "styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  "scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]

## generate rough HTML for SPA
Step 9 - create rough HTML/CSS Layout using --> http://www.layoutit.com/build
Step 10 - replace HTML in app.component.html with HTML created above and modify as required

Step 11 - Add rsautl openssl rsa library
$ npm install rsautl

 

