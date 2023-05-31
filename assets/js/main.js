let serviceSection = document.getElementById('services');
let portfolioSection = document.getElementById('portfolio');
let resumeSection = document.getElementById('resume');
let contactSection = document.getElementById('contact');
let navbar = document.querySelector(".navbar");
let changeSection = document.getElementById("change-nav");
let scrollToTop = document.querySelector('.scrollToTop');
let links = document.querySelectorAll('nav .nav-link'); // diffrence between nodelist and array
let loading = document.querySelector('.loading');
console.log(serviceSection);
navbar.style.transition='1s';
scrollToTop.style.opacity='0';
window.addEventListener("scroll",function(){
    
    if(this.window.scrollY<changeSection.offsetTop){
        navbar.style.backgroundColor="transparent";
        links.forEach(element => {
            element.classList.remove('active');
        });
        links[0].classList.add('active'); 
    }
    if(this.window.scrollY>=changeSection.offsetTop){
        navbar.style.backgroundColor="white";
        links.forEach(element => {
            element.classList.remove('active');
        }); 
        links[0].classList.add('active');
    }
    if(this.window.scrollY>=serviceSection.offsetTop){
        navbar.style.backgroundColor="white"; 
        scrollToTop.style.opacity='1';
        links.forEach(element => {
            element.classList.remove('active');
        });
        links[1].classList.add('active');
    }
    if(this.window.scrollY<serviceSection.offsetTop){
        scrollToTop.style.opacity='0';
    }
    if(this.window.scrollY>=portfolioSection.offsetTop){
        navbar.style.backgroundColor="#CCFEEE"; 
        links.forEach(element => {
            element.classList.remove('active');
        });
        links[2].classList.add('active');
    }
    if(this.window.scrollY>=resumeSection.offsetTop){
        navbar.style.backgroundColor="#EEECCC"; 
        links.forEach(element => {
            element.classList.remove('active');
        });
        links[3].classList.add('active');
    }
    if(this.window.scrollY>=contactSection.offsetTop){
        navbar.style.backgroundColor="#EEE";
        links.forEach(element => {
            element.classList.remove('active');
        }); 
        links[4].classList.add('active');
    }
})

scrollToTop.addEventListener("click",function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    }) 
})

for(let i=0;i<links.length;i++){
    links[i].addEventListener('click',function(e){
        e.preventDefault(); //To prevent refresh when click on it
        let currentID=e.target.getAttribute('href');
        let targetSection = document.querySelector(currentID);
        window.scroll({
            top:targetSection.offsetTop,
            behavior:'smooth'
        })
        
        
    })
}

// setTimeout(function(){
//     loading.style.display='none'
// },2000)

document.body.style.overflow='hidden';
window.addEventListener('load',function(){
    setTimeout(function(){
        loading.style.opacity='0';
        loading.style.visibility = 'hidden'
        loading.style.transition='1s'
        document.body.style.overflow='auto';
    },2000)
})