import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps:{
    'base1':["/matheus-ned-portifolio/"],
    'base2':["/matheus-ned-portifolio/tecnologia"],
    'base3':["/matheus-ned-portifolio/projetos"]
  },
  plugins: [react()]

})
