/* =========================================================================
   APPLICATION STATE & COMPLETE 14 PHOTOS DATA (FOR NIDHU)
   ========================================================================= */
const APP_STATE = {
  currentStage: 'stage-welcome',
  pinEntered: '',
  correctPin: '28082026',
  failedAttempts: 0,
  viewedMemories: new Set(),
  activeMemoryIndex: 0,
  audioPlaying: false
};

const COMPLIMENTS = [
  "“You bring a light into this family that nobody else ever could. Stay fabulous, Nidhu!”",
  "“Your kindness, laughter, and sharp wit make you the coolest sister in the entire world.”",
  "“No matter how many jokes we crack, you are truly the heartbeat of our home, Nidhu.”",
  "“Keep chasing your biggest dreams fearlessly. Your brother is always cheering for you!”",
  "“Certified 100% the most fashionable and awesome sister across Chennai and beyond!”"
];

const MUHURAT_DESCS = [
  "“A sister is both a guardian of childhood memories and an inspiring guide for the future. Every Rakhi tied on my wrist is an eternal vow of loyalty and support, Nidhu.”",
  "“May this year surround you with brilliant health, overflowing laughter, delicious treats, and triumphs in everything you strive for.”",
  "“Never doubt your strength or uniqueness. You possess the power to achieve every goal you set your heart upon.”"
];

const MEMORIES_DATA = [
  { 
    id: 1, 
    title: "Chennai City Adventures", 
    desc: "Overlooking the bustling streets of Chennai with you! Through all the traffic, cloudy skies, and city rush, every adventure is unforgettable, Nidhu.", 
    imgSrc: "photo1.jpg", 
    objectPos: "center center", 
    svgColor: "#8e24aa" 
  },
  { 
    id: 2, 
    title: "Sacred Temple Blessings", 
    desc: "Standing beneath the majestic gopuram, praying for your eternal peace, radiant health, and boundless success in everything you do.", 
    imgSrc: "photo2.jpg", 
    objectPos: "center 30%", 
    svgColor: "#e91e63" 
  },
  { 
    id: 3, 
    title: "Sunny Garden Smiles", 
    desc: "A bright smile that instantly lights up the entire room. Never stop sharing this genuine warmth with the world, Nidhu!", 
    imgSrc: "photo3.jpg", 
    objectPos: "center center", 
    svgColor: "#ff6f00" 
  },
  { 
    id: 4, 
    title: "Partner in Crime & Laughs", 
    desc: "That mischievous laugh when we both know we're up to no good! Truly the best teasing partner in the whole universe.", 
    imgSrc: "photo4.jpg", 
    objectPos: "center center", 
    svgColor: "#3949ab" 
  },
  { 
    id: 5, 
    title: "Silly Cafe Shenanigans", 
    desc: "Making funny faces while waiting for food under warm rustic cafe lights. No filter needed when we're together!", 
    imgSrc: "photo5.jpg", 
    objectPos: "center 65%", 
    svgColor: "#00897b" 
  },
  { 
    id: 6, 
    title: "Food & Treat Dates", 
    desc: "Sharing meals, talking about random life stories, and plotting our next street food run. The greatest memories are always the simplest ones.", 
    imgSrc: "photo6.jpg", 
    objectPos: "center 55%", 
    svgColor: "#f4511e" 
  },
  { 
    id: 7, 
    title: "Casual Chill Hours", 
    desc: "Just relaxing and catching up without any rush. Having you as a sister means never having to pretend—just pure comfort.", 
    imgSrc: "photo7.jpg", 
    objectPos: "center center", 
    svgColor: "#d81b60" 
  },
  { 
    id: 8, 
    title: "Contagious Radiant Laughter", 
    desc: "Eyes crinkled in absolute joy! Your laughter has a superpower: it makes everyone around you instantly happy, Nidhu.", 
    imgSrc: "photo8.jpg", 
    objectPos: "center center", 
    svgColor: "#7b1fa2" 
  },
  { 
    id: 9, 
    title: "Rainy Bus Journeys", 
    desc: "Looking out of raindrops on the window during public transit trips. Quiet, peaceful, and cherished sister moments.", 
    imgSrc: "photo9.jpg", 
    objectPos: "center 45%", 
    svgColor: "#fb8c00" 
  },
  { 
    id: 10, 
    title: "Tall Dreams & Ambition", 
    desc: "Standing tall against the skyline! May you reach higher than every skyscraper you admire. Always cheering for your big wins, Nidhu.", 
    imgSrc: "photo10.jpg", 
    objectPos: "center 25%", 
    svgColor: "#1e88e5" 
  },
  { 
    id: 11, 
    title: "Reaching For The Stars", 
    desc: "That radiant pose under the big towers! Keep smiling and conquering the world step by step, Nidhu.", 
    imgSrc: "photo11.jpg", 
    objectPos: "center 25%", 
    svgColor: "#43a047" 
  },
  { 
    id: 12, 
    title: "Sacred Ground Memories", 
    desc: "Smiles, festive vibes, and exploring temple grounds together. Moments that remain carved into our hearts forever.", 
    imgSrc: "photo12.jpg", 
    objectPos: "center 40%", 
    svgColor: "#5e35b1" 
  },
  { 
    id: 13, 
    title: "Office Campus Shenanigans", 
    desc: "Teasing faces, lanyards, and turning ordinary corporate courtyards into laughing galleries. Classic us!", 
    imgSrc: "photo13.jpg", 
    objectPos: "center 35%", 
    svgColor: "#c2185b" 
  },
  { 
    id: 14, 
    title: "Coastal Breezes & Waves", 
    desc: "Salty sea air, waves crashing, and that unforgettable candid smile looking back. Always & forever, my wonderful sister.", 
    imgSrc: "photo14.jpg", 
    objectPos: "center center", 
    svgColor: "#f57c00" 
  }
];

/* =========================================================================
   STAGE ROUTER (GLOBAL SCOPE)
   ========================================================================= */
window.switchStage = function(stageId) {
  synthClick();
  document.querySelectorAll('.stage-view').forEach(stage => {
    stage.classList.remove('active');
  });

  const nextEl = document.getElementById(stageId);
  if (nextEl) {
    nextEl.classList.add('active');
    APP_STATE.currentStage = stageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

/* =========================================================================
   AUDIO CONTROLLER (DHAAGON SE BAANDHAA)
   ========================================================================= */
function synthClick() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
  } catch (e) {}
}

window.toggleSongPlayback = function() {
  const audio = document.getElementById('bg-audio');
  const btn = document.getElementById('music-play-btn');

  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      if (btn) btn.innerText = 'Pause Song ⏸️';
      APP_STATE.audioPlaying = true;
    }).catch(err => {
      console.warn("Retrying audio on tap...", err);
      audio.load();
      audio.play().then(() => {
        if (btn) btn.innerText = 'Pause Song ⏸️';
        APP_STATE.audioPlaying = true;
      }).catch(finalErr => {
        console.error("Playback error:", finalErr);
        alert("Make sure 'song.mp3' is placed inside your GitHub repository next to index.html!");
      });
    });
  } else {
    audio.pause();
    if (btn) btn.innerText = 'Play Song 🎵';
    APP_STATE.audioPlaying = false;
  }
};

/* =========================================================================
   STAGE 1: DYNAMIC TIME & INTERACTIONS
   ========================================================================= */
function updateDynamicClock() {
  const now = new Date();
  
  const digitalTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  const clockEl = document.getElementById('welcome-digital-clock');
  if (clockEl) clockEl.innerText = digitalTime;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dynamicDate = now.toLocaleDateString(undefined, options);
  const dateEl = document.getElementById('welcome-dynamic-date');
  if (dateEl) dateEl.innerText = dynamicDate;
}
setInterval(updateDynamicClock, 1000);
updateDynamicClock();

window.selectMuhurat = function(idx, el) {
  synthClick();
  document.querySelectorAll('.muhurat-card').forEach(card => card.classList.remove('active'));
  el.classList.add('active');
  const descEl = document.getElementById('muhurat-desc-box');
  if (descEl && MUHURAT_DESCS[idx]) {
    descEl.innerHTML = `<p class="font-serif" style="font-size: 1.15rem; line-height: 1.8; color: #fff8e1;">${MUHURAT_DESCS[idx]}</p>`;
  }
};

window.toggleVowCard = function(cardEl) {
  synthClick();
  cardEl.classList.toggle('flipped');
};

window.generateCompliment = function() {
  synthClick();
  const textEl = document.getElementById('compliment-text');
  const rand = COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)];
  if (textEl) textEl.innerText = rand;
};

/* =========================================================================
   STAGE 2: 18-SECOND LOADING PORTAL
   ========================================================================= */
window.startLoadingPortal = function() {
  switchStage('stage-loading');

  let timeLeft = 18;
  const totalSeconds = 18;
  const numElem = document.getElementById('loading-seconds-num');
  const barElem = document.getElementById('portal-progress-fill');
  const msgElem = document.getElementById('portal-msg-text');

  const messages = [
    "Gathering golden threads of memories...",
    "Lighting auspicious diyas for Nidhu...",
    "Preparing your personalized Rakhi sanctuary...",
    "Infusing brotherly blessings and love...",
    "Unlocking the secret vault door..."
  ];

  const interval = setInterval(() => {
    timeLeft--;
    if (numElem) numElem.innerText = timeLeft;

    const progressPct = ((totalSeconds - timeLeft) / totalSeconds) * 100;
    if (barElem) barElem.style.width = `${progressPct}%`;

    const msgIdx = Math.floor(((totalSeconds - timeLeft) / totalSeconds) * messages.length);
    if (msgElem && messages[msgIdx]) {
      msgElem.innerText = messages[msgIdx];
    }

    if (timeLeft <= 0) {
      clearInterval(interval);
      switchStage('stage-passcode');
    }
  }, 1000);
};

/* =========================================================================
   STAGE 3: PASSCODE & PUNISHMENT SYSTEM
   ========================================================================= */
window.enterKey = function(num) {
  synthClick();
  if (APP_STATE.pinEntered.length < 8) {
    APP_STATE.pinEntered += num;
    updatePinDots();
    if (APP_STATE.pinEntered.length === 8) {
      validatePin();
    }
  }
};

window.clearKey = function() {
  synthClick();
  APP_STATE.pinEntered = '';
  updatePinDots();
  document.getElementById('lock-error-msg').innerText = '';
};

function updatePinDots() {
  for (let i = 0; i < 8; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (dot) {
      dot.classList.toggle('filled', i < APP_STATE.pinEntered.length);
    }
  }
}

window.submitManualPin = function() {
  synthClick();
  if (APP_STATE.pinEntered.length > 0) {
    validatePin();
  }
};

function validatePin() {
  if (APP_STATE.pinEntered === APP_STATE.correctPin) {
    switchStage('stage-memories');
    APP_STATE.failedAttempts = 0;
  } else {
    APP_STATE.failedAttempts++;
    const wrap = document.getElementById('pin-wrap');
    wrap.classList.add('shake-it');
    
    if (APP_STATE.failedAttempts >= 3) {
      document.getElementById('lock-error-msg').innerText = '';
      setTimeout(() => {
        wrap.classList.remove('shake-it');
        clearKey();
        document.getElementById('punishment-modal').classList.add('active');
      }, 600);
    } else {
      document.getElementById('lock-error-msg').innerText = `Aiyo Nidhu 😂 Try: 28082026 (Attempts left: ${3 - APP_STATE.failedAttempts})`;
      setTimeout(() => {
        wrap.classList.remove('shake-it');
        clearKey();
      }, 900);
    }
  }
}

window.resolvePunishment = function(correctAnswer) {
  synthClick();
  if (correctAnswer) {
    alert("Correct answer! 👑 Passcode chamber unlocked for you!");
    document.getElementById('punishment-modal').classList.remove('active');
    APP_STATE.failedAttempts = 0;
    APP_STATE.pinEntered = '28082026';
    updatePinDots();
    setTimeout(() => {
      switchStage('stage-memories');
    }, 400);
  } else {
    alert("Incorrect! There is only one prettiest sister in Chennai: NIDHU! Try Option A 😂");
  }
};

/* =========================================================================
   STAGE 4: 14 MEMORIES GALLERY & MODAL CLOSE
   ========================================================================= */
function buildProceduralMemorySVG(title, color) {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="%231a042e"/>
        <stop offset="100%" stop-color="${encodeURIComponent(color)}"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(%23g)"/>
    <circle cx="200" cy="220" r="110" fill="none" stroke="%23ffd54f" stroke-width="3" stroke-dasharray="8,6"/>
    <circle cx="200" cy="220" r="75" fill="none" stroke="%23ff6f00" stroke-width="4"/>
    <polygon points="200,165 215,205 255,220 215,235 200,275 185,235 145,220 185,205" fill="%23ffd54f"/>
    <circle cx="200" cy="220" r="15" fill="%23e91e63"/>
    <text x="50%" y="400" fill="%23fff8e1" font-size="20" font-family="sans-serif" font-weight="bold" text-anchor="middle">${encodeURIComponent(title)}</text>
    <text x="50%" y="430" fill="%23ffb300" font-size="14" font-family="sans-serif" text-anchor="middle">Pure Sister Memories • Nidhu</text>
  </svg>`;
}

function initMemoriesGallery() {
  const container = document.getElementById('memories-grid-target');
  if (!container) return;
  container.innerHTML = '';
  
  MEMORIES_DATA.forEach((mem, index) => {
    const card = document.createElement('div');
    card.className = 'memory-luxury-frame';
    card.onclick = () => openMemoryLightbox(index);
    
    const fallbackSvg = buildProceduralMemorySVG(mem.title, mem.svgColor);
    
    card.innerHTML = `
      <div class="frame-corner-ornament frame-tl"></div>
      <div class="frame-corner-ornament frame-tr"></div>
      <div class="frame-corner-ornament frame-bl"></div>
      <div class="frame-corner-ornament frame-br"></div>
      <div class="frame-img-holder">
        <img 
          src="${mem.imgSrc}" 
          alt="${mem.title}" 
          style="object-position: ${mem.objectPos || 'center top'};"
          loading="lazy" 
          onerror="this.onerror=null; this.src='${fallbackSvg}';"
        />
        <div class="frame-glass-sheen"></div>
      </div>
      <div class="frame-caption-box">
        <span class="frame-mem-num">CHAPTER ${String(mem.id).padStart(2, '0')}</span>
        <h4 class="frame-mem-title font-cinzel">${mem.title}</h4>
      </div>
    `;
    container.appendChild(card);
  });
}

window.openMemoryLightbox = function(index) {
  synthClick();
  APP_STATE.activeMemoryIndex = index;
  APP_STATE.viewedMemories.add(index);
  updateMemoryProgress();

  const mem = MEMORIES_DATA[index];
  const lbImg = document.getElementById('lb-img');
  const fallbackSvg = buildProceduralMemorySVG(mem.title, mem.svgColor);
  
  lbImg.onerror = () => { lbImg.src = fallbackSvg; };
  lbImg.src = mem.imgSrc;
  lbImg.style.objectPosition = mem.objectPos || 'center center';
  
  document.getElementById('lb-tag').innerText = `SACRED MEMORY ${String(mem.id).padStart(2, '0')} / 14`;
  document.getElementById('lb-title').innerText = mem.title;
  document.getElementById('lb-desc').innerText = mem.desc;
  document.getElementById('memory-lightbox').classList.add('active');
};

window.closeMemoryLightbox = function(e) {
  if (e) e.stopPropagation();
  synthClick();
  const modal = document.getElementById('memory-lightbox');
  if (modal) {
    modal.classList.remove('active');
  }
};

window.nextMemory = function() {
  APP_STATE.activeMemoryIndex = (APP_STATE.activeMemoryIndex + 1) % MEMORIES_DATA.length;
  openMemoryLightbox(APP_STATE.activeMemoryIndex);
};

window.prevMemory = function() {
  APP_STATE.activeMemoryIndex = (APP_STATE.activeMemoryIndex - 1 + MEMORIES_DATA.length) % MEMORIES_DATA.length;
  openMemoryLightbox(APP_STATE.activeMemoryIndex);
};

function updateMemoryProgress() {
  const count = APP_STATE.viewedMemories.size;
  document.getElementById('mem-unlocked-count').innerText = `Memory ${String(count).padStart(2, '0')} / 14`;
  const pct = (count / 14) * 100;
  document.getElementById('mem-progress-bar').style.width = `${pct}%`;
}

/* =========================================================================
   STAGE 5: CARD STUDIO & DOWNLOAD
   ========================================================================= */
function updateLiveCard() {
  const from = document.getElementById('card-input-from').value || 'Your Annoying Brother';
  const theme = document.getElementById('card-select-theme').value;
  const quoteOpt = document.getElementById('card-select-quote').value;
  const msg = document.getElementById('card-input-msg').value;

  const quoteMap = {
    "1": "“A sister is both your mirror and your biggest supporter in this world.”",
    "2": "“Threads of gold, memories of joy, and a bond that only gets stronger with time.”",
    "3": "“No matter how much we tease each other, you will always be my number one.”"
  };

  document.getElementById('card-out-from').innerText = `— FROM ${from.toUpperCase()}`;
  document.getElementById('card-out-quote').innerText = quoteMap[quoteOpt] || quoteMap["1"];
  document.getElementById('card-out-msg').innerText = msg;

  const cardBox = document.getElementById('card-preview-container');
  if (theme === 'crimson') {
    cardBox.style.background = 'radial-gradient(circle at center, #6b0c2e 0%, #1a0209 100%)';
  } else if (theme === 'orange') {
    cardBox.style.background = 'radial-gradient(circle at center, #6d3200 0%, #1f0700 100%)';
  } else {
    cardBox.style.background = 'radial-gradient(circle at center, #350b52 0%, #150222 100%)';
  }
}

window.renderMagicalCardWithLoader = function() {
  synthClick();
  const btn = document.getElementById('btn-generate-card');
  btn.innerText = "Weaving Golden Rakhi... ⏳";
  btn.disabled = true;

  setTimeout(() => {
    updateLiveCard();
    btn.innerText = "Re-Generate Card ✨";
    btn.disabled = false;

    const revealArea = document.getElementById('card-reveal-area');
    revealArea.classList.add('active');
    revealArea.scrollIntoView({ behavior: 'smooth' });
  }, 1000);
};

window.downloadCardAsCanvas = function() {
  synthClick();
  const offCanvas = document.createElement('canvas');
  offCanvas.width = 800;
  offCanvas.height = 1000;
  const oCtx = offCanvas.getContext('2d');

  const grad = oCtx.createRadialGradient(400, 500, 50, 400, 500, 450);
  grad.addColorStop(0, '#350b52');
  grad.addColorStop(1, '#0e0117');
  oCtx.fillStyle = grad;
  oCtx.fillRect(0, 0, 800, 1000);

  oCtx.strokeStyle = '#ffd54f';
  oCtx.lineWidth = 8;
  oCtx.strokeRect(30, 30, 740, 940);

  oCtx.fillStyle = '#ff6f00';
  oCtx.font = 'bold 20px sans-serif';
  oCtx.textAlign = 'center';
  oCtx.fillText('SACRED RAKSHA BANDHAN CELEBRATION', 400, 150);

  oCtx.fillStyle = '#ffd54f';
  oCtx.font = 'bold 64px serif';
  oCtx.fillText('Nidhu ❤️', 400, 240);

  oCtx.fillStyle = '#ffffff';
  oCtx.font = 'italic 24px serif';
  oCtx.fillText('“A sister is both your mirror and your biggest supporter.”', 400, 340);

  oCtx.font = '20px sans-serif';
  oCtx.fillStyle = '#ffe082';
  const customMsg = document.getElementById('card-input-msg').value;
  oCtx.fillText(customMsg.substring(0, 55), 400, 480);
  if (customMsg.length > 55) {
    oCtx.fillText(customMsg.substring(55, 110), 400, 520);
  }

  oCtx.fillStyle = '#ff9800';
  oCtx.font = 'bold 22px sans-serif';
  oCtx.fillText(`— ${document.getElementById('card-input-from').value}`, 400, 820);

  const link = document.createElement('a');
  link.download = 'Nidhu_Raksha_Bandhan_Card.png';
  link.href = offCanvas.toDataURL();
  link.click();
};

/* =========================================================================
   CANVAS PARTICLES & CURSOR
   ========================================================================= */
const canvas = document.getElementById('fx-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class FestiveParticle {
  constructor(x, y) {
    this.x = x || Math.random() * canvas.width;
    this.y = y || Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 1.2;
    this.speedY = Math.random() * -1 - 0.3;
    this.color = ['#ffd54f', '#ff6f00', '#ba68c8', '#ff80ab', '#ffffff'][Math.floor(Math.random() * 5)];
    this.alpha = Math.random() * 0.8 + 0.2;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.y < 0) this.y = canvas.height;
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

for (let i = 0; i < 60; i++) {
  particles.push(new FestiveParticle());
}

function renderCanvasParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(renderCanvasParticles);
}
renderCanvasParticles();

window.triggerHeroBlast = function(e) {
  synthClick();
  const rect = e.currentTarget.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  for (let i = 0; i < 40; i++) {
    const p = new FestiveParticle(originX, originY);
    p.speedX = (Math.random() - 0.5) * 10;
    p.speedY = (Math.random() - 0.5) * 10;
    particles.push(p);
  }
  alert("✨ A special Raksha Bandhan blessing for Nidhu!");
};

window.addEventListener('mousemove', (e) => {
  const cur = document.getElementById('cursor');
  const dot = document.getElementById('cursor-dot');
  if (cur && dot) {
    cur.style.left = `${e.clientX}px`;
    cur.style.top = `${e.clientY}px`;
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
  }
});

window.promptExit = function() {
  synthClick();
  const res = confirm("Leaving already, Nidhu? 🥹 Stay and cherish the festival a little longer!");
  if (res) {
    switchStage('stage-welcome');
  }
};

window.addEventListener('DOMContentLoaded', () => {
  initMemoriesGallery();

  // Tap outside card to dismiss memory modal
  const modal = document.getElementById('memory-lightbox');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.closeMemoryLightbox();
      }
    });
  }
});
