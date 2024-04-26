/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1182c5",
        secondary: "#2aa6df",
        dark: "#1e1e1e",
        light: "#f5f5f5",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
  // Tworzymy funkcję do generowania tabeli
function generujTabele() {
  // Tworzymy element tabeli
  var tabela = document.createElement('table');

  // Tworzymy pętle do generowania wierszy
  for (var i = 0; i < 5; i++) {
      // Tworzymy wiersz
      var wiersz = tabela.insertRow();

      // Tworzymy pętle do generowania komórek w wierszu
      for (var j = 0; j < 4; j++) {
          // Tworzymy komórkę
          var komorka = wiersz.insertCell();

          // Dodajemy tekst do komórki
          komorka.textContent = 'Wiersz ' + (i + 1) + ', Kolumna ' + (j + 1);
      }
  }

  // Dodajemy tabelę do elementu o id "tabela-container" w HTML
  document.getElementById('tabela-container').appendChild(tabela);
}

// Wywołujemy funkcję generującą tabelę po załadowaniu strony
window.onload = generujTabele;

};
