#PAMW

Drugi projekt odziedziczył nazwę po pierwszym i znajduje się w folderze first-project.
Zawiera logiczny podział na client i serwer.
Klien napisany jest przy użyciu frameworka Angular,
Serwer w Java Spring Boot.
Uruchomienie:
W folderze first-project wywołujemy:
```bash
docker-compose build
docker-compose up
```
W przeglądarce wpisujemy adres:
localhost:3000

Bez zalogwania się serwer umożliwaia tylko rejestracje i logowanie, jednak klient nie ma zaimplementowanych wardów na ścieżkach to też konsola zwraca 401, po rejestracji możliwe jest zalogowanie, załadowanie pliku na serwer, pobranie nie jest jeszcze możliwe ale przechodząc do Pobierz plik konsola wypisze linki do plików na serwerze, jest tam też odpowiadający im endpoint ale nie zdążyłem dopisać logiki spinającej to razem.
