// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Romeo Has A Gun',
      job: 'musician',
      img: "https://media.vogue.co.uk/photos/5d548672120ed20008b8c9c7/master/pass/original",
      text: "Hi im Romeo, lead singer of Romeo Has A Gun. I live in London and me and my band mates create and record all the music in my parents garage!",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

  // select items that we will need functionality for

  let img = document.getElementById("person-img")
  let image = document.querySelector("src")
  let author = document.getElementById("author")
  let job = document.getElementById("job")
  let info = document.getElementById("info")

// now we need to query the document and target the button classes. well use specific querySelectors.
// prevBtn now equals whatever is in the class of "prev-btn"
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// we need to initialsie an array value that will be our default info displayed. 
// we will then itearte through our array of "reviews" and swap out diferent info ect.

let currentItems = 0;

// now we need to load the initial info by listening for an event. 
// in this case its the DOM actually loading for the first time.

window.addEventListener("DOMContentLoaded", function () {
  // const item = reviews[currentItems];
// here we assign the array to "items". now we can index at any number or because 
// the array has key and value pairs we can . 
// into the object and select any key within and access its value 
  image = reviews[currentItems].img
  author = reviews[currentItems].name
  job = reviews[currentItems].job
  info = reviews[currentItems].text
  console.log(image, author, job, info);

  

// above were swapping out the info from array "reviews" to HTML element
});

