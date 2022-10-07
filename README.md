<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="center">Aura</h2>

  <p align="center">
    Explore the document by the links below:
    <br />
    <a href="https://github.com/spencerjpross/aura"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://intense-sierra-67829.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/spencerjpross/aura/issues">Report Bug</a>
    ·
    <a href="https://github.com/spencerjpross/aura/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Project Screenshot][project-screenshot-1]](https://github.com/spencerjpross/aura)

Help yourself become more aware of your mood and track it. This can help the user with self reflection and uncover trends in their mood over time. Upon making an account at the login scrren, the user will be promted to rate their mood for that day. Once a mood has been chosen, the user will be brought to the mainpage wher they will be given a phrase dependent on the mood they chose to provide helpful advice if necessary. There will also be a textarea where journal entries can be entered daily to have a more in-depth description for the reason the user is in the mood they chose for the day.

### Features

- Advice dependent on chosen mood.
- Data presented over a long period of time.
- Journal entries to be recorded and reviewed daily.

### Challenges

Managing the usage of unfimiliar frameworks and API complicated the developement process. There was a necessary learing curve that needed to happen to be able to use the additional resources we chose to use effectively. Deployment requiered a lot more of managing errors which required very clear communication among the team as there was a lot of individual pieces that needed to be managed. We needed conssitency when naming thins such as proper id's for correct routing and managing pushes on the repo to avoid potential issues down the line.

### Future Iterations

Additional features we have considered for the future:

- Interactive Element
- Links to meditations or breathing exercises
- More calendar functionality
- User settings
- Voice memo

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Installation

- Clone repository to your folder.
- You an use npm install or yarn install to add the dependencies.
- Once you installed all the dependencies needed... 
- In the terminal need to run mysql
    - SOURCE db/schema.sql ( to setup the databases)
    - Exit the terminal
- Make sure to seed the database
    - Run node seeds/seeds.js (to seed the databases)
- Back in the terminal after seeding the databases.
    - Run node server.js or if you have nodemon install nodemon start
 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- USAGE EXAMPLES -->
## Usage

To start go to localhost:3001, which will take you to the starting page..  
Here you will need to sign up if you have already or just login if you already signed up.

[![Project Screenshot][project-screenshot-1]](https://github.com/spencerjpross/aura)

You will be redirected to the homepage (where you can create a daily mood journal for the day or view past journals).

[![Project Screenshot][project-screenshot-2]](https://github.com/spencerjpross/aura)

Create Entry - You first select your mood at the time.

[![Project Screenshot][project-screenshot-3]](https://github.com/spencerjpross/aura)

Then you can write your journal entry for the day.

[![Project Screenshot][project-screenshot-4]](https://github.com/spencerjpross/aura)

Here is view past entries journals.

[![Project Screenshot][project-screenshot-5]](https://github.com/spencerjpross/aura)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- ROADMAP -->
## Roadmap

- [x] Open the aura
    - [x] Presented with a landing page
- [x] Click on the link to the note pages
    - [x] I am presented with a page with existing notes listed in the left-hand column
    - [x] Plus empty fields to enter a new note title
    - [x] Enter the notes text in the right column.
- [x] After entering the New Note title and text
    - [x] A save icon appears at the top
- [x] The new note that was entered and saved appears in the left column amongst the other notes.
- [x] If any note clicked on the left hand column will appear in the right column.
- [x] When clicked on the Write Icon in the navigation at the top of the page.
    - [x] then presented with empty fields to enter a new note title and note text.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- LICENSE -->
## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This was accomplished by those listed below:

- Spencer Ross - Controllers (Routes)
- Davey Douglas - Database & Server Connection
- Nathan Naranjo - Debugger & Troubleshooting
- Aaron Weis - Dashbaord & Billboard.js
- Angel Gutierrez Suarez - Journal Entry & Quiz
- Michael Diaz-Dominguez - Login & Session


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/spencerjpross/aura.svg?style=for-the-badge
[contributors-url]: https://github.com/spencerjpross/aura/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/undefined/aura.svg?style=for-the-badge
[forks-url]: https://github.com/spencerjpross/aura/network/members
[stars-shield]: https://img.shields.io/github/stars/spencerjpross/aura.svg?style=for-the-badge
[stars-url]: https://github.com/spencerjpross/aura/stargazers
[issues-shield]: https://img.shields.io/github/issues/spencerjpross/aura.svg?style=for-the-badge
[issues-url]: https://github.com/spencerjpross/aura/issues
[license-shield]: https://img.shields.io/github/license/spencerjpross/aura.svg?style=for-the-badge
[license-url]: https://github.com/spencerjpross/aura/blob/master/LICENSE.txt
[project-screenshot-1]: ./public/img/screenshot-1.png
[project-screenshot-2]: ./public/img/screenshot-2.png
[project-screenshot-3]: ./public/img/screenshot-3.png
[project-screenshot-4]: ./public/img/screenshot-4.png
[project-screenshot-5]: ./public/img/screenshot-5.png
