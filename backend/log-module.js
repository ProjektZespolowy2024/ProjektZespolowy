var nick = " ";
var haslo = " ";

nick = prompt("Nick: " + nick);
haslo = prompt("Hasło: " + haslo);

if (nick == "nick" && haslo == "123") {
  alert("Witamy");
} else {
  alert("Błędny login lub hasło");
}
