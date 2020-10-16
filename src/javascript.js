

var x = document.getElementsByClassName("menu")
console.log(x.scrollY)


window.addEventListener('scroll', ()=> {
  let menu =document.getElementsByClassName("menu");
  let position = menu.getBoundingClientrect().top;
  console.log(position);
})