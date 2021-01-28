////////SIZING VIDEO TO CUT OUT BLACK BARS

// $(document).ready(function(){
//     sizeTheVideo();
//     $(window).resize(function(){
//       sizeTheVideo();
//     });  
//   });
  
//   function sizeTheVideo(){
//     // - 1.78 is the aspect ratio of the video
//   // - This will work if your video is 1920 x 1080
//   // - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
//     var aspectRatio = 1.78;
    
//       var video = $('#videoWithJs iframe');
//       var videoHeight = video.outerHeight();
//       var newWidth = videoHeight*aspectRatio;
//           var halfNewWidth = newWidth/2;
      
//     //Define the new width and centrally align the iframe
//     video.css({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});
//   }




/////////////////////////RESIDENTIAL



const slider = document.querySelector('.resi__slider');
const sliderImages = document.querySelectorAll('.resi__img-container');
const controlLeft = document.querySelector('.resi__control--left');
const controlRight = document.querySelector('.resi__control--right');
const imagesNum = sliderImages.length;
let currentImage = imagesNum - 1;

controlLeft.addEventListener('click', () => {
    gsap.timeline({})
    .to(sliderImages[currentImage], {
        opacity: 0
    })
    .to(sliderImages[++currentImage % imagesNum], {
        opacity: 1
    }, '<');

    currentImage = currentImage % imagesNum;
});

controlRight.addEventListener('click', () => {
    if(currentImage < 0)
        currentImage = imagesNum - 1;
    gsap.timeline({})
    .to(sliderImages[currentImage], {
        opacity: 0
    })
    .to(sliderImages[currentImage - 1], {
        opacity: 1
    }, '<');
    currentImage -= 1;
});

