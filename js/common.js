const handleScroll = () => {
    const scrolled = window.scrollY;
    const navbar = document.getElementById('navbar');

    if (scrolled > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
}

document.addEventListener('scroll', handleScroll);


/* 
    | //
   ( @ @ )
ooO__(_)__Ooo
٩(͡๏̯͡๏)۶
*/