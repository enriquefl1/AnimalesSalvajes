import ClassAnimal from "./ClassAnimal.js";

class Leon extends ClassAnimal {
    constructor ( nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir() {
        return this.sonido();
    }
}

class Lobo extends ClassAnimal {
    constructor ( nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Aullar() {
        return this.sonido();
    }
}

class Oso extends ClassAnimal {
    constructor ( nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Grunir() {
        return this.sonido();
    }
}

class Serpiente extends ClassAnimal {
    constructor ( nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Sisear() {
        return this.sonido();
    }
}

class Aguila extends ClassAnimal {
    constructor ( nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Chillar() {
        return this.sonido();
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila }