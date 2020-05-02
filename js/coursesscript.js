
        $('.modal').modal();
        $('a[href="#prem-courses"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})
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

    function fetchDat(theApi, plce){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `../API/${theApi}.html`, true);
  xhr.onload = () => {
    if(xhr.status === 200){
      
      let premModals = document.createElement('div');
          premModals.id = 'prem-css-modals'
      let elmnts = document.createElement('html');
      elmnts.innerHTML = (xhr.responseText);
      let tr = (Array.from(elmnts.querySelectorAll('table tr')));
      let viddd = '',
          modals = '';
      tr.forEach((one,inde) => {
        let chil = Array.from(one.children);
            viddd += `
        <li class="prem-cs bef found fth-anim-this six-anim-this del-3" id="prem-cs-${chil[0].innerHTML}" style="  background: url(img/${chil[1].innerHTML}.jpg) no-repeat center center/cover; ">
          <span class="befr"> * Suitable for ${chil[12].innerHTML} level</span>
          <div class="whole-txt">
            <p class="titl"><a href="#prem-cs-pack-${chil[0].innerHTML}" class="modal-trigger" style="color:inherit">${chil[2].innerHTML}</a></p>
            <p class="disc">${chil[3].innerHTML}</p>
            <p class="mat">COURSE MATERIAL</p>
            <p class="vid">
              <span class="vid-num">${chil[4].innerHTML}</span> videos
              - <span class="min-num">${chil[6].innerHTML}</span> minutes
            </p>
            <p class="pdf">PDF - <span class="pages-num">${chil[9].innerHTML}</span> pages</p>
          </div>
          <span class="aftr"><a href="#prem-cs-pack-${chil[0].innerHTML}" class="modal-trigger" style="color:inherit">${chil[11].innerHTML}</a></span>

        </li>
            `;
            modals += `
            <div id="prem-cs-pack-${chil[0].innerHTML}" class="modal modal-fixed-footer">
      <div class="modal-content package-modal-cont">
        <div class="imag">
          <img src="img/${chil[1].innerHTML}.jpg">
        </div>
       <div class="txt">
         <h4>${chil[2].innerHTML}</h4>
         <p>
           ${chil[13].innerHTML}
         </p>
       </div>
      </div>
      <div class="modal-footer package-btns">
        <a href="#!" class="modal-action modal-close waves-effect waves-dark btn-flat g-out red"><i class="material-icons" style="transform: rotateZ(180deg);">exit_to_app</i> <span> Give It Up</span></a>
        <a href="#!" class=" waves-effect waves-green btn-flat add-it"> <span>Add To Cart</span>  <i class="material-icons">add_shopping_cart</i></a>
        <a href="#!" class="waves-effect waves-light btn-flat green pric"><span>${chil[11].innerHTML}</span></a>
      </div>
    </div>
            `;

            document.querySelector(plce).innerHTML = viddd;
            premModals.innerHTML = modals;
            document.getElementById('js-modals').appendChild(premModals);
            $('.modal').modal();
          })
    }
  };
  xhr.send();

}
  fetchDat('premiumcourses', '#prem-css')
    function fetchPackage(theApi, plce){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `../API/${theApi}.html`, true);
  xhr.onload = () => {
    if(xhr.status === 200){
      
      let premModals = document.createElement('div');
          premModals.id = 'packages-modals'
      let elmnts = document.createElement('html');
      elmnts.innerHTML = (xhr.responseText);
      let tr = (Array.from(elmnts.querySelectorAll('table tr')));
      let packagess = '',
          modals = '';
      tr.forEach((one,inde) => {
        let chil = Array.from(one.children);
            packagess += `
            <li class="package sec-anim-this six-anim-this del-2 bef af" id="#pack-${chil[0].innerHTML}">
              <img src="img/${chil[1].innerHTML}.jpg" alt="">
              <p>
                <span class="pln"><a href="#package-${chil[0].innerHTML}" class="modal-trigger" style="color:inherit">${chil[2].innerHTML}</a></span> 
                <span class="sess">${chil[3].innerHTML} sessions</span></p> 
              <span class="pric"><a href="#package-${chil[0].innerHTML}" class="modal-trigger" style="color:inherit">${chil[4].innerHTML}</a></span>
            </li>
            `;
            modals += `
            <div id="package-${chil[0].innerHTML}" class="modal modal-fixed-footer">
      <div class="modal-content package-modal-cont">
        <div class="imag">
          <img src="img/${chil[1].innerHTML}.jpg">
        </div>
       <div class="txt">
         <h4>${chil[2].innerHTML}</h4>
         <p>
           ${chil[5].innerHTML}
         </p>
       </div>
      </div>
      <div class="modal-footer package-btns">
        <a href="#!" class="modal-action modal-close waves-effect waves-dark btn-flat g-out red"><i class="material-icons" style="transform: rotateZ(180deg);">exit_to_app</i> <span> Give It Up</span></a>
        <a href="#!" class=" waves-effect waves-green btn-flat add-it"> <span>Add To Cart</span>  <i class="material-icons">add_shopping_cart</i></a>
        <a href="#!" class="waves-effect waves-light btn-flat green pric"><span>$$$$</span></a>
      </div>
    </div>
            `;

            document.querySelector(plce).innerHTML = packagess;
            premModals.innerHTML = modals;
            document.getElementById('js-modals').appendChild(premModals);
            $('.modal').modal();
          })
    }
  };
  xhr.send();

}
fetchPackage('packages', '#package-db')
  
