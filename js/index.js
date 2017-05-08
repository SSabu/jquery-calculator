$(document).ready(function(){

  let x = $('#screen').text('');

  $(".buttons").click(function(){

    if(!$(event.target).is("#equals, #clear")){
      $(x).append($(event.target)[0].innerText);
      }

    var y = '';
    y+=x[0].innerText;

//  setting up string so it can be passed into eval function

    var z = y.replace(/\x/g, '*').replace(/\÷/g,'/');

// check if an operator is repeated more than once in a row

    if (/([\/\+\-\*])(\1{1,})/g.test(z)){
      $('#screen').text('Error');
    };

//  displaying result and rounding for non-integers & displaying error for divide by zero

    if($(event.target).is("#equals")){
      if (!isFinite( (eval(z)) ) ){
        $('#screen').text('Error');
      } else if( !Number.isInteger( eval(z) )){
      $('#screen').text((eval(z).toFixed(2)   ));
      } else {
        $('#screen').text((eval(z)  ));
      }
    }

//  clearing display

    if($(event.target).is("#clear")){
      $('#screen').text('');
    }

    });

  });
