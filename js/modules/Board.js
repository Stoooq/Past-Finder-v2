class Board {
    constructor () {
        this.canvas = document.querySelector('canvas')
        this.c = this.canvas.getContext('2d') 
        this.canvas.width = 1024
        this.canvas.height = 576 
        this.c.msImageSmoothingEnabled = false;
        this.c.mozImageSmoothingEnabled = false;
        this.c.webkitImageSmoothingEnabled = false;
        this.c.imageSmoothingEnabled = false;
        this.src = '../assets/Background.png'
        this.image = new Image()
        this.image.src = this.src
        this.positionY = 0
        this.isSlower = false
    }

    update = (mode) => {
        this.c.fillStyle = 'black'
        this.c.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.c.drawImage(this.image, 0, -this.image.height + this.canvas.height + this.positionY, this.image.width, this.image.height)
        this.c.drawImage(this.image, 0, -this.image.height * 2 +this.canvas.height + this.positionY, this.image.width, this.image.height)
        if (!this.isSlower) {
            this.positionY += mode.map.normal
        }
        if (this.isSlower) {
            this.positionY += mode.map.slow
        }
        if (this.positionY > this.image.height) this.positionY = 0
    }
}

const board = new Board()


export default board