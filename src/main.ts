import './style.css'

// ページ読み込み時のアニメーション
document.addEventListener('DOMContentLoaded', () => {
  console.log('時の栞 - Toki no Shiori')

  // スムーズスクロールの実装
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href') || '')
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })
  })

  // スクロールに応じたヘッダーの背景変更（削除あるいは調整）
  // ユーザー要望によりヘッダーは常に透過グラデーションを維持するため、背景色追加処理を削除

})
