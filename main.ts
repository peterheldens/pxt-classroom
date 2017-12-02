
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * Customs blocks
 */
//% weight=100 color=#0fbc11 icon="\uf02d"

namespace classroom {
    let cur_x = input.acceleration(Dimension.X)
    let cur_y = input.acceleration(Dimension.Y)
    let cur_z = input.acceleration(Dimension.Z)
    let prev_x = cur_x
    let prev_y = cur_y
    let prev_z = cur_z

    //% block
    export function dobbelsteen(): number {
        return Math.random(6) + 1;
    }
    //% block
    export function barbie(): string {
        let c = Math.random(2)
        let r = ""
        if (c == 0) { r = "Ken" };
        if (c == 1) { r = "Barbie" };
        return r;
    }

    //% block
    export function auteurs(): string {
        return "Pauline+Peter";
    }

    //% block
    export function calibreer() {
        let cur_x = input.acceleration(Dimension.X)
        let cur_y = input.acceleration(Dimension.Y)
        let cur_z = input.acceleration(Dimension.Z)
        let prev_x = cur_x
        let prev_y = cur_y
        let prev_z = cur_z
    }

    //% block
    export function dief(): boolean {
        let treshold = 100
        prev_x = cur_x
        cur_x = input.acceleration(Dimension.X)
        prev_y = cur_y
        cur_y = input.acceleration(Dimension.Y)
        prev_z = cur_z
        cur_z = input.acceleration(Dimension.Z)
        return ((Math.abs(cur_x - prev_x) > treshold) || (Math.abs(cur_y - prev_y) > treshold) || (Math.abs(cur_z - prev_z) > treshold))
    }

}

