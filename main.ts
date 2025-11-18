/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Nov 2025
 * This program send message to another microbit if sonar is too close to object.
*/

let distance : number = 0

// Setup
radio.setGroup(24)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    // Main loop
    while (true) {
        // Read distance from the sensor
        distance = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )

        // Check if the distance reading is valid

        if (distance <= 5) {
            radio.sendString('Too Close')
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Happy)
        }

        basic.pause(100)
    }

})
