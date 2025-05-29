const i = class i {
  constructor() {
  }
  static getAnimation(t, s = 0, e = 0) {
    return { ...this.animation[t], position: s, duration: e };
  }
};
i.animation = {
  slideInUp: {
    before: "translateY(100px)",
    after: "translateY(0px)"
  },
  slideInDown: {
    before: "translateY(-100px)",
    after: "translateY(0px)"
  },
  slideInLeft: {
    before: "translateX(100px)",
    after: "translateX(0px)"
  },
  slideInRight: {
    before: "translateX(-100px)",
    after: "translateX(0px)"
  }
};
let a = i;
const r = class r {
  static init() {
    this.setElements(), this.handleScroll(), this.setEvent();
  }
  static setElements() {
    const t = document.querySelectorAll("[data-lux]");
    this.elements = Array.from(t), this.elements.forEach((s) => {
      const e = s.dataset.luxDuration || "0.6";
      s.dataset.lux;
      const n = a.getAnimation("slideInUp");
      s.style.opacity = "0", s.style.transform = n.before, s.style.transition = `all ${e}s ease-in-out`;
    });
  }
  static setEvent() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }
  static handleScroll() {
    this.elements.forEach((t) => {
      if (t.classList.contains("lux-visible")) return;
      const s = t.getBoundingClientRect();
      if (Number(t.dataset.luxOffset || 100), t.dataset.lux, s.top < window.innerHeight) {
        const n = a.getAnimation("slideInUp");
        t.style.opacity = "1", t.style.transform = n.after, t.classList.add("lux-visible");
      }
    });
  }
};
r.elements = [];
let l = r;
export {
  l as default
};
