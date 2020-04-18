const elmnts = Array.from(document.querySelectorAll('a.to-prim'));
let position,
    windowHeigh = window.innerHeight;

function animDelayer(cls,tm){
  const animDelay = Array.from(document.querySelectorAll(cls));

  animDelay.forEach((one, ind) => {
  one.style.animationDelay = `${(ind*0.2)+tm}s`
})
}
animDelayer('.catt', 1);
animDelayer('.sec-anim-cls', 2)
animDelayer('a.to-prim', 1)
animDelayer('.t-here', 2)
animDelayer('.del-1', 0.3)
animDelayer('.del-2', 0.3)
animDelayer('.del-3', 0.3)
animDelayer('.del-4', 0.3)
animDelayer('.del-5', 2)
animDelayer('.del-6', 0.3)

class UI {
  static testView(x, y){
      x.forEach((elmnt) => {
      position = elmnt.getBoundingClientRect().top;
      if(position - windowHeigh <= 10){
        elmnt.classList.add(y)
      }
    })
  }
}
function test(){
  UI.testView(elmnts, 'sec-anim-cls')
  // console.log(elmnts2)
}
window.addEventListener('scroll', test );

if(document.getElementById('m-form')!==null){
  document.getElementById('m-form').addEventListener('submit', (e) => {
    e.preventDefault();
    return false;
  })
  
}

// function fetchDat(theApi){
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', `../API/${theApi}.html`, true);
//   xhr.onload = () => {
//     if(xhr.status === 200){
//       let elmnts = document.createElement('html');
//       elmnts.innerHTML = (xhr.responseText);
//       let tr = (Array.from(elmnts.querySelectorAll('table tr')));
//       let viddd = '';
//       tr.forEach((one) => {
//         console.log(one)
//         let chil = Array.from(one.children);
//             viddd += `
//             <div class="carousel-item">
//           <video class="responsive-video" controls>
//             <source src="video/${chil[1].innerHTML}.mp4" type="video/mp4">
//           </video>
//           <p class="vid-title">${chil[2].innerHTML}</p>
//         </div>
//             `;
//             document.querySelector('.fst-sect #ltr').innerHTML = ' ';
//             document.querySelector('.fst-sect #ltr').innerHTML = viddd;
//           })
//     }
//   };
//   xhr.send();

// }
// fetchDat('boxingvid')