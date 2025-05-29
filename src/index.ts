class LuxScroll {
    private elements: HTMLElement[] = [];

    constructor() {
        this.init();
    }

    private init() {
        this.setElements();
        this.setEvent();
    }

    private setElements() {
        const nodeList = document.querySelectorAll<HTMLElement>('[data-lux]');
        this.elements = Array.from(nodeList);
    }

    private setEvent() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    private handleScroll() {
        this.elements.forEach((el) => {

        });
    }
}