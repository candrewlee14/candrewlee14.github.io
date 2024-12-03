;(function initTheme() {
    var theme = localStorage.getItem('theme') || 'light'
    let html = document.querySelector('html')
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark')
    } else {
      html.setAttribute('data-theme', 'light')
    }
  })()