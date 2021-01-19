//menu
function showMenu(){
    $('#hamburgerMenu').click(function(){
       $("#menuContainer").animate({
           height:'700px'
       });
       $("#mainMenu").css({height:'700px'});
       $("#container").hide();
    });
 }
 showMenu();

 function hideMenu(){
     $('.closeMenu').click(function(){
       $("#menuContainer").css({'height':'0px'});
       $("#container").show();
     });
 }
 hideMenu();

 function chosenOption(){
     //option1
     $('#BedroomOption').click(function(){
       $('.containerBedroomOption').animate({
           marginLeft:'0px'
       });
       $("#mainMenu").css({height:'0px'});
     });
     //option2
     $('#KitchenOption').click(function(){
       $('.containerKitchenOption').animate({
           marginLeft:'0px'
       });
       $("#mainMenu").css({height:'0px'});
     });
     //option3
     $('#LivingRoomOption').click(function(){
       $('.containerLivingRoomOption').animate({
           marginLeft:'0px'
       });
       $("#mainMenu").css({height:'0px'});
     });
     //option4
     $('#DinningRoomOption').click(function(){
       $('.containerDinnigRoomOption').animate({
           marginLeft:'0px'
       });
       $("#mainMenu").css({height:'0px'});
     });
     //option5
     $('#BathroomOption').click(function(){
       $('.containerBathroomOption').animate({
           marginLeft:'0px'
       });
       $("#mainMenu").css({height:'0px'});
     });
 }
 chosenOption();

 function goBack(){
     //option1
     $('.arrowBack').click(function(){
         $('.containerBedroomOption').animate({
           marginLeft:'-500px'
       });
         $("#mainMenu").css({height:'700px'});
     });
     //option2
     $('.arrowBackTwo').click(function(){
         $('.containerKitchenOption').animate({
           marginLeft:'-500px'
       });
         $("#mainMenu").css({height:'700px'});
     });
     //option3
     $('.arrowBackThree').click(function(){
         $('.containerLivingRoomOption').animate({
           marginLeft:'-500px'
       });
         $("#mainMenu").css({height:'700px'});
     });
     //option4
     $('.arrowBackFour').click(function(){
         $('.containerDinnigRoomOption').animate({
           marginLeft:'-500px'
       });
         $("#mainMenu").css({height:'700px'});
     });
     //option5
     $('.arrowBackFive').click(function(){
         $('.containerBathroomOption').animate({
           marginLeft:'-500px'
       });
         $("#mainMenu").css({height:'700px'});
     });
 }
 goBack()

//Top seller product
function topSeller(){
    const SliderContainer = document.querySelector(".slidercontainer");
    let isDown = false;
    let startX;
    let scrollLeft;

    SliderContainer.addEventListener('mousedown', (e)=>{
        isDown = true;
        SliderContainer.classList.add('class','active');
        startX = e.pageX - SliderContainer.offsetLeft;
        scrollLeft = SliderContainer.scrollLeft;

    });
    SliderContainer.addEventListener('mouseleave', ()=>{
        isDown = false;
        SliderContainer.classList.remove('active');
    });
    SliderContainer.addEventListener('mouseup', ()=>{
        isDown = false;
        SliderContainer.classList.remove('active');
    });
    SliderContainer.addEventListener('mousemove', (e)=>{
        if(!isDown)return;
        e.preventDefault();
        const x = e.pageX - SliderContainer.offsetLeft;
        walk = (x - startX) * 1;
        SliderContainer.scrollLeft = scrollLeft - walk;

    });
 }
 topSeller();
