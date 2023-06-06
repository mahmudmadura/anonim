const btnNav = document.querySelector('#btn-nav')
const navbar = document.querySelector('#navbar')

const topNav = document.querySelector('#top-nav')
let prevScroll = window.pageYOffset
window.onscroll = ()=>{

    let currentScroll = window.pageYOffset
    if(prevScroll > currentScroll){
        ///console.log('lebih besar')
        topNav.classList.add('top-nav-fixed')
        topNav.classList.remove('top-nav-back')
        
    } else {
        //console.log('lebih kecil')
        topNav.classList.remove('top-nav-fixed')
        topNav.classList.add('top-nav-back')
        
    }

    prevScroll = currentScroll
}

btnNav.addEventListener('click', function(){
    navbar.classList.toggle('show')
    btnNav.classList.toggle('line-humber')
})



// foto grid

const parentGrid = document.querySelector('#parent-grid')

const foto = [
    './src/public/gallery/mitha/1.jpg',
    './src/public/gallery/mitha/3.jpg',
    './src/public/gallery/mitha/5.jpg',
    './src/public/gallery/mitha/10.jpg',
    './src/public/gallery/mitha/11.jpg',
    './src/public/gallery/mitha/13.jpg',
    './src/public/gallery/mitha/6.jpg',

]

foto.map((gambar, index) => {
    const modal = document.querySelector('#bigger-img')
    const modalImg = document.createElement('img')
    const close = document.querySelector('#close')
    const pic = document.createElement('img')
    pic.setAttribute('src',gambar)

    // when img klik

    pic.addEventListener('click', ()=>{
        modalImg.setAttribute('src',gambar)
        modal.appendChild(modalImg)
        modal.classList.add('modal-show')
        modalImg.classList.add('img-size')
        console.log(gambar)
    })

     //close btn
     close.addEventListener('click',()=>{
        modal.classList.remove('modal-show')
        modal.removeChild(modalImg)
       
    })

   if (index === 0) {
        pic.classList.add('img-eff')
   } else if (index === 1){
        pic.classList.add('img-col-2')
   } else if (index === 3){
    pic.classList.add('img-row-2')
   } else {
    pic.classList.add('img-no-eff')
   }
    

    parentGrid.appendChild(pic)
})

// Mendapatkan semua elemen <a> dengan atribut href yang dimulai dengan "#"
const links = document.querySelectorAll('a[href^="#"]');

// Mengikat event click ke setiap link
links.forEach(link => {
  link.addEventListener('click', (e) => {
    // Mencegah perilaku default dari link
    e.preventDefault();

    // Mendapatkan target elemen berdasarkan atribut href
    const target = document.querySelector(link.getAttribute('href'));

    // Memastikan elemen target ada sebelum melanjutkan
    if (target) {
      // Menggunakan metode scrollIntoView dengan opsi smooth untuk pengguliran yang halus
      target.scrollIntoView({ behavior: 'smooth' });
      navbar.classList.remove('show')
      btnNav.classList.remove('line-humber')
    }
  });
});

//form email

const sendBtn = document.getElementById('send-btn')

sendBtn.addEventListener('click', ()=>{
    const n = document.getElementById('fname').value
    const e = document.getElementById('email').value
    const m = document.getElementById('pesan').value

    console.log(n)
    console.log(e)
    console.log(m)
})

//img slider

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// form 