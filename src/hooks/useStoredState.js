import { useEffect, useState } from 'react'
import { readStore, writeStore } from '../utils/storage'
export function useStoredState(key, initialValue) {
  const [value, setValue] = useState(() => readStore(key, initialValue))
  useEffect(() => writeStore(key, value), [key, value])
  return [value, setValue]
}
