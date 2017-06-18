# GamePRG8
Typescript game
[Link naar de game](https://basobas.github.io/GamePRG8/)
Zoom uit op je browser als de game niet volledig te zien is.
Gebruik een key om te vliegen.

### Programmeer installatie:
- Fork de game op github.
- Open de game in visual studio.
- In de map dev staan alle typescript bestanden.
- In de map docs vind je de css html javascript bestanden.
- Gebruik ctrl + schift + b om het bestand te compileren

### Eisen PRG 8

Klassendiagram
![UML](Uml.png?raw=true "uml")

### Interface: 
Behavior is een interface voor de verschillende acties van de vogel
### Static utility method:
Om collision te detecten gebruik ik utils.ts dit is een static method
### Singleton:
Game is een singleton
### Strategy:
De vogel heeft verschilende behaviours die allemaal apart aangeroepen kunnen worden
### Encapsulation:
Ik maak gebruik van private, public en protected variabeles
### Composition:
Game heeft een bird en een obstacle
### Inheritance:
Bird en obstacle erven van gameobject
### Observer:
De obstacles zijn observers van de bird. De bird is de observerable. Als je op de bird clicked dan worden de obstacles die op het scherm zijn oranje
### Namespaces:
Ik heb namespaces gebruikt voor de verschillende schermen die er zijn.
### Enumeraties:
Enum.ts slaat de keycodes op die gebruikt worden in de game.
### Polymorphism:
Ik gebruik verschillende events. click en toetsen.
### Library
Ik gebruik van GreenSock library voor de animaties van het start scherm en het gameover scherm

### Review Sem eindproduct
Ik zal in deze review elk punt apart aflopen en toelichten.

### Klassendiagram
Ik zie dat deze nog niet helemaal up-to-date is op dit moment maar hij ziet er verder goed uit en is op de juiste manier gemaakt.
### Interface
Behaviour is een interface met en deze heeft verschillende acties (crashing, falling, flying).
### Static utility method
Er wordt gebruik gemaakt van Utils met daarin static methods: checkCollision en checkBorderCollision. Deze wordt aangeroepen in gamescreen.ts.
### Singleton
Game is een singleton gemaakt in game.ts: public static instance: Game.
### Strategy
Doormiddel van Behaviour heb je verschillende behaviours die apart aangeroepen en dus gebruikt kunnen worden. Op deze manier wordt er gebruik gemaakt van strategy in de game.
### Encapsulation
De game maakt overal gebruik van private, public en protected variabeles, de game maakt dus gebruik van encapsulation.
### Composition
Wel een hat aangemaakt maar deze is niet uitgewerkt.
### Inheritance
Bird en Obstacle erven van GameObject en er wordt dus gebruik gemaakt van inheritance (.. extends GameObject).
### Observer
De Obstacles zijn Observers van Bird. Bird is de Observerable. Als je op de Bird klikt reageert de obstacle hierop door oranje te worden. Er wordt dus gebruik gemaakt van Observers.
### Namespaces
De Views maken gebruik van namespace Screens.
### Enumeraties
Enum.ts is aangemaakt met daarin de Keys die gebruikt worden in Falling en Flying.
### Polymorphism
Er wordt gebruik gemaakt van verschillende events: MouseEvent en KeyboardEvent.
### Abstract
In view.ts is View een abstracte class (abstract class View).
### GameLoop
De GameLoop wordt netjes gebruikt in GameScreen.
### Library
De gebruikte Library is GreenSock. In StartScreen en Scire wordt TweenLite gebruikt.

### Beoordeling
De game is speelbaar zonder fouten en alle methodes die gebruik moesten worden zijn toegpast in het project. Wel zou ik adviseren om af en toe in de code toe te lichten wat de code doet zodat het leesbaar is voor mensen die je code willen inzien en niet weten wat het doet. Polymorphism kan trouwens nog toegepast worden in je game door de array van gameobject in je gamescreen.ts aan te roepen. Daarnaast ontbrak de toelichting van de abstracte class in je readme, maar deze had je verder wel gewoon netjes verwerkt in je game. Ook lijkt je klassendiagram niet up-to-date te zijn wat wel een vereiste is dus ik raad je aan deze nog bij te werken. Op gebied van code zou ik jouw game een voldoende geven met de kanttekening dat je de klassendiagram bijwerkt en met het advies om de gameobject array te gebruiken.
