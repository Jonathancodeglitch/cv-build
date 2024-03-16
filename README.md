# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Marine blue: hsl(213, 96%, 18%)
- Purplish blue: hsl(243, 100%, 62%)
- Pastel blue: hsl(228, 100%, 84%)
- Light blue: hsl(206, 94%, 87%)
- Strawberry red: hsl(354, 84%, 57%)

### Neutral

- Cool gray: hsl(231, 11%, 63%)
- Light gray: hsl(229, 24%, 87%)
- Magnolia: hsl(217, 100%, 97%)
- Alabaster: hsl(231, 100%, 99%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size (paragraph): 16px

### Font

- Family: [Ubuntu](https://fonts.google.com/specimen/Ubuntu)
- Weights: 400, 500, 700

plan
create a a multi step form that that take details from user in other to create a cv for them

create a user interface that has

1. a sidebar that tell the user the current step of the form
2. the form should have a previous and next button to go forward and backward
3. a section for the user to add input (phone number , email , name )
4. a section for th user to input educational background (school name, course study and the date of study and exit) it should have a delete button for individual list
5. a section for the user to input practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company) it should have a delete button for individual list
6. a section to show the user his data entered

// personal section form
// when the user sumbmit their data
// get user inputs
// validate user input to make sure its good
// if its good save details for summary section use
// else display error for respective form

// education section form
// when user clicks on the add education button a modal form pops up
// when the user enter details and submit
// get user detail
// validate the detail are valid
// if the details are valid display the details in the education section
// send details to the summary section
// else display the appropriate error message (turn on error message when the user start typing)
// delete details from section
//edit current details
