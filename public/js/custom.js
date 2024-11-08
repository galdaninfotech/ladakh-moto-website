//Intro Toggle Slide Up/Down
var container = document.querySelector('p.more-intro')
var button    = document.querySelector('.readmore-button')

button.addEventListener('click', () => {
	/** Slide down. */
    if(!container.classList.contains('active')) {
		/** Show the container. */
    	container.classList.add('active')
        container.style.height = "auto"
        
		/** Get the computed height of the container. */
    	var height = container.clientHeight + "px"

		/** Set the height of the content as 0px, */
        /** so we can trigger the slide down animation. */
        container.style.height = "0px"

		/** Do this after the 0px has applied. */
        /** It's like a delay or something. MAGIC! */
        setTimeout(() => {
            container.style.height = height
        }, 0) 

        button.innerHTML = 'Read Less <i class="fa fa-angle-up" aria-hidden="true"></i>'
    
	/** Slide up. */
    } else {
    	/** Set the height as 0px to trigger the slide up animation. */
    	container.style.height = "0px"
        
        /** Remove the `active` class when the animation ends. */
    	container.addEventListener('transitionend', () => {
        	container.classList.remove('active')
        }, {once: true})

        button.innerHTML = 'Read More <i class="fa fa-angle-down" aria-hidden="true"></i>'
    }
})

// ************************************ Popup Enquiry
function closeForm() {
    $('.form-popup-bg').removeClass('is-visible');
}

$(document).ready(function($) {
    /* Contact Form Interactions */
    $('.btnOpenForm').on('click', function(event) {
        event.preventDefault();
        const el = document.getElementById("tour-name");
        const tourName = el.getAttribute("data-tour-name");
        alert(tourName);

        $('.form-popup-bg').addClass('is-visible');
    });
    
        //close popup when clicking x or off popup
    $('.form-popup-bg').on('click', function(event) {
        if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
        event.preventDefault();
        $(this).removeClass('is-visible');
        }
    });        
});

// ****************************************** Sidebar marging fix 
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll);
    if(scroll < 600) {
        document.getElementById("sidebar").style.marginTop = "128px";
    } else {
        document.getElementById("sidebar").style.marginTop = "0px";
    }
});

// ****************************************** Testimonials

var	testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}


