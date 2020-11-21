import { App } from "./../components/App.js";
import { Projects } from "./../components/Projects.js";
//import { Notify } from "./../components/Notify.js";
//import { Modal } from "./../components/Modal.js";

function homePageController() {
  let data = {
    text_title:
      "I’m Jess, a UX Design graduate with unusually equal amounts of imaginative faculty and common sense.",
    body_1:
      " I like problems. More specifically, I like finding the solution that feels so natural it seems obvious. Of course, the most effective solution is never obvious, and although it seems effortless there are always sizeable amounts of ideating, pondering, research and re-pondering. UX design lets me do all that and more. It’s human nature to overcomplicate things and say too much, and there are hundreds of thousands of years of modern human history to UX the hell out of. I can’t wait to get out into the world and start hunting for all those obvious solutions.",
    body_2:
      "When I’m not trying to make the general population’s life easier with pixels, you’ll find me enjoying the outdoors (especially anything to do with the ocean), reading, playing team sports or trying to learn something new. At the moment it’s brush lettering and calligraphy. I love to chat about topics ranging from existentialism to cute animals doing dumb stuff, so hit me up!",
    following_img: "/images/following.png",
    reading_img: "/images/reading.png",
    listening_img: "/images/listening.png",
  };

  App.loadPage("Jess Brown Designs", "template-page-home", data, () => {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
    if (window.location.hash === "#work") {
      window.location.href = "#work";
    }

    const catchBtn = document.querySelector("#catch-project-btn");
    catchBtn.addEventListener("click", () => {
      location.hash = "#catch";
    });

    const clinkBtn = document.querySelector("#clink-project-btn");
    clinkBtn.addEventListener("click", () => {
      location.hash = "#clink";
    });

    const adobeBtn = document.querySelector("#adobe-project-btn");
    adobeBtn.addEventListener("click", () => {
      location.hash = "#adobe";
    });
  });
}
export { homePageController };
