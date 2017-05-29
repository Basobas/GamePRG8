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
![UML](Uml.png?raw=true "uml")

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

### Beoordeling door Carlo | 0917863

 +### Interface
 +
 +Hij gebruikt behaviour als een interface om verschillende acties van de bird uit te voeren, deze is toegevoegd.
 +
 +### Static Utility Method
 +
 +Hij gebruikt de utils.ts static method om collision te detecten, deze is toegevoegd. 
 +
 +### Singleton
 +
 +Hij maakt een singleton van de game class, deze is toegevoegd.
 +
 +### Strategy
 +
 +Hij heeft verschillende behaviours gebruikt en werken ook in de game. Alleen kan de gebruiker constant blijven vliegen, dit is niet het geval bij de orginele flappybird.
 +
 +### Encapsulation
 +
 +Hij maakt gebruik van encapsulation. Hij gebruikt private en public variables. Niks om op aan te merken.
 +
 +### Composition
 +
 +Hij maakt gebruik van composition. Game heeft een gameObjecht en gameObjechtCar heeft een bird. Hij mist alleen nog zijn hat in de composition volgens het UML
 +
 +### Inheritance
 +
 +Hij wil enemie class van player laten erven. Dit zit er nog niet in. Braking, driving, crashing, jumping, shooting etc erven wel van behaviour
 +
 +### Beoordeling
 +
 +Voor mijn besef zijn alle geleerde principes juist toegevoegd in het spel. Ik heb over bas zijn code verder weinig aan op te merken naast wat     mogelijke css verbeteringen. Wel heb ik een verbetering gevonden in de game mechanics die ik significant vond. 
 +
 De verbetering luid : De gebruiker constant blijven vliegen. In Flappy Bird is de game mechanic dat je constant moet blijven tikken op het scherm om de bird te laten vliegen. 
 Dus nadat de behaviour flying wordt aangeroepen gaat de bird omhoog. 
 Daarna verandert de behaviour van flying direct naar falling.
 +
 +### Voldoende
 +
 +### Pull request
 +
 +De behaviour logica van de class flying aanpassen om ervoor te zorgen dat het spel speelt zoals flappy bird. En wat gesjoemel met de physics om de game even moeilijk als flappy bird te maken.