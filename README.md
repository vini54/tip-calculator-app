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

![](https://raw.githubusercontent.com/vini54/tip-calculator-app/main/sources/screenshot_m.png)

- Full-hd desktop screen:

![](https://raw.githubusercontent.com/vini54/tip-calculator-app/main/sources/screenshot_g.png)

- Mobile screen:

![](https://raw.githubusercontent.com/vini54/tip-calculator-app/main/sources/screenshot_p.png)

### Links

- Solution URL: [Front-end Mentor](https://www.frontendmentor.io/solutions/tipcalculator-criado-com-js-e-jquery-_Gxl7Qhb9)
- Live Site URL: [netlify](https://reverent-stonebraker-281086.netlify.app/)

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
