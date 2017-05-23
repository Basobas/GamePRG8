# GamePRG8
Typescript game
[Link naar de game](https://basobas.github.io/GamePRG8/)
Zoom uit op je browser als de game niet volledig te zien is.
Gebruik een key om te vliegen.

Programmeer installatie:
- Fork de game op github.
- Open de game in visual studio.
- In de map dev staan alle typescript bestanden.
- In de map docs vind je de css html javascript bestanden.
- Gebruik ctrl + schift + b om het bestand te compileren

Eisen PRG 8

Klassendiagram
![UML](Uml.png?raw=true "UML")

- Interface: 
Behavior is een interface voor de verschillende acties van de vogel
- Static utility method:
Om collision te detecten gebruik ik utils.ts dit is een static method
- Singleton:
Game is een singleton
- Strategy:
De vogel heeft verschilende behaviours die allemaal apart aangeroepen kunnen worden
- Encapsulation:
Ik maak gebruik van private, public en protected variabeles
- Composition:
Game heeft een bird en een obstacle
- Inheritance:
Bird en obstacle erven van gameobject
