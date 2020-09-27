

$(document).ready(function() {
var progbar  = $(".progress-bar"),
max = progbar.attr('aria-valuemax'),
prg = 0;
var msg = 100 + '% Complete';
console.log ("скрипт прогрузился", max, prg)

//при нажатии на 1 Кнопку 
$(".btn-start-1").click(function(){
    prg += 1 
    $('.progress-bar').css('width', prg + '%').attr('aria-valuenow', prg);
    if (prg >= max) {
        $('.progress-bar').text(msg);
      }
   
 });

 //при нажатии на кнопку 2 

  $(".btn-start-2").click(function(){
    prg += 3
    $('.progress-bar').css('width', prg + '%').attr('aria-valuenow', prg);
    if (prg >= max) {
        $('.progress-bar').text(msg);
      }
  });

  //при нажатии на кнопку 3

  $(".btn-start-3").click(function(){
    prg += 7
    $('.progress-bar').css('width', prg + '%').attr('aria-valuenow', prg);
    if (prg >= max) {
        $('.progress-bar').text(msg);
      }
  });

 

})


