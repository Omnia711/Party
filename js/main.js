/// <reference types="../@types/jquery" />

$(".open").click(function(){
    $("#Menu").animate({ width:'250px'},50)
   $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#Menu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
})



/*scroll*/
$("#Menu a").click(function(){
    var sectionId= $(this).attr("href");
    var positionOfSection = $(sectionId).offset().top;
    $("body").animate({scrollTop:positionOfSection},1000);
})



/*Slide-up*/
$('.toggle').click(function(){
    $('.text').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});



/*counter*/
window.onload = function() {
    countDownToTime("10 march 2024 10:00:00");
  }

  function countDownToTime(countTo) {
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

    setInterval(function() {  countDownToTime(countTo); }, 1000);
}


/*letter left*/
var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var Amount = maxLength-length;
  if(Amount<=0)
            {
                $("#letter").text("your available character finished");
            }
        else{
        
        $("#letter").text(Amount);
        }
});



