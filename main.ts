keyboard.kbEvent(KeyValue.keyminus, function () {
    keyboard.setIndexColor(11, 0xff0000)
    basic.pause(200)
    keyboard.ledBlank()
    I2C_LCD1602.ShowString("Code" + "               ", 3, 1)
})
input.onButtonPressed(Button.A, function () {
    科目 += 1
})
keyboard.kbEvent(KeyValue.keydf, function () {
    keyboard.setIndexColor(15, 0xff0000)
    basic.pause(200)
    keyboard.ledBlank()
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Put In Your", 3, 0)
    I2C_LCD1602.ShowString("Homework", 4, 1)
    for (let index = 0; index < 4; index++) {
        if (距離1 > 距離2) {
            I2C_LCD1602.clear()
            距離1 = sonar.ping(
            DigitalPin.P0,
            DigitalPin.P1,
            PingUnit.Centimeters
            )
            I2C_LCD1602.ShowString("Enter The Code", 1, 0)
            I2C_LCD1602.ShowString("Code" + "               ", 3, 1)
        }
        basic.pause(200)
    }
})
let 最後出現數 = 0
let 距離2 = 0
let 距離1 = 0
let 科目 = 0
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
I2C_LCD1602.ShowString("Enter The Code", 1, 0)
if (科目 == 0) {
    I2C_LCD1602.ShowString("Chinese", 0, 1)
}
if (科目 == 1) {
    I2C_LCD1602.ShowString("Math", 0, 1)
}
if (科目 == 2) {
    I2C_LCD1602.ShowString("English", 0, 1)
}
if (科目 == 3) {
    I2C_LCD1602.ShowString("Science", 0, 1)
}
if (科目 == 4) {
    I2C_LCD1602.ShowString("Social studies", 0, 1)
}
距離1 = sonar.ping(
DigitalPin.P0,
DigitalPin.P1,
PingUnit.Centimeters
)
basic.forever(function () {
    if (keyboard.keyPressed(KeyValue.key0) || (keyboard.keyPressed(KeyValue.key1) || (keyboard.keyPressed(KeyValue.key2) || (keyboard.keyPressed(KeyValue.key3) || (keyboard.keyPressed(KeyValue.key4) || (keyboard.keyPressed(KeyValue.key5) || (keyboard.keyPressed(KeyValue.key6) || (keyboard.keyPressed(KeyValue.key7) || (keyboard.keyPressed(KeyValue.key8) || keyboard.keyPressed(KeyValue.key9)))))))))) {
        最後出現數 = keyboard.keyMathNumber()
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Chinese", 4, 0)
        I2C_LCD1602.ShowString("Code" + " " + 最後出現數, 3, 1)
    }
})
basic.forever(function () {
    if (最後出現數 > 99999) {
        I2C_LCD1602.ShowString("Code" + "               ", 3, 1)
    }
    basic.pause(1500)
})
basic.forever(function () {
    if (keyboard.keyPressed(KeyValue.key0)) {
        keyboard.setIndexColor(0, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key1)) {
        keyboard.setIndexColor(1, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key2)) {
        keyboard.setIndexColor(2, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key3)) {
        keyboard.setIndexColor(3, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key4)) {
        keyboard.setIndexColor(4, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key5)) {
        keyboard.setIndexColor(5, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key6)) {
        keyboard.setIndexColor(6, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key7)) {
        keyboard.setIndexColor(7, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key8)) {
        keyboard.setIndexColor(8, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key9)) {
        keyboard.setIndexColor(9, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
})
basic.forever(function () {
    距離2 = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.pause(2000)
})
