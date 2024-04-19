import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:["/matheus-ned-portifolio","/matheus-ned-portifolio/tecnologia","/matheus-ned-portifolio/projetos"],
  plugins: [react()]

})
