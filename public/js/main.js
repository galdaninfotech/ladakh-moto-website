/*!
* jQuery meanMenu v2.0.8
* @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
*
*/
/*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
* HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
* FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
* OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
* COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
* BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
* DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
*
* You should have received a copy of the GNU General Public License
* along with this program. If not, see <http://gnu.org/licenses/>.
*
* Find more information at http://www.meanthemes.com/plugins/meanmenu/
*
*/

!function(e){"use strict";e.fn.meanmenu=function(n){var a={meanMenuTarget:jQuery(this),meanMenuContainer:".mobile-menu-area",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"1199",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""};n=e.extend(a,n);var t=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var e=n.meanMenuTarget,a=n.meanMenuContainer,r=n.meanMenuClose,i=n.meanMenuCloseSize,u=n.meanMenuOpen,m=n.meanRevealPosition,s=n.meanRevealPositionDistance,l=n.meanRevealColour,o=n.meanScreenWidth,c=n.meanNavPush,h=".meanmenu-reveal",v=n.meanShowChildren,d=n.meanExpandableChildren,y=n.meanExpand,j=n.meanContract,Q=n.meanRemoveAttrs,f=n.onePage,g=n.meanDisplay,p=n.removeElements,C=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(C=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var w="",x=function(){if("center"===m){var e=window.innerWidth||document.documentElement.clientWidth,n=e/2-22+"px";w="left:"+n+";right:auto;",C?jQuery(".meanmenu-reveal").animate({left:n}):jQuery(".meanmenu-reveal").css("left",n)}},A=!1,E=!1;"right"===m&&(w="right:"+s+";left:auto;"),"left"===m&&(w="left:"+s+";right:auto;"),x();var M="",P=function(){jQuery(M).is(".meanmenu-reveal.meanclose")?M.html(r):M.html(u)},W=function(){jQuery(".mean-bar,.mean-push").remove(),jQuery(a).removeClass("mean-container"),jQuery(e).css("display",g),A=!1,E=!1,jQuery(p).removeClass("mean-remove")},b=function(){var n="background:"+l+";color:"+l+";"+w;if(o>=t){jQuery(p).addClass("mean-remove"),E=!0,jQuery(a).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" aria-label="Toggle Menu" class="meanmenu-reveal" style="'+n+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var r=jQuery(e).html();jQuery(".mean-nav").html(r),Q&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).is(".mean-remove")?jQuery(this).attr("class","mean-remove"):jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(e).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",c),jQuery(e).hide(),jQuery(".meanmenu-reveal").show(),jQuery(h).html(u),M=jQuery(h),jQuery(".mean-nav ul").hide(),v?d?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+i+'">'+y+"</a>")}),jQuery(".mean-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(y),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(j),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),M.removeClass("meanclose"),jQuery(M).click(function(e){e.preventDefault(),A===!1?(M.css("text-align","center"),M.css("text-indent","0"),M.css("font-size",i),jQuery(".mean-nav ul:first").slideDown(),A=!0):(jQuery(".mean-nav ul:first").slideUp(),A=!1),M.toggleClass("meanclose"),P(),jQuery(p).addClass("mean-remove")}),f&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),A=!1,jQuery(M).toggleClass("meanclose").html(u)})}else W()};C||jQuery(window).resize(function(){t=window.innerWidth||document.documentElement.clientWidth,t>o,W(),o>=t?(b(),x()):W()}),jQuery(window).resize(function(){t=window.innerWidth||document.documentElement.clientWidth,C?(x(),o>=t?E===!1&&b():W()):(W(),o>=t&&(b(),x()))}),b()})}}(jQuery);



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



// Hide All Email links from Bot Harvesters
const emailElem = document.querySelectorAll('.email-link');
emailElem.forEach((elem) => {
    const user = 'info';
    const domain = 'ladakhmoto.com';
    elem.href = 'mailto:' + user + '@' + domain;
    elem.innerText = user + '@' + domain;
});