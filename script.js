const fish = document.querySelector(".fish");
const tl = gsap.timeline({ repeat: -1, defaults: { ease: "sine.inOut" } });

// Step 1: Light fades in
tl.to(".curtain-light", {
  opacity: 0.8,
  duration: 2
});

// Step 2: Fish swims right
tl.to(fish, {
  x: 200,
  duration: 5,
  onStart: () => fish.classList.remove("flip")
}, "-=1"); // start 1 second earlier

// Step 3: Fish bobs up and down
tl.to(fish, {
  keyframes: [
    { y: -10, duration: 1 },
    { y: 0, duration: 1 },
    { y: 10, duration: 1 },
    { y: 0, duration: 1 }
  ]
}, "<"); // start at the same time as swim

// Step 4: Fish swims left
tl.to(fish, {
  x: -100,
  duration: 5,
  onStart: () => fish.classList.add("flip")
});

// Step 5: Light dims
tl.to(".curtain-light", {
  opacity: 0.2,
  duration: 2
}, "-=2"); // start before fish finishes turning





// walking ppl
const person = document.querySelector(".person-shadow");

function walkLeftForever() {
    person.style.display = "none";
  
    gsap.set(person, {
      x: window.innerWidth + 100,
      y: 0
    });
  
    setTimeout(() => {
      person.style.display = "block";
  
      gsap.to(person, {
        x: -1000,
        duration: 15,
        ease: "linear",
        onComplete: () => {
          setTimeout(walkLeftForever, 2000);
        }
      });
  
    }, 100); 
  }
  walkLeftForever();



// BGM 
const bgm = document.getElementById("bgm");
const toggleBtn = document.getElementById("toggleMusic");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgm.volume = 0.4;
    bgm.play().then(() => {
      isPlaying = true;
      toggleBtn.textContent = "⏸";
    }).catch(err => {
      console.log("can't play bgm", err);
    });
  } else {
    bgm.pause();
    isPlaying = false;
    toggleBtn.textContent = "▶";
  }
});
