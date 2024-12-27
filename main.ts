input.onButtonPressed(Button.A, function () {
    if (click < 9) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        click += 1
        basic.showNumber(click)
    } else {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        click = 0
        basic.showNumber(click)
    }
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    click = 0
    basic.showNumber(click)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    click = 0
    basic.showNumber(click)
})
let click = 0
click = 0
