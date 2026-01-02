// 1. ZABEZPIECZENIE: Sprawdź czy użytkownik jest zalogowany
if (sessionStorage.getItem("authenticated") !== "true") {
  window.location.href = "login.html";
}

// 2. NAWIGACJA: Funkcje przełączania widoków (Menu <-> Tabele)
function showPlan(planId) {
  // Ukryj menu główne
  const menu = document.getElementById("menu-section");
  menu.classList.remove("active");

  // Ukryj wszystkie inne sekcje planów dla pewności
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.classList.remove("active"));

  // Pokaż wybraną sekcję tabeli
  const selectedSection = document.getElementById("plan-" + planId);
  if (selectedSection) {
    selectedSection.classList.add("active");
    // Zawsze przewiń na górę kontenera po zmianie planu
    document.querySelector(".content-box").scrollTop = 0;
  }
}

function showMenu() {
  // Ukryj wszystkie sekcje planów
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.classList.remove("active"));

  // Przywróć menu główne
  document.getElementById("menu-section").classList.add("active");

  // Ponownie wywołaj animację wlotu przycisków przy powrocie do menu
  animateButtons();
}

// 3. ANIMACJA: Wejście przycisków (Twoja oryginalna logika)
function animateButtons() {
  const buttons = document.querySelectorAll(".action-btn");
  buttons.forEach((btn, index) => {
    // Reset stanów przed animacją
    btn.style.transition = "none";
    btn.style.opacity = "0";
    btn.style.transform = "translateX(-30px)";

    setTimeout(() => {
      btn.style.transition = "all 0.5s ease";
      btn.style.opacity = "1";
      btn.style.transform = "translateX(0)";
    }, 200 + index * 100);
  });
}

// Uruchom animację przy pierwszym wczytaniu strony
document.addEventListener("DOMContentLoaded", animateButtons);

// 4. WYLOGOWANIE: Obsługa przycisku (Twoja oryginalna logika)
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    // Animacja wylogowania
    const contentBox = document.querySelector(".content-box");
    contentBox.style.opacity = "0";
    contentBox.style.transform = "scale(0.95)";

    setTimeout(() => {
      sessionStorage.removeItem("authenticated");
      window.location.href = "login.html";
    }, 300);
  });
}
