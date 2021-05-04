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
    "features-h4":"Features", //listo
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About", //listo
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg", //listo
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product", //listo
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision", //listo
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
logo.setAttribute('src', siteContent["nav"]["img-src"])
let nav = document.getElementsByTagName('nav');
      //nav.forEach()
let cta = document.getElementsByClassName('cta');
let ctaText = document.getElementsByClassName('cta-text');
//Main Content
let topContent = document.getElementsByClassName('top-content');
let mainContent = document.getElementsByClassName('text-content');
topContent.querySelector('h4').textContent(siteContent['main-content']['features-h4']);
topContent.querySelector('p').textContent(siteContent['main-content']['features-content']);
topContent.querySelector('h4').textContent(siteContent['main-content']['about-h4']);
topContent.querySelector('p').textContent(siteContent['main-content']['about-content']);
let bottomContent = document.getElementsByClassName('bottom-content');
bottomContent.querySelector('h4').textContent(siteContent['main-content']['services-h4']);
bottomContent.querySelector('p').textContent(siteContent['main-content']['services-content']);
bottomContent.querySelector('h4').textContent(siteContent['main-content']['product-h4']);
bottomContent.querySelector('p').textContent(siteContent['main-content']['product-content']);
bottomContent.querySelector('h4').textContent(siteContent['main-content']['vision-h4']);
bottomContent.querySelector('p').textContent(siteContent['main-content']['vision-content']);
let mainContentImg = document.querySelector('#middle-img');
mainContentImg.src = (siteContent['main-content']['middle-img-source']);
let contact = document.querySelector('.contact')