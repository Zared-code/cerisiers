// INSTALLATION NAVBAR
const navbar = document.getElementById('navbar');
navbar.innerHTML= `<div class="navbar">
<div class="name">
    <h2>SOUS LES CERISIERS</h2>
</div>
<div class="hamburger">
    <div class="hamburger__btn"></div>
</div>
<div class="navbar__list">
    <div class="navbar__list--brand">
        <img src="img/cerisier-hero.jpg" alt="image de cerisier"/>
        <div class="info">
            <h3>Sous les cerisiers</h3>
            <p>lolimeglet@gmail.com</p>
            <p>07 76 73 91 68</p>
        </div>
    </div>
    <div class="navbar__list--items">
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="hypnose-thérapeutique.html">L'hypnose</a></li>
            <li><a href="consultation.html">Consultation</a></li>
            <li><a href="séance.html">Séance</a></li>
            <li><a href="parcours.html">Parcours</a></li>
            <li><a href="index.html#tarifs">Tarifs</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>
</div>
</div>`;
// FIN INSTALLATION NAVBAR


// INSTALLATION FOOTER
const footer = document.getElementById('footer');
footer.innerHTML= `<footer>
<p>© 2021 - Sous les cerisiers</p>
<a href="#">Mentions légales</a>
<a href="#">Contact</a>
</footer>`;
// FIN INSTALLATION FOOTER


// NAVBAR
const menuBtn = document.querySelector('.hamburger');
const ListMenu = document.querySelector('.navbar');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        ListMenu.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        ListMenu.classList.remove('open');
        menuOpen = false;
    }
})
// FIN NAVBAR




// ANIMATION
gsap.registerPlugin(ScrollTrigger);

const sectiontitle = gsap.utils.toArray('.sectiontitle');
sectiontitle.forEach(title => {
  gsap.from(title, { 
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: title,
      start: "top 90%"
    }
  })
  gsap.to(title, { 
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: title,
      start: "top 90%"
    }
  })
});


const left = gsap.utils.toArray('.leftanim');
left.forEach(element => {
  gsap.from(element, { 
    x: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%"
    }
  })
  gsap.to(element, { 
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%"
    }
  })
});

const right = gsap.utils.toArray('.rightanim');
right.forEach(element => {
  gsap.from(element, { 
    x: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%"
    }
  })
  gsap.to(element, { 
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%"
    }
  })
});

// FIN ANIMATIONS