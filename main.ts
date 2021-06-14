basic.forever(function () {
    while (input.isGesture(Gesture.Shake)) {
        basic.showNumber(randint(1, 6))
    }
})
