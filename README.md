# Cypress

Scenariusze:
1. Poprawność wyświetlania strony<br>
   1.1 Główna<br>
   1.2 Produktu<br>
   1.3 Admin Panel

2. Logowanie na stronie admina<br>
   2.1 Poprawne dane<br>
   2.2 Błędne dane<br>
   2.3 Niepoprawny email

3. Logowanie na stronie sklepu<br>
   3.1 Poprawne dane<br>
   3.2 Błędne dane<br>
   3.3 Niepoprawny email

4. Utworzenie konta<br>
   4.1 Poprawne dane<br>
   4.2 Złe dane (za krótkie hasło)

5. Koszyk<br>
   5.1 Czy dodany produkt jest w koszyku<br>
   5.2 Czy usuwa produkt z koszyka

Aby uruchomić testy należy:<br>
    - w cmd w folderze projektu (/evershop_localhost) wpisać komendę:<br>
       - npx cypress open<br>
    - kliknąć przycisk do testowania e2e
    - wybrać przeglądarkę
    - wybrać scenariusz testowy do uruchomienia
   