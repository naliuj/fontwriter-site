// Theme toggle: flips between light and dark and remembers the choice.
const root = document.documentElement
document.querySelector('.theme-toggle').addEventListener('click', () => {
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
  const next = dark ? 'light' : 'dark'
  root.dataset.theme = next
  try {
    localStorage.setItem('theme', next)
  } catch (e) {}
})

// Screenshots open full size in a lightbox. Without JavaScript the links open the image itself.
const box = document.querySelector('.lightbox')
const big = box.querySelector('img')
document.querySelectorAll('.shot a').forEach((a) => {
  a.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || !box.showModal) return
    e.preventDefault()
    const img = a.querySelector('img')
    big.src = a.href
    big.alt = img.alt
    box.showModal()
  })
})
// A click anywhere closes it, not just the button.
box.addEventListener('click', () => box.close())
