const slides = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(slides);


// IL MIO CODICE PARTE DA QUI:

const { createApp } = Vue;
// Questo codice definisce un'istanza Vue che contiene un array di oggetti slides contenenti l'immagine, il titolo e il testo per ciascuno degli slide del carousel.
createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            // Dentro return definisco una variabile currentSlide che tiene traccia dell'indice dello slide corrente.
            currentSlide: 0,
            // autoplay allo slider
            autoplayIntervallo: null
        }
    },

    created() {
        this.startAutoplay();
    },
    // accanto a data() e created() definisco i metodi nextSlide e prevSlide per navigare avanti e indietro tra gli slide del carosello + startAutoplay e stopAutoplay che comunicano in index.html a riga18
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        },
        startAutoplay() {
            this.autoplayIntervallo = setInterval(() => {
                this.nextSlide();
            }, 3000);
        },
        stopAutoplay() {
            clearInterval(this.autoplayIntervallo);
        }
    }
}).mount('#app');








    // accanto a data() definisco i metodi nextSlide e prevSlide per navigare avanti e indietro tra gli slide del carosello
//     methods: {
//         nextSlide() {
//             this.currentSlide = (this.currentSlide + 1) % this.slides.length;
//         },
//         prevSlide() {
//             this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
//         }
//     }
// }).mount('#app');
