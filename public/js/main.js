/*================================================
[  Table of contents  ]
================================================*/


(function ($) {
 "use strict";
    jQuery(document).ready(function($){


	/* ==== 02. jQuery MeanMenu Active ==== */
	if ($('.gene-nav').length) {
		jQuery('.gene-nav').meanmenu();	
	}	
	
    });

    var current_page_URL = location.href;
      

	/* ==== 21. Preloader ==== */
	$(window).on('load',function(){
		jQuery(".preloader-wrap").fadeOut(500);
	});

	
})(jQuery); 



/*================================================
[  Slider  ]
================================================*/
const html = document.querySelector('html');
html.setAttribute('data-bs-theme', 'dark');

function ready (fn) {
  if (document.readyState != 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

ready(() => {
  // --- Function to add and remove CSS animation classes
  function doAnimations(elems) {
    const animEndEv = 'animationend';

    elems.forEach((elem) => {
      elem.classList.add('animate__animated', 'animate__flipInX');
      elem.addEventListener(animEndEv, () => {
        elem.classList.remove('animate__animated', 'animate__flipInX');
      });
    });
  }

  // --- Variables on page load
  const carouselKenBurns = document.querySelector('#carouselKenBurns');
  if(carouselKenBurns) {
      const firstAnimatingElems = Array.from(
        carouselKenBurns.querySelector('.carousel-item:first-child')
          .querySelectorAll("[data-animation^='animated']")
    );

    // --- Animate captions in the first slide on page load
    doAnimations(firstAnimatingElems);
    
    // --- Other slides to be animated on carousel slide event
    carouselKenBurns.addEventListener('slid.bs.carousel', (e) => {
      const animatingElems = Array.from(e.relatedTarget.querySelectorAll("[data-animation^='animated']"));
      doAnimations(animatingElems);
    });
  }


})



/*================================================
[  Intro Toggle Slide Up/Down  ]
================================================*/
var container = document.querySelector('p.more-intro')
var button    = document.querySelector('.readmore-button')

if(button) {
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
}

/*================================================
[  Popup Enquiry  ]
================================================*/
function closeForm() {
    $('.form-popup-bg').removeClass('is-visible');
}

$(document).ready(function($) {
    /* Contact Form Interactions */
    $('.btnOpenForm').on('click', function(event) {
        event.preventDefault();
        const el = document.querySelector(".tour-name");
        const tourName = el.getAttribute("data-tour-name");
        // alert(tourName);

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


/*================================================
[  Sidebar margin fix  ]
================================================*/
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll);
    if( document.getElementById("sidebar")) {
        if(scroll < 600) {
            document.getElementById("sidebar").style.marginTop = "128px";
        } else {
            document.getElementById("sidebar").style.marginTop = "0px";
        }
    }
});

