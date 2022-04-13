let elBox = document.querySelector('#boxsid')

//creatElements
function creatElements(...array) {
  return array.map(e => {
    return document.createElement(e)
  })
}


// macArr.forEach((item, index) => {
//   let [imgboxs, bigimgbox, bigimg, bigimgbtn, btnicons, ulbox] = creatElements('div', 'div', 'img', 'button', 'i', 'ul')

//   //imgs
//   imgboxs.className = 'mac__imgboxs',
//   bigimgbox.className = 'mac__bigimgbox',

//   //img
//   bigimg.className = 'mac__bigimg',
//   bigimg.src = item.img

//   //btn icons
//   btnicons.className = 'bx bx-fullscreen'

//   //button
//   bigimgbtn.className = 'mac__imgboxbtn',
//   bigimgbtn.setAttribute('type', 'button')
//   bigimgbtn.appendChild(btnicons)

//   //Mini rasmlar box
//   ulbox.className = 'mac__imglist'

//   //mini rasmlar bilan ishlash
//   // let minimg = item.colors[2].length
//   // console.log(minimg)

//   let minimg = macArr.length


//   for(let i = 0; i < minimg.length; i++) {
//     console.log(minimg[i])
//     //li box va img yaratish
//     let liimg = document.createElement('li');
//     let imgmini = document.createElement('img');

//     // li box
//     liimg.className = 'mac__imgitem'

//     // mini img
//     imgmini.className = 'mac__minimg'
//     imgmini.src = minimg[i]
//     liimg.appendChild(imgmini)
//     ulbox.appendChild(liimg)
//   }
//   // mini imglarni olib kelish tugadi

//   //divlarga qo'shish
//   bigimgbox.appendChild(bigimg)
//   bigimgbox.appendChild(bigimgbtn)
//   imgboxs.appendChild(bigimgbox)
//   imgboxs.appendChild(ulbox)

  ///right part
  // let [imgboxs, bigimgbox, bigimg, bigimgbtn, btnicons, ulbox] = creatElements('div', 'div', 'img', 'button', 'i', 'ul')



  // boxs.className = 'mac__box'
  // boxs.innerHTML = `
  //   <h2 class="mac__name">MacBook Air 13-inch M1/8/256 Gold <img class="mac__icons" src="img/podelsiya.svg" alt="podelsiya"></h2>

  //   <h3 class="mac__title">Ram</h3>
  //   <div class="mac__rambox">
  //     <button class="mac__rambtn activ">8gb</button>
  //     <button class="mac__rambtn">16gb</button>
  //   </div>

  //   <h3 class="mac__title">Xotira Hajmi</h3>
  //   <div class="mac__memrbox">
  //     <button class="mac__memrbtn activ">256gb</button>
  //     <button class="mac__memrbtn">512gb</button>
  //     <button class="mac__memrbtn" style="display: none;">1tb</button>
  //   </div>

  //   <h3 class="mac__title">Ranglar</h3>
  //   <div class="mac__colbox">
  //     <button class="mac__colbtn activ"><span class="mac__coltl"></span>
  //     Tilla rang
  //     </button>
  //     <button class="mac__colbtn"><span class="mac__colk"></span>Kumush rang</button>
  //     <button class="mac__colbtn"><span class="mac__colkk"></span>Kosmik kulrang</button>
  //   </div>

  //   <form class="mac__form" action="">
  //     <button class="mac__frminus"><i class='bx bx-minus mac__fricon'></i></button>
  //     <input class="mac__frinput" type="number" value="1" placeholder="1">
  //     <button class="mac__frplus"><i class='bx bx-plus mac__fricon'></i></button>
  //   </form>

  //   <div class="mac__pricebox">
  //     <p class="mac__prsale">12 497 000so'm</p>
  //     <p class="mac__price">14 621 000so'm</p>
  //   </div>

  //   <div class="mac__bagbox">
  //     <button class="mac__bagbtn">Savatchaga qo'shish</button>
  //     <button class="mac__bagbt">Taqqoslash</button>
  //   </div>
  // `

  // elBox.appendChild(imgboxs)
  // elBox.appendChild(boxs)
// })

// console.log(macObj.colors[0].imgs)
let ram = macObj.ram

// console.log(ram)

function addWind() {
  for(let i = 0; i < ram.length; i++) {
    let mem = ram[i].memory

    // console.log(mem)
    for(let j = 0; j < mem.length; j++) {
      if(mem[j].active) {
        console.log(mem[j])
      }
    }
    if(ram[i].active == true) {
      console.log(ram[i])
    }
  }
}

addWind()


let [imgboxs, bigimgbox, bigimg, bigimgbtn, btnicons, ulbox, boxs] = creatElements('div', 'div', 'img', 'button', 'i', 'ul', 'div')

//imgs
imgboxs.className = 'mac__imgboxs',
bigimgbox.className = 'mac__bigimgbox',

//img
bigimg.className = 'mac__bigimg',
bigimg.src = macObj.colors[0].img

//btn icons
btnicons.className = 'bx bx-fullscreen'

//button
bigimgbtn.className = 'mac__imgboxbtn',
bigimgbtn.setAttribute('type', 'button')
bigimgbtn.appendChild(btnicons)

//Mini rasmlar box
ulbox.className = 'mac__imglist'

//mini rasmlar bilan ishlash
let minimg = macObj.colors[0].imgs

for(let i = 0; i < minimg.length; i++) {
  console.log(minimg[i])
  //li box va img yaratish
  let liimg = document.createElement('li');
  let imgmini = document.createElement('img');

  // li box
  liimg.className = 'mac__imgitem'

  // mini img
  imgmini.className = 'mac__minimg'
  imgmini.src = minimg[i]
  liimg.appendChild(imgmini)
  ulbox.appendChild(liimg)
}
// mini imglarni olib kelish tugadi

//divlarga qo'shish
bigimgbox.appendChild(bigimg)
bigimgbox.appendChild(bigimgbtn)
imgboxs.appendChild(bigimgbox)
imgboxs.appendChild(ulbox)

  boxs.className = 'mac__box'
  boxs.innerHTML = `
    <h2 class="mac__name">MacBook Air 13-inch M1/8/256 Gold <img class="mac__icons" src="img/podelsiya.svg" alt="podelsiya"></h2>

    <h3 class="mac__title">Ram</h3>
    <div class="mac__rambox">
      <button class="mac__rambtn activ">8gb</button>
      <button class="mac__rambtn">16gb</button>
    </div>

    <h3 class="mac__title">Xotira Hajmi</h3>
    <div class="mac__memrbox">
      <button class="mac__memrbtn activ">256gb</button>
      <button class="mac__memrbtn">512gb</button>
      <button class="mac__memrbtn" style="display: none;">1tb</button>
    </div>

    <h3 class="mac__title">Ranglar</h3>
    <div class="mac__colbox">
      <button class="mac__colbtn activ"><span class="mac__coltl"></span>
      Tilla rang
      </button>
      <button class="mac__colbtn"><span class="mac__colk"></span>Kumush rang</button>
      <button class="mac__colbtn"><span class="mac__colkk"></span>Kosmik kulrang</button>
    </div>

    <form class="mac__form" action="">
      <button class="mac__frminus"><i class='bx bx-minus mac__fricon'></i></button>
      <input class="mac__frinput" type="number" value="1" placeholder="1">
      <button class="mac__frplus"><i class='bx bx-plus mac__fricon'></i></button>
    </form>

    <div class="mac__pricebox">
      <p class="mac__prsale">12 497 000so'm</p>
      <p class="mac__price">14 621 000so'm</p>
    </div>

    <div class="mac__bagbox">
      <button class="mac__bagbtn">Savatchaga qo'shish</button>
      <button class="mac__bagbt">Taqqoslash</button>
    </div>
  `

  elBox.appendChild(imgboxs)
  elBox.appendChild(boxs)