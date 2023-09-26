input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.C16))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.C17))
})
radio.setGroup(2)
basic.forever(function () {
    radio.sendValue("x", pins.analogReadPin(AnalogPin.C17))
    radio.sendValue("y", pins.analogReadPin(AnalogPin.C16))
    radio.sendValue("z", pins.digitalReadPin(DigitalPin.C18))
})
