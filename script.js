// รายชื่อ URL รูปภาพพื้นหลังแยกตามแบรนด์
const brandBackgrounds = {
  honda: "url('https://i.ytimg.com/vi/-mN_vjrAYpM/maxresdefault.jpg')",
  yamaha: "url('media/yamaha-bg.jpg')" // สามารถเปลี่ยนเป็น URL หรือไฟล์ภาพ Yamaha ได้
};

// ฟังก์ชันสลับภาพพื้นหลังพร้อมเอฟเฟกต์ Black Fade
function switchBrand(brandName) {
  const overlay = document.getElementById('pageOverlay');
  const heroSection = document.querySelector('.hero');

  if (!overlay || !heroSection) return;

  // 1. จอมืด (Fade In)
  overlay.classList.add('active');

  // 2. สลับรูปพื้นหลังขณะจอมืด
  setTimeout(() => {
    if (brandBackgrounds[brandName]) {
      heroSection.style.backgroundImage = `
        linear-gradient(180deg, rgba(8, 12, 17, 0.7) 0%, rgba(8, 12, 17, 0.85) 100%),
        ${brandBackgrounds[brandName]}
      `;
    }

    // 3. จางฉากดำออก (Fade Out)
    setTimeout(() => {
      overlay.classList.remove('active');
    }, 100);
  }, 400);
}

function toggleMusic(){
  const audio = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");
  if(!audio) return;
  if(audio.paused){
    audio.play();
    btn.textContent = "⏸ หยุดเพลง";
  } else {
    audio.pause();
    btn.textContent = "▶ เปิดเพลง";
  }
}

function showMessage(){
  const name = document.getElementById("name")?.value || "ผู้ใช้งาน";
  document.getElementById("formMessage").textContent = "ขอบคุณ " + name + " สำหรับความคิดเห็นครับ";
  return false;
}

function filterMods(){
  const q = (document.getElementById("searchMod")?.value || "").toLowerCase();
  document.querySelectorAll(".mod-item").forEach(x => {
    x.style.display = x.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
}