//import { Notify } from "./Notify.js";
//import { User } from "./User.js";
//import { Auth } from "./Auth.js";

//import { render } from "mustache";

//const Mustache = require("mustache");

const App = {
  // properties
  name: "Portfolio",
  version: "1.0.0",
  author: "Jess Brown",
  rootEl: document.querySelector("#app"),
  routes: {},

  // methods

  init: () => {
    //Notify.init();
    //console.log("init");
    App.router();
    App.rootEl.classList.add("hidden");
    setTimeout(() => {
      App.rootEl.classList.remove("hidden");
    }, 800);
    // listen for hash change and run App.router
    window.addEventListener("hashchange", App.router);
    /*Auth.check(() => {
      

    });*/
  },

  addRoute: (path, pageController) => {
    // adding an entry to App.routes
    App.routes[path] = {
      controller: pageController,
    };
  },

  router: () => {
    //console.log("router");
    // get the current hash location
    const path = window.location.hash || "#";
    // find route for this path in App.routes
    const route = App.routes[path];
    // if routes exists for this path
    if (route) {
      // run the route.contorller
      //console.log("exists");
      route.controller();
    } else {
      // load 404 page
      //console.log("doesn't exist");
      App.loadPage("404 page/file not found", "template-page-404", {});
    }
  },

  loadPage: (title, templateId, data, callback) => {
    // set document title
    document.title = title;
    // grab the template and store in a variable
    let template = document.querySelector(`#${templateId}`).innerHTML;
    //console.log(template);
    let output = Mustache.render(template, data);
    // insert the output HTML into the rootEl
    //console.log("output is", output);
    //App.rootEl.innerHTML = output;

    // fade out app div
    // App.rootEl.classList.add("hidden");
    // load in new HTML and fade in
    // setTimeout(() => {
    //console.log("timeout");
    App.rootEl.innerHTML = output;
    // App.rootEl.classList.remove("hidden");
    App.loadNav();
    App.refreshNav();
    App.loadFooter();
    App.loadContact();
    // run callback
    if (typeof callback === "function") {
      callback();
    }
    // }, 300);
  },

  loadNav: () => {
    // get main nav div
    let mainNav = document.querySelector("#main-nav");
    mainNav.setAttribute("data-aos", "fade-down");
    let logo = document.querySelector("#logo");
    const logoBtn = document.createElement("a");
    logoBtn.href = "#";
    logoBtn.classList.add("nav-logo", "subtle-shadow");
    logo.appendChild(logoBtn);
    const logoImg = document.createElement("img");
    logoImg.src = "/images/logo.svg";
    logoBtn.appendChild(logoImg);
    const homeBtn = document.createElement("a");
    homeBtn.classList.add("nav-home");
    homeBtn.href = "#";
    homeBtn.innerText = "Home";
    mainNav.appendChild(homeBtn);
    const workBtn = document.createElement("a");
    workBtn.classList.add("nav-work");
    workBtn.href = "#work";
    workBtn.innerText = "Work";
    mainNav.appendChild(workBtn);
    const aboutBtn = document.createElement("a");
    aboutBtn.classList.add("nav-about");
    aboutBtn.href = "#about";
    aboutBtn.innerText = "About";
    mainNav.appendChild(aboutBtn);
    const contactBtn = document.createElement("a");
    contactBtn.classList.add("nav-contact");
    contactBtn.href = "#contact";
    contactBtn.innerText = "Contact";
    mainNav.appendChild(contactBtn);

    // const socialsDiv = document.createElement("div");
    // socialsDiv.classList.add("socials");
    // App.rootEl.appendChild(socialsDiv);

    // const linkedinBtn = document.createElement("a");
    // linkedinBtn.classList.add("social-btn");
    // linkedinBtn.href = "https://www.linkedin.com/in/luke-fordham-5411451b5/";
    // socialsDiv.appendChild(linkedinBtn);
    // const linkedinIcon = document.createElement("img");
    // linkedinIcon.src = "/images/linkedin-icon.svg";
    // linkedinBtn.appendChild(linkedinIcon);

    // const behanceBtn = document.createElement("a");
    // behanceBtn.classList.add("social-btn");
    // behanceBtn.href = "https://www.behance.com";
    // socialsDiv.appendChild(behanceBtn);
    // const behanceIcon = document.createElement("img");
    // behanceIcon.src = "/images/behance-icon.svg";
    // behanceBtn.appendChild(behanceIcon);

    // const dribbbleBtn = document.createElement("a");
    // dribbbleBtn.classList.add("social-btn");
    // dribbbleBtn.href = "https://www.dribbble.com";
    // socialsDiv.appendChild(dribbbleBtn);
    // const dribbbleIcon = document.createElement("img");
    // dribbbleIcon.src = "/images/dribbble-icon.svg";
    // dribbbleBtn.appendChild(dribbbleIcon);

    // const igBtn = document.createElement("a");
    // igBtn.classList.add("social-btn");
    // igBtn.href = "https://www.instagram.com";
    // socialsDiv.appendChild(igBtn);
    // const igIcon = document.createElement("img");
    // igIcon.src = "/images/ig-icon.svg";
    // igBtn.appendChild(igIcon);

    // const twitterBtn = document.createElement("a");
    // twitterBtn.classList.add("social-btn");
    // twitterBtn.href = "https://www.twitter.com";
    // socialsDiv.appendChild(twitterBtn);
    // const twitterIcon = document.createElement("img");
    // twitterIcon.src = "/images/twitter-icon.svg";
    // twitterBtn.appendChild(twitterIcon);

    App.refreshNav();
  },

  refreshNav: () => {
    // get current path
    let currentPath = window.location.hash || "#";
    let navItems = document.querySelectorAll("#main-nav > a");
    navItems.forEach((navLink) => {
      if (navLink.getAttribute("href") === currentPath) {
        navLink.classList.add("active");
      }
    });
  },

  loadFooter: () => {
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo-div");
    const logoText1 = document.createElement("p");
    logoText1.innerHTML = "Made with";
    const logoText2 = document.createElement("p");
    logoText2.innerHTML = "&#128159;";
    const logoText3 = document.createElement("p");
    logoText3.innerHTML = "by";
    logoText1.classList.add("logo-text");
    logoText2.classList.add("logo-text-heart");
    logoText3.classList.add("logo-text");
    logoText2.setAttribute("data-aos", "zoom-in");
    logoText2.setAttribute("data-aos-offset", "80");
    const logoLink = document.createElement("a");
    logoLink.href = "#";
    const logoImg = document.createElement("img");
    logoImg.src = "/images/logo.svg";
    logoLink.classList.add("logo-link");
    logoLink.append(logoImg);
    logoDiv.append(logoText1, logoText2, logoText3, logoLink);

    const socialsDiv = document.createElement("div");
    socialsDiv.classList.add("socials-div");
    //Instagram
    const instaBtn = document.createElement("a");
    instaBtn.classList.add("social-button");
    instaBtn.href = "https://www.instagram.com/jessbrown_designs/";
    instaBtn.target = "_blank";
    const instaIcon = document.createElement("img");
    instaIcon.src = "/images/instagram-icon.svg";
    instaBtn.append(instaIcon);
    socialsDiv.append(instaBtn);
    instaIcon.setAttribute("data-aos", "flip-left");
    instaIcon.setAttribute("data-aos-offset", "80");

    //LinkedIn
    const linkedInBtn = document.createElement("a");
    linkedInBtn.classList.add("social-button");
    linkedInBtn.href = "https://www.linkedin.com/in/jess-brown-4aa3681b5/";
    linkedInBtn.target = "_blank";
    const linkedInIcon = document.createElement("img");
    linkedInIcon.src = "/images/linked-in-icon.svg";
    linkedInBtn.append(linkedInIcon);
    socialsDiv.append(linkedInBtn);
    linkedInIcon.setAttribute("data-aos", "flip-left");
    linkedInIcon.setAttribute("data-aos-offset", "80");
    linkedInIcon.setAttribute("data-aos-delay", 200);

    //Behance
    const behanceBtn = document.createElement("a");
    behanceBtn.classList.add("social-button");
    behanceBtn.href = "https://www.behance.net/jessicabrown5";
    behanceBtn.target = "_blank";
    const behanceIcon = document.createElement("img");
    behanceIcon.src = "/images/behance-icon.svg";
    behanceBtn.append(behanceIcon);
    socialsDiv.append(behanceBtn);
    behanceIcon.setAttribute("data-aos", "flip-left");
    behanceIcon.setAttribute("data-aos-offset", "80");
    behanceIcon.setAttribute("data-aos-delay", 300);

    //Dribbble
    const dribbbleBtn = document.createElement("a");
    dribbbleBtn.classList.add("social-button");
    dribbbleBtn.href = "https://www.dribbble.com/jessbrowndesigns";
    dribbbleBtn.target = "_blank";
    const dribbleIcon = document.createElement("img");
    dribbleIcon.src = "/images/dribbble-icon.svg";
    dribbbleBtn.append(dribbleIcon);
    socialsDiv.append(dribbbleBtn);
    dribbleIcon.setAttribute("data-aos", "flip-left");
    dribbleIcon.setAttribute("data-aos-offset", "80");
    dribbleIcon.setAttribute("data-aos-delay", 400);

    const footerHolder = document.querySelector("#footer-div");
    const footer = document.createElement("footer");
    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer-grid");
    footerDiv.append(logoDiv, socialsDiv);
    footer.appendChild(footerDiv);
    footerHolder.append(footer);
  },

  loadContact: () => {
    if (document.querySelector(".contact-section")) {
      typeformEmbed.makeWidget(
        document.querySelector(".contact-form"),
        "https://jesspbrown00.typeform.com/to/T4Xz3odW"
      );
    }
  },
};

export { App };
