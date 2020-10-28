/**
 * @author Francisco Javier González Sabariego
 */
{
    let init = () => {
        const [...slides]      = [...document.getElementsByTagName("div")].filter( e => e.id.match(/^\d{1,}$/) );
        const containerButtons = document.getElementById("container-buttons");
        let buttons            = false;
        let fragment           = new DocumentFragment();
        let currentSlide       = 0;
        let fullScreenSlide    = false;

        const disableCurrentSlide = () => {
            slides[currentSlide].classList = "slide-hide";
            buttons[currentSlide].classList.toggle("active-button");
        }

        const enableCurrentSlide = () => {
            slides[currentSlide].classList = fullScreenSlide ? "slide slide-active max" : "slide slide-active";
            buttons[currentSlide].classList.toggle("active-button");
        }

        const previousOrNextSlide = key => {
            switch (key) {
                case ( key.match(/^ArrowRight|ArrowUp$/) || false ).input:
                    return currentSlide === slides.length - 1 ? currentSlide : ++currentSlide;
                case ( key.match(/^ArrowLeft|ArrowDown$/) || false ).input:
                    return currentSlide === 0 ? 0 : --currentSlide;
                default:
                    return currentSlide;
            }
        }
        
        const changeSlide = function(e) {
            disableCurrentSlide();
            currentSlide = e.type === "click" ? this.innerHTML - 1 : ( previousOrNextSlide(e.key) );
            enableCurrentSlide();
        }

        const toggleFullScreen = e => {
            e.key === "Escape" || e.key === "F11" && fullScreenSlide ? 
            (slides[currentSlide].classList = "slide slide-active",fullScreenSlide = false) : 
            (slides[currentSlide].classList = "slide slide-active max",fullScreenSlide = true);
        }

        slides.forEach( (e,i) => {
            const button     = document.createElement("div");
            button.classList = i === 0 ? "button active-button" : "button";
            button.id        = `b${i}`;
            button.innerHTML = `${i + 1}`;
            button.addEventListener("click", changeSlide);
            fragment.appendChild(button);
        })

        containerButtons.appendChild(fragment);
        
        [...buttons] = [...document.getElementsByTagName("div")].filter( e => e.id.match(/^b\d{1,}$/) );

        document.addEventListener("keydown", e => {
            e.key === "Escape" || e.key === "F11" ? (toggleFullScreen(e)) : ( changeSlide(e) );
        })
    }

    document.addEventListener("DOMContentLoaded", init);
}