radio.onReceivedString(function (receivedString) {
    if (receivedString == "START") {
        跳绳个数 = 0
        basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . # # # .
            # # # # #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        跳绳时间 = 60000
        while (跳绳时间 > 0) {
            basic.pause(1000)
            跳绳时间 += -1000
        }
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
        radio.sendString("FINISH")
        跳绳时间 = 0
    }
})
let 跳绳时间 = 0
let 跳绳个数 = 0
radio.setGroup(1)
music.setVolume(255)
basic.forever(function () {
    if (跳绳时间 > 0 && input.acceleration(Dimension.Y) >= 1500) {
        跳绳个数 += 1
        radio.sendNumber(跳绳个数)
        basic.showNumber(跳绳个数)
    }
})
