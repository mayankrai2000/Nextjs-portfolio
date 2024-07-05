const header = {
 homepage: "https://porfolio.simbl.dev",
 title: "JS.",
};

const about = {
 name: "Simon",
 role: "React / Full-stack developer",
 description:
  "Full-stack web developer working with React, Next.js, VueJs, NestJS",
 resume:
  "https://www.icloud.com/iclouddrive/00fJTz3G-5FFZcZAvwcFjI93A#shared%5Fresume",
 social: {
  linkedin: "https://www.linkedin.com/in/simon-paillassa/",
  github: "https://github.com/SimonPail",
 },
};

const projects = [
 {
  name: "Moving Motivators",
  year: "2024",
  description:
   "Interactive tool designed to help uncover personal values and understand how they influence work performance and satisfaction",
  stack: ["Next.js", "TypeScript", "Socket.io", "React"],
  sourceCode: "https://github.com/SimonPail/moving-motivators",
  livePreview: "https://movingmotivators.extia.ro",
 },
 {
  name: "Sarba",
  year: "2023",
  description:
   "Expense Management Application designed to help employees and administration to manage expenses incurred during working days",
  stack: ["Next.js", "NestJS", "TypeScript", "React"],
  livePreview: "https://github.com",
 },
 {
  name: "Centre Harmonia",
  year: "2021",
  description:
   "Website with administrative and event scheduling functionalities for a wildlife center",
  stack: ["VueJs", "JavaScript", "Laravel"],
  livePreview: "https://www.harmonia-comportementaliste.com/accueil",
 },
];

const skills = [
 "HTML/CSS",
 "JavaScript",
 "TypeScript",
 "React",
 "Redux",
 "VueJs",
 "Next.js",
 "NestJS",
 "Node.js",
 "Express.js",
 "MongoDB",
 "MySQL",
 "Git",
 "CI/CD",
 "Jest",
 "PactumJS",
 "Socket.io",
];

const experience = [
 {
  name: "Full-stack React/Javascript Developer",
  date: "2023 - present",
  location: "Romania",
  description:
   "Extia is a consulting agency based in Bucharest where I contributed to various projects.",
  stack: ["Next.js", "React", "Redux", "TypeScript", "NestJS", "MongoDB"],
 },
 {
  name: "Full-stack VueJS/Javascript Developer",
  date: "2022 - 2023",
  location: "France",
  description:
   "ITAF Technologie is developing an healthcare application serving a user base of 70000 active patients.",
  stack: ["VueJS", "JavaScript", "Node.Js", "Express.JS", "MongoDB"],
 },
 {
  name: "Full-stack VueJS/PHP Developer",
  date: "2019 - 2022",
  location: "France",
  description: "Addeo is developing a Career Development SaaS Application.",
  stack: ["VueJS", "JavaScript", "PHP", "MySQL"],
 },
];

const contact = {
 email: "contact@simbl.dev",
};

export { header, about, projects, skills, experience, contact };
