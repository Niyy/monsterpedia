
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', '/static/media/pretty.jpg');
    this.load.image('ground', '/static/media/platform.png');
    this.load.image('bomb', '/static/media/bomb.png');
    this.load.image('star', '/static/media/star.png')
    this.load.spritesheet('dude', 
        '/static/media/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create ()
{
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
    
    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms. create(750, 220, 'ground');

    // Player Setup
    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setColliderWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
}

function update()
{

}