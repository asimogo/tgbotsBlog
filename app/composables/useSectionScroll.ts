export function useSectionScroll() {
  const scrollTo = (id: string) => {
    if (typeof window === 'undefined') return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  return { scrollTo }
}
