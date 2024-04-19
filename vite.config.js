import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
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
        target: 'https://nedmad.github.io/matheus-ned-portifolio', // Endereço do servidor para o diretório 1
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/diretorio1/, '/matheus-ned-portifolio'),
      },
      '/diretorio2': {
        target: 'https://nedmad.github.io/matheus-ned-portifolio', // Endereço do servidor para o diretório 2
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/diretorio1/, '/caminho/para/diretorio1'),
      },
      // Adicione mais configurações de proxy conforme necessário para outros diretórios
    },
  },
  plugins: [react()]

})
