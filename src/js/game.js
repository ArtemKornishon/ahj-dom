export default class Game {
    constructor(field, character) {
        this.field = field;
        this.fieldSize = 4;
        this.goblin = goblin;
        this.activeGoblin = null;
    }

  

    newField() {
        const field = this.field.getField(this.fieldSize);
        const body = document.querySelector('body');
        const container = document.createElement('div');

        container.classList.add('container');
        container.appendChild(field);
        body.insertBefore(container, body.firstChild);
        this.cells = [...field.children];
    }

    randomPosition() {
        const position = Math.floor(Math.random() * this.fieldSize ** 2);
        if (position === this.position) {
            this.randomPosition();
            return;
        }
        this.deletedGoblin();
        this.position = position;
        this.adventGoblin();
    }

    deletedGoblin() {
        if (this.activeGoblin === null) {
            return;
        }
        this.cells[this.position].firstChild.remove();
    }

    adventGoblin() {
        this.activeGoblin = this.goblin.getGoblin();
        this.cells[this.position].appendChild(this.activeGoblin);
    }

    play() {
        setInterval(() => {
            this.generatePosition();
        }, 800);
    }

      start() {
        this.newField();
        this.play();
    }
}