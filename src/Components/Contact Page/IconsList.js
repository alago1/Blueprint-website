import React from "react";
import { ReactComponent as EmailIcon } from "../../svgs/Contact Page/Email Box.svg";
//these need to be links later
import { ReactComponent as GitHubIcon } from "../../svgs/Contact Page/GitHub Box.svg";
import { ReactComponent as LinkedInIcon } from "../../svgs/Contact Page/LinkedIn Box.svg";
import { ReactComponent as TwitterIcon } from "../../svgs/Contact Page/Twitter Box.svg";

export const IconsList = {
  Email: {
    component: <EmailIcon className="icon" />,
    href: "mailto:allanlago1@gmail.com",
  },
  GitHub: {
    component: <GitHubIcon className="icon" />,
    href: "https://github.com/alago1",
  },
  LinkedIn: {
    component: <LinkedInIcon className="icon" />,
    href: "https://www.linkedin.com/in/allan-lago-a6b5131a8/",
  },
  Twitter: {
    component: <TwitterIcon className="icon" />,
    href: "https://twitter.com/lago_allan",
  },
};
