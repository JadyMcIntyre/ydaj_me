# Project overview
This project is a personal portfolio website designed to showcase web design projects. The site will primarily serve as a reference for potential clients to view past work and case studies, while also having the potential to attract new clients. It features a minimalistic yet artistic design, with black and white as primary colors, and orange and teal as secondary accent colors.

The website includes four main sections: Home, Projects, About, and Contact. Projects will be displayed in a card format with a photo, project name, and short description. Each project will link to a detailed case study. The site will also feature a contact form with links to social media and contact info for easy client communication. It will be fully responsive, ensuring a seamless experience on both desktop and mobile devices.

# Feature Requirements
- we will use Next.js, Shadcn/UI, TailwindCSS for the frontend, Supabase, Clerk
- The home page will feature a hero section with the user's name, a short bio, and a button to get in touch.
- all of the other pages will show up on the main page, and will be navigatable from a top navbar
- Projects page will feature a grid of project cards, each with a photo, project name, and short description. Clicking on a project card will navigate to a detailed case study page.
- About page will feature a section with the user's name, a short bio, and a photo.
- Contact page will feature a contact form with fields for name, email, message, and a submit button. The form will be validated to ensure all fields are filled out correctly before submission.
- The site will be responsive and optimized for performance, with a focus on a minimalistic and artistic design.

# Current File Structure
.next
app
├── fonts
├── favicon.ico
├── globals.css
├── layout.tsx
├── page.tsx
components
├── ui
│   ├── button.tsx
│   ├── card.tsx
│   └── input.tsx
lib
node_modules
requirements
.eslintrc.json
.gitignore
components.json
next-env.d.ts
next.config.mjs
package-lock.json
package.json
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json


# Rules
all new components should be added to the /components folder, and should be named using the following format: [example]-component.tsx
all new pages should be added to the /app folder, and should be named using the following format: [name]-page.tsx
