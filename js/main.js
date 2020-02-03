$(document).click(function(e) {

    if(e.target.className == "search_input" ){
        $('.search_icon').addClass('search_icon_spin');
    }else{
        $('.search_icon').removeClass('search_icon_spin');
    }
    console.log(e)

  });



  