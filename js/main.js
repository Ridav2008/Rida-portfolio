let toop = document.getElementById('top')
let boxSkills1 = document.getElementById('boxSkills1')
let boxSkills2 = document.getElementById('boxSkills2')
let boxSkills3 = document.getElementById('boxSkills3')
let boxSkills4 = document.getElementById('boxSkills4')
let eCo1 = document.getElementById('e-co1')
let eCo2 = document.getElementById('e-co2')
let eCo3 = document.getElementById('e-co3')
let eCo4 = document.getElementById('e-co4')
let eCo5 = document.getElementById('e-co5')

// عند الضغط يرجع للأعلى
function topWeb(){
    if ( window.scrollY > 322){
        toop.style.display = 'flex'
    }else{
        toop.style.display = 'none'
    }
}

window.addEventListener('scroll' , topWeb)
toop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    });
});




// أنيميشن السكرول
let elems = [boxSkills1, boxSkills2, boxSkills3, boxSkills4 ,eCo1 , eCo2 , eCo3 , eCo4 , eCo5].filter(Boolean);
let io = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationName = 'totop';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0,            // نريد التفعيل بمجرد دخول العنصر إلى مجال المراقبة
  rootMargin: '0px 0px 15% 0px'  // هذا يجعل التفعيل قبل ظهور العنصر فعليًا بنسبة 20%
});

elems.forEach(el => io.observe(el));


let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
let closs = document.getElementById('close');
let hide = document.getElementById('hide');


bar.addEventListener('click' , function (){
  nav.classList.add('active')
  hide.classList.remove('activeColor')
});
closs.addEventListener('click',function () {
  nav.classList.remove('active')
  hide.classList.add('activeColor')
})
window.onscroll = ()=>{
  nav.classList.remove('active')
  hide.classList.add('activeColor')
}