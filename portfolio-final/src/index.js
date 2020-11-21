// Imports -- components ---------------------------------------------
import { App } from "/components/App.js";

// Imports -- pageControllers ----------------------------------------

import { homePageController } from "/page-controllers/home.js";

import { workPageController } from "/page-controllers/work.js";


// Routes ---------------------------------------------
// # (home)
App.addRoute("#", homePageController);
// #work
App.addRoute("#work", homePageController);
// #about
App.addRoute("#about", homePageController);
// #contact
App.addRoute("#contact", homePageController);
// #catch
App.addRoute("#catch", workPageController);
// #clink
App.addRoute("#clink", workPageController);
// #adobe
App.addRoute("#adobe", workPageController);

document.addEventListener("DOMContentLoaded", App.init);
