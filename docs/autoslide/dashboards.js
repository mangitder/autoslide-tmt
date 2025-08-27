const dashboards = {
  "autoslide-tmt": {
    embedBase: "https://app.powerbi.com/view?r=eyJrIjoiN2U5ODEzZjktZTY2ZC00NTUwLTgwOGUtN2U2MmNhOTZjZGYyIiwidCI6IjM2MmE5N2FhLTE3OGYtNDNhMy1hMzE0LTY4NjgzNmNiMTUwMCIsImMiOjEwfQ%3D%3D",
    reportURLs: [
      "https://app.powerbi.com/groups/me/reports/ef24362b-d449-4455-badd-9e87acdf1146/b1d376205209e76339a5?experience=power-bi",
      "https://app.powerbi.com/groups/me/reports/ef24362b-d449-4455-badd-9e87acdf1146/b7209e36ae49de9a0aab?experience=power-bi",
      "https://app.powerbi.com/groups/me/reports/ef24362b-d449-4455-badd-9e87acdf1146/0b33138615c6853e04f1?experience=power-bi"
    ]
  },
  "autoslide-ymt": {
    embedBase: "https://app.powerbi.com/view?r=EMBED_BASE_YMT",
    reportURLs: [
      "https://app.powerbi.com/groups/me/reports/YMT_1?experience=power-bi",
      "https://app.powerbi.com/groups/me/reports/YMT_2?experience=power-bi",
      "https://app.powerbi.com/groups/me/reports/YMT_3?experience=power-bi"
    ]
  },
  "autoslide-npm": {
    embedBase: "https://app.powerbi.com/view?r=EMBED_BASE_NPM",
    reportURLs: [
      "https://app.powerbi.com/groups/me/reports/NPM_1?experience=power-bi",
      "https://app.powerbi.com/groups/me/reports/NPM_2?experience=power-bi",
      "https://app.powerbi.com/groups/me/reports/NPM_3?experience=power-bi"
    ]
  }
};

// ฟังก์ชันดึง Page ID จาก URL
function extractPageId(url) {
  const cleanUrl = url.split("?")[0];
  const parts = cleanUrl.split("/");
  return parts[parts.length - 1];
}

// สร้าง embed URLs
for (const key in dashboards) {
  const dashboard = dashboards[key];
  dashboard.pageIds = dashboard.reportURLs.map(url => extractPageId(url));
  dashboard.embedURLs = dashboard.pageIds.map(pageId => {
    return dashboard.embedBase + "&pageName=" + pageId + "&chromeless=true";
  });
}
