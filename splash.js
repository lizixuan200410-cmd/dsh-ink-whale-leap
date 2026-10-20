(function () {
  'use strict'
  try {
    if (window.__INK_WHALE_SPLASH__) return
    window.__INK_WHALE_SPLASH__ = true

    var CSS = [
      '#iw-splash{position:fixed;inset:0;z-index:2147483647;overflow:hidden;background:#f2ead9;',
      'pointer-events:none;-webkit-tap-highlight-color:transparent;',
      'animation:iw-auto-out .7s ease 3.95s forwards}',
      '#iw-splash.iw-leave{animation:iw-leave .55s ease forwards!important}',
      '@keyframes iw-auto-out{to{opacity:0;visibility:hidden}}',
      '@keyframes iw-leave{to{opacity:0;visibility:hidden}}',
      '.iw-stage{position:absolute;inset:0;width:100%;height:100%;display:block}',
      '.iw-halo{animation:iw-halo 3.2s ease-out both}',
      '@keyframes iw-halo{0%{opacity:0}50%{opacity:.09}80%{opacity:.08}100%{opacity:.07}}',
      '.iw-water{animation:iw-water 3.2s ease-out both}',
      '@keyframes iw-water{0%{opacity:0}25%{opacity:.1}80%{opacity:.07}100%{opacity:.06}}',
      '.iw-horizon{transform-box:fill-box;transform-origin:50% 50%;animation:iw-horizon 1.5s .15s ease-out both}',
      '@keyframes iw-horizon{0%{opacity:0;transform:scaleX(.7)}100%{opacity:1;transform:scaleX(1)}}',
      '.iw-whale{transform-box:fill-box;transform-origin:50% 74%;animation:iw-leap 3.2s both}',
      '@keyframes iw-leap{0%{opacity:0;transform:translateY(420px) scale(.3) rotate(-8deg);animation-timing-function:cubic-bezier(.42,0,.3,1)}7%{opacity:1}40%{opacity:1;transform:translateY(-84px) scale(1.05) rotate(1.2deg);animation-timing-function:cubic-bezier(.33,0,.45,.6)}48%{opacity:1;transform:translateY(-74px) scale(1.02) rotate(.6deg);animation-timing-function:cubic-bezier(.4,.05,.6,.5)}72%{opacity:1;transform:translateY(-80px) scale(1.04) rotate(1deg);animation-timing-function:cubic-bezier(.45,0,.55,1)}100%{opacity:1;transform:translateY(-76px) scale(1.03) rotate(.8deg)}}',
      
      
      '.iw-ring{fill:none;stroke:#17181c;stroke-width:1.15;opacity:0;transform-box:fill-box;transform-origin:50% 50%}',
      '.iw-r1{animation:iw-ring 1.9s .72s ease-out both}',
      '.iw-r2{animation:iw-ring 1.9s .9s ease-out both}',
      '.iw-r3{animation:iw-ring 1.9s 1.08s ease-out both}',
      '@keyframes iw-ring{0%{opacity:0;transform:scale(.12)}18%{opacity:.5}100%{opacity:0;transform:scale(1.18)}}',
      '.iw-bloom{opacity:0;animation:iw-bloom 2.2s .72s ease-out both}',
      '@keyframes iw-bloom{0%{opacity:0}30%{opacity:.07}100%{opacity:0}}',
      '.iw-drop{opacity:0;transform-box:fill-box;transform-origin:50% 50%;animation:iw-drop 1.3s ease-out both}',
      '@keyframes iw-drop{0%{opacity:0;transform:translate(0,0) scale(.4)}20%{opacity:.65}70%{opacity:.5}100%{opacity:0;transform:translate(var(--dx,0),var(--dy,-40px)) scale(1)}}',
      '.iw-caption{position:absolute;left:0;right:0;bottom:12.5%;display:flex;flex-direction:column;align-items:center;gap:13px;opacity:0;animation:iw-caption 1s 1.65s ease-out both}',
      '@keyframes iw-caption{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:none}}',
      '.iw-lockup{display:flex;align-items:center;gap:16px}',
      '.iw-wordmark{font-family:"Songti SC","STSong","SimSun","Noto Serif SC",Georgia,"Times New Roman",serif;font-size:16px;letter-spacing:.46em;padding-left:.46em;color:#2a2620}',
      '.iw-seal{width:25px;height:25px;display:grid;place-items:center;background:#b4372a;color:#f6efe2;font-family:"Songti SC","SimSun",serif;font-size:14px;line-height:1;border-radius:4px;transform:rotate(-2.5deg);box-shadow:inset 0 0 0 1px rgba(246,239,226,.4),0 1px 2px rgba(70,25,15,.25);opacity:0;animation:iw-seal .6s 2.15s cubic-bezier(.2,1.7,.35,1) both}',
      '@keyframes iw-seal{0%{opacity:0;transform:rotate(-2.5deg) scale(1.8)}55%{opacity:1;transform:rotate(-2.5deg) scale(.94)}100%{opacity:1;transform:rotate(-2.5deg) scale(1)}}',
      '.iw-rule,.iw-tagline{opacity:0;animation:iw-caption .9s 2.45s ease-out both}',
      '.iw-rule{width:190px;height:1px;background:linear-gradient(90deg,transparent,rgba(38,35,29,.42),transparent)}',
      '.iw-tagline{font-family:"Songti SC","STSong","SimSun","Noto Serif SC",Georgia,serif;font-size:10px;letter-spacing:.5em;padding-left:.5em;color:#8a7f6b}',
      '@media (prefers-reduced-motion:reduce){',
      '.iw-halo,.iw-water,.iw-horizon,.iw-whale,.iw-ghost,.iw-ring,.iw-bloom,.iw-drop{animation:none!important}',
      '.iw-whale{opacity:1;transform:none}.iw-halo{opacity:.08}.iw-water{opacity:.08}.iw-ring{opacity:.3}',
      '.iw-caption{opacity:1;transform:none}.iw-seal{opacity:1}.iw-ghost,.iw-drop{display:none}}'
    ].join('')

    var MARKUP = [
      '<svg class="iw-stage" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">',
      '<defs>',
      '<linearGradient id="iw-paper" x1="0" y1="0" x2="0" y2="1">',
      '<stop offset="0%" stop-color="#f8f3e8"/><stop offset="62%" stop-color="#f1e9d9"/><stop offset="100%" stop-color="#e7dcc7"/>',
      '</linearGradient>',
      '<radialGradient id="iw-vignette" cx="50%" cy="42%" r="75%">',
      '<stop offset="55%" stop-color="#5f5341" stop-opacity="0"/><stop offset="100%" stop-color="#5f5341" stop-opacity=".16"/>',
      '</radialGradient>',
      '<linearGradient id="iw-ink" x1="0" y1="0" x2="1" y2="1">',
      '<stop offset="0%" stop-color="#101216"/><stop offset="100%" stop-color="#23262c"/>',
      '</linearGradient>',
      '<filter id="iw-grain" x="0" y="0" width="100%" height="100%">',
      '<feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="3" stitchTiles="stitch"/>',
      '<feColorMatrix type="saturate" values="0"/>',
      '</filter>',
      '<filter id="iw-wash" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="16"/></filter>',
      '<filter id="iw-brush" x="-15%" y="-15%" width="130%" height="130%">',
      '<feTurbulence type="fractalNoise" baseFrequency="0.045 0.08" numOctaves="2" seed="11"/>',
      '<feDisplacementMap in="SourceGraphic" scale="3.4"/><feGaussianBlur stdDeviation="0.4"/>',
      '</filter>',
      '<filter id="iw-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="4"/></filter>',
      '<linearGradient id="iw-submerge-grad" x1="0" y1="606" x2="0" y2="690" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#000"/></linearGradient>',
      '<mask id="iw-submerge" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="900"><rect x="0" y="0" width="1440" height="900" fill="url(#iw-submerge-grad)"/></mask>',
      '<filter id="iw-ringblur" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="0.9"/></filter>',
      '<path id="iw-whale-path" d="M48.8354 10.0479C48.3232 9.79199 48.1025 10.2798 47.8032 10.5278C47.7007 10.6079 47.6143 10.7119 47.5273 10.8076C46.7793 11.624 45.9048 12.1597 44.7622 12.0957C43.0923 12 41.666 12.5356 40.4058 13.8398C40.1377 12.2319 39.2476 11.272 37.8926 10.6558C37.1836 10.3359 36.4668 10.0156 35.9702 9.31982C35.6235 8.82373 35.5293 8.27197 35.356 7.72754C35.2456 7.3999 35.1353 7.06396 34.7651 7.00781C34.3633 6.94385 34.2056 7.2876 34.0479 7.57568C33.418 8.75195 33.1733 10.0479 33.1973 11.3599C33.2524 14.312 34.4736 16.6641 36.8999 18.3359C37.1758 18.5278 37.2466 18.7197 37.1597 19C36.9946 19.5757 36.7974 20.1357 36.624 20.7119C36.5137 21.0801 36.3486 21.1597 35.9624 21C34.6309 20.4321 33.481 19.5918 32.4644 18.5757C30.7393 16.8721 29.1792 14.9917 27.2334 13.52C26.7764 13.1758 26.3193 12.856 25.8467 12.5518C23.8618 10.584 26.1069 8.96777 26.627 8.77588C27.1704 8.57568 26.8159 7.8877 25.0591 7.896C23.3022 7.90381 21.6953 8.50391 19.647 9.30371C19.3477 9.42383 19.0322 9.51172 18.7095 9.58398C16.8501 9.22363 14.9199 9.14355 12.9033 9.37598C9.10596 9.80762 6.07275 11.6396 3.84326 14.7681C1.16455 18.5278 0.53418 22.7998 1.30664 27.2559C2.11768 31.9521 4.46582 35.8398 8.07373 38.8799C11.8159 42.0322 16.1255 43.5762 21.041 43.2803C24.0269 43.104 27.3516 42.6963 31.1016 39.4561C32.0469 39.936 33.0396 40.1279 34.686 40.272C35.9546 40.3921 37.1758 40.208 38.1211 40.0078C39.6021 39.688 39.4995 38.2881 38.9639 38.0322C34.623 35.9678 35.5762 36.8081 34.71 36.1279C36.9155 33.4639 40.2402 30.6958 41.54 21.728C41.6426 21.0161 41.5557 20.5679 41.54 19.9917C41.5322 19.6396 41.6108 19.5039 42.0049 19.4639C43.0923 19.3359 44.1479 19.0317 45.1167 18.4878C47.9292 16.9199 49.064 14.3438 49.3315 11.2559C49.3711 10.7837 49.3237 10.2959 48.8354 10.0479ZM24.3262 37.8398C20.1196 34.4639 18.0791 33.3521 17.2358 33.3999C16.4482 33.4482 16.5898 34.3682 16.7632 34.9678C16.9443 35.5601 17.1812 35.9683 17.5117 36.4878C17.7402 36.832 17.8979 37.3442 17.2832 37.728C15.9282 38.584 13.5728 37.4399 13.4624 37.3838C10.7207 35.7358 8.42822 33.5601 6.81348 30.584C5.25342 27.7197 4.34766 24.6479 4.19775 21.3677C4.1582 20.5757 4.38672 20.2959 5.15869 20.1519C6.17529 19.96 7.22314 19.9199 8.23926 20.0718C12.5327 20.7119 16.1885 22.6719 19.2529 25.7759C21.002 27.5439 22.3252 29.6558 23.6885 31.7202C25.1377 33.9121 26.6978 36 28.6831 37.7119C29.3843 38.312 29.9434 38.7681 30.479 39.104C28.8643 39.2881 26.1699 39.3281 24.3262 37.8398ZM26.3433 24.6001C26.3433 24.248 26.6191 23.9678 26.9658 23.9678C27.0444 23.9678 27.1152 23.9839 27.1782 24.0078C27.2651 24.04 27.3438 24.0879 27.4067 24.1602C27.5171 24.272 27.5801 24.4321 27.5801 24.6001C27.5801 24.9521 27.3042 25.2319 26.9575 25.2319C26.6108 25.2319 26.3433 24.9521 26.3433 24.6001ZM32.6064 27.8799C32.2046 28.0479 31.8027 28.1919 31.4165 28.208C30.8179 28.2397 30.1641 27.9922 29.8096 27.688C29.2583 27.2158 28.8643 26.9521 28.6987 26.1279C28.6279 25.7759 28.6675 25.2319 28.7305 24.9199C28.8721 24.248 28.7144 23.8159 28.2495 23.4238C27.8716 23.104 27.3911 23.0161 26.8633 23.0161C26.666 23.0161 26.4849 22.9277 26.3511 22.856C26.1304 22.7441 25.9492 22.4639 26.1226 22.1201C26.1777 22.0078 26.4458 21.7358 26.5088 21.688C27.2256 21.272 28.0527 21.4077 28.8169 21.7197C29.5259 22.0161 30.0615 22.5601 30.834 23.3281C31.6216 24.2559 31.7632 24.5117 32.2124 25.208C32.5669 25.752 32.8901 26.312 33.1104 26.9521C33.2446 27.3521 33.0713 27.6802 32.6064 27.8799Z"/>',
      '</defs>',
      '<rect width="1440" height="900" fill="url(#iw-paper)"/>',
      '<rect width="1440" height="900" filter="url(#iw-grain)" opacity="0.2" style="mix-blend-mode:multiply"/>',
      '<rect width="1440" height="900" fill="url(#iw-vignette)"/>',
      '<ellipse class="iw-halo" cx="720" cy="430" rx="330" ry="150" fill="#17181c" opacity="0.05" filter="url(#iw-wash)"/>',
      '<ellipse class="iw-water" cx="720" cy="628" rx="430" ry="40" fill="#17181c" opacity="0.07" filter="url(#iw-wash)"/>',
      '<g class="iw-horizon" filter="url(#iw-ringblur)">',
      '<path d="M120 610 C 320 602 470 616 720 608 C 970 600 1140 612 1320 606" fill="none" stroke="#17181c" stroke-opacity="0.38" stroke-width="1.3" stroke-linecap="round"/>',
      '<path d="M250 626 C 420 620 560 632 760 624" fill="none" stroke="#17181c" stroke-opacity="0.16" stroke-width="1" stroke-linecap="round"/>',
      '</g>',
      '<g transform="translate(720 616)">',
      '<ellipse class="iw-ring iw-r1" rx="170" ry="22"/>',
      '<ellipse class="iw-ring iw-r2" rx="120" ry="16"/>',
      '<ellipse class="iw-ring iw-r3" rx="78" ry="11"/>',
      '</g>',
      '<ellipse class="iw-bloom" cx="720" cy="612" rx="150" ry="26" fill="#17181c" filter="url(#iw-wash)"/>',
      
      '<g mask="url(#iw-submerge)"><g class="iw-whale" fill="url(#iw-ink)"><use href="#iw-whale-path" transform="translate(538 298) scale(7.2)"/></g></g>',
      '<g fill="#17181c">',
      '<circle class="iw-drop" cx="648" cy="588" r="2.4" style="--dx:-30px;--dy:-46px;animation-delay:.78s"/>',
      '<circle class="iw-drop" cx="692" cy="596" r="1.7" style="--dx:-14px;--dy:-62px;animation-delay:.86s"/>',
      '<circle class="iw-drop" cx="742" cy="588" r="3" style="--dx:24px;--dy:-44px;animation-delay:.82s"/>',
      '<circle class="iw-drop" cx="806" cy="600" r="1.6" style="--dx:46px;--dy:-38px;animation-delay:.92s"/>',
      '<circle class="iw-drop" cx="664" cy="610" r="1.9" style="--dx:-44px;--dy:-22px;animation-delay:.96s"/>',
      '<circle class="iw-drop" cx="780" cy="612" r="2.2" style="--dx:38px;--dy:-28px;animation-delay:.9s"/>',
      '<circle class="iw-drop" cx="712" cy="602" r="1.4" style="--dx:-5px;--dy:-70px;animation-delay:1s"/>',
      '<circle class="iw-drop" cx="754" cy="606" r="1.8" style="--dx:15px;--dy:-64px;animation-delay:.94s"/>',
      '</g>',
      '</svg>',
      '<div class="iw-caption">',
      '<div class="iw-lockup"><span class="iw-wordmark">DeepSeek Harness</span><span class="iw-seal">鲸</span></div>',
      '<div class="iw-rule"></div>',
      '<div class="iw-tagline">鲸跃 · 与你同游</div>',
      '</div>'
    ].join('')

    function start() {
      var style = document.createElement('style')
      style.id = 'iw-splash-style'
      style.textContent = CSS
      ;(document.head || document.documentElement).appendChild(style)

      var box = document.createElement('div')
      box.id = 'iw-splash'
      box.setAttribute('aria-hidden', 'true')
      box.innerHTML = MARKUP
      ;(document.body || document.documentElement).appendChild(box)

      var gone = false
      function remove() {
        if (gone) return
        gone = true
        try {
          if (box.parentNode) box.parentNode.removeChild(box)
        } catch (err) {}
      }
      function leave() {
        try {
          box.classList.add('iw-leave')
        } catch (err) {}
        setTimeout(remove, 800)
      }
      setTimeout(leave, 3950)
      setTimeout(remove, 4750)
      document.addEventListener('keydown', function (event) {
        try {
          if (event.key === 'Escape' || event.keyCode === 27) leave()
        } catch (err) {}
      })
    }

    var started = false
    var fallback = null
    function begin() {
      if (started) return
      started = true
      if (fallback) {
        clearTimeout(fallback)
        fallback = null
      }
      document.removeEventListener('visibilitychange', onVisibility)
      start()
    }
    function onVisibility() {
      if (document.visibilityState === 'visible') begin()
    }
    if (document.visibilityState === 'visible') {
      begin()
    } else {
      document.addEventListener('visibilitychange', onVisibility)
      fallback = setTimeout(begin, 15000)
    }
  } catch (err) {}
})()
