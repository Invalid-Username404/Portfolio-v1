/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {

      backgroundImage: {
        "hero-pattern": "url('/assets/Hero-bg.jpg')",
        'new-image': "url('https://th.bing.com/th/id/R.02343cd6a453d8b17211ad40c165f491?rik=VhtW8s9qhHyDQw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fyo46nFM.jpg&ehk=rAaT6seUFzby0FOneI%2b0ya45TBUStoe4QF4TcuODLDg%3d&risl=&pid=ImgRaw&r=0')",
      },

      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'hLarge': '200vh',
        
      }
    },
  },
  plugins: [],
}


