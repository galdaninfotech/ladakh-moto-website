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



