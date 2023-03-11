let 跳绳时间 = 0
input.onButtonPressed(Button.A, function () {
    跳绳时间 = 60000
    while (跳绳时间 > 0) {
        basic.pause(1000)
        跳绳时间 += -1000
    }
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . # # # .
        # # # # #
        `)
})
