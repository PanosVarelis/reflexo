input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2 && sprite.get(LedSpriteProperty.Y) == 2) {
        tone += 16
        music.playTone(tone, music.beat(BeatFraction.Whole))
        game.addScore(1)
        if (game.score() / 5 == score_notifier) {
            score_notifier += 1
            music.playMelody("C D E F G A B C5 ", 480)
        }
        wait_time += -50000
    } else {
        music.setTempo(120)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        game.gameOver()
    }
})
let score_notifier = 0
let tone = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let wait_time = 1000000
tone = 131
score_notifier = 1
while (game.isRunning()) {
    sprite.move(1)
    control.waitMicros(wait_time)
    sprite.ifOnEdgeBounce()
}
