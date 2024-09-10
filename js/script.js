// |-----| Scroll Effect function |-----| //
function userScroll() {
    const navbar = document.querySelector('.navbar');

    if (navbar) { 
        const handleScroll = () => {
            if (window.scrollY > 0) {
                navbar.classList.add('navbar-sticky');
            } else {
                navbar.classList.remove('navbar-sticky');
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();
    }
}
// |-----| Scroll Effect function |-----| //

document.addEventListener('DOMContentLoaded', userScroll);