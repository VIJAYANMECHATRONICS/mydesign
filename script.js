window.addEventListener('load',Test)

const subheading=document.querySelector('.subheading')
const Roles=['A Developer','A Web Designer','I Love Design.','I Love to Develop.']
var i=0;
var num =Math.floor( Math.random()*Roles.length)


function Test(){
    typeWriter();
    setTimeout(Test,1000)
}

function typeWriter() {

    if (i < Roles[num].length) {
      subheading.innerHTML += Roles[num].charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }




  const hamBurger=document.querySelector('.hamburger');
  const MobileNavBar=document.querySelector('.mn');


  hamBurger.addEventListener('click',()=>{
    MobileNavBar.classList.toggle('activeMenu')
  })