
function fetchDat(theApi, plce){
const xhr = new XMLHttpRequest();
xhr.open('GET', `../API/${theApi}.html`, true);
xhr.onload = () => {
if(xhr.status === 200){
let elmnts = document.createElement('html');
elmnts.innerHTML = (xhr.responseText);
let tr = (Array.from(elmnts.querySelectorAll('table tr')));
let viddd = '';
tr.forEach((one) => {
let chil = Array.from(one.children);
    viddd += `
    <div class="carousel-item">
  <video class="responsive-video" controls>
    <source src="video/${chil[1].innerHTML}.mp4" type="video/mp4">
  </video>
  <p class="vid-title">${chil[2].innerHTML}</p>
</div>
    `;
    document.querySelector(plce).innerHTML = viddd;
    
  })
}
};
xhr.onloadend = () => {
$(plce).lightSlider({
    ltr:true,
    item:4,
    loop:true,
    slideMove:2,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed:600,
    responsive : [
        {
            breakpoint:1025,
            settings: {
                item:3,
                slideMove:1,
                slideMargin:6,
              }
        },
        {
            breakpoint:770,
            settings: {
                item:2,
                slideMove:1
              }
        },
        {
            breakpoint:480,
            settings: {
                item:1,
                slideMove:1
              }
        }
    ]
});

}
xhr.send();

}
$('.carousel').carousel();
fetchDat('boxingvid', '.fst-sect #ltr')
fetchDat('dietvid', '.sec-sect #ltr')