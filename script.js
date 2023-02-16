const posts = document.querySelector('.posts')
const navMenu = document.querySelector('nav')
const searchIcon = document.querySelector('.search')
const burgerMenu = document.querySelector('.burgerMenu')
const closeBugerMenu = document.querySelector('.closeBugerMenu')
let media768min = window.matchMedia("(min-width: 768px)")
let post = null



const postsData = [
    {
        img: './img/1.jpg',
        retina: './img/1@2x.jpg , ./img/1@3x.jpg',
        style: "Lifestyle",
        title: 'Eat Right For Your Exercise Regime',

    },
    {
        img: './img/2.jpg',
        retina: './img/2@2x.jpg , ./img/2@3x.jpg',
        style: "Lifestyle",
        title: 'The Look: Perfect Balance'
    },
    {
        img: './img/3.jpg',
        retina: './img/3@2x.jpg , ./img/3@3x.jpg',
        style: "Style",
        title: 'Fun Things to Do in Rome'
    },
    {
        img: './img/4.jpg',
        retina: './img/4@2x.jpg , ./img/4@3x.jpg',
        style: "Style",
        title: '24 Colorful Ceilings That Add Unexpected Contrast to Any Room'
    },
    {
        img: './img/5.jpg',
        retina: './img/5@2x.jpg , ./img/5@3x.jpg',
        style: "Lifestyle",
        title: '9 New Songs to Heat Up Your Fall Playlist'
    },
    {
        img: './img/6.jpg',
        retina: './img/6@2x.jpg , ./img/6@3x.jpg',
        style: "Events",
        title: 'What You Need on Your Bedside Table'
    },
    {
        img: './img/7.jpg',
        retina: './img/7@2x.jpg , ./img/7@3x.jpg',
        style: "Travel",
        title: 'When Two Wheels Are Better Than Four'
    },
    {
        img: './img/8.jpg',
        retina: './img/8@2x.jpg , ./img/8@3x.jpg',
        style: "Travel",
        title: '26 Living Room Ideas from the Homes of Top Designers'
    },
    {
        img: './img/9.jpg',
        retina: './img/9@2x.jpg , ./img/9@3x.jpg',
        style: "Music",
        title: 'What Makes Your City’s Style Unique'
    }
]

postsData.forEach(postBlok => {
    post = document.createElement('div')
    posts.appendChild(post)
    post.className = 'post'
    const img = document.createElement('img')
    post.appendChild(img)
    img.src = postBlok.img
    img.srcset = postBlok.retina
    const meaning = document.createElement('h3')
    post.appendChild(meaning)
    meaning.innerText = postBlok.style
    const title = document.createElement('h2')
    post.appendChild(title)
    title.innerText = postBlok.title
    const data = document.createElement('div')
    data.className = 'data'
    post.appendChild(data)
    const name = document.createElement('h4')
    data.appendChild(name)
    name.innerText = "Niek Bove"
    name.className = 'name'
    const date = document.createElement('h4')
    data.appendChild(date)
    date.innerText = "April 8, 2018"
    date.className = 'date'
    const views = document.createElement('h4')
    data.appendChild(views)
    views.innerText = "3K Views"
    views.className = 'views'
    const info = document.createElement('p')
    post.appendChild(info)
    info.innerText = "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
})

function mediaSize() {
    if (media768min.matches) {
        function navMenuPosition() {
            const position = window.scrollY
            position >= 200 ? navMenu.style.top = "-150px" : navMenu.style.top = "0"
        }
    }
    document.removeEventListener('scroll', navMenuPosition)
    document.addEventListener('scroll', navMenuPosition)
}
mediaSize()

media768min.addListener(mediaSize)

burgerMenu.addEventListener('click', () => {
    navMenu.style.left = "0"
})
closeBugerMenu.addEventListener('click', () => {
    navMenu.style.left = "-100%"
})

navMenu.addEventListener('click', (event) => {
    if (event.target.className !== 'navList')
        navMenu.style.left = "-100%"
})
