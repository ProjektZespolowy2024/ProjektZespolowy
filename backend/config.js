// Export zmiennych
export const PORT = 5555;

export const mongoDBURL = "mongodb+srv://silvercrestpl:<password>@projekt1cluster.wqydyda.mongodb.net/?retryWrites=true&w=majority&appName=Projekt1Cluster";

// Proszę utworzyć darmową bazę danych dla siebie.
// Ta baza danych zostanie usunięta po samouczku.
const baseUrl = "https://fullstackazure-app.azurewebsites.net/";
export default baseUrl;

// Eksportowanie obiektu konfiguracyjnego
const config = {
  PORT: PORT,
  mongoDBURL: mongoDBURL
};
export { config };
