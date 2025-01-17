import * as svg from './svg.js';
import { Notation } from './notation.js';
import { Dimens } from "./interface.js";
import { element } from './element.js';

export class Muse extends element {
    private title: string;
    private title_font_size: number;
    private notation: Notation;

    constructor(json: string) {
        super(json, 'svg', 'muse');
    }
    protected draw() {
        this.element.innerHTML = "";
        this.element.appendChild(this.notation.svg());

        const t = svg.text(this.title, this.title_font_size);
        t.setAttribute('text-anchor', 'middle');
        const w = this.dimens.width + this.dimens.margin_left + this.dimens.margin_right;
        t.setAttribute('width', `${w}`);
        t.setAttribute('transform', `translate(${w / 2},${this.title_font_size})`);
        this.element.appendChild(t);
    }
    public setttle() {
        this.dimens.margin_left = 0;
        this.dimens.margin_right = 0;
        this.dimens.width = 0
        this.dimens.margin_top = 0;
        this.dimens.margin_bottom = 0;
        this.dimens.height = 0;
        this.dimens.x = 0;
        this.dimens.y = 0;
        const r = this.notation.settle();
        this.dimens.width = r.width;
        this.dimens.height = r.height;
        this.attach();
        this.draw();
    }
    public toObject(): Object {
        return {
            title: this.title,
            title_font_size: this.title_font_size,
            notation: this.notation,
            dimens: this.dimens,
        };
    }
    public fromObject(o: any) {
        this.title = o.title;
        this.title_font_size = o.title_font_size;
        this.dimens = o.dimens;
        this.notation = new Notation(JSON.stringify(o.notation));
    }
};
