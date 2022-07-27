function darken_screen(yesno){
		if( yesno == true ){
			document.querySelector('.screen-darken').classList.add('active');
		}
		else if(yesno == false){
			document.querySelector('.screen-darken').classList.remove('active');
		}
	}
	
	function close_offcanvas(){
		darken_screen(false);
		document.querySelector('.mobile-offcanvas.show').classList.remove('show');
		document.body.classList.remove('offcanvas-active');
	}

	function show_offcanvas(offcanvas_id){
		darken_screen(true);
		document.getElementById(offcanvas_id).classList.add('show');
		document.body.classList.add('offcanvas-active');
	}

	document.addEventListener("DOMContentLoaded", function(){
		document.querySelectorAll('[data-trigger]').forEach(function(everyelement){
			
			let offcanvas_id = everyelement.getAttribute('data-trigger');
			
			everyelement.addEventListener('click', function (e) {
				e.preventDefault();
	        	show_offcanvas(offcanvas_id);
	  			
			});
		});

		document.querySelectorAll('.btn-close').forEach(function(everybutton){
			
			everybutton.addEventListener('click', function (e) {
				e.preventDefault();
	        	close_offcanvas();
	  		});
		});

		document.querySelector('.screen-darken').addEventListener('click', function(event){
			close_offcanvas();
		});
		
    }); 
	// DOMContentLoaded  end





// SubMenu icons


	jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 992) 
    {
      $('.sub-icon').removeClass('fa-caret-right');
    } 
    {
      $('.sub-icon').addClass('fa-caret-down');
    } 
    
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});