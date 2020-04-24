$('.carousel').carousel();
//  $('.carousel-slider').carousel({ fullWidth: true });
//         $(document).ready(function() {
//         $('[id="ltr"]').lightSlider({
//             ltr:true
//         });
//         $('#rtl').lightSlider({
//             ltr:true
//         });
// });

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
// console.log(one)
let chil = Array.from(one.children);
    viddd += `
    <div class="carousel-item">
  <video class="responsive-video" controls>
    <source src="video/${chil[1].innerHTML}.mp4" type="video/mp4">
  </video>
  <p class="vid-title">${chil[2].innerHTML}</p>
</div>
    `;
    // document.querySelector(plce).innerHTML = ' ';
    document.querySelector(plce).innerHTML = viddd;
    
  })
}
};
xhr.onloadend = () => {
$(plce).lightSlider({
    ltr:true
});
// $('#rtl').lightSlider({
//     ltr:true
// });
}
xhr.send();

}
fetchDat('boxingvid', '.fst-sect #ltr')
fetchDat('dietvid', '.sec-sect #ltr')
