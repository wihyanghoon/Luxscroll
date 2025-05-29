declare class UtilLux {
    private static animation;
    constructor();
    static getAnimation(type: keyof typeof UtilLux.animation, position?: number, duration?: number): {
        position: number;
        duration: number;
        before: string;
        after: string;
    } | {
        position: number;
        duration: number;
        before: string;
        after: string;
    } | {
        position: number;
        duration: number;
        before: string;
        after: string;
    } | {
        position: number;
        duration: number;
        before: string;
        after: string;
    };
}
export default UtilLux;
