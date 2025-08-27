function getEmbedUrlsForDashboard(dashboardKey) {
  const dashboard = dashboards[dashboardKey];
  return dashboard?.embedURLs || [];
}

// ดึงชื่อโฟลเดอร์ปัจจุบัน
let pathParts = window.location.pathname.split("/").filter(p => p);
let folderName = pathParts[pathParts.length - 2]; // โฟลเดอร์ก่อน index.html

const embedUrls = getEmbedUrlsForDashboard(folderName);
if (embedUrls.length === 0) {
  console.error("ไม่พบ dashboard สำหรับโฟลเดอร์:", folderName);
}

// Auto Slide
let currentIndex = 0;
function showSlide(index) {
  const iframe = document.getElementById("reportFrame");
  if (!iframe) return;
  iframe.src = embedUrls[index];
}

function startAutoSlide() {
  if (embedUrls.length === 0) return;
  showSlide(currentIndex);
  setInterval(() => {
    currentIndex = (currentIndex + 1) % embedUrls.length;
    showSlide(currentIndex);
  }, 10000);
}

window.onload = startAutoSlide;
