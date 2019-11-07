
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


function collectStar(player, star)
{
    star.disableBody(true, true);
}


function preload ()
{
    this.load.image('sky', '/static/media/pretty.jpg');
    this.load.image('ground', '/static/media/platform.png');
    this.load.image('bomb', '/static/media/bomb.png');
    this.load.image('star', '/static/media/star.png');
    this.load.image('vertex', '/static/media/circle.png');
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
    platforms.create(750, 220, 'ground');

    // Player Setup
    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300)

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    }); 

    // Set up controls
    cursors = this.input.keyboard.createCursorKeys();
    this.input.on('pointerdown', function (pointer) {
        console.log('down');
        this.add.image(pointer.x, pointer.y, 'vertex');
    }, this);
    

    // Set up collectables
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    })

    stars.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    })

    // Add collisions
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);
}


function update()
{
    if(cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if(cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-480);
    }
}