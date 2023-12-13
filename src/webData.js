
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import tailwind from "./assets/techstack/tailwind.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tanstack from "./assets/techstack/tanstackQuery.png";
import node from './assets/techstack/nodejs.png';
import express from './assets/techstack/expressjs.png';
import mongodb from './assets/techstack/mongodb.png';
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import notion from "./assets/techstack/notion.png";
import firebase from "./assets/techstack/firebase.png";
import vercel from "./assets/techstack/vercel.png";
import netlify from "./assets/techstack/netlify.png";

// Porject Images
import gadgetier from "./assets/portfolio/gadgetier.jpg";
import livingBook from "./assets/portfolio/living-book.jpg";
import stepup from "./assets/portfolio/stepup-shop.jpg";
import spotlight from "./assets/portfolio/spotlight-events.jpg";




// about me data
export const aboutMe = {
    name: "Jahedul Huda Chowdhury (Alvi)",
    title: "MERN Stack based Web Developer",
    description: "Bringing Web solutions to life with creativity, technical excellence, and attention to detail, ensuring security, scalability, and maintainability. I am eager to contribute, learn, and grow within a team that values innovation and creativity.",
}


// Enter your Social Media URLs here
export const socialMediaUrl = {
    linkedin: "https://www.linkedin.com/",
    github: "https://www.github.com/",
};


// Tech Stack and Tools
export const techStackDetails = {
    html: html,
    css: css,
    tailwind: tailwind,
    js: js,
    react: react,
    tanstackQuery: tanstack,
    nodeJs: node,
    expressJs: express,
    mongodb: mongodb,
    vscode: vscode,
    postman: postman,
    npm: npm,
    git: git,
    github: github,
    figma: figma,
    notion: notion,
    firebase: firebase,
    vercel: vercel,
    netlify: netlify
};

// Project Details

export const projectDetails = [
    {
        id: 1,
        title: "Gadgetier",
        image: gadgetier,
        description: `A responsive web app with role-based access control. Users can add/edit posts, and Moderators review/delete user-submitted posts. Admins has the capability to manage roles within the system.`,
        techstack: "React.js, TailwindCSS, Express.js, MongoDB, react-helmet-async, axios, react-router-dom, Firebase, tanstack-query, react-hook-form, moment.js, sweetalert2",
        previewLink: "https://gadgetier-client.vercel.app",
        githubLink: "https://github.com/Alvi-C/gadgetier-webapp-client",
    },
    {
        id: 2,
        title: "Livingbook",
        image: livingBook,
        description: `A responsive web app of displaying available rooms, filtering by price and country, adding new rooms, enforcing date availability through a calendar, preventing double booking etc.`,
        techstack: "React.js, TailwindCSS, Express.js, MongoDB, react-fast-marquee, axios, react-router-dom, Firebase, react-helmet-async, react-tailwindcss-datepicker, sonner",
        previewLink: "https://living-book-client.vercel.app",
        githubLink: "https://github.com/Alvi-C/livingbook-crud-jwt-client",
    },
    {
        id: 3,
        title: "Step-up store",
        image: stepup,
        description: `A responsive user-friendly web app Step-Up Store is a straightforward e-commerce application designed for seamless CRUD operations With a focus on simple functionality. `,
        techstack: "ReactJS, TailwindCSS, react-router-dom, Firebase, sonner",
        previewLink: "https://stepup-style-auth.web.app",
        githubLink: "https://github.com/Alvi-C/stepup-store-crud-client",
    },
    {
        id: 4,
        title: "Spotlight Events",
        image: spotlight,
        description: `A responsive web app of eventmanagement application designed for seamless CRUD operations With a focus on simple functionality and firebase authentication. `,
        techstack: "ReactJS, TailwindCSS, react-router-dom, Firebase",
        previewLink: "https://spotlight-events-auth.web.app",
        githubLink: "https://github.com/Alvi-C/react-firebase-auth-site-1",
    },
]

