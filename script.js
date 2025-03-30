  gsap.to(".curtain-light", {
    opacity: 0.8,     
    duration: 5,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });


const aquarium = document.querySelector(".aquarium-frame");
for (let i = 0; i < 30; i++) {

  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  
  const size = 5 + Math.random() * 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.bottom = `${Math.random() * 20}px`;

  aquarium.appendChild(bubble);

  // ランダムな上昇距離と速度
  gsap.to(bubble, {
    y: -300 - Math.random() * 200, // 上昇距離
    opacity: 0,
    duration: 4 + Math.random() * 3, // 浮上時間
    delay: Math.random() * 5,
    repeat: -1,
    ease: "sine.out"
  });
}


// fish
const fish = document.querySelector(".fish");

function swimRight() {
  fish.classList.remove("flip"); // 右向き
  gsap.to(fish, {
    x: 200, 
    duration: 20,
    ease: "sine.inOut",
    onComplete: swimLeft // 次は左へ
  });
}

function swimLeft() {
  fish.classList.add("flip"); 
  gsap.to(fish, {
    x: -100, 
    duration: 20,
    ease: "sine.inOut",
    onComplete: swimRight // また右へ
  });
}
swimRight(); // 初期起動

// fish 上下 keyframes
gsap.to(".fish", {
  keyframes: [
    { y: -10, duration: 2 },
    { y: 0, duration: 2 },
    { y: 10, duration: 2 },
    { y: 0, duration: 2 }
  ],
  repeat: -1,
  ease: "sine.inOut"
});



// walking ppl
const person = document.querySelector(".person-shadow");

function walkLeftForever() {
    // 完全に非表示にしてからリセット
    person.style.display = "none";
  
    // 位置リセット（右端にワープ）
    gsap.set(person, {
      x: window.innerWidth + 100,
      y: 0
    });
  
    // 少し時間を置いて再表示＆移動スタート
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
  
    }, 100); // 0.1秒の小さな遅延でブラウザの再描画タイミングを回避
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
  