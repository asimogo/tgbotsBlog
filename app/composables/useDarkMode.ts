import { onMounted, useState } from '#imports'

export function useDarkMode() {
  const isDark = useState<boolean>('theme:dark', () => false)

  const apply = () => {
    if (typeof window === 'undefined') return
    const root = document.documentElement
    if (isDark.value) root.classList.add('dark')
    else root.classList.remove('dark')
  }

  const toggle = (v?: boolean) => {
    isDark.value = typeof v === 'boolean' ? v : !isDark.value
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
    apply()
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    const pref = localStorage.getItem('theme')
    if (pref) isDark.value = pref === 'dark'
    else isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    apply()
  })

  return { isDark, toggle }
}
