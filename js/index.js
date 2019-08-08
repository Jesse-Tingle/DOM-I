const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Update navbar
let navItems = document.querySelectorAll('header nav a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

//Change navbar text color to green
let allLinks = document.querySelectorAll('a');
allLinks.forEach((element, i) => {
  element.textContent = siteContent['nav'][`nav-item-${i + 1}`];
  element.style.color = 'green';
})

//Update h1 - Insearting "\n" to put text on new line
//h1 is now on 3 lines
let cta = document.querySelector('h1');
let header1 = siteContent.cta.h1.substring(0, 3);
let header2 = siteContent.cta.h1.substring(3, 6);
let header3 = siteContent.cta.h1.substring(6, 14);

let newHeader = `${header1} \n ${header2} \n ${header3}`;
cta.textContent = newHeader;
cta.style.whiteSpace = "pre-line"; //whiteSpace prototype allows \n to function in the DOM

//Update button
let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

//Update img src
let ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

//Update h4's for paragraph headings
let h4 = document.querySelectorAll('section div h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];


//Update paragraph content for all paragraphs in main-content section
let pTag = document.querySelectorAll('section div p');
pTag[0].textContent = siteContent['main-content']['features-content'];
pTag[1].textContent = siteContent['main-content']['about-content'];
pTag[2].textContent = siteContent['main-content']['services-content'];
pTag[3].textContent = siteContent['main-content']['product-content'];
pTag[4].textContent = siteContent['main-content']['vision-content'];

//Update img src
let middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Update h4 in contact section
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

//Update Contact section firtst p tag - Insearting "\n" to put text on new line
//First p tag is now on 2 lines
let contactP = document.querySelectorAll('.contact p');

let address1 = siteContent.contact.address.substring(0, 18);
let address2 = siteContent.contact.address.substring(19, 33);

let newAddress = `${address1} \n ${address2}`;
contactP[0].textContent = newAddress;
contactP[0].style.whiteSpace = "pre-line"; //whiteSpace prototype allows \n to function in the DOM

//Displaying Address, Phone, and Email
contactP[0].textContent = newAddress;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;