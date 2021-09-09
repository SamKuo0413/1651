keyboard.kbEvent(KeyValue.key1, function () {
    最後出現數 += 1
})
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
let 最後出現數 = 70100
I2C_LCD1602.ShowNumber(最後出現數, 0, 0)
I2C_LCD1602.ShowString("Hello", 0, 0)
