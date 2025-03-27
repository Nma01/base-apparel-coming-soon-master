# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./images/mobile-view.png)
![](./images/desktop-view.png)


### Links

- Live Site URL: [Add live site URL here](https://base-apparel-nma01.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript


### What I learned

I found the HTML and CSS part easy because I have had a lot of practice on them. 
The JS functionality part was where i struggled a bit.



I am proud of the code snippets, see below:


```js
//  create a function that gets user input
function getUserInput(e) {
  e.preventDefault();

  // get the value and saves it in a variable
  let userInput = email.value;

  //   email validation
  if (userInput == '') {
    errorText.style.display = 'block';
    errorIcon.style.display = 'block';
  } else if (!validEmail(userInput)) {
    errorText.style.display = 'block';
    errorIcon.style.display = 'block';
  } else {
    // push the user input to the empty array
    emailArray.push(userInput);

    // Prints result to the terminal
    console.log(`Valid emails: ${emailArray}`);
  }

  // **  removes the errortext and errorIcon after 2secs
  setTimeout(() => {
    errorText.style.display = 'none';
    errorIcon.style.display = 'none';
    // clears the input field
    email.value = '';
    // resets focus to the input field
    email.focus();
  }, 2000);
}
}
```


### Continued development

- I need to do more practice on Javascript.

### Useful resources

- Google
- ChatGPT

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Nma01)
- Twitter - [@yourusername](https://www.twitter.com/nma_oparah)



## Acknowledgments

- Shout out to my husband and little baby.
- Shout out to Stanley Azi and Oluwasetemi Ojo
