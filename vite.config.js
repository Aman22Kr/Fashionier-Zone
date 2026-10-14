import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set VITE_BASE_PATH to your repository name, e.g. /fashionierZone/.
// For a user/organization site or custom domain, use '/'.
const base = process.env.VITE_BASE_PATH || '/'
export default defineConfig({ plugins: [react()], base })
