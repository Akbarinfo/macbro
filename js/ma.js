// let elBox = document.querySelector('#boxsid')

// //creatElements
// function creatElements(...array) {
//   return array.map(e => {
//     return document.createElement(e)
//   })
// }

// function addWind(){
//   let [imgboxs, bigimgbox, bigimg, bigimgbtn, btnicons, ulbox] = creatElements('div', 'div', 'img', 'button', 'i', 'ul')

//   //imgs
//   imgboxs.className = 'mac__imgboxs',
//   bigimgbox.className = 'mac__bigimgbox',

//   //img
//   bigimg.className = 'mac__bigimg',

//   //btn icons
//   btnicons.className = 'bx bx-fullscreen'

//   //button
//   bigimgbtn.className = 'mac__imgboxbtn',
//   bigimgbtn.setAttribute('type', 'button')
//   bigimgbtn.appendChild(btnicons)

//   //Mini rasmlar box
//   ulbox.className = 'mac__imglist'
//   ulbox.setAttribute('id', 'listbox')

//   //Rasmlar bilan ishlash
//   let imgs = macObj.colors

//   for(let r = 0; r < imgs.length; r++) {
//     if(imgs[r].active) {
//       let imgsd = imgs[r].imgs
//       for(let d = 0; d < imgsd.length; d++) {
//         //li box va img yaratish
//         let liimg = document.createElement('li');
//         let imgmini = document.createElement('img');

//         // li box
//         liimg.className = 'mac__imgitem'

//         // mini img
//         imgmini.className = 'mac__minimg'
//         imgmini.src = imgsd[d]
//         liimg.appendChild(imgmini)
//         ulbox.appendChild(liimg)
//       }
//       bigimg.src = imgs[r].img
//     }
//   }
//   // mini imglarni olib kelish tugadi

//   //divlarga qo'shish
//   bigimgbox.appendChild(bigimg)
//   bigimgbox.appendChild(bigimgbtn)
//   imgboxs.appendChild(bigimgbox)
//   imgboxs.appendChild(ulbox)


//   // right part
//   let [boxs, h2, rtitle, mtitle, ratitle, ramdiv, memdiv, coldiv] = creatElements('div', 'h2', 'h2', 'h2', 'h3', 'div', 'div', 'div')

//   //rightbox
//   boxs.className = 'mac__box'

//   //title lar
//   rtitle.className = 'mac__title'
//   rtitle.textContent = 'Ram'

//   mtitle.className = 'mac__title'
//   mtitle.textContent = 'Xotira Hajmi'

//   ratitle.className = 'mac__title'
//   ratitle.textContent = 'Ranglar'

//   //Mac name
//   h2.className = 'mac__name'
//   h2.textContent = macObj.name

//   //Ram boxs
//   ramdiv.className = 'mac__rambox'

//   // Memory boxs
//   memdiv.className = 'mac__rambox'

//   //butonlar bilan ishlash
//   let rmbtn = macObj.ram
//   for(let i = 0; i < rmbtn.length; i++) {
//     let rambtn = document.createElement('button')
//     if(rmbtn[i].active) {
//       // MEMORY bilan ishlash qismi
//       let mbtn = rmbtn[i].memory
//       for(let j = 0; j < mbtn.length; j++) {
//         let membtn = document.createElement('button')
//         if(mbtn[j].active) {
//           membtn.className = 'mac__rambtn activ'
//         } else{
//           membtn.className = 'mac__rambtn'
//         }
//         membtn.setAttribute('id', mbtn[j].size)
//         membtn.textContent = `${mbtn[j].size}gb`

//         //Memga quloq qo'yib ketish
//         membtn.addEventListener('click', (e) => {
//           let id = e.target.id
//           elBox.innerHTML = null
//           for(let d = 0; d < mbtn.length; d++) {
//             if(id == mbtn[d].size) {
//               mbtn[d].active = true
//               addWind()
//             } else {
//               mbtn[d].active = false
//             }
//           }
//         })

//         memdiv.appendChild(membtn)
//       }
//       rambtn.className = 'mac__rambtn activ'

//     } else{
//       rambtn.className = 'mac__rambtn'
//     }
//     rambtn.setAttribute('id', rmbtn[i].ramSize)
//     rambtn.textContent = `${rmbtn[i].ramSize}gb`

//     // Ramga quloq qo'yib ketish
//     rambtn.addEventListener('click', (e) => {
//       let id = e.target.id
//       elBox.innerHTML = null
//       for(let q = 0; q < rmbtn.length; q++)
//         if(id == rmbtn[q].ramSize) {
//           macObj.ram[q].active = true
//           addWind()
//         } else {
//           macObj.ram[q].active = false
//         }
//     })
//     ramdiv.appendChild(rambtn)
//   }

//   // Ranglar bilan ishlash qismi
//   coldiv.className = 'mac__colbox'

//   let col = macObj.colors
//   for(let i = 0; i < col.length; i++) {
//     let colbtn = document.createElement('button')
//     let span = document.createElement('span')
//     let name = document.createElement('span')
//     span.className = "mac__coltl"
//     span.style.backgroundColor = col[i].color
//     name.textContent = col[i].name
//     if(col[i].active) {
//       colbtn.className = 'mac__colbtn activ'
//     } else{
//       colbtn.className = 'mac__colbtn'
//     }
//     colbtn.setAttribute('id', col[i].id)
//     colbtn.appendChild(span)
//     colbtn.appendChild(name)

//     //BITTA QULPOQ QOYIB KETISH QISMI

//     colbtn.addEventListener('click', (test) => {
//       let ul = document.querySelector('#listbox')
//       elBox.innerHTML = null
//       // imgboxs.innerHTML = null
//       // ul.innerHTML = null
//       let id = test.target.id
//       for(let f = 0; f < col.length; f++) {
//         if(id == col[f].id) {
//           macObj.colors[f].active = true
//         } else {
//           macObj.colors[f].active = false
//         }
//         addWind()
//       }
//     })
//     coldiv.appendChild(colbtn)
//   }

//   //form price bilan ishlash
//   let [form, minusbtn, minusicon, input, plusbtn, plusicon, pricebox, pricetext, bagbox, bagbtn, bagbt] = creatElements('form', 'button', 'i', 'input', 'button', 'i', 'div', 'p', 'div', 'button', 'button')

//   //form bilan ishlash
//   form.className = 'mac__form'
//   form.setAttribute('action', '')

//   //minus btn
//   minusicon.className = 'bx bx-minus mac__fricon'
//   minusbtn.className = 'mac__frminus'
//   minusbtn.appendChild(minusicon)
//   form.appendChild(minusbtn)

//   // input bilan ishlash
//   input.className = 'mac__frinput'
//   input.setAttribute('type', 'number')
//   input.setAttribute('value', '1')
//   input.setAttribute('placeholder', '1')
//   form.appendChild(input)

//   //plus btn
//   plusicon.className = 'bx bx-plus mac__fricon'
//   plusbtn.className = 'mac__frplus'
//   plusbtn.appendChild(plusicon)
//   plusbtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     let inp = document.querySelector('.mac__frinput')
//     let v = 1
//     v += 1
//     inp.value = v
//   })
//   form.appendChild(plusbtn)

//   //price box price bilan ishlash qismi
//   pricebox.className = 'mac__bagbox'
//   pricetext.className = 'mac__prsale'

//   //price part
//   let pr = macObj.ram
//   for(let i = 0; i < pr.length; i++){
//     let mr = pr[i].memory
//     for(let j = 0; j < mr.length; j++){
//       if(mr[j].active) {
//         pricetext.textContent = `${mr[j].price}so'm`
//       }
//       pricebox.appendChild(pricetext)
//     }
//   }

//   //Bagbox bilan ishlash qismmi
//   bagbox.className = 'mac__bagbox',
//   bagbtn.className = 'mac__bagbtn'
//   bagbtn.textContent = `Savatchaga qo'shish`
//   bagbt.className = 'mac__bagbt'
//   bagbt.textContent = `Taqqoslash`
//   bagbox.appendChild(bagbtn)
//   bagbox.appendChild(bagbt)

//   //boxs ga qo'shish
//   boxs.appendChild(h2)
//   boxs.appendChild(rtitle)
//   boxs.appendChild(ramdiv)
//   boxs.appendChild(mtitle)
//   boxs.appendChild(memdiv)
//   boxs.appendChild(ratitle)
//   boxs.appendChild(coldiv)
//   boxs.appendChild(form)
//   boxs.appendChild(pricebox)
//   boxs.appendChild(bagbox)

//   //elbox qo'shish
//   elBox.appendChild(imgboxs)
//   elBox.appendChild(boxs)
// }

// addWind()
