<a name="readme-top"></a>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
        <ol>
          <li>
            <a href="#built-with">Built With</a>
          </li>
          <li>
            <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#Installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
        </ol>
      </a>
    </li>

</details>


# About The Project

<img src='https://i.imgur.com/dBCNSBx.png' alt='home-page'>

The project is a Single Page Application (SPA) with a navigation system. It consists of several sections, including a Header, About, Reviews, Explore (which showcases tour propositions), and a reservation form. The navigation is implemented using react-scroll, allowing smooth scrolling between sections.

The reservation form is built using Formik, a popular form library in React, and incorporates Yup validation for ensuring data integrity and accuracy.

For displaying slides, the project utilizes Splide.js, a lightweight and fast slider library. This allows for a visually appealing presentation of images or content within the application.

The main objective of the project is to provide users with the ability to book trips to various Asian countries. Through the website, users can explore different tour options, read reviews, and make reservations for their desired trips. The combination of seamless navigation, user-friendly form validation, and visually engaging slides enhances the overall user experience and simplifies the booking process.

[Project Link:](https://github.com/FuuKowatty/Landing-page) </br>
[Online](http://pokewiki.bartoszmech.pl/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="built-with"></a>
## Built With

[![React][React.js]][React-url] </br>
[![TypeScript][Typescript.js]][Typescript-url] </br>
[![React-scroll][React-scroll.js]][React-scroll-url]  </br>
[![Splide.js][Splide.js]][Splide-url]  </br>
[![Formik][Formik.js]][Formik-url] </br>
[![Yup][Yup.js]][Yup-url] </br>
[![SCSS][SCSS.js]][SCSS-url] </br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure you have the following software installed:
  <ol>
    <li>Node.js - You can download and install Node.js from the official website: <a target="_blank">https://nodejs.org</a></li>
  </ol>
  



### Installation

Follow these steps to set up the project:

1. Clone the repo
```sh
  git clone https://github.com/FuuKowatty/Landing-page.git
```
2. Navigate to your project directory
```sh
  cd Landing-page
```

3. Install yarn packages
```sh
  npm install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="usage"></a>
## Usage

To run the project locally, use the following command:

```sh
  npm run dev
```
This will start the development server and the project will be accessible at http://localhost:5173 in your web browser.

Review section where users can view cards displaying opinions and ratings. This section provides a platform for users to share their feedback and experiences. Each card likely includes information such as the user's name or username, a rating or star system, and a written review or comment. 


<img src='https://i.imgur.com/l9ZBckM.png' alt='reciew-section'>

The Explore section of the page features a responsive slider that showcases various offers for trips. This section provides users with an engaging visual experience by displaying images, along with corresponding information such as the name, description, and price of each trip. Additionally, a "Book Now" button is included for users to easily make reservations for their desired trip.


<img src='https://i.imgur.com/tjvt5Rx.png' alt='explore-section'>

The Reservation section of the page consists of a form where users can provide their information and select their trip options. The form typically includes fields for the user to enter details such as their name, contact information, and trip preferences, including the departure and return dates.

If a user provides invalid or incorrect data, the form incorporates tooltips and displays specific error messages to help users identify and correct their mistakes. This ensures that users input valid and accurate information before proceeding.

Once the user successfully completes the form with valid data, a modal is displayed, confirming the reservation with a message such as "Reservation Completed!" This modal serves as a visual confirmation and reassurance to the user that their reservation has been successfully processed.

Overall, the Reservation section provides users with a user-friendly and interactive form to book their desired trip. It guides users through the process, validates their inputs, and concludes with a confirmation modal to provide a seamless and satisfying reservation experience.


<div style='display: flex; align-items: start; gap: 10px; justify-content: center;' >
  <img src="https://i.imgur.com/Rl37ql1.png" alt="pokemons-page" />
  <img src="https://i.imgur.com/NyM9QMv.png" alt="pokemons-page" style=""  />
</div>



<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contact

Email: <a href = "mailto: bartoszmech0@gmail.com">bartoszmech0@gmail.com</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Typescript.js]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[React-scroll.js]: https://img.shields.io/badge/react--scroll-4CC9F0?style=for-the-badge&logo=react&logoColor=white
[React-scroll-url]: https://www.npmjs.com/package/react-scroll
[Splide.js]: https://img.shields.io/badge/Splide.js-888888?style=for-the-badge&logo=javascript&logoColor=white
[Splide-url]: https://splidejs.com/
[Formik.js]: https://img.shields.io/badge/Formik-EE4444?style=for-the-badge&logo=react&logoColor=white
[Formik-url]: https://formik.org/
[Yup.js]: https://img.shields.io/badge/Yup-663399?style=for-the-badge
[Yup-url]: https://github.com/jquense/yup
[SCSS.js]: https://img.shields.io/badge/SCSS-CF649A?style=for-the-badge&logo=sass&logoColor=white
[SCSS-url]: https://sass-lang.com/




