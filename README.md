# Welcome to my custom framework!

This is a custom framework on top of Express. I'll briefly explain the features, folder structure, and how to run it.

# Features

The framework is inspired from CodeIgniter3. It has a profiler that similar to CodeIgniter's but less detailed, still, it logs the important data that the developer must know when debugging. The framework's routing is very simple, enabling the developer to only specify the path, class controller, controller method, and the HTTP method. The framework also uses the EJS as its view engine, you can change this in ***index.js*** if you want to use other view engines.

# Folder Structure

```markdown
├── application
│   ├── mvc
│   │   ├── models
│   │   ├── views
│   │   ├── controllers
│   ├── config
│   │   ├── database.js
│   │   ├── routes.js
├── assets
│   ├── img
│   ├── scripts
│   ├── stylesheets
├── sys
│   ├── profiler.js
│   ├── router.js
├── index.js
├── .gitignore
├── node_modules
├── package-lock.json 
└── package.json
```

## The Root Directory

#### The Application Directory

The **application** directory contains the **config** and the **mvc** directories. This is where you're working most of the time.
<br>

#### The Assets Directory

The **assets** directory contains the **img**, **scripts**, and **stylesheets** directories.
<br>

#### The Sys Directory

The  **sys** directory contains system files such as ***profiler.js*** and ***router.js***. You shouldn't be on this directory unless you're adding additional features to the profiler or changing the router's logic.

## The Application Directory

#### The Config Directory

The **config** directory contains **database.js** and **routes.js**. By default the framework uses *MySQL* database, you can specify the database name, host, password, and user in this file. Feel free to edit this file according to your preferred database. The **routes.js** file is where you specify the paths to your website.
<br>

#### The MVC directory

The framework uses the MVC pattern, this directory contains **models** directory, **controllers** directory, and **views** directory. Your models, views, and controllers should be put in these directories.

## The Assets Directory

#### The Img, Scripts, and Stylesheets Directories
You should put your *images* in the **img** directory, the *JavaScript* files in the **scripts** directory, and the *css* files in the **stylesheets** directory.

# Installation
The framework uses a bunch of npm modules. To install, go to command line and enter:
```
npm install
```
This will automatically install the necessary packages.
And there you go! Happy coding!
