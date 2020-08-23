import WebsiteLogo from "../../imgs/WebsiteLogo.png";
import Civ6WebsiteLogo from "../../imgs/Civ6DrafterLogo.png";
import GraphingCalcLogo from "../../imgs/GraphingCalcLogo.png";
import WhatsappMassLogo from "../../imgs/WhatsappMass.png";

export const ProjectsList = [
  {
    title: "This website",
    image: WebsiteLogo,
    description:
      '    My portfolio website that resembles a blueprint that "draws itself."\n\n    I had a lot of fun trying to find a good middle point between long, fancy svg animations and giving control back to the user as quickly as possible.\n\n    In order to effectively create the animations while allowing for some level of customization and not overwhelming React with too many re-renders, I created an animation component that automatically sets all required parameters for svg drawing animations and allows the developer to customize its animation parameters on the go in Javascript.',
    links: {
      github_repo: "https://github.com/alago1/Blueprint-website",
    },
    tags: ["React", "Javascript", "Html", "Css"],
  },
  {
    title: "Civilization VI Drafter",
    image: Civ6WebsiteLogo,
    description: `    A web app to run drafts for the game Civilization VI.\n\n    Between nation bonuses, leader bonuses, unique units, unique improvements, etc., this game has a lot of mechanics that are hard to keep track of when choosing which character to play as.\n\n   I built this page a week ahead of a game with my friends. It summarizes many of the mechanics of each character into key points allowing new players to find which character fits them best with relative ease.`,
    links: {
      github_repo: "https://github.com/alago1/Civ6Drafter",
      other: "https://www.civ6-drafter.herokuapp.com/",
    },
    tags: ["React", "Javascript", "Html", "Css"],
  },
  {
    title: "Whatsapp Web Mass Messaging Software",
    image: WhatsappMassLogo,
    description: `    I created the GUI as well as some additional utility that uses the WebWhatsAPI to effectuate Mass messaging functionality through Whatsapp Web.`,
    links: {
      github_repo: "https://github.com/alago1/Whatsapp-Mass-Messaging-Gui",
    },
    tags: ["Python", "Javascript", "Html", "Css"],
  },
  {
    title: "Graphing Calculator Software",
    image: GraphingCalcLogo,
    description: `    As part of a side project when learning Data Structures, I created the software of a graphing calulator from scratch.\n\n    This was my first full fledged project and was used during tutoring sessions to explain some concepts in Calculus.`,
    links: {
      github_repo: "https://github.com/alago1/GraphingCalculator",
    },
    tags: ["Java"],
  },
];
