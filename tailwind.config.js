const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'intro-bg-shapes': "url('./src/assets/images/background/Intro-bg-shapes.svg')",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

