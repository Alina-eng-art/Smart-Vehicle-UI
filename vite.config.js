import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Smart-Vehicle-UI/", // 🔥 ВОТ ЭТО ДОБАВЬ
  plugins: [react()],
})
