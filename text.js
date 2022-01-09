const hero = document.querySelector(".hero h1");
const sub = document.querySelector(".hero h2");
let nav = document.querySelector("nav ul li");
gsap.set("nav ul li", {
    opacity: 0,
    y: -100
})
let string = hero.textContent.split("");
hero.textContent = "";

let str = [...sub.textContent];
console.log(str);
sub.textContent = "";
const timeline = gsap.timeline({
    defaults: {
        duration: 1.0,
        ease: "Power3.easeOut"
    }
});
string.forEach(s => {
    hero.innerHTML += `<span class = "char">${s}</span>`;
});

gsap.fromTo('.container', {
    width: 0,
    height: 0
}, {
    width: "100%",
    height: "100%",
    delay: 1,
})


gsap.set('.char', {
    display: 'inline-block'
})

gsap.fromTo(".char", {
    //y: "-100%",
    //x: "-100%",
    scale: 100,
    y: -100,
    //x: -100,
    opacity: 0,
    //rotationY: '270deg'
}, {
    y: 0,
    //x: 0,
    scale: 1,
    opacity: 1.0,
    //rotationY: '0deg',
    stagger: 0.1,
    delay: 0.5
}, "<50%");



gsap.to('nav ul li', {
    y: 0,
    opacity: 1.0,
    delay: 0.5,
    stagger: 0.5
}, "<100%")





str.forEach((s, i) => {
    sub.innerHTML += `<span class = "lt">${s == ' ' ? s = '&nbsp;' : s}</span>`
});

gsap.set('.lt', {
    display: 'inline-block'
});

gsap.fromTo('.lt', {
    opacity: 0
}, {
    opacity: 1.0,
    stagger: 0.1,
    delay: 0.5,
    duration: 0.000001
    
}, "<100%");

gsap.fromTo('footer', {
    opacity: 0
}, {
    opacity: 1.0,
    delay: 0.5
}, "<100%");


document.querySelector("nav ul li")
.addEventListener('click', () => {
    gsap.to('.container', {
        width: "80%"
    })
})