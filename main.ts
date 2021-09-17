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
    距離二 = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    if (距離一 > 距離二) {
        if (科目 == 0) {
            let 國文老師的物聯網密碼 = ""
            ESP8266_IoT.setData(
            國文老師的物聯網密碼,
            最後出現數座號
            )
        }
        if (科目 == 1) {
            let 數學老師的物聯網密碼 = ""
            ESP8266_IoT.setData(
            數學老師的物聯網密碼,
            最後出現數座號
            )
        }
        if (科目 == 2) {
            let 英文老師的物聯網密碼 = ""
            ESP8266_IoT.setData(
            英文老師的物聯網密碼,
            最後出現數座號
            )
        }
        科目 = 0
        距離一 = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P0,
        PingUnit.MicroSeconds
        )
        最後出現數座號 = 0
    }
})
let 距離二 = 0
let 距離一 = 0
let 科目 = 0
let 最後出現數座號 = 0
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
I2C_LCD1602.ShowString("Enter The Code", 1, 0)
I2C_LCD1602.ShowString("Code" + " " + 最後出現數座號, 3, 1)
科目 = 0
距離一 = sonar.ping(
DigitalPin.P0,
DigitalPin.P0,
PingUnit.Centimeters
)
basic.forever(function () {
    if (keyboard.keyPressed(KeyValue.key0) || (keyboard.keyPressed(KeyValue.key1) || (keyboard.keyPressed(KeyValue.key2) || (keyboard.keyPressed(KeyValue.key3) || (keyboard.keyPressed(KeyValue.key4) || (keyboard.keyPressed(KeyValue.key5) || (keyboard.keyPressed(KeyValue.key6) || (keyboard.keyPressed(KeyValue.key7) || (keyboard.keyPressed(KeyValue.key8) || keyboard.keyPressed(KeyValue.key9)))))))))) {
        最後出現數座號 = keyboard.keyMathNumber()
        I2C_LCD1602.ShowString("Code" + " " + 最後出現數座號, 3, 1)
    }
    if (最後出現數座號 > 99999) {
        I2C_LCD1602.ShowString("Code" + "               ", 3, 1)
    }
    basic.pause(1500)
    if (keyboard.keyPressed(KeyValue.key0)) {
    	
    }
    if (keyboard.keyPressed(KeyValue.key0)) {
    	
    }
    if (keyboard.keyPressed(KeyValue.key0)) {
    	
    }
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
