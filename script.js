
const pageTopBtn = document.getElementById("page-top");

pageTopBtn.setAttribute("class",window.scrollY>50 ?"show" :"hide");

window.addEventListener("scroll", () => {
  pageTopBtn.setAttribute("class",window.scrollY>50 ?"show" :"hide");
})

pageTopBtn.addEventListener("click",()=>{
  window.scrollTo({
    top:0, 
    behavior:"smooth"});
  });