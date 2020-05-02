
const swippper = document.getElementById('gallery-categ');
const showImgs = document.getElementById('show-imgs');

function testShown(one) {
  if (document.getElementById(`${one.id}-imgs`).classList.contains('crrnt-shown')) {
    console.log('already-shown');
  } else {
    console.log('done');
    document.querySelector('.crrnt-shown').classList.remove('crrnt-shown')
    showImgs.innerHTML = document.getElementById(`${one.id}-imgs`).innerHTML;
    document.getElementById(`${one.id}-imgs`).classList.add('crrnt-shown')
    showImgs.className = `imgs ${one.id}-imgs`;
    Array.from(showImgs.children).forEach((elm) => {
      elm.classList.add('materialboxed');
      $('.materialboxed').materialbox()
    });
  }
}


function showim() {

  let swipechild = Array.from(swippper.children),
    allim = '';

  swipechild.forEach((one) => {
    if (one.classList.contains('swiper-slide-active')) {
      testShown(one)
    }
  })

}
function fetchGallAlbums(theApi, plce, idd) {
  let idOfImgsDiv;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `../API/${theApi}.html`, true);
  xhr.onload = () => {
    if (xhr.status === 200) {

      let elmnts = document.createElement('html');
      elmnts.innerHTML = (xhr.responseText);
      let tr = (Array.from(elmnts.querySelectorAll('table tr')));
      let albums = '';
      let albumsImgs = '';
      tr.forEach((one, inde) => {
        let chilId = 0;
        let chil = Array.from(one.children);
        chilId = chil[0].innerHTML;
        albums += `
        <div class="swiper-slide" id="${idd}-${chil[0].innerHTML}" >
          <img src="img/${chil[1].innerHTML}.jpg" style="width: 100%;"  class="album-main">
          <p class="album-titl">${chil[2].innerHTML}</p>
        </div>
        `;
        albumsImgs += `
        <div id="${idd}-${chil[0].innerHTML}-imgs" style="display: none;">

        </div>

        `;
        document.querySelector(plce).innerHTML = albums;
        document.querySelector('#pics-imgs-div').innerHTML = albumsImgs;
        let xhrVidsImgs = new XMLHttpRequest();
        xhrVidsImgs.open('GET', `API/gallerycontent.html`, true);
        xhrVidsImgs.onload = () => {
          if (xhrVidsImgs.status === 200) {

            let elmnts = document.createElement('html');
            elmnts.innerHTML = (xhrVidsImgs.responseText);
            let tr = (Array.from(elmnts.querySelectorAll('table tr')));
            let albumsImgsVids = '';

            tr.forEach((one, inde) => {
              let chill = Array.from(one.children);
              if (chill[1].innerHTML == chilId) {
                
                  if (chill[2].innerHTML == '1') {
                    albumsImgsVids += `
                <img src="img/${chill[3].innerHTML}.jpg">
                `;
                  } else if (chill[2].innerHTML == '2') {
                    albumsImgsVids += `
                <video class="responsive-video" width="100%" height="100%" controls>
                  <source src="video/${chill[3].innerHTML}.mp4" type="video/mp4">
                </video>
                `;
                  }
              document.querySelector(`#get-pics-${chill[1].innerHTML}-imgs`).innerHTML = albumsImgsVids;
                }
              
            })
          }
        };
        xhrVidsImgs.send();
      })
    }
  };
  xhr.onloadend = () => {

    let swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    swippper.addEventListener('mouseup', (e) => {


      setTimeout(showim, 1000)
    })
    swippper.addEventListener('touchend', (e) => {


      setTimeout(showim, 1000)
    })
  };
  xhr.send();
}
fetchGallAlbums('galleryalbums', '#gallery-categ', 'get-pics')
