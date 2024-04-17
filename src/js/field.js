export default class Field {
    constructor() {
        this.fieldSize = 4
    }

    drawField() {
        const field = document.createElement('div');
        const cell = document.createElement('div');
        field.classList.add('field');
        for (let i = 0; i < this.fieldSize ** 2; i++) {
          cell.classList.add('cell');
          field.appendChild(cell);
        }
        this.field = field;
        return this.field;
      }
    
      getField() {
        this.drawField();
        return this.field;
      }
    }