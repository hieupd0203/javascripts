const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous")


nextButton.addEventListener("click", function () {
  // keyword this trong event listener thì nó sẽ đại diện cho phần tử html đang kích hoạt sự kiện
  // closest(): là method sẽ tìm kiếm các phần tử trên DOM theo css selector mà mình truyền vào, nó sẽ tìm kiếm tổ tiên (cha, ông, ...) của phần tử đang tham chiếu đến
  
  const slides = this.closest("[data-carousel]").querySelector("[data-slides]");
  const slideItems = slides.children; // html collections -> array js

  // lấy ra slide item đang active
  const activeSlide = slides.querySelector("[data-active]");

  // lấy ra current index của slide item
  const currentIndex = [...slideItems].indexOf(activeSlide)
  let newIndex = currentIndex + 1;

  if (newIndex > slideItems.length -1) newIndex = 0;

  slideItems[newIndex].dataset.active = true;
  delete slideItems[currentIndex].dataset.active;

  const dots = this.closest("[data-carousel]").querySelector("[data-dots]");
  const dotItems = dots.children; 
  const activeDot = dots.querySelector("[data-active]");
  const currentIndex1 = [...dotItems].indexOf(activeDot)
  let newIndex1 = currentIndex1 + 1;

  if (newIndex1 > dotItems.length -1) newIndex1 = 0;

  dotItems[newIndex1].dataset.active = true;
  delete dotItems[currentIndex1].dataset.active;
});


previousButton.addEventListener("click", function() {
    const slides = this.closest("[data-carousel]").querySelector("[data-slides]");
    const slideItems = slides.children;
    const activeSlide = slides.querySelector("[data-active]");
    const currentIndex = [...slideItems].indexOf(activeSlide);
    let newIndex = currentIndex - 1;

  if (newIndex < 0) newIndex = slideItems.length - 1;

  slideItems[newIndex].dataset.active = true;
  delete slideItems[currentIndex].dataset.active;

  const dots = this.closest("[data-carousel]").querySelector("[data-dots]");
  const dotItems = dots.children; 
  const activeDot = dots.querySelector("[data-active]");
  const currentIndex1 = [...dotItems].indexOf(activeDot)
  let newIndex1 = currentIndex1 - 1;

  if (newIndex1 < 0) newIndex1 = dotItems.length -1;

  dotItems[newIndex1].dataset.active = true;
  delete dotItems[currentIndex1].dataset.active;
});

// cú pháp: setInterval(function() {}, timer) - timer tính ms 1000ms = 1s
// Phương thức setInterval() gọi một hàm hoặc đánh giá một biểu thức sau một khoảng thời gian xác định (tính bằng mili giây). Tuy nhiên, số lần gọi hàm là liên tục, nó sẽ thực hiện lặp đi lặp lại cho đến khi phương thức clearInterval() được gọi hoặc cửa sổ bị đóng (tải lại trang).

// setInterval(function () {
// 	const slides = nextButton
// 		.closest("[data-carousel]")
// 		.querySelector("[data-slides]");
// 	const slideItems = slides.children; // html collections -> array js

// 	// lấy ra slide item mà đang active
// 	const activeSlide = slides.querySelector("[data-active]");

// 	// lấy ra current index của slide item
// 	const currentIndex = [...slideItems].indexOf(activeSlide);
// 	let newIndex = currentIndex + 1;

// 	if (newIndex > slideItems.length - 1) newIndex = 0;

// 	slideItems[newIndex].dataset.active = true;
// 	delete slideItems[currentIndex].dataset.active;
// }, 6000);
 
