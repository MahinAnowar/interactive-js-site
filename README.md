# Programming Hero Assignment-5

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)

This project is an interactive webpage developed as the **fifth milestone assignment** for the **Programming Hero Web Development Course (Level 1)**. The primary focus is on utilizing **JavaScript** for **DOM manipulation** and **event handling**, integrated with HTML structure and styled using **Tailwind CSS** and **DaisyUI**.

**Live Demo:** [https://mahinanowar.github.io/interactive-js-site/](https://mahinanowar.github.io/interactive-js-site/)

## About The Project

This project demonstrates practical JavaScript concepts applied to create a dynamic user interface. Key interactive features include:

*   **Task Management:** Users can mark predefined tasks as "Completed".
*   **Dynamic UI Updates:** Task counts (Total, Completed) are updated in real-time when a task is marked complete.
*   **Activity Log:** Completed tasks are dynamically added to an Activity Log section with a timestamp.
*   **History Clearing:** A button allows clearing the Activity Log.
*   **Dynamic Date Display:** The current date is displayed using JavaScript.
*   **Simple Theme Changer:** A button randomly changes the background color of the page.
*   **Page Navigation:** Links to a separate "Blog" page containing Q&A related to DOM concepts.

## Assignment Context

*   **Course:** Programming Hero Web Development Course (Level 1)
*   **Milestone/Assignment:** 5
*   **Objective:** To practice and implement **JavaScript DOM manipulation**, **event handling**, and basic dynamic web functionalities.
*   **Requirement:** Create an interactive webpage where user actions (like button clicks) trigger changes in the page content and appearance using JavaScript.

## Technologies Used

*   **HTML5:** For structuring the content and initial layout.
*   **CSS3:** Styling provided primarily through utility classes:
    *   **Tailwind CSS:** Utility-first framework for rapid UI development.
    *   **DaisyUI:** Component library for Tailwind CSS.
    *   Custom CSS (for font import).
*   **JavaScript:** For all interactivity:
    *   DOM Selection (e.g., `getElementById`)
    *   DOM Manipulation (`innerText`, `createElement`, `appendChild`, `removeChild`, `classList`, `setAttribute`, `style`)
    *   Event Handling (`onclick` attributes, `addEventListener`)
    *   Date Object (`new Date()`)
    *   Basic Logic & Timers (`setTimeout`, `parseInt`)

## Features

*   Semantic HTML structure.
*   Responsive styling via Tailwind CSS & DaisyUI.
*   **JavaScript-Driven Interactivity:**
    *   Click events triggering task completion logic.
    *   Dynamic updates to text content (task counts, date).
    *   Dynamically adding elements to the DOM (activity log entries).
    *   Dynamically removing elements from the DOM (clearing history).
    *   Modifying element styles/attributes (button state, background color).
    *   User feedback via `alert()`.
    *   Multi-page navigation using JavaScript (`window.location.href`).
    *   A separate blog page showcasing understanding of core DOM concepts.

## How To View

1.  **Live Demo:** Click the link provided above: [Live Demo](https://mahinanowar.github.io/interactive-js-site/)
    *   *Interact with the "Completed" buttons, the "Clear History" button, and the theme change button to see JavaScript in action.*
2.  **Locally:**
    *   Clone the repository:
        ```bash
        git clone https://github.com/MahinAnowar/interactive-js-site.git
        ```
    *   Navigate to the project directory:
        ```bash
        cd interactive-js-site
        ```
    *   Open the `index.html` file in your web browser.

## Author

*   **Mahin Anowar** - [MahinAnowar](https://github.com/MahinAnowar)

---

*This project showcases the application of fundamental JavaScript concepts for creating interactive web experiences, fulfilling the requirements of the course assignment.*
