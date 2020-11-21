import { App } from "./../components/App.js";
import { Projects } from "./../components/Projects.js";

function workPageController() {
  const projectName = window.location.hash.split("#")[1];

  const currentProject = Projects.find(function (item) {
    return item.project_name == projectName;
  });
  console.log(currentProject);

  App.loadPage(
    `${currentProject.title}`,
    `template-page-work-${projectName}`,
    currentProject,
    () => {
      window.scrollTo(0, 0);

      let colourDelay = 1000;
      if (currentProject.palette) {
        currentProject.palette.forEach((colour) => {
          const colouredCircle = document.createElement("div");
          colouredCircle.classList.add("palette-circle", `${colour}`);
          colouredCircle.setAttribute("data-aos", "fade-down");
          colouredCircle.setAttribute("data-aos-delay", colourDelay);
          const paletteDiv = document.querySelector(".palette");
          paletteDiv.appendChild(colouredCircle);
          colourDelay += 100;
        });
      }

      if (currentProject.descriptors) {
        currentProject.descriptors.forEach((descriptor) => {
          console.log(descriptor);
          const descriptorText = document.createElement("h4");
          descriptorText.innerHTML = `${descriptor.title}`;

          const descriptorDiv = document.createElement("div");
          descriptorDiv.appendChild(descriptorText);
          descriptorDiv.classList.add(
            `descriptor-div-${currentProject.project_name}`,
            `descriptor-div-${descriptor.name}`
          );

          const descriptorsAll = document.querySelector(".descriptors");
          descriptorsAll.append(descriptorDiv);
        });
      }

      if (currentProject.icons) {
        currentProject.icons.forEach((icon) => {
          const iconImg = document.createElement("img");
          iconImg.src = `${icon.src}`;

          const iconDiv = document.createElement("div");
          iconDiv.appendChild(iconImg);
          iconDiv.classList.add("icon-div");
          iconDiv.classList.add(`icon-${icon.name}`);

          const iconsAll = document.querySelector(".icons");
          iconsAll.append(iconDiv);
        });
      }

      if (currentProject.project_goals) {
        currentProject.project_goals.forEach((goal) => {
          const goalDiv = document.createElement("div");
          goalDiv.classList.add(
            `project-goal-div`,
            `project-goal-${goal.index}`
          );

          const goalIcon = document.createElement("i");
          goalIcon.classList.add("fas", `${goal.icon}`);
          const goalIconDiv = document.createElement("div");
          goalIconDiv.classList.add("goal-icons-div");
          goalIconDiv.append(goalIcon);

          const goalBody = document.createElement("P");
          goalBody.innerHTML = `${goal.body}`;
          const goalBodyDiv = document.createElement("div");
          goalBodyDiv.classList.add("goals-body-div");
          goalBodyDiv.append(goalBody);

          goalDiv.append(goalIconDiv, goalBodyDiv);

          const allGoalsDiv = document.querySelector("#project-goals");
          allGoalsDiv.append(goalDiv);
        });
      }

      if (document.querySelector(".pdf-link")) {
        const PDFLink = document.querySelector(".pdf-link");
        PDFLink.addEventListener("click", () => {
          window.open(currentProject.project_brief_link);
        });
      }

      const nextProjectBtn = document.querySelector(".next-project-div");
      const nextProjectVisual = document.querySelector(".next-project-img-div");
      nextProjectBtn.addEventListener("click", () => {
        window.location.hash = `#${currentProject.next_project_name}`;
      });
      nextProjectVisual.addEventListener("click", () => {
        window.location.hash = `#${currentProject.next_project_name}`;
      });

      const backToWorkBtn = document.querySelector(".back-to-work-div");
      backToWorkBtn.addEventListener("click", () => {
        window.location.hash = `#work`;
      });

      const contactBtn = document.querySelector(".contact-btn");
      contactBtn.addEventListener("click", () => {
        window.location.hash = `#contact`;
      });

      tippy(".icon-js", {
        content: "ES6 JavaScript ",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".icon-html", {
        content: "HTML 5",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".icon-sass", {
        content: "SCSS ",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".icon-illustrator", {
        content: "Adobe Illustrator ",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".icon-ae", {
        content: "Adobe AfterEffects ",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".icon-ps", {
        content: "Adobe PhotoShop ",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".icon-xd", {
        content: "Adobe Xd ",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".catch-blue", {
        content: "#235387",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".catch-red", {
        content: "#c13f44",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".catch-yellow", {
        content: "#f5c165",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".catch-green", {
        content: "#64ad6f",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".catch-white", {
        content: "#f2f2f2",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".clink-blue", {
        content: "#1372c6",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".clink-grey-1", {
        content: "#3b383a",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".clink-grey-2", {
        content: "#c1c1c1",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".clink-grey-3", {
        content: "#e2e2e2",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".clink-grey-4", {
        content: "#f2f2f2",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".adobe-green", {
        content: "#81bf5b",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".adobe-orange", {
        content: "#dc8e15",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".adobe-blue", {
        content: "#02afda",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".adobe-purple", {
        content: "#ca90fb",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
      tippy(".adobe-red", {
        content: "#d1051b",
        arrow: false,
        placement: "bottom",
        theme: "custom",
      });
    }
  );
}
export { workPageController };
