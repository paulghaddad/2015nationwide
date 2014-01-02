$("#requirements-tile").on("hover",function(){  
	$("div.tile").toggleClass("hover-image");
});

$(function () {
    $('a img').hover( function () {
        $(this).attr('src', $(this).attr('src').replace(/\.jpg/, '-on.jpg') );
    });
});


