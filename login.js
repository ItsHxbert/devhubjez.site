// Dane logowania (nie jest to bezpieczne - tylko dla demonstracji!)
const CORRECT_USERNAME = "Hubert";
const CORRECT_PASSWORD = "zaq1@WSX";

// Pobierz elementy
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

// Obsługa formularza
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Zapobiega odświeżeniu strony

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  // Sprawdź dane logowania
  if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
    // Sukces - zapisz token i przekieruj
    sessionStorage.setItem("authenticated", "true");

    // Animacja sukcesu
    loginForm.style.opacity = "0";
    loginForm.style.transform = "scale(0.95)";

    setTimeout(() => {
      window.location.href = "turniej.html";
    }, 300);
  } else {
    // Błąd - pokaż komunikat
    showError("Nieprawidłowy login lub hasło!");

    // Animacja potrząśnięcia
    const loginBox = document.querySelector(".login-box");
    loginBox.style.animation = "shake 0.5s";

    setTimeout(() => {
      loginBox.style.animation = "";
    }, 500);
  }
});

// Funkcja wyświetlania błędu
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.animation = "fadeIn 0.3s";

  // Wyczyść pola hasła
  passwordInput.value = "";
  passwordInput.focus();

  // Usuń błąd po 3 sekundach
  setTimeout(() => {
    errorMessage.textContent = "";
  }, 3000);
}

// Animacja potrząśnięcia
const style = document.createElement("style");
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    form {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Dodaj efekt focus na pierwszym polu
window.addEventListener("load", () => {
  usernameInput.focus();
});
