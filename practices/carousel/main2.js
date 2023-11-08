const slides = document.querySelector(".slides")
setInterval(() => {
   const slideItems = slides.children;
   const activeSlide = slides.querySelector(".slide-item.active") 
   const currentIndex = [...slideItems].indexOf(activeSlide)
   let newIndex = currentIndex + 1;
   if (newIndex > slideItems.length - 1 ) newIndex = 0;
   console.log(newIndex);
   slideItems[newIndex].classList.add("active")
   slideItems[currentIndex].classList.remove("active")
   
}, 4000);