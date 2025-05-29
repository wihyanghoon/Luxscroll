class UtilLux {
    private static animation = {
        slideInUp : {
            before : "translateY(100px)",
            after : "translateY(0px)"
        },
        slideInDown : {
            before : "translateY(-100px)",
            after : "translateY(0px)"
        },
        slideInLeft : {
            before : "translateX(100px)",
            after : "translateX(0px)"
        },
        slideInRight : {
            before : "translateX(-100px)",
            after : "translateX(0px)"
        }
    }
    constructor() {
    }

    static getAnimation(type: keyof typeof UtilLux.animation, position = 0, duration = 0) {
        return { ...this.animation[type], position, duration }
    }
}

export default UtilLux;