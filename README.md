Movie-Hub: 
==========
An application used to view Trending Movies & TV Series as well as filtering data based on genres.

Built With:
-----------
    - React
    - JavaScript
    - CSS
    - Material-UI React

Movie-Hub Screen Shots:
=======================
![Alt text](/public/Movie-Hub-Home.png?raw=true "Optional Title")

![Alt text](/public/Movie-Hub-Details.png?raw=true "Optional Title")

Installation & Setup instructions:
==================================
To clone down this repository. You will need node and npm installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

Reflection:
===========

I'm a fairly new Developer and I needed more practice working with API's and how to display the data. In my coding bootcamp we mainly focused on class components, in this project I focused solely on functional components and using React hooks in order to use state. 

I was challenged plenty with figuring out the API documentation. I used themoviedb for my API, the confusion came from my part simply because I was super nervous about working with API's, but themoviedb had really good documentation and so I was able to figure out what links I needed in order to have access to specific data. 

A User can view:

    - The Trending page, which displays the trending TV Series and Movies Posters.

        - A User can see each Poster rating, if the rating is greater than 6.5 the rating chip will be in blue. Ratings less than 6, the chip will be in pink.

        - A User is able to click on a Poster and view more details about that Movie/TV Series, view the Cast and click on a button that routes to a YouTube Trailer of that Movie/TV Series.

    - The Movies Page, displays ONLY movies.

        - A User can see each Poster rating, if the rating is greater than 6.5 the rating chip will be in blue. Ratings less than 6, the chip will be in pink.

        - A User is able to click on a Poster and view more details about that Movie, view the Cast and click on a button that routes to a YouTube Trailer of that Movie.

        - A User is able to filter the Movies based on Genre

    -The TV Series Page, displays ONLY TV Series.

        - A User can see each Poster rating, if the rating is greater than 6.5 the rating chip will be in blue. Ratings less than 6, the chip will be in pink.

        - A User is able to click on a Poster and view more details about that TV Series, view the Cast and click on a button that routes to a YouTube Trailer of that TV Series.

        - A User is able to filter the TV Seriess based on Genre.

    -The Search Page, allows a user:
    
        - To input a Movie or Series Title and choose between a Movie or TV Series Tab. Based on the User's choice a list of found Titles will be displayed.

I will be adding more features to this project such as the reviews for each title and getting the TV Season details by id.