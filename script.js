// const cosmicBg = document.querySelector(".cosmic-bg");

// document.addEventListener("mousemove", (e) => {
//   const x = (e.clientX / window.innerWidth - 0.5) * 30;
//   const y = (e.clientY / window.innerHeight - 0.5) * 30;

//   cosmicBg.style.transform = `translate(${x}px, ${y}px)`;
// });
const stars1 = document.querySelector(".stars-1");
const stars2 = document.querySelector(".stars-2");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5);
  const y = (e.clientY / window.innerHeight - 0.5);

  // Closer stars move more
  stars1.style.transform = `translate(${x * 20}px, ${y * 20}px)`;

  // Distant stars move less
  stars2.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});
