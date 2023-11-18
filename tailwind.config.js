/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
     
    
    
    
    colors:{

      dark:{
        backgroundPrimary: "#3d3d3d",
        backgroundPrimaryLight: "#474747",
        backgroundSecondary: "#4b4b4b",
        backgroundSecondaryLight: "#5d5d5d",
        text: "#f1f2f6",
        disabled: "#6f6f6f",
        success: "#2ecc71",
        fail: "#e74c3c",
        brand1: "#ff7f50",
        brand2: "#e22e4a"
      }

    },
    extend: {

      fontFamily:{
        'work-sans':['"Work Sans"', 'sans-serif']
      }
     
    },
  },
  plugins: [],
}





