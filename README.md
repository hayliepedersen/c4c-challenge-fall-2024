## Prerequisites

If you don't have them already, you'll need to install Node.js/NPM and Git:
- Node.js + NPM - install [here](https://nodejs.org/en/download/package-manager) (we highly recommend using at least Node 18.0.0 + NPM 8.6.0)
   - You can choose to install via the command line under "Package Manager", or download an installer under "Prebuilt Installer"
   - Node and NPM are installed together
- Git - install [here](https://git-scm.com/downloads)

## Starting the Application

1. Clone this repo on to your computer
2. In a terminal, run `npm install` **at the root of this project** to install the required packages
3. Run `npm run dev` **at the root of this project** to start the app locally
4. Visit `http://localhost:3000` to view the website
    
    4a. The backend will be available at `http://localhost:4000`

## Overview
- The website is an admin dashboard for Code4Community's partners. The main aspect of the application is the ability to add a partner to a dashboard of C4C's partners. This is done by clicking an Add Partner button in the center of the screen which then drops down a form that can be used to enter partner information. When an admin clicks submit, a new tile is added to the dashboard showing all the information on the partner they had just entered. An admin can also simply view all partners as well as gain insight into each partner. On top of this, admins can view if a partner is active meaning currently working with C4C or inactive and not currently working with C4C. Displayed also on each partner tile which is shown in a grid format on the page, is the title of the partner and a thumbnail of their company. Each of these tiles can be deleted by clicking a delete button at the bottom of each tile. Any changes made by an admin viewing the website on one tab can be seen by another admin on a different tab as all application routes are handled by a single server.

## Design Decisions
- I went for a pretty simple design for the site as to not take away from the main focus of the purpose of the site itself. I felt that giving the site some color and a more interesting header with the photo of the Boston skyline added to the uniqueness of C4C's mission, wherein giving back to the Boston community is a leading goal. I liked the idea of making the form to add a partner at the center of the start page since being able to add partners to the dashboard was a key goal for the challenge. I also added C4C's current partners to the start page to represent a more realistic feel as to what the dashboard would look like.

## Reflection
- ### What I learned
  - I've learned so much from this tech challenge that I don't even know where to start. I'd say the biggest thing was learning React as well as Javascript. I've never dealt with any sort of backend setups before so through all of this I was able to learn a ton about interacting with the server, making requests, and so on. I also learned a lot more about using VSCode and using Git and GitHub with VSCode. I also went into the tech challenge with minimal experience with HTMl and CSS, though I had some, and I can say my knowledge on these has greatly increased. Overall, I've learned so many valuable skills from taking part in this challenge and I'm very excited to continue my learning journey!!
- ### What I would have done differently with more time
  - I think cleaning up the code and making things more understandable would've been something I'd have like to done with more time. I'm also sure there's plenty of things I could've handled easier in terms of how the frontend and backend interact with each other and just the code overall. I understand some of the code may be confusing and definitely not the best overall but with the experience level I started out with I'm very happy to see a working final product that I can be proud of. Another thing is the design of the website, I don't really have any experience designing websites so I spent quite a lot of time messing around with different things, which again, I know could've definitely been improved upon with more time.
- ### Issues?
  - The biggest issue I faced was that I had no experience with React and very minimal experience with Javascript. Because of this, I felt quite overwhelmed at first but I set out to learn as much as I could within the given time frame. I did this by watching numereous online videos and read up on React's documentation and tutorials on the React website. 
  - Another issue I ran into was that I was on vacation fom June 5th-13th, which was right up to the deadline for the project. I lost a good amount of time due to this so what I've done is devote as much of my free time as I could to complete the tech challenge. In addition, I maximized my time by utilizing free time during travel on the plane and such to fully optimize the final outcome.