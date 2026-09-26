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
