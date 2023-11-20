import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Digital-umkm/',
  experimental: {
    renderBuiltUrls(fileName, {  hostId,type }) {
      if (type === 'public') {
        return 'https://digital-umkm.vercel.app' + fileName
      }
      else if(path.extname(hostId) == '.js'){
        return {runtime: `window.__assetsPath(${JSON.stringify(fileName)})`}
      }
      else{
        return 'https://digital-umkm.vercel.app/assets/' + fileName
      }
    }
  }
})
