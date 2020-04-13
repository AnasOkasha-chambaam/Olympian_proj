const elmnts = Array.from(document.querySelectorAll('a.to-prim'));
let position,
    windowHeigh = window.innerHeight;

function animDelayer(cls,tm){
  const animDelay = Array.from(document.querySelectorAll(cls));

  animDelay.forEach((one, ind) => {
  one.style.animationDelay = `${(ind*0.1)+tm}s`
})
}
animDelayer('.catt', 1);
animDelayer('.sec-anim-cls', 2)
animDelayer('a.to-prim', 1)

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

document.getElementById('m-form').addEventListener('submit', (e) => {
  e.preventDefault();
  return false;
})