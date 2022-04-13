// const elBigImg = document.querySelector('#bigimg')
// const elMinImg = document.querySelector('#minimg')
const elImgBox = document.querySelector('#imgbox')
const elRam = document.querySelector('#ram')
const elMem = document.querySelector('#mem')
const elColor = document.querySelector('#color')
const elPrice = document.querySelector('#price')

//creatElements
function creatElements(...array) {
  return array.map(e => {
    return document.createElement(e)
  })
}

//ram va memory qo'shish

function addRamMemBtn(macObj) {
  elRam.innerHTML = "";
  elMem.innerHTML = "";
  elColor.innerHTML = null
  elImgBox.innerHTML = null
  macObj.ram.forEach((element) => {
    let rambtn = document.createElement('button');
    rambtn.className = 'mac__rambtn'
    if(element.active) {
      rambtn.className = 'mac__rambtn activ'

      //memoryni qo'shib ketish qismi
      element.memory.forEach((item) => {
        let membtn = document.createElement('button');
        membtn.className = 'mac__rambtn'

        if(item.active) {
          membtn.classList.add('activ')
        }
        membtn.setAttribute('id', item.size)
        membtn.innerHTML = `${item.size}GB`
        elMem.appendChild(membtn)
      })
    }
    rambtn.setAttribute('id', element.ramSize)
    rambtn.innerHTML = `${element.ramSize}GB`
    elRam.appendChild(rambtn)
  })

  //Color qo'shish
  macObj.colors.forEach((item) => {
    let [colbtn, colspan, name] = creatElements('button', 'span', 'span')
    // let colbtn = document.createElement('button');
    colbtn.className = 'mac__colbtn'
    colbtn.setAttribute('id', item.id)
    colspan.className = 'mac__coltl'
    colspan.setAttribute('id', item.color)
    colspan.style.backgroundColor = item.color
    name.setAttribute('id', item.name)
    name.textContent = item.name

    if(item.active) {
      colbtn.className = 'mac__colbtn activ'
    }
    colbtn.appendChild(colspan)
    colbtn.appendChild(name)
    elColor.appendChild(colbtn)
  })

  //Rasmlar qo'shish

  macObj.colors.forEach((item) => {
    let [bigbox, ul, img, button, btnicons] = creatElements('div', 'ul', 'img', 'button', 'i');

    bigbox.className = 'mac__bigimgbox'
    btnicons.className = 'bx bx-fullscreen'
    button.className = 'mac__imgboxbtn'
    button.appendChild(btnicons)
    img.className = 'mac__bigimg'
    ul.className = 'mac__imglist'

    if(item.active) {
      img.src = item.img
      // mini imglarni qo'shish
      item.imgs.forEach((img) => {
        let [li, minimg] = creatElements('li', 'img');
        li.className = 'mac__imgitem'
        minimg.className = 'mac__minimg'
        if(item.active) {
          minimg.src = img
        }
        li.appendChild(minimg)
        ul.appendChild(li)
      })
      bigbox.appendChild(img)
      bigbox.appendChild(button)
      elImgBox.appendChild(bigbox)
      elImgBox.appendChild(ul)
    }


  });

}
addRamMemBtn(macObj)

//Ramga active berish qismi
elRam.addEventListener('click', (e) => {
  let id = e.target.id
  macObj.ram.forEach((element) => {
    element.active = false
    if(id == element.ramSize) {
      element.active = true
    }
  });
  addPrice(macObj)
  memActive(macObj)
  addRamMemBtn(macObj)
})

// Memoryga active berish qismi
function memActive(macObj) {
  elMem.addEventListener('click', (e) => {
    let id = e.target.id
    macObj.ram.forEach((el) => {
      el.memory.forEach((item) => {
        item.active = false;
        if(id == item.size) {
          item.active = true;
        }
      });
    });
    addPrice()
    addRamMemBtn(macObj)
  });
}

elColor.addEventListener('click', (e) => {
  let id = e.target.id
  macObj.colors.forEach((items) => {
    items.active = false
    if(items.id == id || id == items.color || id == items.name) {
      items.active = true
    }
  })
  addRamMemBtn(macObj)
})

function addPrice(macObj) {
  macObj.ram.forEach((item) => {
    if(item.active) {
      item.memory.forEach((el) => {
        if(el.active) {
          elPrice.textContent = `${el.price}So'm`
        }
      })
    }
  })
}