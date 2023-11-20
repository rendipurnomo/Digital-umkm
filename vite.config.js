import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  experimental: {
    renderBuiltUrl(
      filename,
      {
        hostId,
        hostType,
        type,
      }
    ) {
      if (type === 'public') {
        return 'https://digital-umkm.vercel.app/' + filename;
      } else if (path.extname(hostId) === '.js') {
        return { runtime: `window.__assetsPath(${JSON.stringify(filename)})` };
      } else {
        return 'https://cdn.digital-umkm.vercel.app/assets/' + filename;
      }
    },
  },
});
