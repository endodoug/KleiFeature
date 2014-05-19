/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'starveBG',
                display: 'block',
                type: 'image',
                rect: ['0', '0','1570px','523px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"starveBG.png",'0px','0px']
            },
            {
                id: 'EetsBG',
                display: 'none',
                type: 'image',
                rect: ['330px', '0px','909px','523px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EetsBG.png",'0px','0px']
            },
            {
                id: 'ninjaBG',
                display: 'none',
                type: 'image',
                rect: ['0px', '0','1570px','523px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ninjaBG.png",'0px','0px']
            },
            {
                id: 'invisbleBG',
                display: 'none',
                type: 'image',
                rect: ['330px', '0','909px','523px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"invisbleBG.png",'0px','0px']
            },
            {
                id: 'navBar',
                type: 'rect',
                rect: ['0px', '44px','1570px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)",[270,[['rgba(0,0,0,1.00)',0],['rgba(52,52,52,1.00)',100]]]],
                stroke: [0,"rgba(0,0,0,1)","none"],
                c: [
                {
                    id: 'Text',
                    type: 'text',
                    rect: ['1040px', '11px','auto','auto','auto', 'auto'],
                    text: "Home",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(250,249,249,1.00)", "800", "none", ""]
                },
                {
                    id: 'Text2',
                    type: 'text',
                    rect: ['1121px', '11px','auto','auto','auto', 'auto'],
                    text: "Contact",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(245,203,42,1.00)", "800", "none", "normal"]
                },
                {
                    id: 'Text3',
                    type: 'text',
                    rect: ['1217px', '11px','auto','auto','auto', 'auto'],
                    text: "About",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(245,203,42,1.00)", "800", "none", "normal"]
                },
                {
                    id: 'Text4',
                    type: 'text',
                    rect: ['1299px', '11px','auto','auto','auto', 'auto'],
                    text: "Store",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(245,203,42,1.00)", "800", "none", "normal"]
                }]
            },
            {
                id: 'eets',
                display: 'none',
                type: 'image',
                rect: ['334px', '0px','909px','523px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"eets.png",'0px','0px']
            },
            {
                id: 'ninja',
                display: 'none',
                type: 'image',
                rect: ['166px', '0px','909px','523px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ninja.png",'0px','0px']
            },
            {
                id: 'invisible',
                display: 'none',
                type: 'image',
                rect: ['166px', '0','909px','523px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"invisible.png",'0px','0px']
            },
            {
                id: 'KleiLogo',
                type: 'image',
                rect: ['253px', '7px','188px','118px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"KleiLogo.png",'0px','0px']
            },
            {
                id: 'starve',
                display: 'block',
                type: 'image',
                rect: ['156px', '0px','909px','524px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"starve.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_invisbleBG}": [
                ["style", "height", '523px'],
                ["style", "left", '330px'],
                ["style", "display", 'none']
            ],
            "${_starveBG}": [
                ["style", "display", 'block']
            ],
            "${_eets}": [
                ["style", "top", '531px'],
                ["style", "display", 'none'],
                ["style", "left", '142px'],
                ["style", "height", '523px']
            ],
            "${_starve}": [
                ["style", "top", '542px'],
                ["style", "display", 'block'],
                ["style", "left", '156px'],
                ["style", "height", '524px']
            ],
            "${_Text3}": [
                ["style", "top", '11px'],
                ["style", "left", '1217px'],
                ["color", "color", 'rgba(245,203,42,1.00)']
            ],
            "${_EetsBG}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '330px'],
                ["style", "height", '523px']
            ],
            "${_Text2}": [
                ["style", "top", '11px'],
                ["style", "left", '1121px'],
                ["color", "color", 'rgba(245,203,42,1.00)']
            ],
            "${_navBar}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["gradient", "background-image", [270,[['rgba(0,0,0,1.00)',0],['rgba(52,52,52,1.00)',100]]]],
                ["style", "width", '1570px']
            ],
            "${_ninjaBG}": [
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '11px'],
                ["color", "color", 'rgba(250,249,249,1.00)'],
                ["style", "font-weight", '800'],
                ["style", "left", '1040px'],
                ["style", "font-size", '18px']
            ],
            "${_ninja}": [
                ["style", "top", '546px'],
                ["style", "display", 'none'],
                ["style", "left", '166px'],
                ["style", "height", '523px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(171,228,222,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '523px'],
                ["style", "width", '1570px']
            ],
            "${_invisible}": [
                ["style", "height", '523px'],
                ["style", "top", '534px'],
                ["style", "left", '166px'],
                ["style", "display", 'none']
            ],
            "${_KleiLogo}": [
                ["style", "left", '253px'],
                ["style", "top", '7px']
            ],
            "${_Text4}": [
                ["style", "top", '11px'],
                ["style", "left", '1299px'],
                ["color", "color", 'rgba(245,203,42,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 31500,
            autoPlay: true,
            timeline: [
                { id: "eid23", tween: [ "style", "${_ninja}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_ninja}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid31", tween: [ "style", "${_ninja}", "display", 'none', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid40", tween: [ "style", "${_invisible}", "top", '0px', { fromValue: '534px'}], position: 23000, duration: 500 },
                { id: "eid14", tween: [ "style", "${_eets}", "left", '142px', { fromValue: '142px'}], position: 7500, duration: 0 },
                { id: "eid18", tween: [ "style", "${_eets}", "left", '486px', { fromValue: '142px'}], position: 8000, duration: 7000 },
                { id: "eid30", tween: [ "style", "${_ninja}", "left", '535px', { fromValue: '166px'}], position: 15500, duration: 7500 },
                { id: "eid44", tween: [ "style", "${_invisible}", "left", '545px', { fromValue: '166px'}], position: 23500, duration: 8000 },
                { id: "eid16", tween: [ "style", "${_eets}", "top", '0px', { fromValue: '531px'}], position: 7500, duration: 500 },
                { id: "eid8", tween: [ "color", "${_Stage}", "background-color", 'rgba(171,228,222,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(171,228,222,1.00)'}], position: 7500, duration: 0 },
                { id: "eid33", tween: [ "color", "${_Stage}", "background-color", 'rgba(8,13,16,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(171,228,222,1.00)'}], position: 23000, duration: 0 },
                { id: "eid4", tween: [ "style", "${_starve}", "left", '515px', { fromValue: '156px'}], position: 1071, duration: 6429 },
                { id: "eid28", tween: [ "style", "${_ninja}", "top", '0px', { fromValue: '546px'}], position: 15000, duration: 500 },
                { id: "eid9", tween: [ "style", "${_EetsBG}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_EetsBG}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid20", tween: [ "style", "${_EetsBG}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid12", tween: [ "style", "${_eets}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_eets}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid19", tween: [ "style", "${_eets}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid21", tween: [ "style", "${_ninjaBG}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_ninjaBG}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid32", tween: [ "style", "${_ninjaBG}", "display", 'none', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid2", tween: [ "style", "${_starve}", "top", '0px', { fromValue: '542px'}], position: 0, duration: 1071 },
                { id: "eid35", tween: [ "style", "${_invisbleBG}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_invisbleBG}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid5", tween: [ "style", "${_starve}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid37", tween: [ "style", "${_invisible}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_invisible}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid6", tween: [ "style", "${_starveBG}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-29248738");
