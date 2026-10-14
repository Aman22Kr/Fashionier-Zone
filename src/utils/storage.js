const prefix = 'fashionierZone:'
export function readStore(key, fallback) {
  try { const raw = localStorage.getItem(prefix + key); return raw ? JSON.parse(raw) : fallback } catch { return fallback }
}
export function writeStore(key, value) {
  try { localStorage.setItem(prefix + key, JSON.stringify(value)) } catch { /* storage may be unavailable */ }
}
