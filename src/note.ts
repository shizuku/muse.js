import * as svg from './svg.js';
import { Dimens } from "./interface.js";
import * as res from './resource.js';
import { element } from './element.js';

export class Note extends element {
    private num: number;
    private p: number;
    private pa: number;
    private l: number;

    constructor(json: string) {
        super(json);
        let o = JSON.parse(json);
        this.num = o.num;
        this.p = o.p;
        this.pa = o.pa;
        this.l = o.l;
        this.dimens = o.dimens;
        this.dimens = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            margin_left: 0,
            margin_right: 0,
            margin_top: 0,
            margin_bottom: 0,
        };

        this.element = svg.g('muse-note');
        this.attach();
        this.draw();
    }
    protected draw() {
        let n = this.num.toString();
        let t = svg.text(n, res.dimens.note_font_size);
        this.element.appendChild(t);
    }
    public settle(bar_dimens: Dimens, position: number): Dimens {

        return this.dimens;
    }
    public obj(): Object {
        return {
            num: this.num,
            p: this.p,
            pa: this.pa,
            l: this.l,
            dimens: this.dimens,
        };
    }
};
