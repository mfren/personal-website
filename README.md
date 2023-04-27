# Matt French | Personal Website
This is a [Next.js](https://nextjs.org/) project using React, TypeScript, and TailwindCSS.

## The objective
My goal for this project was to create a small informational website that I could use to showcase my work and skills.
I potentially wanted to have some blog posts, but this was not a priority.
While I've worked with Next.js before, I wanted to use this as an opportunity to try out some new technologies, such as TailwindCSS, as well as some of the new experiement features of version 13.
A key objective was keep achieve a quick load time, and to keep the website as light as possible, which is where React's new server components come in.

## Where it's hosted
Currently the website runs on Vercel and deployments are managed by the built-in CI/CD pipeline.
You can view the website at [mattfrench.dev](https://mattfrench.net).

## How it's structured
The homepage is broken down into several sections, each being it's own component, and are found at `src/components/home`. 
These components largely use content that is defined outside of their file (for easy of editing), and can be found in `src/content`.
Most styling is defined at a JSX-element level using Tailwind, however a small amount is defined in `src/app/globals.css`, as well as some theme extensions within `tailwind.config.js`. 

### Styling with TailwindCSS
While keeping the website simple, I wanted it to look presentable and professional.
I decided to use TailwindCSS as it's a tool I've been wanting to try out for a while, and it's utility-first approach seemed like a good fit for this project.
The website features a dark mode, which is selected based on the user's system preferences, and is fully responsive, with a mobile-first approach.

### Server Components
At the time of writing, React's server components are still very new, but offer a lot of potential for improving the performance of React applications.
I especially wanted to try them out in conjunction with Next.js experimental *app* directory, and have been very impressed with the results.
The website is very light, and loads very quickly, even on slower connections, sending a out 90kb (including all assets, with no cache) for a homepage request, and achieves 99& Vercel CWV score and a 95 Lighthouse score.

### Light/Dark mode
The website features a light and dark mode, which is selected based on the user's system preferences.
By using Tailwind's `dark:` prefix, I was able to easily define a dark mode for the website, and have it automatically applied when the user's system preferences are set to dark mode.
We also change the website theme (and favicon eventually) based on the user's system preferences.

### Fonts
The website primarily uses Google's Open-Sans font, which is loaded using Next.js's built-in `@next/plugin-google-fonts` plugin, allowing for performant loading of fonts.
We also use the [Devicon](https://devicon.dev/) icon set, which is currently loaded through tags in `app/layout.tsx`, however I plan to move this to a more performant solution in the future.

### Images
Images are loaded using Next.js's built-in `next/image` component, which allows for performant loading of images, as well as automatic optimisation and resizing.
We also use downscaled images to reduce the size of the website, and improve performance.