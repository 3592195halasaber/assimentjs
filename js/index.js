
 const size =$('.item1 .list').outerWidth(true);

 

 $('.item1')
 .animate({left: -size },1000)
 let flag=true;
$('#open').on('click',function () {
    if(flag==true){
        $('.item1').animate({left: 0 },1000) 
    }


})

$('.pink')
.on('click',function(){
    ($('.text')).not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})


window.onload = function() {
   
    countDownToTime("30 october 2024 9:56:00");
  }



function   countDownToTime(x){
    let futureDate = new Date(x);
    futureDate = (futureDate.getTime()/1000);


    let now = new Date();
    now = (now.getTime()/1000);

 y = (futureDate- now);

// كام يوم
 let day = Math.floor( y / (24*60*60)); 
 let hour = Math.floor((y - (day * (24*60*60))) / 3600);
 let min = Math.floor((y - (day * (24*60*60)) - (hour * 3600 )) / 60);
 let counter = Math.floor((y- (day * (24*60*60)) - (hour * 3600) - (min * 60)))


    const interval = setInterval(() => {
        document.getElementById('secound').innerHTML =`<span>${counter}S</span>`;
        document.getElementById('min').innerHTML =`<span>${min}M</span>`;
        document.getElementById('hour').innerHTML =`<span>${hour}H</span>`;
        document.getElementById('day').innerHTML =`<span>${day}D</span>`;


      counter--;
     
      if(counter==-1){
        counter=60
        min++;
      }
      if(min==61){
        min=0;
        hour++;
      }if(hour==25){
        hour=0;
        day--;
      }
  
    }, 1000);
  }


  countDownToTime(x)


  var x = 100;
  $('textarea').keyup(function() {
    var length = $(this).val().length;
    var y = x-length;
    if(y<=0){
                   $("#counter").text("your available character finished")      
              }
          else{
          
          $("#counter").text(y);
          }
  });