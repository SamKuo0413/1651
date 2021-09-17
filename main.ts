keyboard.kbEvent(KeyValue.keyminus, function () {
    keyboard.setIndexColor(11, 0xff0000)
    basic.pause(200)
    keyboard.ledBlank()
    I2C_LCD1602.ShowString("Code" + "               ", 3, 1)
})
keyboard.kbEvent(KeyValue.keydf, function () {
    keyboard.setIndexColor(15, 0xff0000)
    basic.pause(200)
    keyboard.ledBlank()
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Put In Your", 3, 0)
    I2C_LCD1602.ShowString("Homework", 4, 1)
})
let 最後出現數 = 0
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
I2C_LCD1602.ShowString("Enter The Subject", 1, 0)
while (keyboard.keyPressed(KeyValue.key0) || (keyboard.keyPressed(KeyValue.key1) || (keyboard.keyPressed(KeyValue.key2) || (keyboard.keyPressed(KeyValue.key3) || keyboard.keyPressed(KeyValue.key4))))) {
    if (keyboard.keyPressed(KeyValue.key0)) {
        I2C_LCD1602.ShowString("Chinese", 0, 1)
    }
    if (keyboard.keyPressed(KeyValue.key1)) {
        I2C_LCD1602.ShowString("English", 0, 1)
    }
    if (keyboard.keyPressed(KeyValue.key2)) {
        I2C_LCD1602.ShowString("Math", 0, 1)
    }
    if (keyboard.keyPressed(KeyValue.key3)) {
        I2C_LCD1602.ShowString("Science", 0, 1)
    }
    if (keyboard.keyPressed(KeyValue.key4)) {
        I2C_LCD1602.ShowString("Social studies", 0, 1)
    }
}
basic.forever(function () {
    if (keyboard.keyPressed(KeyValue.key0) || (keyboard.keyPressed(KeyValue.key1) || (keyboard.keyPressed(KeyValue.key2) || (keyboard.keyPressed(KeyValue.key3) || (keyboard.keyPressed(KeyValue.key4) || (keyboard.keyPressed(KeyValue.key5) || (keyboard.keyPressed(KeyValue.key6) || (keyboard.keyPressed(KeyValue.key7) || (keyboard.keyPressed(KeyValue.key8) || keyboard.keyPressed(KeyValue.key9)))))))))) {
        最後出現數 = keyboard.keyMathNumber()
        I2C_LCD1602.ShowString("Code" + " " + 最後出現數, 3, 1)
    }
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
