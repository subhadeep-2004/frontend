import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  
    proxy: {
      "/disease": "https://fast-api-3-lwha.onrender.com",
    }  
  } ,
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
     // input: '/path/to/main.js',

      assetFileNames :(file)=>{
        return "assets/css/index.min.css"
      },
      entryFileNames: (file)=>{
        return "assets/js/[name].min/js"
      }

    },
  },
})


