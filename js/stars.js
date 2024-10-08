class Star {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 880 + 2);
    this.top = -150;
    this.width = 56;
    this.height = 260;
    this.element = document.createElement("img");

    this.element.src = "images/brayshort.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    // Update the obstacle's position based on the properties left and top
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move(increaseObstacleSpeedMultiplier) {
    // Move the obstacle down by 3px
    this.top += 12;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
  /* 
  move(increaseObstacleSpeedMultiplier) {
    // Move the obstacle down by 3px
    this.top += 9 * increaseObstacleSpeedMultiplier ;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
*/

  }
