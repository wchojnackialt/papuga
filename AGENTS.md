# Papuga: projekt w programie Supercharge

Papuga to fikcyjna polska aplikacja do nauki języków: 1,2 mln użytkowników
miesięcznie, ponad połowa to uczniowie klas 6–8 i liceów. Pomagasz zespołowi
produktowemu, który ma zweryfikować pomysł zarządu i zaproponować zmianę
z policzalną wartością biznesową. Pełny opis case'u: docs/case.md.

## Co gdzie jest
- docs/case.md: historia, liczby, segmenty użytkowników, bohaterowie
- docs/DESIGN.md: styl wizualny, tokeny i komponenty
- moje-notatki/: wnioski użytkownika (audyt, insighty, decyzje)
- src/: kod aplikacji (Vite + React + TypeScript + Tailwind; stan w przeglądarce, bez backendu);
  treści ćwiczeń, kursu i person w src/data/*.json

## Uruchomienie
- Wymaga Node 20+. `npm install`, potem `npm run dev` (adres pojawi się w terminalu).
- `npm test` sprawdza reguły gry i treść ćwiczeń.

## Jak pracujemy
- Odpowiadaj po polsku, zwięźle. Użytkownik zwykle nie jest programistą:
  tłumacz techniczne rzeczy prostym językiem.
- Nie zmieniaj kodu aplikacji, dopóki użytkownik wprost o to nie poprosi.
  Zanim cokolwiek zmienisz, przedstaw plan i poczekaj na zgodę.
- Wnioski zapisuj jako pliki .md w moje-notatki/. Niczego nie zapisuj w docs/:
  to materiały case'u.
- Oddzielaj to, co wynika z kodu, danych i case'u, od własnych przypuszczeń.
- Liczby o Papudze bierz tylko z docs/case.md. Jeśli czegoś tam nie ma, napisz, że tego nie wiemy.
