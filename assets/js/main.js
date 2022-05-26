// {
//   "works": [
//     {
//       "id": 1,
//       "slug": "getflix",
//       "name": "Getflix",
//       "desc": "Потоковый сервис, который предлагает широкий выбор отмеченных фильмов, сериалов, аниме и т.д.",
//       "preview": "work1.jpg",
//       "color": "#C63636",
//       "role": ["Дизайн", "Фронтенд"],
//       "stack": ["TypeScript", "React"]
//     },
//     {
//       "id": 2,
//       "slug": "gemma-russia",
//       "name": "Gemma Russia",
//       "desc": "Интернет-магазин корейской продукции, в приятных тонах.",
//       "preview": "work2.jpg",
//       "color": "#6A4242",
//       "role": ["Дизайн", "Фронтенд", "Бэкенд"],
//       "stack": ["TypeScript", "Next.js", "Node.js", "PosgreSQL"]
//     },
//     {
//       "id": 3,
//       "slug": "business-course",
//       "name": "Сайт бизнес-курса",
//       "desc": "Бизнес-курс “Искусство личных продаж МЛМ-предпринимателя 2022”.",
//       "preview": "work3.jpg",
//       "color": "radial-gradient(#FFA53C, #FF3C3C)",
//       "role": ["Дизайн", "Разработка"],
//       "link": "https://superstartmlm.ru"
//     }
//   ]
// }
window.onload = function() {
  gsap.to('.preloader p', {
    duration: .5,
    opacity: 0,
    y: 10,
    ease: Expo.easeOut
  })
  gsap.to('.preloader-circle', {
    duration: .5,
    opacity: 0,
    ease: Expo.easeOut
  })
  gsap.to('.preloader', {
    duration: .5,
    scaleY: 0,
    delay: .5,
    ease: Expo.easeOut
  })
  setTimeout(() => $('.preloader').remove(), 1100)
  splitTextAnimation($('.first h1'), 1)
  gsap.to('.header .header-menu li .link', {
    duration: .2,
    y: 0,
    delay: 1.3,
    ease: Expo.easeIn,
    stagger: .1
  })
  gsap.to('.header-logo', {
    duration: .3,
    y: 0,
    opacity: 1,
    delay: 1.2,
    ease: Expo.easeIn
  })
  gsap.to('.header .header-button', {
    duration: .3,
    y: 0,
    opacity: 1,
    delay: 1.6,
    ease: Expo.easeIn
  })
  gsap.to('.header-burger', {
    duration: .3,
    delay: 1.2,
    onStart: () => $('.header-burger')?.classList.add('animated')
  })
  gsap.fromTo('.first-arrow', {
    scale: .3,
    opacity: 0
  }, {
    duration: .5,
    scale: 1,
    y: 0,
    x: 0,
    opacity: 1,
    delay: 1.2,
    ease: Expo.easeInOut
  })
}

function $(query, parent) {
  if (parent) return parent.querySelector(query)
  return document.querySelector(query)
} 
function $all(query, parent) {
  if (parent) return parent.querySelectorAll(query)
  return document.querySelectorAll(query)
}

function dragEl(el, num, onEnter, onLeave) {
  el.addEventListener('mousemove', e => {
    const hWidth = e.target.offsetWidth / 2
    const hHeight = e.target.offsetHeight / 2
    const x = e.offsetX > hWidth ? e.offsetX - hWidth : -(hWidth - e.offsetX)
    const y = e.offsetY > hHeight? e.offsetY - hHeight : -(hHeight - e.offsetY)
    el.style.transform = `translate(${x/num}px, ${y/num}px)`
  })
  el.addEventListener('mouseenter', () => {
    if (onEnter) onEnter()
  })
  el.addEventListener('mouseleave', () => {
    el.style.transform = `translate(0, 0)`
    if (onLeave) onLeave()
  })
}   
  
// Split text
$all('.split-text').forEach(el => {
  new SplitType(el, { types: 'lines' })
})


/***********************************************
  Locomotive Scroll 
***********************************************/
const scrollContainer = $('[data-scroll-container]')
const locoScroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
  multiplier: .7,
  tablet: {
    breakpoint: 992
  }
})

locoScroll.on('scroll', ScrollTrigger.update)
ScrollTrigger.scrollerProxy(scrollContainer, {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight}
  },
  pinType: scrollContainer.style.transform ? 'transform' : 'fixed'
})

ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
ScrollTrigger.refresh()

setTimeout(() => {
  const hash = localStorage.getItem('hash')
  if (hash) {
    locoScroll.scrollTo(hash)
    localStorage.removeItem('hash')
  }
}, 500)

$all('[data-hash]')?.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    let dataHash = link.getAttribute('data-hash')
    const path = dataHash.split('#')[0]
    const hash = dataHash.replace(path, '')
    
    if (!path) {
      locoScroll.scrollTo(hash)
    } else {
      if (window.location.pathname === path) {
        return locoScroll.scrollTo(hash)
      }
      localStorage.setItem('hash', hash)
      window.location = path
    }
  })
})
    

/***********************************************
  Custom cursor
***********************************************/
const cursor = $('.cursor')
const cursorInner = $('.cursor-inner')

document.addEventListener('mousemove', e => {
  cursor.style.left = e.pageX + 'px'
  cursor.style.top = e.pageY + 'px'
})
document.addEventListener('mousedown', () => cursor.classList.add('click'))
document.addEventListener('mouseup', () => cursor.classList.remove('click'))
  
$all('.work').forEach(w => {
  const workBg = w.querySelector('.work-bg')
  w.addEventListener('mouseenter', () => {
    cursor.classList.add('hover-work')
    cursor.style.background = w.getAttribute('data-color')
    workBg.style.backgroundImage = `url('${w.querySelector('img')?.getAttribute('src')}')`
    workBg.classList.add('active')
  })
  w.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-work')
    cursor.style.background = '#fff'
    workBg.style.backgroundImage = 'none'
    workBg.classList.remove('active')
  })
})


$all('.link, .header-burger').forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.classList.add('hover-link')
  })
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-link')
  })
})

$all('.pagination-item .link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    dragEl(link, 8)
    const arrow = link.querySelector('.arrow')
    dragEl(arrow, 10)
  })
})

$all('.button').forEach(button => {
  dragEl(button, 8, () => cursor.classList.add('hover-link'), () => cursor.classList.remove('hover-link'))
})
  
// Inputs
const inputs = document.querySelectorAll('.input')
$all('.input').forEach(input => {
  input.addEventListener('change', e => {
    const { value } = e.target
    e.target.value = value.trim()
    if (value) input.classList.add('filled')
    else input.classList.remove('filled')
  })
  input.addEventListener('mouseenter', () => {
    cursor.classList.add('hover-input')
  })
  input.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-input')
  })
})
  
// Arrow
$all('.arrow:not(.pagination__arrow)')?.forEach(arrow => {
  if (!arrow) return
  dragEl(arrow, 8, () => {
    cursor.classList.add('hover-link')
  }, () => {
    cursor.classList.remove('hover-link')
  })
})
    
// Header menu
const header = $('.header')
const menuLinks = $all('.header-menu .link')

let oldY = 0
locoScroll.on('scroll', e => {
  console.log(e)
  if (e.scroll.y > header.offsetHeight && e.scroll.y > oldY) {
    header.classList.add('hidden')
  } else {
    header.classList.remove('hidden')
  }
  oldY = e.scroll.y
})

menuLinks.forEach(l => {
  l.addEventListener('mouseenter', () => {
    menuLinks.forEach(x => x.classList.add('not-active'))
    l.classList.remove('not-active')
  })
})
header.addEventListener('mouseleave', () => {
  menuLinks.forEach(x => x.classList.remove('not-active'))
})

const headerBurger = $('.header-burger')
const headerMobile = $('.header-mobile')

function showMobileHeader() {
  headerBurger.classList.add('close')
  headerMobile.classList.add('active')

  gsap.to('.header-mobile', {
    duration: .2,
    x: 0,
    ease: Expo.easeIn
  })
  gsap.to('.header-mobile .header-menu .link', {
    duration: .2,
    y: 0,
    delay: .2,
    ease: Expo.easeIn,
    stagger: .1
  })
  gsap.to('.header-mobile .header-button', {
    duration: .3,
    y: 0,
    opacity: 1,
    delay: .6,
    ease: Expo.easeIn
  })
}

function hideMobileHeader() {
  headerBurger.classList.remove('close')
  headerMobile.classList.remove('active')

  gsap.to('.header-mobile', {
    duration: .2,
    delay: .4,
    x: '100%',
    ease: Expo.easeIn
  })
  gsap.to('.header-mobile .header-menu li .link', {
    duration: .2,
    y: '100%',
    ease: Expo.easeIn,
    stagger: .1
  })
  gsap.to('.header-mobile .header-button', {
    duration: .3,
    y: 10,
    opacity: 0,
    ease: Expo.easeIn
  })
}


headerBurger.addEventListener('click', () => {
  if (!headerBurger.classList.contains('close')) {
    showMobileHeader()
  } else {
    hideMobileHeader()
  }
})

$all('.header-mobile .header-menu .link, .header-mobile .header-button').forEach(el => {
  el.addEventListener('click', () => {
    if (headerMobile.classList.contains('active')) {
      hideMobileHeader()
    }
  })
})


/***********************************************
  GSAP Animations
***********************************************/

function scrollTriggerDef(trigger, start) {
  if (!start) {
    start = window.offsetWidth <= 768 ? 'top 90%' : 'top 60%'
  }
  return {
    scroller: scrollContainer,
    trigger,
    start,
  }
}

function splitTextAnimation(node, delay = 0) {
  if (!node) return
  gsap.to(node.querySelectorAll('.line'), {
    scrollTrigger: scrollTriggerDef(node),
    duration: .5,
    rotateX: 0,
    y: 0,
    z: 0,
    opacity: 1,
    stagger: .08,
    delay,
    ease: CustomEase.create('custom', 'M0,0 C0,0 0.025,0.603 0.45,0.84 0.694,0.976 1,1 1,1'),
    onComplete: () => node.classList.add('detect')
  })
}

$all('.split-text')?.forEach(text => {
  splitTextAnimation(text)
})

$all('.image').forEach(img => {
  gsap.to(img, {
    scrollTrigger: scrollTriggerDef(img),
    duration: .2,
    opacity: 1,
    y: 0,
    // ease: CustomEase.create("custom", "M0,0,C0,0,0.138,0.498,0.416,0.812,0.557,0.972,1,1,1,1")
  })
  gsap.to(img.querySelector('img'), {
    scrollTrigger: scrollTriggerDef(img),
    duration: .2,
    scale: 1,
    // ease: CustomEase.create("custom", "M0,0,C0,0,0.138,0.498,0.416,0.812,0.557,0.972,1,1,1,1")
  })
})

