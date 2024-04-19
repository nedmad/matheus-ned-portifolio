import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/matheus-ned-portifolio",
  plugins: [react()],
  resolve: {
    alias: {
      '@dir1': '/matheus-ned-portifolio',
      '@dir2': '/matheus-ned-portifolio/tecnologia',
      // Adicione mais aliases conforme necessário para outros diretórios
    },
  },
  // Configuração do servidor para lidar com rotas de diretórios
  server: {
    proxy: {
      '/diretorio1': {
        target: 'http://localhost:3000', // Endereço do servidor para o diretório 1
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/diretorio1/, '/matheus-ned-portifolio'),
      },
      '/diretorio2': {
        target: 'http://localhost:3000', // Endereço do servidor para o diretório 2
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/diretorio2/, '/matheus-ned-portifolio/tecnologia'),
      },
      // Adicione mais configurações de proxy conforme necessário para outros diretórios
    },
  },

})
