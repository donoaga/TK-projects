
	//BASKET COUNTER
var basket=0;
$('.add-to-cart').click(function(){
	if($(this).attr('class')=="add-to-cart"){
		basket++;
		$(this).css("background-color","grey");
		$(this).attr("class","remove-from-chart");
		$(this).text('Remove from Cart');

	} else{
		basket--;
		$(this).css("background-color","#3853d8");
		$(this).attr("class","add-to-cart");
		$(this).text('+ Add To Cart');
	}
	$('#basket-circle').text(basket);
});

	//PRODUCTS QUANTITY	
	
$('.count-block').click(function(e){
	var nbr = parseInt($(this).find('input[type="text"]').val());
	if($(e.target).prop('class')=="minus"){
		nbr--;
	} else if($(e.target).prop('class')=="plus"){
		console.log($(this));
		nbr++;
	}
	$(this).find('input[type="text"]').val(nbr);
});


	//THE FILTERS ANIMATION
$('#categories-button').click(function(){
	$('#categories-filter').animate({
		height:'350px',
		duration: 400, 
        easing: 'easeOutQuad'
	});
	$('#exit1').css("opacity","1");
	$('#rotate-filter').css({transform: 'rotate(-360deg)',
	 	transition: 'transform 2s'});
})

$('#size-button').click(function(){
	$('#size-filter').animate({
		height:'150px',
		duration: 400, 
        easing: 'easeOutQuad'
	});
	$('#exit2').css("opacity","1");
	$('#rotate-filter').css({transform: 'rotate(-360deg)',
	 	transition: 'transform 2s'});

})

$('#exit1').click(function(){
	$('#categories-filter').animate({
		height:'70px',
		duration: 400, 
        easing: 'easeOutQuad'
	});
	$('#exit1').css("opacity","0");
	$('#rotate-filter').css({transform: 'rotate(360deg)',
	 	transition: 'transform 2s'});
})

$('#exit2').click(function(){
	$('#size-filter').animate({
		height:'70px',
		duration: 400, 
        easing: 'easeOutQuad'
	});
	$('#exit2').css("opacity","0");
	$('#rotate-filter').css({transform: 'rotate(360deg)',
	 	transition: 'transform 2s'});
});
