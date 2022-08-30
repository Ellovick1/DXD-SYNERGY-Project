// set content on click
$('.button').click(function(e) {
    e.preventDefault();
    setContent($(this));
});

// set content on load
$('.button.active').length && setContent($('.button.active'));

function setContent($el) {
    $('.button').removeClass('active');
    $('.containera').hide();
    
    $el.addClass('active');
    $($el.data('rel')).show();
};


// set content on click
$('.fashion_category').click(function(event) {
    event.preventDefault();
    setCategory($(this));
});

// set content on load
$('.fashion_category.active').length && setCategory($('.fashion_category.active'));

function setCategory($el) {
    $('.fashion_category').removeClass('active');
    $('.category').hide();
    
    $el.addClass('active');
    $($el.data('rel')).show();
};


// set content on click
$('.delivery').click(function(event) {
    event.preventDefault();
    setCategory($(this));
});

// set content on load
$('.delivery.active').length && setCategory($('.delivery.active'));

function setCategory($el) {
    $('.delivery').removeClass('active');
    $('.delivery_container').hide();
    
    $el.addClass('active');
    $($el.data('rel')).show();
};



// ***************************************************************************//
// ***************************************************************************//
// ***********************************SIDEBAR SECTION MODIFY STARTS****************************************//
// ***************************************************************************//
// ***************************************************************************//
// ***************************************************************************//
  

function w1_open() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
}

function w1_close() {
  document.getElementById("mySidebar").style.display = "none";
};


// *************
function w2_open() {
  document.getElementById("mySidebar2").style.width = "100%";
  document.getElementById("mySidebar2").style.display = "block";
}

function w2_close() {
  document.getElementById("mySidebar2").style.display = "none";
};

// *****************
function w3_open() {
  document.getElementById("mySidebar3").style.width = "100%";
  document.getElementById("mySidebar3").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar3").style.display = "none";
}


// ********************
function w4_open() {
  document.getElementById("mySidebar4").style.width = "100%";
  document.getElementById("mySidebar4").style.display = "block";
}

function w4_close() {
  document.getElementById("mySidebar4").style.display = "none";
}




function w5_open() {
  document.getElementById("mySidebar5").style.width = "100%";
  document.getElementById("mySidebar5").style.display = "block";
}

function w5_close() {
  document.getElementById("mySidebar5").style.display = "none";
}


// ********************
function w6_open() {
  document.getElementById("mySidebar6").style.width = "100%";
  document.getElementById("mySidebar6").style.display = "block";
}

function w6_close() {
  document.getElementById("mySidebar6").style.display = "none";
}





// ******************************************

$(document).on('dblclick', 'input[list]', function(event){
  event.preventDefault();
      var str = $(this).val();
  $('div[list='+$(this).attr('list')+'] span').each(function(k, obj){
          if($(this).html().toLowerCase().indexOf(str.toLowerCase()) < 0){
              $(this).hide();
          }
      })
  $('div[list='+$(this).attr('list')+']').toggle(100);
  $(this).focus();
})

$(document).on('blur', 'input[list]', function(event){
      event.preventDefault();
      var list = $(this).attr('list');
      setTimeout(function(){
          $('div[list='+list+']').hide(100);
      }, 100);
  })

  $(document).on('click', 'div[list] span', function(event){
      event.preventDefault();
      var list = $(this).parent().attr('list');
      var item = $(this).html();
      $('input[list='+list+']').val(item);
      $('div[list='+list+']').hide(100);
  })

$(document).on('keyup', 'input[list]', function(event){
      event.preventDefault();
      var list = $(this).attr('list');
  var divList =  $('div[list='+$(this).attr('list')+']');
  if(event.which == 27){ // esc
      $(divList).hide(200);
      $(this).focus();
  }
  else if(event.which == 13){ // enter
      if($('div[list='+list+'] span:visible').length == 1){
          var str = $('div[list='+list+'] span:visible').html();
          $('input[list='+list+']').val(str);
          $('div[list='+list+']').hide(100);
      }
  }
  else if(event.which == 9){ // tab
      $('div[list]').hide();
  }
  else {
      $('div[list='+list+']').show(100);
      var str  = $(this).val();
      $('div[list='+$(this).attr('list')+'] span').each(function(){
        if($(this).html().toLowerCase().indexOf(str.toLowerCase()) < 0){
          $(this).hide(200);
        }
        else {
          $(this).show(200);
        }
      })
    }
  })














