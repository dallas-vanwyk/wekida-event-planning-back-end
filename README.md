# Wekida Event Planning Application - MERN Stack - Back End

#### This repo the back end of the Wekida Event Planning Tool! See the [Front End Repo](https://github.com/dallas-vanwyk/wekida-event-planning-front-end?) for more details.
<img src="path to your game screenshot" alt="Description of Screenshot"/>

<img src="path to your gif/video" style="width:100vw; height:100vh" alt="Text describing your video"/>

## Description
Description of your game. Ex: Connect Four: a two player connection game. First player to get four of the same colored checkers in a row either horizontally, vertically or diagonally wins.

## Table of Contents
* [Technologies Used](#technologiesused)
* [Features](#features)
* [Design](#design)
* [Project Next Steps](#nextsteps)
* [Deployed App](#deployment)
* [About the Author](#author)
* [How To Deploy](#howtodeploy)

## <a name="technologiesused"></a>Technologies Used
* JavaScript
* Mongoose
* Express
* MongoDB
* 
* HTML5
* CSS3


## Features
Users Feature 1
Users Feature 2

## Trello Planning Board
- [Trello project planning](https://trello.com/b/J1Lp3aTZ/unit-3-project-wen-kier-dallas)

## <a name="design"></a>Design
* Descrition of what inspired your design. Ex: Design elements implemented using HTML5 and CSS3. 


## <a name="nextsteps"></a>Project Next Steps
#### List of Future Features
* Allow the user to chose player one or player two.
* Allow users to play against computer.
* Add a timer
* Add a scoreboard. 
* Users can change the theme.

## <a name="deployment"></a>Deployed Link
[Netlify]([https://wonderful-brahmagupta-6a75d3.netlify.com](https://connect4pc.netlify.app/))

* You can view the repository:
[Github.com](https://github.com/Gr8ness21/Connect-4)
* If unable to view please go live locally through VS Code

## <a name="author"></a>About The Authors
<!-- add short 'about' and link to LinkedIn -->
Lead Front-End Developer and Designer: Wen Ow

Lead Back-End Developer: Kier Roman

Lead Scrum Project Manager: Dallas Van Wyk
    
## Works Cited:
*https://stackoverflow.com/questions/24093290/what-does-the-question-mark-mean-in-javascript/24093304
*https://www.w3schools.com/jquery/jquery_ref_events.asp
*Understanding “this” in JQUERY: 
* 	the this object doesn't change. It is the owner of the function. It is, in most cases like this, simply a node and you can reference all of its properties like this.className. (think of it as you would a node or whatnot that you get with document.getElementById). It is just the "owner" of the function. Therefore, you are just passing the this object to jQuery's $(). Conclusion: If you want to use jQuery functions for the current node, use $(this). But if you want to access the objects own properties (e.g. .name, className, .id), use simply this.
- https://stackoverflow.com/questions/8469635/jquery-when-to-use-this-and-when-to-use-this

* A constructor: A constructor in Java is a block of code similar to a method that's called when an instance of an object is created. Here are the key differences between aconstructor and a method: A constructor doesn't have a return type. ... Unlike methods, constructorsare not considered members of a class.
- https://www.w3schools.com/java/java_constructors.asp


## <a name="howtodeploy">How To Deploy

Fork and clone this repository to your local machine.

After moving into the cloned directory, run `npm i` to download the dependencies.

Create a `.env` file in the root of the project:

```bash
touch .env
```

and add your MongoDB URI and a secret JWT string to it. Your MongoDB URI will look something like the first entry, but with your username and password:

```plaintext
MONGODB_URI=mongodb+srv://<username>:<password>@sei.azure.mongodb.net/myApp?retryWrites=true
JWT_SECRET=supersecret
```

Start the app in your terminal with:

``` sh
npm run dev
```
