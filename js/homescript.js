


class UIA {
static testView(x, y){
var elmnts = Array.from(document.querySelectorAll(x)),
position,
windowHeigh = window.innerHeight;

elmnts.forEach((elmnt) => {
position = elmnt.getBoundingClientRect().top;
if(position - windowHeigh <= 10){
elmnt.classList.add(y)
}
})
}

}
function test(){
UIA.testView('.six-anim-this', 'anim-here')

}
window.addEventListener('scroll', test );
document.querySelector('.sixth-home .m-container .achievements').addEventListener('scroll', test );

function fetchAchiev(theApi, plce, idd){
const xhr = new XMLHttpRequest();
xhr.open('GET', `../API/${theApi}.html`, true);
xhr.onload = () => {
if(xhr.status === 200){

let elmnts = document.createElement('html');
elmnts.innerHTML = (xhr.responseText);
let tr = (Array.from(elmnts.querySelectorAll('table tr')));
let achievementss = '';
tr.forEach((one,inde) => {
let chil = Array.from(one.children);
    achievementss += `
    <li class="achievement six-anim-this del-6" id="${idd}-${chil[0].innerHTML}"><p>${chil[1].innerHTML}
  </p></li>
    `;
    document.querySelector(plce).innerHTML = achievementss;
  })
}
};
xhr.send();

}
fetchAchiev('achievements', '#achiev', 'ach')
fetchAchiev('ranks', '#rank', 'rank')
fetchAchiev('camps', '#camps', 'camp')

