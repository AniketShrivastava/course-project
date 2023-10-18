# LMS Frontend

### Setup instructions 

1. Clone the project 
...

  git clone https://github.com/AniketShrivastava/lms-frontend-on
...

2. Move to the directory

...
  cd lms-frontend-on
...

3. Install dependencies
...
   npm i
...

4.  Run the server
...
    npm run dev
...




### How to setup tailwind in your project

1. Install tailwind and other dependancies [Link]
(https://tailwindcss.com/docs/guides/vite)
 
...
 
  npm install -D tailwindcss postcss autoprefixer  
...

2. Create the `tailwind.config.js` file

...
  
  npx tailwindcss init -p
  
...

3. Add the files and extensions to tailwind config in the content property

...
  content:["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",]
...

4. Add the tailwind directives on the top of index.css file

...
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
...

5. Then run the server , tailwind should be intregrated...

### Adding plugins and dependencies

...
  >npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
...

### Adding auto import sort for esline 
1. Install the plugin

...
 npm i -D eslint-plugin-simple-impor
t-sort
...

2. Add rule in `.eslintre.cjs`

...
   'simple-import-sort/imports':'error',
...

3. Add simple-import-sort in the plugin array of `.enlintre.cjs` files

...

  plugins: [...... , 'simple-import-sort'],
...

4. 