// Variables para los carros
var car1, car2;

function setup() {
  // Crear el lienzo
  createCanvas(600, 400);
  
  // Crear los objetos carro con características distintas
  car1 = new Car(color(255, 0, 0), 1, 0); // Rojo, velocidad 1, no puede saltar
  car2 = new Car(color(0, 255, 0), 2, 32); // Verde, velocidad 2, puede saltar con la tecla espacio
}

function draw() {
  // Establecer el fondo
  background(220);
  
  // Mover los carros
  car1.move();
  car2.move();
  
  // Mostrar los carros
  car1.display();
  car2.display();
}

function keyPressed() {
  // Si se presiona la tecla espacio y el carro 2 puede saltar
  if (keyCode === 32 && car2.canJump) {
    car2.jump();
  }
}

// Clase Car para crear los objetos carro
class Car {
  constructor(color, speed, jumpHeight) {
    this.color = color; // Color del carro
    this.speed = speed; // Velocidad del carro
    this.jumpHeight = jumpHeight; // Altura del salto del carro
    this.canJump = (jumpHeight > 0); // Si el carro puede saltar
    this.x = 0; // Posición horizontal del carro
    this.y = 0; // Posición vertical del carro
  }
  
  // Método para mover el carro en el eje x
  move() {
    this.x += this.speed;
    // Si el carro se sale del lienzo, volver al principio
    if (this.x > width) {
      this.x = 0;
    }
  }
  
  // Método para mostrar el carro
  display() {
    fill(this.color);
    rect(this.x, height/2, 50, 30);
  }
  
  // Método para hacer que el carro salte
  jump() {
    this.y -= this.jumpHeight;
    // Si el carro llega al suelo, volver a la posición original
    if (this.y >= 0) {
      this.y = 0;
    }
  }
}

