import './index.scss';
import UtilLux from './animation';

class LuxScroll {
    private static elements: HTMLElement[] = [];

    static init() {
        this.setElements();
        this.handleScroll(); // 초기 로딩 시 판단
        this.setEvent();
    }

    private static setElements() {
        const nodeList = document.querySelectorAll<HTMLElement>('[data-lux]');
        this.elements = Array.from(nodeList);

        this.elements.forEach((el) => {
            const duration = el.dataset.luxDuration || '0.6';
            const animationType = el.dataset.lux || 'slideInUp';
            const cssObject = UtilLux.getAnimation('slideInUp');

            el.style.opacity = '0';
            el.style.transform = cssObject.before;
            el.style.transition = `all ${duration}s ease-in-out`;
        });
    }

    private static setEvent() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    private static handleScroll() {
        this.elements.forEach((el) => {
            if (el.classList.contains('lux-visible')) return;

            const rect = el.getBoundingClientRect();
            const offset = Number(el.dataset.luxOffset || 100);
            const animationType = el.dataset.lux || 'slideInUp';

            const isVisible = rect.top < window.innerHeight;

            if (isVisible) {
                const cssObject = UtilLux.getAnimation('slideInUp');
                el.style.opacity = '1';
                el.style.transform = cssObject.after;
                el.classList.add('lux-visible');
            }
        });
    }
}

export default LuxScroll;