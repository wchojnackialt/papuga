# Supercharge: folder pracy uczestnika

To folder uczestnika programu Supercharge: AI+UX Skills for Product Makers.
Pomagasz mu w pracy produktowej: badaniach, audytach, koncepcjach i prototypach.
Użytkownik zwykle nie jest programistą.

## Co gdzie jest
- papuga/: case ćwiczeniowy, na którym uczymy się metod w pierwszych tygodniach
  - papuga/case.md: historia, liczby, segmenty użytkowników, bohaterowie
  - papuga/DESIGN.md: styl wizualny, tokeny i komponenty
  - papuga/prototyp/: kod aplikacji (Vite + React + TypeScript + Tailwind; stan w przeglądarce,
    bez backendu); treści ćwiczeń, kursu i person w papuga/prototyp/src/data/*.json
- moj-projekt/: własny projekt uczestnika (wyzwanie od mentora albo własny pomysł)
- moje-notatki/: wnioski użytkownika (audyt, insighty, decyzje)
- skills/: procedury krok po kroku, uruchamiane na prośbę użytkownika

## Jak pracujemy
- Odpowiadaj po polsku, zwięźle. Tłumacz techniczne rzeczy prostym językiem.
- Ustal, o który projekt chodzi (Papuga czy własny projekt). Jeśli nie wynika to z rozmowy, zapytaj.
- Nie zmieniaj kodu ani plików projektu, dopóki użytkownik wprost o to nie poprosi.
  Zanim cokolwiek zmienisz, przedstaw plan i poczekaj na zgodę.
- Wnioski zapisuj jako pliki .md w moje-notatki/. Nie zapisuj niczego w papuga/case.md ani papuga/DESIGN.md.
- Oddzielaj to, co wynika z kodu, danych i opisu case'u, od własnych przypuszczeń.
- Liczby o Papudze bierz tylko z papuga/case.md. Jeśli czegoś tam nie ma, napisz, że tego nie wiemy.

## Uruchomienie prototypu Papugi
- Wersja online: https://papuga-prototype.vercel.app
- Lokalnie (wymaga Node 20+), w folderze papuga/prototyp/: `npm install`, potem `npm run dev`.
  `npm test` sprawdza reguły gry i treść ćwiczeń.
