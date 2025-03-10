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

gsap.to("nav", {
  background: "#fff",

  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom top",

    toggleActions: "play reverse play reverse",
  },
});

gsap.to("nav .list ul li a", {
  color: "black",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
});
gsap.to(".logo", {
  color: "black",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
});
gsap.to(".logo img", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom top",
    onEnter: () => {
      console.log("Entering Scroll Area: Changing to dark logo");
      document.querySelector(".logo img").src =
        "https://marketifythemes.net/html/grax/img/logo/dark.png";
    },
    onLeave: () => {
      console.log("Leaving Scroll Area: Changing to light logo");
      document.querySelector(".logo img").src =
        "https://marketifythemes.net/html/grax/img/logo/light.png";
    },
    onEnterBack: () => {
      console.log("Scrolling back: Changing to light logo");
      document.querySelector(".logo img").src =
        "https://marketifythemes.net/html/grax/img/logo/light.png";
    },
    onLeaveBack: () => {
      console.log("Scrolling down again: Changing to dark logo");
      document.querySelector(".logo img").src =
        "https://marketifythemes.net/html/grax/img/logo/dark.png";
    },
  },
});
