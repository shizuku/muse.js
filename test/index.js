import { drawMuse } from '../dist/muse.js'
let s = `{
    "title": "classsssssssssssssss",
    "pages": [{
        "lines":[{
            "tracks":[{
                "bars": [{
                    "notes": [
                        { "num": 6, "p": -2, "pa": 0, "l": 0 },
                        { "num": 3, "p": -1, "pa": 0, "l": 1 },
                        { "num": 6, "p": -1, "pa": 0, "l": 1 },
                        { "num": 3, "p": 0, "pa": 0, "l": 0 },
                        { "num": 5, "p": -1, "pa": 0, "l": 0 },
                    ]
                }, {
                    "notes": [
                        { "num": 6, "p": -2, "pa": 0, "l": 0 },
                        { "num": 3, "p": -1, "pa": 0, "l": 1 },
                        { "num": 6, "p": -1, "pa": 0, "l": 1 },
                        { "num": 2, "p": 0, "pa": 0, "l": 1 },
                        { "num": 3, "p": 0, "pa": 0, "l": 1 },
                        { "num": 5, "p": 0, "pa": 0, "l": 0 },
                    ]
                }, {
                    "notes": [
                        { "num": 6, "p": -2, "pa": 0, "l": 0 },
                        { "num": 3, "p": -1, "pa": 0, "l": 1 },
                        { "num": 6, "p": -1, "pa": 0, "l": 1 },
                        { "num": 2, "p": -0, "pa": 0, "l": 0 },
                        { "num": 5, "p": -1, "pa": 0, "l": 0 },
                    ]
                }, {
                    "notes": [
                        { "num": 6, "p": -2, "pa": 0, "l": 0 },
                        { "num": 3, "p": -1, "pa": 0, "l": 1 },
                        { "num": 6, "p": -1, "pa": 0, "l": 1 },
                        { "num": 2, "p": 0, "pa": 0, "l": 1 },
                        { "num": 1, "p": 0, "pa": 0, "l": 1 },
                        { "num": 1, "p": 0, "pa": 0, "l": 0 },
                    ]
                }] 
            }],
        }, {
            "tracks":[{
                "bars": [{
                    "notes": [
                        { "num": 2, "p": -1, "pa": 0, "l": 0 },
                        { "num": 6, "p": -1, "pa": 0, "l": 1 },
                        { "num": 2, "p": 0, "pa": 0, "l": 1 },
                        { "num": 6, "p": 0, "pa": 0, "l": 0 },
                        { "num": 5, "p": -1, "pa": 0, "l": 0 },
                    ]
                }, {
                    "notes": [
                        { "num": 2, "p": -1, "pa": 0, "l": 0 },
                        { "num": 6, "p": -1, "pa": 0, "l": 1 },
                        { "num": 2, "p": 0, "pa": 0, "l": 1 },
                        { "num": 6, "p": 0, "pa": 0, "l": 0 },
                        { "num": 1, "p": 0, "pa": 0, "l": 0 },
                    ]
                }, {
                    "notes": [
                        { "num": 6, "p": -2, "pa": 0, "l": 0 },
                        { "num": 3, "p": -1, "pa": 0, "l": 1 },
                        { "num": 6, "p": -1, "pa": 0, "l": 1 },
                        { "num": 2, "p": -0, "pa": 0, "l": 0 },
                        { "num": 5, "p": -1, "pa": 0, "l": 0 },
                    ]
                }, {
                    "notes": [
                        { "num": 6, "p": -2, "pa": 0, "l": 0 },
                        { "num": 3, "p": -1, "pa": 0, "l": 1 },
                        { "num": 6, "p": -1, "pa": 0, "l": 1 },
                        { "num": 2, "p": 0, "pa": 0, "l": 1 },
                        { "num": 3, "p": 0, "pa": 0, "l": 1 },
                        { "num": 5, "p": -1, "pa": 0, "l": 0 },
                    ]
                }]
            }, {
                "bars": [{
                    "notes": [
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                    ]
                }, {
                    "notes": [
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                    ]
                }, {
                    "notes": [
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                    ]
                }, {
                    "notes": [
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                        { "num": 0, "p": 0, "pa": 0, "l": 0 },
                    ]
                }]
            }],
        },]
    }]
}`;
const n = JSON.parse(s);
const p = document.querySelector('#paper');
drawMuse(n, p);