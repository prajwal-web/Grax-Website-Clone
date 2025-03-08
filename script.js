const animate = gsap.from(".animate-word", {
  duration: 1,
  opacity: 0,
  x: 50,
  stagger: 0.1,
  ease: "power2.out",
  delay: 0.2,
  stagger: 0.1,
  rotation: 10,
  force3D: true,
});

// gsap.from(".animate-word", {
//   duration: 1.2, 
//   opacity: 0,
//   x: -150, 
//   y: (index) => Math.sin(index * 0.8) * 30, 
//   stagger: {
//     amount: 1, 
//     from: "start",
//   },
//   rotation: (index) => Math.sin(index * 0.8) * 20, 
//   ease: "elastic.out(1, 0.75)", 
//   delay: 0.1,
//   force3D: true,
// });


document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); 

          const targetId = this.getAttribute('href').substring(1); 
          const targetSection = document.getElementById(targetId); 

          if (targetSection) {
              targetSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
});

gsap.from("#about", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
  },
});