# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

- My default screen:

![](./screenshot.jpg)

- Full-hd desktop screen:

![](./screenshot.jpg)

- Mobile screen:

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- Flexbox
- CSS Grid
- Jquery

### What I learned


- Jquery selectors
```js
   let price = Number($('#price').val())
   let people = Number($('#people').val())
   let tipAmount = ( (price*tip) / people )
   let total = (price + price*tip) / people

   $('#tipAmount').text('$'+tipAmount.toFixed(2))
   $('#total').text('$'+total.toFixed(2))

   $('#reset').css({"color": "var(--color2)", "opacity": "100%"})
}
```

### Continued development

- Custom buttom

### Useful resources

- [Jquery w3school](https://www.w3schools.com/jquery/default.asp) - 

## Author

- Linkedin - [Vinícius Oliveira](https://www.linkedin.com/in/vin%C3%ADcius-oliveira-b3480a218/)
- Frontend Mentor - [@vini54](https://www.frontendmentor.io/profile/https://github.com/vini54)
- Github - [@vini54](https://github.com/vini54)