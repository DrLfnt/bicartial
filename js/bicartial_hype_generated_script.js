//	HYPE.documents["bicartial"]
(function() {
    (function k() {
        function l(a, b, d) {
            var c=!1;
            null==window[a]&&(null==window[b]?(window[b]=[], window[b].push(k), a=document.getElementsByTagName("head")[0], b=document.createElement("script"), c=h, false==!0&&(c=""), b.type="text/javascript", b.src=c+"/"+d, a.appendChild(b)): window[b].push(k), c=!0);
            return c
        }
        var h="bicartial.hyperesources", c="bicartial", e="bicartial_hype_container";
        if(false==!1)try {
            for(var f=document.getElementsByTagName("script"), a=0;
            a<f.length;
            a++) {
                var b=f[a].src;
                if(null!=b&&-1!=b.indexOf("bicartial_hype_generated_script.js")) {
                    h=b.substr(0, b.lastIndexOf("/"));
                    break
                }
            }
        }
        catch(n) {}
        if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/), a=parseFloat(a&&a[1])||null, a=l("HYPE_530", "HYPE_dtl_530", !0==(null!=a&&10>a||false==!0)?"HYPE-530.full.min.js":"HYPE-530.thin.min.js"), false==!0&&(a=a||l("HYPE_w_530", "HYPE_wdtl_530", "HYPE-530.waypoints.min.js")), a))return;
        f=window.HYPE.documents;
        if(null!=f[c]) {
            b=1;
            a=c;
            do c=""+a+"-"+b++;
            while(null!=f[c]);
            for(var d=document.getElementsByTagName("div"), b=!1, a=0;
            a<d.length;
            a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")) {
                var b=1, g=e;
                do e=""+g+"-"+b++;
                while(null!=document.getElementById(e));
                d[a].id=e;
                b=!0;
                break
            }
            if(!1==b)return
        }
        b=[];
        b=[];
        d= {}
        ;
        g= {}
        ;
        for(a=0;
        a<b.length;
        a++)try {
            g[b[a].identifier]=b[a].name, d[b[a].name]=eval("(function(){return "+b[a].source+"})();")
        }
        catch(m) {
            window.console&&window.console.log(m), d[b[a].name]=function() {}
        }
        a=new HYPE_530(c, e, {
            "60": {
                p: 1, n: "../img/antes_02.png", g: "506", t: "@1x"
            }
            , "47": {
                p: 1, n: "../img/5.png", g: "433", t: "@1x"
            }
            , "54": {
                p: 1, n: "../img/back4.jpg", g: "467", t: "@1x"
            }
            , "61": {
                p: 1, n: "../img/antes_01.png", g: "508", t: "@1x"
            }
            , "48": {
                p: 1, n: "../img/9.png", g: "434", t: "@1x"
            }
            , "55": {
                p: 1, n: "../img/back2-1.jpg", g: "468", t: "@1x"
            }
            , "62": {
                p: 1, n: "../img/despues_06.png", g: "510", t: "@1x"
            }
            , "49": {
                p: 1, n: "../img/6.png", g: "435", t: "@1x"
            }
            , "56": {
                p: 1, n: "../img/antes_06.png", g: "498", t: "@1x"
            }
            , "63": {
                p: 1, n: "../img/despues_05.png", g: "512", t: "@1x"
            }
            , "57": {
                p: 1, n: "../img/antes_05.png", g: "500", t: "@1x"
            }
            , "64": {
                p: 1, n: "../img/despues_04.png", g: "514", t: "@1x"
            }
            , "58": {
                p: 1, n: "../img/antes_04.png", g: "502", t: "@1x"
            }
            , "65": {
                p: 1, n: "../img/despues_03.png", g: "516", t: "@1x"
            }
            , "0": {
                p: 1, n: "../img/texto2.png", g: "6", t: "@1x"
            }
            , "59": {
                p: 1, n: "../img/antes_03.png", g: "504", t: "@1x"
            }
            , "66": {
                p: 1, n: "../img/despues_02.png", g: "518", t: "@1x"
            }
            , "1": {
                p: 1, n: "../img/texto1.png", g: "8", t: "@1x"
            }
            , "2": {
                p: 1, n: "../img/portada.jpg", g: "10", t: "@1x"
            }
            , "67": {
                p: 1, n: "../img/despues_01.png", g: "520", t: "@1x"
            }
            , "3": {
                p: 1, n: "../img/flecha.png", g: "16", t: "@1x"
            }
            , "68": {
                p: 1, n: "../img/antes.png", g: "196", t: "@1x"
            }
            , "4": {
                p: 1, n: "../img/texto2-1.png", g: "21", t: "@1x"
            }
            , "5": {
                p: 1, n: "../img/texto1-1.png", g: "23", t: "@1x"
            }
            , "69": {
                p: 1, n: "../img/despues.png", g: "270", t: "@1x"
            }
            , "6": {
                p: 1, n: "../img/pantalla1.jpg", g: "25", t: "@1x"
            }
            , "7": {
                p: 1, n: "../img/mono2.png", g: "27", t: "@1x"
            }
            , "10": {
                p: 1, n: "../img/anuncio.png", g: "33", t: "@1x"
            }
            , "8": {
                p: 1, n: "../img/mono.png", g: "29", t: "@1x"
            }
            , "9": {
                p: 1, n: "../img/logo.png", g: "31", t: "@1x"
            }
            , "11": {
                p: 1, n: "../img/home.png", g: "47", t: "@1x"
            }
            , "12": {
                p: 1, n: "../img/flecha2.png", g: "49", t: "@1x"
            }
            , "13": {
                p: 1, n: "../img/final.png", g: "52", t: "@1x"
            }
            , "20": {
                p: 1, n: "../img/texto.png", g: "83", t: "@1x"
            }
            , "21": {
                p: 1, n: "../img/medicina.png", g: "84", t: "@1x"
            }
            , "14": {
                p: 1, n: "../img/pantalla3.jpg", g: "71", t: "@1x"
            }
            , "22": {
                p: 1, n: "../img/texto1-2.png", g: "149", t: "@1x"
            }
            , "15": {
                p: 1, n: "../img/auto.png", g: "76", t: "@1x"
            }
            , "30": {
                p: 1, n: "../img/texto-2.png", g: "305", t: "@1x"
            }
            , "23": {
                p: 1, n: "../img/figura.png", g: "150", t: "@1x"
            }
            , "16": {
                p: 1, n: "../img/icono.png", g: "74", o: true, t: "@1x"
            }
            , "31": {
                p: 1, n: "../img/grafica-1.png", g: "306", t: "@1x"
            }
            , "24": {
                p: 1, n: "../img/texto1-3.png", g: "175", t: "@1x"
            }
            , "17": {
                p: 1, n: "../img/icono_2x.png", g: "74", o: true, t: "@2x"
            }
            , "32": {
                p: 1, n: "../img/logo-1.png", g: "325", t: "@1x"
            }
            , "25": {
                p: 1, n: "../img/advertencia.png", g: "176", t: "@1x"
            }
            , "18": {
                p: 1, n: "../img/icono2.png", g: "80", o: true, t: "@1x"
            }
            , "40": {
                p: 1, n: "../img/8.png", g: "382", t: "@1x"
            }
            , "33": {
                p: 1, n: "../img/medicina-1.png", g: "358", o: true, t: "@1x"
            }
            , "26": {
                p: 1, n: "../img/pantalla.jpg", g: "193", t: "@1x"
            }
            , "19": {
                p: 1, n: "../img/icono2_2x.png", g: "80", o: true, t: "@2x"
            }
            , "41": {
                p: 1, n: "../img/7.png", g: "384", t: "@1x"
            }
            , "34": {
                p: 1, n: "../img/medicina-1_2x.png", g: "358", o: true, t: "@2x"
            }
            , "27": {
                p: 1, n: "../img/texto1-1-1.png", g: "195", t: "@1x"
            }
            , "42": {
                p: 1, n: "../img/0.png", g: "428", t: "@1x"
            }
            , "35": {
                p: 1, n: "../img/texto-3.png", g: "359", t: "@1x"
            }
            , "28": {
                p: 1, n: "../img/texto-1.png", g: "287", t: "@1x"
            }
            , "43": {
                p: 1, n: "../img/1.png", g: "429", t: "@1x"
            }
            , "50": {
                p: 1, n: "../img/andro.png", g: "454", o: true, t: "@1x"
            }
            , "36": {
                p: 1, n: "../img/pantalla-1.jpg", g: "360", t: "@1x"
            }
            , "29": {
                p: 1, n: "../img/grafica.png", g: "288", t: "@1x"
            }
            , "44": {
                p: 1, n: "../img/2.png", g: "430", t: "@1x"
            }
            , "51": {
                p: 1, n: "../img/andro_2x.png", g: "454", o: true, t: "@2x"
            }
            , "37": {
                p: 1, n: "../img/creditos.jpg", g: "375", t: "@1x"
            }
            , "45": {
                p: 1, n: "../img/3.png", g: "431", t: "@1x"
            }
            , "52": {
                p: 1, n: "../img/back-1.jpg", g: "465", t: "@1x"
            }
            , "38": {
                p: 1, n: "../img/icono-3.png", g: "376", t: "@1x"
            }
            , "46": {
                p: 1, n: "../img/4.png", g: "432", t: "@1x"
            }
            , "39": {
                p: 1, n: "../img/numeros-1.jpg", g: "381", t: "@1x"
            }
            , "53": {
                p: 1, n: "../img/back3.jpg", g: "466", t: "@1x"
            }
        }
        , h, [], d, [ {
            n: "1", o: "1", X: [0]
        }
        , {
            n: "2", o: "18", X: [1]
        }
        , {
            n: "3", o: "54", X: [2]
        }
        , {
            n: "4", o: "133", X: [3]
        }
        , {
            n: "5", o: "159", X: [4]
        }
        , {
            n: "6", o: "271", X: [5]
        }
        , {
            n: "7", o: "393", X: [6]
        }
        , {
            n: "8", o: "213", X: [7]
        }
        , {
            n: "9", o: "457", X: [8]
        }
        , {
            n: "10", o: "255", X: [9]
        }
        , {
            n: "11", o: "461", X: [10]
        }
        , {
            n: "12", o: "289", X: [11]
        }
        , {
            n: "13", o: "409", X: [12]
        }
        , {
            n: "14", o: "308", X: [13]
        }
        , {
            n: "15", o: "361", X: [14]
        }
        ], [ {
            o:"3", p:"600px", x:0, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i:"kTimelineDefaultIdentifier", n:"Control temporal principal", z:1.24, b:[], a:[ {
                        f: "c", y: 0, z: 0.09, i: "e", e: 1, s: 0, o: "538"
                    }
                    , {
                        f: "c", y: 0.09, z: 0.21, i: "b", e: 42, s: -30, o: "536"
                    }
                    , {
                        f: "c", y: 0.09, z: 0.21, i: "e", e: 1, s: 0, o: "535"
                    }
                    , {
                        f: "c", y: 0.09, z: 0.21, i: "e", e: 1, s: 0, o: "536"
                    }
                    , {
                        f: "c", y: 0.09, z: 0.21, i: "e", e: 1, s: 0, o: "534"
                    }
                    , {
                        y: 0.09, i: "e", s: 1, z: 0, o: "538", f: "c"
                    }
                    , {
                        y: 1, i: "b", s: 42, z: 0, o: "536", f: "c"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.5, s: 1, o: "535"
                    }
                    , {
                        f: "c", y: 1, z: 0.24, i: "e", e: 1, s: 0, o: "537"
                    }
                    , {
                        y: 1, i: "e", s: 1, z: 0, o: "536", f: "c"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.50049446202531644, s: 1, o: "534"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.5, z: 0, o: "535", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.50049446202531644, z: 0, o: "534", f: "c"
                    }
                    , {
                        y: 1.24, i: "e", s: 1, z: 0, o: "537", f: "c"
                    }
                    ], f:30
                }
            }
            , bZ:180, O:["535", "536", "534", "537", "538"], v: {
                "536": {
                    h: "8", p: "no-repeat", x: "visible", a: 428, q: "100% 100%", b: -30, j: "absolute", r: "inline", c: 216, k: "div", z: 4, d: 29, e: 0
                }
                , "537": {
                    h: "6", p: "no-repeat", x: "visible", a: 379, q: "100% 100%", bS: 45, j: "absolute", b: 80, z: 2, k: "div", c: 313, d: 38, r: "inline", e: 0
                }
                , "534": {
                    h:"16", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:3, d:62, c:63, e:0, aP:"pointer"
                }
                , "538": {
                    h: "10", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: -30, j: "absolute", r: "inline", c: 1024, k: "div", z: 1, d: 768, e: 0
                }
                , "535": {
                    h:"52", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", z:5, d:62, c:63, e:0, aP:"pointer"
                }
            }
        }
        , {
            o:"20", p:"600px", x:1, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i:"kTimelineDefaultIdentifier", n:"Control temporal principal", z:3.17, b:[], a:[ {
                        f: "c", y: 0, z: 0.06, i: "e", e: 1, s: 0, o: "540"
                    }
                    , {
                        f: "c", y: 0, z: 0.06, i: "e", e: 1, s: 0, o: "550"
                    }
                    , {
                        f: "c", y: 0, z: 0.06, i: "e", e: 1, s: 0, o: "547"
                    }
                    , {
                        y: 0.06, i: "e", s: 1, z: 0, o: "550", f: "c"
                    }
                    , {
                        y: 0.06, i: "e", s: 1, z: 0, o: "547", f: "c"
                    }
                    , {
                        y: 0.06, i: "e", s: 1, z: 0, o: "540", f: "c"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "549"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "545"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "539"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "544"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 1, s: 0, o: "551"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.50286787974683544, s: 1, o: "549"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.5, s: 1, o: "545"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.5, s: 1, o: "539"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.5, s: 1, o: "544"
                    }
                    , {
                        f: "c", y: 1.15, z: 0.15, i: "e", e: 1, s: 0, o: "546"
                    }
                    , {
                        y: 1.15, i: "e", s: 1, z: 0, o: "551", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.50286787974683544, z: 0, o: "549", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.5, z: 0, o: "545", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.5, z: 0, o: "539", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.5, z: 0, o: "544", f: "c"
                    }
                    , {
                        f: "c", y: 1.21, z: 0.15, i: "b", e: 268, s: 123, o: "548"
                    }
                    , {
                        f: "c", y: 1.21, z: 0.15, i: "e", e: 1, s: 0, o: "548"
                    }
                    , {
                        f: "c", y: 2, z: 0.21, i: "e", e: 1, s: 0, o: "543"
                    }
                    , {
                        y: 2, i: "e", s: 1, z: 0, o: "546", f: "c"
                    }
                    , {
                        y: 2.06, i: "b", s: 268, z: 0, o: "548", f: "c"
                    }
                    , {
                        y: 2.06, i: "e", s: 1, z: 0, o: "548", f: "c"
                    }
                    , {
                        f: "c", y: 2.13, z: 0.22, i: "e", e: 1, s: 0, o: "541"
                    }
                    , {
                        y: 2.21, i: "e", s: 1, z: 0, o: "543", f: "c"
                    }
                    , {
                        f: "c", y: 2.24, z: 0.23, i: "e", e: 1, s: 0, o: "542"
                    }
                    , {
                        y: 3.05, i: "e", s: 1, z: 0, o: "541", f: "c"
                    }
                    , {
                        y: 3.17, i: "e", s: 1, z: 0, o: "542", f: "c"
                    }
                    ], f:30
                }
            }
            , bZ:180, O:["539", "549", "545", "544", "542", "541", "546", "551", "548", "547", "550", "543", "540"], v: {
                "539": {
                    h:"52", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", z:14, d:62, c:63, e:0, aP:"pointer"
                }
                , "540": {
                    h: "25", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: -50, j: "absolute", r: "inline", c: 1024, k: "div", z: 1, d: 768, e: 0
                }
                , "545": {
                    h:"49", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 2
                        }
                        ]
                    }
                    , k:"div", z:12, d:62, c:63, e:0, aP:"pointer"
                }
                , "551": {
                    h: "29", p: "no-repeat", x: "visible", a: 398, q: "100% 100%", b: 268, j: "absolute", r: "inline", c: 81, k: "div", z: 6, d: 165, e: 0
                }
                , "548": {
                    h: "27", p: "no-repeat", x: "visible", a: 471, q: "100% 100%", b: 123, j: "absolute", r: "inline", c: 81, k: "div", z: 5, d: 165, e: 0
                }
                , "543": {
                    h: "21", p: "no-repeat", x: "visible", a: 237, q: "100% 100%", b: 527, j: "absolute", r: "inline", c: 550, k: "div", z: 2, d: 64, e: 0
                }
                , "546": {
                    h: "29", p: "no-repeat", x: "visible", a: 542, q: "100% 100%", b: 268, j: "absolute", r: "inline", c: 81, k: "div", z: 8, d: 165, e: 0
                }
                , "541": {
                    h: "31", p: "no-repeat", x: "visible", a: 818, q: "100% 100%", b: 644, j: "absolute", r: "inline", c: 200, k: "div", z: 9, d: 74, e: 0
                }
                , "549": {
                    h:"16", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:13, d:62, c:63, e:0, aP:"pointer"
                }
                , "544": {
                    h:"47", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 3
                        }
                        ]
                    }
                    , k:"div", z:11, d:62, c:63, e:0, aP:"pointer"
                }
                , "550": {
                    h: "23", p: "no-repeat", x: "visible", a: 150, q: "100% 100%", b: 40, j: "absolute", r: "inline", c: 724, k: "div", z: 3, d: 122, e: 0
                }
                , "547": {
                    h: "33", p: "no-repeat", x: "visible", a: 296, q: "100% 100%", b: 139, j: "absolute", r: "inline", c: 431, k: "div", z: 4, d: 424, e: 0
                }
                , "542": {
                    G: "#FFFFFF", bB: 0, aU: 8, c: 633, d: 65, bC: 0, aV: 8, e: 0, s: "Arial,Helvetica,Sans-Serif", r: "inline", t: 11, Y: "normal", Z: "break-word", aP: "pointer", w: "<p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">1. Roger, V.L., Go, A.S., Lloyd-Jones, D.M., Benjamin, E.J., et al. (2012). Heart disease and stroke 2012 update. A report from the American Heart Association. <i>Circulation</i>, <i>125,</i> e2-e220</p><p style=\"margin-top: 0px; margin-bottom: 10px; margin-left: 35.5px; text-indent: -35.5px;\">\n</p><p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">2. Rosas Peralta, M., Pastel\u00edn Hern\u00e1ndez, G., Vel\u00e1zquez Monroy, O., Mart\u00ednez Reding, J., et al. (2005). Re\u2013encuesta Nacional de Hipertensi\u00f3n Arterial (RENAHTA): Consolidaci\u00f3n Mexicana de los Factores de Riesgo Cardiovascular Cohorte Nacional de Seguimiento. <i>Archivos de Cardiolog\u00eda de M\u00e9xico</i>, <i>75,</i> 96-111.</p>", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , x:"visible", aZ:0, j:"absolute", y:"preserve", k:"div", z:10, aS:8, aT:8, a:31, bA:"#000000", F:"justify", b:584
                }
            }
        }
        , {
            o:"70", p:"600px", x:2, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i:"kTimelineDefaultIdentifier", n:"Control temporal principal", z:3.08, b:[], a:[ {
                        f: "c", y: 0, z: 0.06, i: "e", e: 1, s: 0, o: "552"
                    }
                    , {
                        f: "c", y: 0.06, z: 0.24, i: "a", e: 460, s: 1024, o: "554"
                    }
                    , {
                        f: "c", y: 0.06, z: 0.24, i: "a", e: 240, s: -247, o: "558"
                    }
                    , {
                        y: 0.06, i: "e", s: 1, z: 0, o: "552", f: "c"
                    }
                    , {
                        f: "c", y: 0.06, z: 0.24, i: "a", e: 291, s: -195, o: "556"
                    }
                    , {
                        f: "c", y: 0.06, z: 0.24, i: "a", e: 796, s: 1360, o: "564"
                    }
                    , {
                        f: "c", y: 0.15, z: 1, i: "b", e: 532, s: 733, o: "560"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "563"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "555"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "562"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "561"
                    }
                    , {
                        f: "c", y: 1, z: 1, i: "f", e: 360, s: 0, o: "556"
                    }
                    , {
                        y: 1, i: "a", s: 460, z: 0, o: "554", f: "c"
                    }
                    , {
                        y: 1, i: "a", s: 240, z: 0, o: "558", f: "c"
                    }
                    , {
                        y: 1, i: "a", s: 291, z: 0, o: "556", f: "c"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.50286787974683544, s: 1, o: "563"
                    }
                    , {
                        y: 1, i: "a", s: 796, z: 0, o: "564", f: "c"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.5, s: 1, o: "555"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.5, s: 1, o: "562"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.5, s: 1, o: "561"
                    }
                    , {
                        y: 1.15, i: "b", s: 532, z: 0, o: "560", f: "c"
                    }
                    , {
                        f: "c", y: 1.15, z: 1, i: "e", e: 1, s: 0, o: "553"
                    }
                    , {
                        f: "c", y: 1.15, z: 1, i: "e", e: 1, s: 0, o: "557"
                    }
                    , {
                        f: "c", y: 1.15, z: 0.19, i: "e", e: 1, s: 0, o: "564"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.50286787974683544, z: 0, o: "563", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.5, z: 0, o: "555", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.5, z: 0, o: "562", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.5, z: 0, o: "561", f: "c"
                    }
                    , {
                        y: 2, i: "f", s: 360, z: 0, o: "556", f: "c"
                    }
                    , {
                        y: 2.04, i: "e", s: 1, z: 0, o: "564", f: "c"
                    }
                    , {
                        f: "c", y: 2.08, z: 1, i: "e", e: 1, s: 0, o: "559"
                    }
                    , {
                        y: 2.15, i: "e", s: 1, z: 0, o: "553", f: "c"
                    }
                    , {
                        y: 2.15, i: "e", s: 1, z: 0, o: "557", f: "c"
                    }
                    , {
                        y: 3.08, i: "e", s: 1, z: 0, o: "559", f: "c"
                    }
                    ], f:30
                }
            }
            , bZ:180, O:["562", "563", "555", "561", "553", "556", "558", "559", "564", "554", "557", "560", "552"], v: {
                "556": {
                    h: "80", p: "no-repeat", x: "visible", a: -195, q: "100% 100%", b: 44, j: "absolute", r: "inline", c: 120, k: "div", z: 15, d: 123, f: 0
                }
                , "562": {
                    h:"52", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", z:20, d:62, c:63, e:0, aP:"pointer"
                }
                , "559": {
                    G: "#FFFFFF", aU: 8, c: 339, d: 65, aV: 8, r: "inline", e: 0, s: "Arial,Helvetica,Sans-Serif", t: 11, Z: "break-word", aP: "pointer", w: "<p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">3. Gradman, A. H., Basile, J. N., Carter, B. L., Bakris, G. L. and on behalf of the American Society of Hypertension Writing Group (2011). Combination Therapy in Hypertension. <i>The Journal of Clinical Hypertension</i>, <i>13,</i> 146\u2013154.&nbsp;</p>", j:"absolute", x:"visible", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", y:"preserve", z:12, aS:8, aT:8, a:653, F:"justify", b:516
                }
                , "554": {
                    h: "31", p: "no-repeat", x: "visible", a: 1024, q: "100% 100%", b: 38, j: "absolute", r: "inline", c: 321, k: "div", z: 10, d: 119, e: 1
                }
                , "560": {
                    h: "76", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: 733, j: "absolute", r: "inline", c: 1024, k: "div", z: 2, d: 268
                }
                , "557": {
                    h: "83", p: "no-repeat", x: "visible", a: 173, q: "100% 100%", b: 205, j: "absolute", r: "inline", c: 736, k: "div", z: 3, d: 177, e: 0
                }
                , "563": {
                    h:"16", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:19, d:62, c:63, e:0, aP:"pointer"
                }
                , "552": {
                    h: "71", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: -40, j: "absolute", r: "inline", c: 1024, k: "div", z: 1, d: 768, e: 0
                }
                , "555": {
                    h:"49", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 2
                        }
                        ]
                    }
                    , k:"div", z:18, d:62, c:63, e:0, aP:"pointer"
                }
                , "561": {
                    h:"47", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 3
                        }
                        ]
                    }
                    , k:"div", z:17, d:62, c:63, e:0, aP:"pointer"
                }
                , "558": {
                    h: "74", p: "no-repeat", x: "visible", a: -247, q: "100% 100%", b: 10, j: "absolute", r: "inline", c: 220, k: "div", z: 14, d: 201
                }
                , "553": {
                    w: "", h: "84", p: "no-repeat", x: "visible", a: 340, q: "100% 100%", b: 368, j: "absolute", r: "inline", z: 16, k: "div", c: 401, d: 226, e: 0
                }
                , "564": {
                    h: "31", p: "no-repeat", x: "visible", a: 1360, q: "100% 100%", b: 643, j: "absolute", r: "inline", c: 200, k: "div", z: 11, d: 74, e: 0
                }
            }
        }
        , {
            o:"148", p:"600px", x:3, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i:"kTimelineDefaultIdentifier", n:"Control temporal principal", z:1.15, b:[], a:[ {
                        f: "c", y: 0, z: 1, i: "e", e: 1, s: 0, o: "576"
                    }
                    , {
                        f: "c", y: 0, z: 1.15, i: "f", e: 720, s: 360, o: "572"
                    }
                    , {
                        f: "c", y: 0, z: 1, i: "e", e: 1, s: 0, o: "566"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 1, s: 0, o: "577"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 1, s: 0, o: "578"
                    }
                    , {
                        y: 1, i: "e", s: 1, z: 0, o: "576", f: "c"
                    }
                    , {
                        y: 1, i: "e", s: 1, z: 0, o: "566", f: "c"
                    }
                    , {
                        y: 1.15, i: "f", s: 720, z: 0, o: "572", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 1, z: 0, o: "577", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 1, z: 0, o: "578", f: "c"
                    }
                    ], f:30
                }
            }
            , bZ:180, O:["574", "570", "573", "567", "576", "572", "565", "578", "577", "575", "568", "566", "569", "571"], v: {
                "567": {
                    h:"47", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 3
                        }
                        ]
                    }
                    , k:"div", z:18, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "573": {
                    h:"49", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 2
                        }
                        ]
                    }
                    , k:"div", z:19, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "576": {
                    w: "", h: "150", p: "no-repeat", x: "visible", a: 411, q: "100% 100%", b: 126, j: "absolute", r: "inline", z: 17, k: "div", c: 531, d: 389, e: 0
                }
                , "565": {
                    h: "74", p: "no-repeat", x: "visible", a: 240, q: "100% 100%", b: 10, j: "absolute", r: "inline", c: 220, k: "div", z: 15, d: 201
                }
                , "571": {
                    h: "71", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: -40, j: "absolute", r: "inline", c: 1024, k: "div", z: 1, d: 768, e: 1
                }
                , "568": {
                    h: "31", p: "no-repeat", x: "visible", a: 460, q: "100% 100%", b: 38, j: "absolute", r: "inline", c: 321, k: "div", z: 10, d: 119, e: 1
                }
                , "574": {
                    h:"52", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", z:21, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "577": {
                    G: "#FFFFFF", aU: 8, c: 554, d: 72, aV: 8, r: "inline", e: 0, s: "Arial,Helvetica,Sans-Serif", X: 0, t: 9, Y: 9, Z: "break-word", aP: "pointer", w: "<p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">6. Mancia, G., Fagard, R., Narkiewicz, K., et al. (2013). 2013 ESH/ESC guidelines for the management of arterial hypertension: the Task Force for the Management of Arterial Hypertension of the European Society of Hypertension (ESH) and of the European Society of Cardiology (ESC). <i>Blood Pressure</i>, <i>22</i>, 193\u2013278.</p><p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">7. Rubio-Guerra, A. F., Castro-Serna, D., Barrera, C. I. E., &amp; Ramos-Brizuela, L. M. (2009). Current concepts in combination therapy for the treatment of hypertension: combined calcium channel blockers and RAAS inhibitors. <i>Integrated Blood Pressure Control, 2,</i> 55\u201362.</p>", j:"absolute", x:"visible", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", y:"preserve", z:12, aS:8, E:0, aT:8, a:434, F:"justify", b:526
                }
                , "566": {
                    h: "149", p: "no-repeat", x: "visible", a: 107, q: "100% 100%", b: 256, j: "absolute", r: "inline", c: 353, k: "div", z: 3, d: 187, e: 0
                }
                , "572": {
                    h: "80", p: "no-repeat", x: "visible", a: 291, q: "100% 100%", b: 44, j: "absolute", r: "inline", c: 120, k: "div", z: 16, d: 123, f: 360
                }
                , "569": {
                    h: "76", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: 532, j: "absolute", r: "inline", c: 1024, k: "div", z: 2, d: 268
                }
                , "570": {
                    h:"16", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:20, d:62, c:63, e:0.50286787974683544, aP:"pointer"
                }
                , "575": {
                    h: "31", p: "no-repeat", x: "visible", a: 796, q: "100% 100%", b: 643, j: "absolute", r: "inline", c: 200, k: "div", z: 11, d: 74, e: 1
                }
                , "578": {
                    G: "#FFFFFF", aU: 8, c: 819, d: 64, aV: 8, r: "inline", e: 0, s: "Arial,Helvetica,Sans-Serif", t: 9, Y: 10, Z: "break-word", aP: "pointer", w: "<p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">4. Mancia, G., et al., and the ESH-ESC Task Force on the Management of Arterial Hypertension (2007). 2007 ESH-ESC Practice Guidelines for the Management of Arterial Hypertension. <i>Journal of Hypertension, 25,</i> 1105\u20131187.</p><p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(85, 61, 0); -webkit-text-stroke-color: rgb(85, 61, 0); -webkit-text-stroke-width: initial;\">\n</p><p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">5. James, P.A., Oparil, S., Carter, B.L., et al. (2014). 2014 Evidence-Based Guideline for the Management of High Blood Pressure in Adults: Report From the Panel Members Appointed to the Eighth Joint National Committee (JNC 8). <i>JAMA, 311, </i>507-520.</p>", j:"absolute", x:"visible", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", y:"preserve", z:13, aS:8, aT:8, a:169, F:"justify", b:478
                }
            }
        }
        , {
            o:"174", p:"600px", x:4, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i:"kTimelineDefaultIdentifier", n:"Control temporal principal", z:14, b:[], a:[ {
                        f: "c", y: 0, z: 1, i: "e", e: 1, s: 0, o: "588"
                    }
                    , {
                        f: "c", y: 0, z: 1, i: "e", e: 1, s: 0, o: "597"
                    }
                    , {
                        f: "c", y: 0.09, z: 0.14, i: "e", e: 0.82948971518987347, s: 0, o: "600"
                    }
                    , {
                        f: "c", y: 0.09, z: 0.14, i: "e", e: 1, s: 0, o: "584"
                    }
                    , {
                        f: "c", y: 0.23, z: 0.18, i: "e", e: 0.82948971518987347, s: 0.82948971518987347, o: "600"
                    }
                    , {
                        y: 0.23, i: "e", s: 1, z: 0, o: "584", f: "c"
                    }
                    , {
                        f: "c", y: 1, z: 1, i: "b", e: 228, s: 317, o: "600"
                    }
                    , {
                        f: "c", y: 1, z: 1, i: "b", e: 317, s: 407, o: "586"
                    }
                    , {
                        y: 1, i: "e", s: 1, z: 0, o: "588", f: "c"
                    }
                    , {
                        y: 1, i: "e", s: 1, z: 0, o: "597", f: "c"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 1, s: 0, o: "579"
                    }
                    , {
                        f: "c", y: 1.11, z: 0.19, i: "e", e: 0.82999999999999996, s: 0, o: "586"
                    }
                    , {
                        f: "c", y: 1.11, z: 0.19, i: "e", e: 0, s: 0.82948971518987347, o: "600"
                    }
                    , {
                        f: "c", y: 1.15, z: 0.19, i: "d", e: 120, s: 101, o: "597"
                    }
                    , {
                        f: "c", y: 1.15, z: 0.19, i: "c", e: 550, s: 464, o: "597"
                    }
                    , {
                        f: "c", y: 1.15, z: 0.19, i: "a", e: 246, s: 280, o: "597"
                    }
                    , {
                        y: 1.15, i: "e", s: 1, z: 0, o: "579", f: "c"
                    }
                    , {
                        y: 2, i: "b", s: 228, z: 0, o: "600", f: "c"
                    }
                    , {
                        f: "c", y: 2, z: 0.15, i: "b", e: 317, s: 317, o: "586"
                    }
                    , {
                        f: "c", y: 2, z: 0.25, i: "e", e: 0.82999999999999996, s: 0.82999999999999996, o: "586"
                    }
                    , {
                        y: 2, i: "e", s: 0, z: 0, o: "600", f: "c"
                    }
                    , {
                        f: "c", y: 2.04, z: 0.26, i: "d", e: 101, s: 120, o: "597"
                    }
                    , {
                        f: "c", y: 2.04, z: 0.26, i: "c", e: 464, s: 550, o: "597"
                    }
                    , {
                        f: "c", y: 2.04, z: 0.26, i: "a", e: 280, s: 246, o: "597"
                    }
                    , {
                        f: "c", y: 2.15, z: 1, i: "b", e: 317, s: 407, o: "581"
                    }
                    , {
                        f: "c", y: 2.15, z: 1, i: "b", e: 228, s: 317, o: "586"
                    }
                    , {
                        f: "c", y: 2.25, z: 0.2, i: "e", e: 0.82999999999999996, s: 0, o: "581"
                    }
                    , {
                        f: "c", y: 2.25, z: 0.2, i: "e", e: 0, s: 0.82999999999999996, o: "586"
                    }
                    , {
                        y: 3, i: "d", s: 101, z: 0, o: "597", f: "c"
                    }
                    , {
                        y: 3, i: "c", s: 464, z: 0, o: "597", f: "c"
                    }
                    , {
                        y: 3, i: "a", s: 280, z: 0, o: "597", f: "c"
                    }
                    , {
                        f: "c", y: 3.15, z: 0.15, i: "b", e: 317, s: 317, o: "581"
                    }
                    , {
                        y: 3.15, i: "b", s: 228, z: 0, o: "586", f: "c"
                    }
                    , {
                        f: "c", y: 3.15, z: 0.26, i: "e", e: 0.82999999999999996, s: 0.82999999999999996, o: "581"
                    }
                    , {
                        y: 3.15, i: "e", s: 0, z: 0, o: "586", f: "c"
                    }
                    , {
                        f: "c", y: 4, z: 1, i: "b", e: 317, s: 407, o: "599"
                    }
                    , {
                        f: "c", y: 4, z: 1, i: "b", e: 228, s: 317, o: "581"
                    }
                    , {
                        f: "c", y: 4.11, z: 0.19, i: "e", e: 0.82999999999999996, s: 0, o: "599"
                    }
                    , {
                        f: "c", y: 4.11, z: 0.19, i: "e", e: 0, s: 0.82999999999999996, o: "581"
                    }
                    , {
                        f: "c", y: 5, z: 0.15, i: "b", e: 317, s: 317, o: "599"
                    }
                    , {
                        y: 5, i: "b", s: 228, z: 0, o: "581", f: "c"
                    }
                    , {
                        f: "c", y: 5, z: 0.25, i: "e", e: 0.82999999999999996, s: 0.82999999999999996, o: "599"
                    }
                    , {
                        y: 5, i: "e", s: 0, z: 0, o: "581", f: "c"
                    }
                    , {
                        f: "c", y: 5.15, z: 1, i: "b", e: 317, s: 407, o: "594"
                    }
                    , {
                        f: "c", y: 5.15, z: 1, i: "b", e: 228, s: 317, o: "599"
                    }
                    , {
                        f: "c", y: 5.25, z: 0.2, i: "e", e: 0.82999999999999996, s: 0, o: "594"
                    }
                    , {
                        f: "c", y: 5.25, z: 0.2, i: "e", e: 0, s: 0.82999999999999996, o: "599"
                    }
                    , {
                        f: "c", y: 6.15, z: 0.15, i: "b", e: 317, s: 317, o: "594"
                    }
                    , {
                        y: 6.15, i: "b", s: 228, z: 0, o: "599", f: "c"
                    }
                    , {
                        f: "c", y: 6.15, z: 0.25, i: "e", e: 0.82999999999999996, s: 0.82999999999999996, o: "594"
                    }
                    , {
                        y: 6.15, i: "e", s: 0, z: 0, o: "599", f: "c"
                    }
                    , {
                        f: "c", y: 7, z: 1, i: "b", e: 317, s: 407, o: "589"
                    }
                    , {
                        f: "c", y: 7, z: 1, i: "b", e: 228, s: 317, o: "594"
                    }
                    , {
                        f: "c", y: 7.1, z: 0.2, i: "e", e: 0, s: 0.82999999999999996, o: "594"
                    }
                    , {
                        f: "c", y: 7.11, z: 0.19, i: "e", e: 0.82999999999999996, s: 0, o: "589"
                    }
                    , {
                        f: "c", y: 8, z: 0.15, i: "b", e: 317, s: 317, o: "589"
                    }
                    , {
                        y: 8, i: "b", s: 228, z: 0, o: "594", f: "c"
                    }
                    , {
                        f: "c", y: 8, z: 0.25, i: "e", e: 0.82999999999999996, s: 0.82999999999999996, o: "589"
                    }
                    , {
                        y: 8, i: "e", s: 0, z: 0, o: "594", f: "c"
                    }
                    , {
                        f: "c", y: 8.15, z: 1, i: "b", e: 317, s: 407, o: "583"
                    }
                    , {
                        f: "c", y: 8.15, z: 1, i: "b", e: 228, s: 317, o: "589"
                    }
                    , {
                        f: "c", y: 8.25, z: 0.2, i: "e", e: 0.82999999999999996, s: 0, o: "583"
                    }
                    , {
                        f: "c", y: 8.25, z: 0.2, i: "e", e: 0, s: 0.82999999999999996, o: "589"
                    }
                    , {
                        f: "c", y: 9.15, z: 0.15, i: "b", e: 317, s: 317, o: "583"
                    }
                    , {
                        y: 9.15, i: "b", s: 228, z: 0, o: "589", f: "c"
                    }
                    , {
                        f: "c", y: 9.15, z: 0.26, i: "e", e: 0.82999999999999996, s: 0.82999999999999996, o: "583"
                    }
                    , {
                        y: 9.15, i: "e", s: 0, z: 0, o: "589", f: "c"
                    }
                    , {
                        f: "c", y: 10, z: 1, i: "b", e: 317, s: 407, o: "595"
                    }
                    , {
                        f: "c", y: 10, z: 1, i: "b", e: 228, s: 317, o: "583"
                    }
                    , {
                        f: "c", y: 10.11, z: 0.19, i: "e", e: 0.82999999999999996, s: 0, o: "595"
                    }
                    , {
                        f: "c", y: 10.11, z: 0.19, i: "e", e: 0, s: 0.82999999999999996, o: "583"
                    }
                    , {
                        f: "c", y: 11, z: 0.15, i: "b", e: 317, s: 317, o: "595"
                    }
                    , {
                        y: 11, i: "b", s: 228, z: 0, o: "583", f: "c"
                    }
                    , {
                        f: "c", y: 11, z: 0.25, i: "e", e: 0.82999999999999996, s: 0.82999999999999996, o: "595"
                    }
                    , {
                        y: 11, i: "e", s: 0, z: 0, o: "583", f: "c"
                    }
                    , {
                        f: "c", y: 11.15, z: 1, i: "b", e: 317, s: 407, o: "591"
                    }
                    , {
                        f: "c", y: 11.15, z: 1, i: "b", e: 228, s: 317, o: "595"
                    }
                    , {
                        f: "c", y: 11.25, z: 0.2, i: "e", e: 0.82999999999999996, s: 0, o: "591"
                    }
                    , {
                        f: "c", y: 11.25, z: 0.2, i: "e", e: 0, s: 0.82999999999999996, o: "595"
                    }
                    , {
                        f: "c", y: 12.15, z: 0.15, i: "b", e: 317, s: 317, o: "591"
                    }
                    , {
                        y: 12.15, i: "b", s: 228, z: 0, o: "595", f: "c"
                    }
                    , {
                        f: "c", y: 12.15, z: 0.25, i: "e", e: 0.82999999999999996, s: 0.82999999999999996, o: "591"
                    }
                    , {
                        y: 12.15, i: "e", s: 0, z: 0, o: "595", f: "c"
                    }
                    , {
                        f: "c", y: 13, z: 1, i: "b", e: 317, s: 407, o: "602"
                    }
                    , {
                        f: "c", y: 13, z: 1, i: "b", e: 228, s: 317, o: "591"
                    }
                    , {
                        f: "c", y: 13.1, z: 0.2, i: "e", e: 0.82999999999999996, s: 0, o: "602"
                    }
                    , {
                        f: "c", y: 13.1, z: 0.2, i: "e", e: 0, s: 0.82999999999999996, o: "591"
                    }
                    , {
                        y: 14, i: "b", s: 317, z: 0, o: "602", f: "c"
                    }
                    , {
                        y: 14, i: "b", s: 228, z: 0, o: "591", f: "c"
                    }
                    , {
                        y: 14, i: "e", s: 0.82999999999999996, z: 0, o: "602", f: "c"
                    }
                    , {
                        y: 14, i: "e", s: 0, z: 0, o: "591", f: "c"
                    }
                    ], f:30
                }
            }
            , bZ:180, O:["587", "585", "601", "593", "600", "586", "581", "599", "594", "589", "583", "595", "591", "602", "584", "597", "596", "582", "579", "592", "598", "588", "580", "590"], v: {
                "580": {
                    h: "76", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: 532, j: "absolute", r: "inline", c: 1024, k: "div", z: 2, d: 268
                }
                , "593": {
                    h:"47", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 3
                        }
                        ]
                    }
                    , k:"div", z:35, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "585": {
                    h:"16", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:37, d:62, c:63, e:0.50286787974683544, aP:"pointer"
                }
                , "598": {
                    h: "31", p: "no-repeat", x: "visible", a: 460, q: "100% 100%", b: 38, j: "absolute", r: "inline", c: 321, k: "div", z: 10, d: 119, e: 1
                }
                , "581": {
                    h: "430", p: "no-repeat", x: "visible", a: 580, q: "100% 100%", b: 407, j: "absolute", r: "inline", c: 55, k: "div", z: 32, d: 84, e: 0
                }
                , "600": {
                    h: "428", p: "no-repeat", x: "visible", a: 580, q: "100% 100%", b: 317, j: "absolute", r: "inline", c: 55, k: "div", z: 34, d: 84, e: 0
                }
                , "594": {
                    h: "432", p: "no-repeat", x: "visible", a: 580, q: "100% 100%", b: 407, j: "absolute", r: "inline", c: 55, k: "div", z: 30, d: 84, e: 0
                }
                , "586": {
                    h: "429", p: "no-repeat", x: "visible", a: 580, q: "100% 100%", b: 407, j: "absolute", r: "inline", c: 55, k: "div", z: 33, d: 84, e: 0
                }
                , "599": {
                    h: "431", p: "no-repeat", x: "visible", a: 580, q: "100% 100%", b: 407, j: "absolute", r: "inline", c: 55, k: "div", z: 31, d: 84, e: 0
                }
                , "590": {
                    h: "71", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: -40, j: "absolute", r: "inline", c: 1024, k: "div", z: 1, d: 768, e: 1
                }
                , "582": {
                    h: "74", p: "no-repeat", x: "visible", a: 240, q: "100% 100%", b: 10, j: "absolute", r: "inline", c: 220, k: "div", z: 14, d: 201
                }
                , "601": {
                    h:"49", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 2
                        }
                        ]
                    }
                    , k:"div", z:36, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "595": {
                    h: "384", p: "no-repeat", x: "visible", a: 580, q: "100% 100%", b: 407, j: "absolute", r: "inline", c: 55, k: "div", z: 27, d: 84, e: 0
                }
                , "587": {
                    h:"52", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", z:38, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "579": {
                    G: "#FFFFFF", aU: 8, c: 571, d: 107, aV: 8, r: "inline", e: 0, s: "Arial,Helvetica,Sans-Serif", t: 11, Y: 10, Z: "break-word", aP: "pointer", w: "<p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">8. Kohlmann, O. Jr., Oigman, W., Mion, D. Jr., Rocha, J.C., Rocha, J.C., et al. (2006). The \"LOTHAR\" study: evaluation of efficacy and tolerability of the fixed combination of amlodipine and losartan in the treatment of essential hypertension. <i>Arquivos Brasileiros de Cardiologia,</i> <i>86</i>, 39-51. (Art\u00edculo en portugu\u00e9s).</p>", j:"absolute", x:"visible", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", y:"preserve", z:12, aS:8, aT:8, a:415, F:"justify", b:543
                }
                , "591": {
                    h: "382", p: "no-repeat", x: "visible", a: 580, q: "100% 100%", b: 407, j: "absolute", r: "inline", c: 55, k: "div", z: 26, d: 84, e: 0
                }
                , "583": {
                    h: "435", p: "no-repeat", x: "visible", a: 580, q: "100% 100%", b: 407, j: "absolute", r: "inline", c: 55, k: "div", z: 28, d: 84, e: 0
                }
                , "602": {
                    h: "434", p: "no-repeat", x: "visible", a: 580, q: "100% 100%", b: 407, j: "absolute", r: "inline", c: 55, k: "div", z: 25, d: 84, e: 0
                }
                , "596": {
                    h: "80", p: "no-repeat", x: "visible", a: 291, q: "100% 100%", b: 44, j: "absolute", r: "inline", c: 120, k: "div", z: 15, d: 123, f: 360
                }
                , "588": {
                    h: "175", p: "no-repeat", x: "visible", a: 122, q: "100% 100%", b: 198, j: "absolute", r: "inline", c: 779, k: "div", z: 3, d: 112, e: 0
                }
                , "592": {
                    h: "31", p: "no-repeat", x: "visible", a: 796, q: "100% 100%", b: 643, j: "absolute", r: "inline", c: 200, k: "div", z: 11, d: 74, e: 1
                }
                , "584": {
                    h: "381", p: "no-repeat", x: "visible", a: 375, q: "100% 100%", b: 300, j: "absolute", r: "inline", c: 274, k: "div", z: 17, d: 122, e: 0
                }
                , "597": {
                    w: "", h: "176", p: "no-repeat", x: "visible", a: 280, q: "100% 100%", b: 442, j: "absolute", r: "inline", z: 16, k: "div", c: 464, d: 101, e: 0
                }
                , "589": {
                    h: "433", p: "no-repeat", x: "visible", a: 580, q: "100% 100%", b: 407, j: "absolute", r: "inline", c: 55, k: "div", z: 29, d: 84, e: 0
                }
            }
        }
        , {
            o:"286", p:"600px", x:5, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i:"kTimelineDefaultIdentifier", n:"Control temporal principal", z:1.15, b:[], a:[ {
                        f: "c", y: 0, z: 1, i: "a", e: 460, s: 1029, o: "614"
                    }
                    , {
                        f: "c", y: 0, z: 1, i: "a", e: 240, s: -205, o: "612"
                    }
                    , {
                        f: "c", y: 0.16, z: 0.29, i: "e", e: 1, s: 0, o: "603"
                    }
                    , {
                        f: "c", y: 0.16, z: 0.29, i: "e", e: 1, s: 0, o: "607"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 1, s: 0, o: "611"
                    }
                    , {
                        y: 1, i: "a", s: 460, z: 0, o: "614", f: "c"
                    }
                    , {
                        y: 1, i: "a", s: 240, z: 0, o: "612", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 1, z: 0, o: "611", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 1, z: 0, o: "603", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 1, z: 0, o: "607", f: "c"
                    }
                    ], f:30
                }
            }
            , bZ:180, O:["606", "610", "609", "605", "603", "612", "611", "608", "614", "607", "604", "613"], v: {
                "605": {
                    h:"47", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 3
                        }
                        ]
                    }
                    , k:"div", z:17, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "611": {
                    G: "#FFFFFF", aU: 8, c: 527, d: 107, aV: 8, r: "inline", e: 0, s: "Arial,Helvetica,Sans-Serif", t: 11, Y: 10, Z: "break-word", aP: "pointer", w: "<p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">8. Kohlmann, O. Jr., Oigman, W., Mion, D. Jr., Rocha, J.C., Rocha, J.C., et al. (2006). The \"LOTHAR\" study: evaluation of efficacy and tolerability of the fixed combination of amlodipine and losartan in the treatment of essential hypertension. <i>Arquivos Brasileiros de Cardiologia,</i> <i>86</i>, 39-51. (Art\u00edculo en portugu\u00e9s).</p>", j:"absolute", x:"visible", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", y:"preserve", z:12, aS:8, aT:8, a:468, F:"justify", b:556
                }
                , "608": {
                    h: "31", p: "no-repeat", x: "visible", a: 796, q: "100% 100%", b: 643, j: "absolute", r: "inline", c: 200, k: "div", z: 11, d: 74, e: 1
                }
                , "603": {
                    w:"", h:"288", p:"no-repeat", x:"visible", a:155, q:"100% 100%", b:259, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, e: "393"
                        }
                        ]
                    }
                    , z:16, k:"div", d:314, c:713, e:0, aP:"pointer"
                }
                , "614": {
                    h: "31", p: "no-repeat", x: "visible", a: 1029, q: "100% 100%", b: 38, j: "absolute", r: "inline", c: 321, k: "div", z: 10, d: 119, e: 1
                }
                , "606": {
                    h:"52", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", z:20, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "612": {
                    h: "376", p: "no-repeat", x: "visible", a: -205, q: "100% 100%", b: 8, j: "absolute", r: "inline", c: 200, k: "div", z: 14, d: 201
                }
                , "609": {
                    h:"49", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 2
                        }
                        ]
                    }
                    , k:"div", z:18, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "604": {
                    h: "76", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: 532, j: "absolute", r: "inline", c: 1024, k: "div", z: 2, d: 268
                }
                , "610": {
                    h:"16", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, e: "213"
                        }
                        ]
                    }
                    , k:"div", z:19, d:62, c:63, e:0.50286787974683544, aP:"pointer"
                }
                , "607": {
                    h: "287", p: "no-repeat", x: "visible", a: 122, q: "100% 100%", b: 198, j: "absolute", r: "inline", c: 790, k: "div", z: 3, d: 79, e: 0
                }
                , "613": {
                    h: "193", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: -40, j: "absolute", r: "inline", c: 1024, k: "div", z: 1, d: 768, e: 1
                }
            }
        }
        , {
            o:"407", p:"600px", x:6, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i: "kTimelineDefaultIdentifier", n: "Control temporal principal", z: 0, b: [], a: [], f: 30
                }
            }
            , bZ:180, O:["615"], v: {
                "615": {
                    h:"465", p:"no-repeat", x:"visible", a:0, q:"100% 100%", b:-24, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 2
                        }
                        ]
                    }
                    , k:"div", z:1, d:760, c:1024, e:1, aP:"pointer"
                }
            }
        }
        , {
            o:"228", p:"600px", x:7, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i:"kTimelineDefaultIdentifier", n:"Control temporal principal", z:6.21, b:[], a:[ {
                        f: "c", y: 0, z: 1, i: "e", e: 1, s: 0, o: "626"
                    }
                    , {
                        f: "c", y: 0, z: 1, i: "a", e: 240, s: -200, o: "627"
                    }
                    , {
                        f: "c", y: 0, z: 1, i: "a", e: 460, s: 1024, o: "630"
                    }
                    , {
                        f: "c", y: 0, z: 1, i: "e", e: 1, s: 0, o: "616"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.12, i: "e", e: 1, s: 0, o: "624"
                    }
                    , {
                        f: "c", y: 0.21, z: 0.12, i: "e", e: 1, s: 0, o: "629"
                    }
                    , {
                        f: "c", y: 0.27, z: 0.12, i: "e", e: 1, s: 0, o: "632"
                    }
                    , {
                        f: "c", y: 0.27, z: 0.24, i: "e", e: 1, s: 1, o: "624"
                    }
                    , {
                        y: 1, i: "a", s: 240, z: 0, o: "627", f: "c"
                    }
                    , {
                        y: 1, i: "a", s: 460, z: 0, o: "630", f: "c"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 1, s: 0, o: "633"
                    }
                    , {
                        y: 1, i: "e", s: 1, z: 0, o: "626", f: "c"
                    }
                    , {
                        y: 1, i: "e", s: 1, z: 0, o: "616", f: "c"
                    }
                    , {
                        f: "c", y: 1.03, z: 0.12, i: "e", e: 1, s: 0, o: "617"
                    }
                    , {
                        f: "c", y: 1.03, z: 0.24, i: "e", e: 1, s: 1, o: "629"
                    }
                    , {
                        f: "c", y: 1.09, z: 0.12, i: "e", e: 1, s: 0, o: "621"
                    }
                    , {
                        f: "c", y: 1.09, z: 0.24, i: "e", e: 1, s: 1, o: "632"
                    }
                    , {
                        f: "c", y: 1.15, z: 0.12, i: "e", e: 1, s: 0, o: "619"
                    }
                    , {
                        f: "c", y: 1.15, z: 0.24, i: "e", e: 1, s: 1, o: "617"
                    }
                    , {
                        y: 1.15, i: "e", s: 1, z: 0, o: "633", f: "c"
                    }
                    , {
                        f: "c", y: 1.21, z: 0.24, i: "e", e: 1, s: 1, o: "621"
                    }
                    , {
                        f: "c", y: 1.21, z: 0.12, i: "e", e: 0, s: 1, o: "624"
                    }
                    , {
                        f: "c", y: 1.27, z: 0.24, i: "e", e: 1, s: 1, o: "619"
                    }
                    , {
                        f: "c", y: 1.27, z: 0.12, i: "e", e: 0, s: 1, o: "629"
                    }
                    , {
                        f: "c", y: 2.03, z: 0.12, i: "e", e: 0, s: 1, o: "632"
                    }
                    , {
                        f: "c", y: 2.03, z: 0.24, i: "e", e: 0, s: 0, o: "624"
                    }
                    , {
                        f: "c", y: 2.09, z: 0.12, i: "e", e: 0, s: 1, o: "617"
                    }
                    , {
                        f: "c", y: 2.09, z: 0.24, i: "e", e: 0, s: 0, o: "629"
                    }
                    , {
                        f: "c", y: 2.15, z: 0.12, i: "e", e: 0, s: 1, o: "621"
                    }
                    , {
                        f: "c", y: 2.15, z: 0.24, i: "e", e: 0, s: 0, o: "632"
                    }
                    , {
                        f: "c", y: 2.21, z: 0.12, i: "e", e: 0, s: 1, o: "619"
                    }
                    , {
                        f: "c", y: 2.21, z: 0.24, i: "e", e: 0, s: 0, o: "617"
                    }
                    , {
                        f: "c", y: 2.27, z: 0.24, i: "e", e: 0, s: 0, o: "621"
                    }
                    , {
                        f: "c", y: 2.27, z: 0.12, i: "e", e: 1, s: 0, o: "624"
                    }
                    , {
                        f: "c", y: 3.03, z: 0.24, i: "e", e: 0, s: 0, o: "619"
                    }
                    , {
                        f: "c", y: 3.03, z: 0.12, i: "e", e: 1, s: 0, o: "629"
                    }
                    , {
                        f: "c", y: 3.09, z: 0.12, i: "e", e: 1, s: 0, o: "632"
                    }
                    , {
                        f: "c", y: 3.09, z: 0.24, i: "e", e: 1, s: 1, o: "624"
                    }
                    , {
                        f: "c", y: 3.15, z: 0.12, i: "e", e: 1, s: 0, o: "617"
                    }
                    , {
                        f: "c", y: 3.15, z: 0.24, i: "e", e: 1, s: 1, o: "629"
                    }
                    , {
                        f: "c", y: 3.21, z: 0.12, i: "e", e: 1, s: 0, o: "621"
                    }
                    , {
                        f: "c", y: 3.21, z: 0.24, i: "e", e: 1, s: 1, o: "632"
                    }
                    , {
                        f: "c", y: 3.27, z: 0.12, i: "e", e: 1, s: 0, o: "619"
                    }
                    , {
                        f: "c", y: 3.27, z: 0.24, i: "e", e: 1, s: 1, o: "617"
                    }
                    , {
                        f: "c", y: 4.03, z: 0.24, i: "e", e: 1, s: 1, o: "621"
                    }
                    , {
                        f: "c", y: 4.03, z: 0.12, i: "e", e: 0, s: 1, o: "624"
                    }
                    , {
                        f: "c", y: 4.09, z: 0.24, i: "e", e: 1, s: 1, o: "619"
                    }
                    , {
                        f: "c", y: 4.09, z: 0.12, i: "e", e: 0, s: 1, o: "629"
                    }
                    , {
                        f: "c", y: 4.15, z: 0.12, i: "e", e: 0, s: 1, o: "632"
                    }
                    , {
                        f: "c", y: 4.15, z: 0.24, i: "e", e: 0, s: 0, o: "624"
                    }
                    , {
                        f: "c", y: 4.21, z: 0.12, i: "e", e: 0, s: 1, o: "617"
                    }
                    , {
                        f: "c", y: 4.21, z: 0.24, i: "e", e: 0, s: 0, o: "629"
                    }
                    , {
                        f: "c", y: 4.27, z: 0.12, i: "e", e: 0, s: 1, o: "621"
                    }
                    , {
                        f: "c", y: 4.27, z: 0.24, i: "e", e: 0, s: 0, o: "632"
                    }
                    , {
                        f: "c", y: 5.03, z: 0.12, i: "e", e: 0, s: 1, o: "619"
                    }
                    , {
                        f: "c", y: 5.03, z: 0.24, i: "e", e: 0, s: 0, o: "617"
                    }
                    , {
                        f: "c", y: 5.09, z: 0.24, i: "e", e: 0, s: 0, o: "621"
                    }
                    , {
                        f: "c", y: 5.09, z: 0.12, i: "e", e: 1, s: 0, o: "624"
                    }
                    , {
                        f: "c", y: 5.15, z: 0.24, i: "e", e: 0, s: 0, o: "619"
                    }
                    , {
                        f: "c", y: 5.15, z: 0.12, i: "e", e: 1, s: 0, o: "629"
                    }
                    , {
                        f: "c", y: 5.21, z: 0.12, i: "e", e: 1, s: 0, o: "632"
                    }
                    , {
                        y: 5.21, i: "e", s: 1, z: 0, o: "624", f: "c"
                    }
                    , {
                        f: "c", y: 5.27, z: 0.12, i: "e", e: 1, s: 0, o: "617"
                    }
                    , {
                        y: 5.27, i: "e", s: 1, z: 0, o: "629", f: "c"
                    }
                    , {
                        f: "c", y: 6.03, z: 0.12, i: "e", e: 1, s: 0, o: "621"
                    }
                    , {
                        y: 6.03, i: "e", s: 1, z: 0, o: "632", f: "c"
                    }
                    , {
                        f: "c", y: 6.09, z: 0.12, i: "e", e: 1, s: 0, o: "619"
                    }
                    , {
                        y: 6.09, i: "e", s: 1, z: 0, o: "617", f: "c"
                    }
                    , {
                        y: 6.15, i: "e", s: 1, z: 0, o: "621", f: "c"
                    }
                    , {
                        y: 6.21, i: "e", s: 1, z: 0, o: "619", f: "c"
                    }
                    ], f:30
                }
            }
            , bZ:180, O:["631", "622", "623", "625", "624", "629", "632", "617", "621", "619", "626", "627", "633", "620", "630", "616", "618", "628"], v: {
                "627": {
                    h: "376", p: "no-repeat", x: "visible", a: -200, q: "100% 100%", b: 8, j: "absolute", r: "inline", c: 200, k: "div", z: 14, d: 201
                }
                , "616": {
                    h: "195", p: "no-repeat", x: "visible", a: 99, q: "100% 100%", b: 209, j: "absolute", r: "inline", c: 390, k: "div", z: 3, d: 283, e: 0
                }
                , "622": {
                    h:"16", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, e: "255"
                        }
                        ]
                    }
                    , k:"div", z:39, d:62, c:63, e:0.50286787974683544, aP:"pointer"
                }
                , "633": {
                    G: "#FFFFFF", aU: 8, c: 586, d: 152, aV: 8, r: "inline", e: 0, s: "Arial,Helvetica,Sans-Serif", t: 11, Y: 10, Z: "break-word", aP: "pointer", w: "<p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">3. Gradman, A. H., Basile, J. N., Carter, B. L., Bakris, G. L. and on behalf of the American Society of Hypertension Writing Group (2011). Combination Therapy in Hypertension. <i>The Journal of Clinical Hypertension</i>, <i>13,</i> 146\u2013154.&nbsp;</p>", j:"absolute", x:"visible", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", y:"preserve", z:12, aS:8, aT:8, a:407, F:"justify", b:537
                }
                , "619": {
                    h:"498", p:"no-repeat", x:"visible", a:800, q:"100% 100%", b:277, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:18, d:177, c:40, e:0, aP:"pointer"
                }
                , "625": {
                    h:"47", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 3
                        }
                        ]
                    }
                    , k:"div", z:37, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "620": {
                    h: "31", p: "no-repeat", x: "visible", a: 796, q: "100% 100%", b: 643, j: "absolute", r: "inline", c: 200, k: "div", z: 11, d: 74, e: 1
                }
                , "631": {
                    h:"52", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", z:40, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "628": {
                    h: "193", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: -40, j: "absolute", r: "inline", c: 1024, k: "div", z: 1, d: 768, e: 1
                }
                , "617": {
                    h:"502", p:"no-repeat", x:"visible", a:704, q:"100% 100%", b:277, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:20, d:177, c:47, e:0, aP:"pointer"
                }
                , "623": {
                    h:"49", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, e: "271"
                        }
                        ]
                    }
                    , k:"div", z:38, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "626": {
                    w:"", h:"196", p:"no-repeat", x:"visible", a:479, q:"100% 100%", b:189, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , z:16, k:"div", d:308, c:444, e:0, aP:"pointer"
                }
                , "621": {
                    h:"500", p:"no-repeat", x:"visible", a:751, q:"100% 100%", b:277, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:19, d:177, c:49, e:0, aP:"pointer"
                }
                , "632": {
                    h:"504", p:"no-repeat", x:"visible", a:656, q:"100% 100%", b:277, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:21, d:177, c:48, e:0, aP:"pointer"
                }
                , "629": {
                    h:"506", p:"no-repeat", x:"visible", a:608, q:"100% 100%", b:277, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:22, d:177, c:48, e:0, aP:"pointer"
                }
                , "618": {
                    h: "76", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: 532, j: "absolute", r: "inline", c: 1024, k: "div", z: 2, d: 268
                }
                , "624": {
                    h:"508", p:"no-repeat", x:"visible", a:567, q:"100% 100%", b:277, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:23, d:177, c:41, e:0, aP:"pointer"
                }
                , "630": {
                    h: "31", p: "no-repeat", x: "visible", a: 1024, q: "100% 100%", b: 38, j: "absolute", r: "inline", c: 321, k: "div", z: 10, d: 119, e: 1
                }
            }
        }
        , {
            o:"460", p:"600px", x:8, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i: "kTimelineDefaultIdentifier", n: "Control temporal principal", z: 0, b: [], a: [], f: 30
                }
            }
            , bZ:180, O:["634"], v: {
                "634": {
                    h:"466", p:"no-repeat", x:"visible", a:0, q:"100% 100%", b:-24, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 2
                        }
                        ]
                    }
                    , k:"div", z:1, d:760, c:1024, e:1, aP:"pointer"
                }
            }
        }
        , {
            o:"269", p:"600px", x:9, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i:"kTimelineDefaultIdentifier", n:"Control temporal principal", z:6.21, b:[], a:[ {
                        f: "c", y: 0, z: 1, i: "e", e: 1, s: 0, o: "647"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.12, i: "e", e: 1, s: 0, o: "642"
                    }
                    , {
                        f: "c", y: 0.21, z: 0.12, i: "e", e: 1, s: 0, o: "652"
                    }
                    , {
                        f: "c", y: 0.27, z: 0.12, i: "e", e: 1, s: 0, o: "637"
                    }
                    , {
                        f: "c", y: 0.27, z: 0.24, i: "e", e: 1, s: 1, o: "642"
                    }
                    , {
                        y: 1, i: "e", s: 1, z: 0, o: "647", f: "c"
                    }
                    , {
                        f: "c", y: 1, z: 1, i: "e", e: 1, s: 0, o: "645"
                    }
                    , {
                        f: "c", y: 1.03, z: 0.12, i: "e", e: 1, s: 0, o: "640"
                    }
                    , {
                        f: "c", y: 1.03, z: 0.24, i: "e", e: 1, s: 1, o: "652"
                    }
                    , {
                        f: "c", y: 1.09, z: 0.12, i: "e", e: 1, s: 0, o: "648"
                    }
                    , {
                        f: "c", y: 1.09, z: 0.24, i: "e", e: 1, s: 1, o: "637"
                    }
                    , {
                        f: "c", y: 1.15, z: 0.12, i: "e", e: 1, s: 0, o: "651"
                    }
                    , {
                        f: "c", y: 1.15, z: 0.24, i: "e", e: 1, s: 1, o: "640"
                    }
                    , {
                        f: "c", y: 1.21, z: 0.24, i: "e", e: 1, s: 1, o: "648"
                    }
                    , {
                        f: "c", y: 1.21, z: 0.12, i: "e", e: 0, s: 1, o: "642"
                    }
                    , {
                        f: "c", y: 1.27, z: 0.24, i: "e", e: 1, s: 1, o: "651"
                    }
                    , {
                        f: "c", y: 1.27, z: 0.12, i: "e", e: 0, s: 1, o: "652"
                    }
                    , {
                        y: 2, i: "e", s: 1, z: 0, o: "645", f: "c"
                    }
                    , {
                        f: "c", y: 2.03, z: 0.12, i: "e", e: 0, s: 1, o: "637"
                    }
                    , {
                        f: "c", y: 2.03, z: 0.24, i: "e", e: 0, s: 0, o: "642"
                    }
                    , {
                        f: "c", y: 2.09, z: 0.12, i: "e", e: 0, s: 1, o: "640"
                    }
                    , {
                        f: "c", y: 2.09, z: 0.24, i: "e", e: 0, s: 0, o: "652"
                    }
                    , {
                        f: "c", y: 2.15, z: 0.12, i: "e", e: 0, s: 1, o: "648"
                    }
                    , {
                        f: "c", y: 2.15, z: 0.24, i: "e", e: 0, s: 0, o: "637"
                    }
                    , {
                        f: "c", y: 2.21, z: 0.12, i: "e", e: 0, s: 1, o: "651"
                    }
                    , {
                        f: "c", y: 2.21, z: 0.24, i: "e", e: 0, s: 0, o: "640"
                    }
                    , {
                        f: "c", y: 2.27, z: 0.24, i: "e", e: 0, s: 0, o: "648"
                    }
                    , {
                        f: "c", y: 2.27, z: 0.12, i: "e", e: 1, s: 0, o: "642"
                    }
                    , {
                        f: "c", y: 3.03, z: 0.24, i: "e", e: 0, s: 0, o: "651"
                    }
                    , {
                        f: "c", y: 3.03, z: 0.12, i: "e", e: 1, s: 0, o: "652"
                    }
                    , {
                        f: "c", y: 3.09, z: 0.12, i: "e", e: 1, s: 0, o: "637"
                    }
                    , {
                        f: "c", y: 3.09, z: 0.24, i: "e", e: 1, s: 1, o: "642"
                    }
                    , {
                        f: "c", y: 3.15, z: 0.12, i: "e", e: 1, s: 0, o: "640"
                    }
                    , {
                        f: "c", y: 3.15, z: 0.24, i: "e", e: 1, s: 1, o: "652"
                    }
                    , {
                        f: "c", y: 3.21, z: 0.12, i: "e", e: 1, s: 0, o: "648"
                    }
                    , {
                        f: "c", y: 3.21, z: 0.24, i: "e", e: 1, s: 1, o: "637"
                    }
                    , {
                        f: "c", y: 3.27, z: 0.12, i: "e", e: 1, s: 0, o: "651"
                    }
                    , {
                        f: "c", y: 3.27, z: 0.24, i: "e", e: 1, s: 1, o: "640"
                    }
                    , {
                        f: "c", y: 4.03, z: 0.24, i: "e", e: 1, s: 1, o: "648"
                    }
                    , {
                        f: "c", y: 4.03, z: 0.12, i: "e", e: 0, s: 1, o: "642"
                    }
                    , {
                        f: "c", y: 4.09, z: 0.24, i: "e", e: 1, s: 1, o: "651"
                    }
                    , {
                        f: "c", y: 4.09, z: 0.12, i: "e", e: 0, s: 1, o: "652"
                    }
                    , {
                        f: "c", y: 4.15, z: 0.12, i: "e", e: 0, s: 1, o: "637"
                    }
                    , {
                        f: "c", y: 4.15, z: 0.24, i: "e", e: 0, s: 0, o: "642"
                    }
                    , {
                        f: "c", y: 4.21, z: 0.12, i: "e", e: 0, s: 1, o: "640"
                    }
                    , {
                        f: "c", y: 4.21, z: 0.24, i: "e", e: 0, s: 0, o: "652"
                    }
                    , {
                        f: "c", y: 4.27, z: 0.12, i: "e", e: 0, s: 1, o: "648"
                    }
                    , {
                        f: "c", y: 4.27, z: 0.24, i: "e", e: 0, s: 0, o: "637"
                    }
                    , {
                        f: "c", y: 5.03, z: 0.12, i: "e", e: 0, s: 1, o: "651"
                    }
                    , {
                        f: "c", y: 5.03, z: 0.24, i: "e", e: 0, s: 0, o: "640"
                    }
                    , {
                        f: "c", y: 5.09, z: 0.24, i: "e", e: 0, s: 0, o: "648"
                    }
                    , {
                        f: "c", y: 5.09, z: 0.12, i: "e", e: 1, s: 0, o: "642"
                    }
                    , {
                        f: "c", y: 5.15, z: 0.24, i: "e", e: 0, s: 0, o: "651"
                    }
                    , {
                        f: "c", y: 5.15, z: 0.12, i: "e", e: 1, s: 0, o: "652"
                    }
                    , {
                        f: "c", y: 5.21, z: 0.12, i: "e", e: 1, s: 0, o: "637"
                    }
                    , {
                        y: 5.21, i: "e", s: 1, z: 0, o: "642", f: "c"
                    }
                    , {
                        f: "c", y: 5.27, z: 0.12, i: "e", e: 1, s: 0, o: "640"
                    }
                    , {
                        y: 5.27, i: "e", s: 1, z: 0, o: "652", f: "c"
                    }
                    , {
                        f: "c", y: 6.03, z: 0.12, i: "e", e: 1, s: 0, o: "648"
                    }
                    , {
                        y: 6.03, i: "e", s: 1, z: 0, o: "637", f: "c"
                    }
                    , {
                        f: "c", y: 6.09, z: 0.12, i: "e", e: 1, s: 0, o: "651"
                    }
                    , {
                        y: 6.09, i: "e", s: 1, z: 0, o: "640", f: "c"
                    }
                    , {
                        y: 6.15, i: "e", s: 1, z: 0, o: "648", f: "c"
                    }
                    , {
                        y: 6.21, i: "e", s: 1, z: 0, o: "651", f: "c"
                    }
                    ], f:30
                }
            }
            , bZ:180, O:["638", "643", "639", "650", "642", "652", "637", "640", "648", "651", "647", "636", "645", "644", "649", "646", "635", "641"], v: {
                "644": {
                    h: "31", p: "no-repeat", x: "visible", a: 796, q: "100% 100%", b: 643, j: "absolute", r: "inline", c: 200, k: "div", z: 11, d: 74, e: 1
                }
                , "650": {
                    h:"47", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 3
                        }
                        ]
                    }
                    , k:"div", z:24, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "647": {
                    w:"", h:"270", p:"no-repeat", x:"visible", a:479, q:"100% 100%", b:189, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , z:16, k:"div", d:308, c:444, e:0, aP:"pointer"
                }
                , "642": {
                    h:"520", p:"no-repeat", x:"visible", a:560, q:"100% 100%", b:276, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:23, d:177, c:41, e:0, aP:"pointer"
                }
                , "636": {
                    h: "376", p: "no-repeat", x: "visible", a: 240, q: "100% 100%", b: 8, j: "absolute", r: "inline", c: 200, k: "div", z: 14, d: 201
                }
                , "645": {
                    G: "#FFFFFF", aU: 8, c: 587, d: 152, aV: 8, r: "inline", e: 0, s: "Arial,Helvetica,Sans-Serif", t: 11, Y: 10, Z: "break-word", aP: "pointer", w: "<p style=\"color: rgb(255, 255, 255); font-size: 11px; font-family: Arial, Helvetica, sans-serif; font-style: normal; font-variant: normal; text-align: justify; text-transform: none; text-indent: 0px; letter-spacing: normal; white-space: normal; word-spacing: 0px; margin-top: 0px; margin-bottom: 10px; -webkit-text-stroke-width: initial; -webkit-text-stroke-color: rgb(255, 255, 255);\">3. Gradman, A. H., Basile, J. N., Carter, B. L., Bakris, G. L. and on behalf of the American Society of Hypertension Writing Group (2011). Combination Therapy in Hypertension.&nbsp;<i>The Journal of Clinical Hypertension</i>,&nbsp;<i>13,</i>&nbsp;146\u2013154.&nbsp;</p>", j:"absolute", x:"visible", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", y:"preserve", z:12, aS:8, aT:8, a:407, b:537
                }
                , "640": {
                    h:"514", p:"no-repeat", x:"visible", a:697, q:"100% 100%", b:276, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:20, d:177, c:47, e:0, aP:"pointer"
                }
                , "639": {
                    h:"49", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, e: "213"
                        }
                        ]
                    }
                    , k:"div", z:25, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "651": {
                    h:"510", p:"no-repeat", x:"visible", a:793, q:"100% 100%", b:276, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:18, d:177, c:40, e:0, aP:"pointer"
                }
                , "648": {
                    h:"512", p:"no-repeat", x:"visible", a:744, q:"100% 100%", b:276, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:19, d:177, c:49, e:0, aP:"pointer"
                }
                , "637": {
                    h:"516", p:"no-repeat", x:"visible", a:649, q:"100% 100%", b:276, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:21, d:177, c:48, e:0, aP:"pointer"
                }
                , "643": {
                    h:"16", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, e: "289"
                        }
                        ]
                    }
                    , k:"div", z:26, d:62, c:63, e:0.50286787974683544, aP:"pointer"
                }
                , "646": {
                    h: "195", p: "no-repeat", x: "visible", a: 99, q: "100% 100%", b: 209, j: "absolute", r: "inline", c: 390, k: "div", z: 3, d: 283, e: 1
                }
                , "635": {
                    h: "76", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: 532, j: "absolute", r: "inline", c: 1024, k: "div", z: 2, d: 268
                }
                , "641": {
                    h: "193", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: -40, j: "absolute", r: "inline", c: 1024, k: "div", z: 1, d: 768, e: 1
                }
                , "652": {
                    h:"518", p:"no-repeat", x:"visible", a:601, q:"100% 100%", b:276, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:22, d:177, c:48, e:0, aP:"pointer"
                }
                , "649": {
                    h: "31", p: "no-repeat", x: "visible", a: 460, q: "100% 100%", b: 38, j: "absolute", r: "inline", c: 321, k: "div", z: 10, d: 119, e: 1
                }
                , "638": {
                    h:"52", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", z:27, d:62, c:63, e:0.5, aP:"pointer"
                }
            }
        }
        , {
            o:"464", p:"600px", x:10, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i: "kTimelineDefaultIdentifier", n: "Control temporal principal", z: 0, b: [], a: [], f: 30
                }
            }
            , bZ:180, O:["653"], v: {
                "653": {
                    h:"467", p:"no-repeat", x:"visible", a:0, q:"100% 100%", b:-24, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 2
                        }
                        ]
                    }
                    , k:"div", z:1, d:760, c:1024, e:1, aP:"pointer"
                }
            }
        }
        , {
            o:"304", p:"600px", x:11, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i:"kTimelineDefaultIdentifier", n:"Control temporal principal", z:2.15, b:[], a:[ {
                        f: "c", y: 0, z: 1, i: "e", e: 1, s: 0, o: "655"
                    }
                    , {
                        f: "c", y: 0, z: 1, i: "e", e: 1, s: 0, o: "662"
                    }
                    , {
                        f: "c", y: 1, z: 1, i: "d", e: 20, s: -2, o: "669"
                    }
                    , {
                        f: "c", y: 1, z: 1, i: "b", e: 323, s: 342, o: "669"
                    }
                    , {
                        f: "c", y: 1, z: 1, i: "d", e: 109, s: 0, o: "664"
                    }
                    , {
                        f: "c", y: 1, z: 1, i: "b", e: 333, s: 342, o: "670"
                    }
                    , {
                        f: "c", y: 1, z: 0.07, i: "e", e: 1, s: 0, o: "669"
                    }
                    , {
                        f: "c", y: 1, z: 1, i: "d", e: 109, s: 0, o: "656"
                    }
                    , {
                        f: "c", y: 1, z: 0.07, i: "e", e: 1, s: 0, o: "670"
                    }
                    , {
                        f: "c", y: 1, z: 1, i: "d", e: 10, s: -2, o: "670"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 1, s: 0, o: "665"
                    }
                    , {
                        y: 1, i: "e", s: 1, z: 0, o: "655", f: "c"
                    }
                    , {
                        y: 1, i: "e", s: 1, z: 0, o: "662", f: "c"
                    }
                    , {
                        y: 1.07, i: "e", s: 1, z: 0, o: "669", f: "c"
                    }
                    , {
                        y: 1.07, i: "e", s: 1, z: 0, o: "670", f: "c"
                    }
                    , {
                        f: "c", y: 1.15, z: 1, i: "e", e: 1, s: 0, o: "660"
                    }
                    , {
                        f: "c", y: 1.15, z: 1, i: "e", e: 1, s: 0, o: "667"
                    }
                    , {
                        y: 1.15, i: "e", s: 1, z: 0, o: "665", f: "c"
                    }
                    , {
                        y: 2, i: "b", s: 323, z: 0, o: "669", f: "c"
                    }
                    , {
                        y: 2, i: "b", s: 333, z: 0, o: "670", f: "c"
                    }
                    , {
                        y: 2, i: "d", s: 20, z: 0, o: "669", f: "c"
                    }
                    , {
                        y: 2, i: "d", s: 109, z: 0, o: "664", f: "c"
                    }
                    , {
                        y: 2, i: "d", s: 109, z: 0, o: "656", f: "c"
                    }
                    , {
                        y: 2, i: "d", s: 10, z: 0, o: "670", f: "c"
                    }
                    , {
                        y: 2.15, i: "e", s: 1, z: 0, o: "660", f: "c"
                    }
                    , {
                        y: 2.15, i: "e", s: 1, z: 0, o: "667", f: "c"
                    }
                    ], f:30
                }
            }
            , bZ:180, O:["667", "660", "670", "656", "669", "664", "666", "657", "671", "659", "662", "658", "665", "661", "663", "655", "654", "668"], v: {
                "669": {
                    c: 105, d: -2, I: "None", e: 0, J: "None", K: "None", g: "#B1D707", L: "None", M: 0, N: 0, A: "#D8DDE4", x: "visible", O: 0, j: "absolute", k: "div", B: "#D8DDE4", C: "#D8DDE4", Q: 8, z: 22, D: "#D8DDE4", R: "rgba(0, 0, 0, 0.250)", P: 0, S: 0, a: 349, T: 3, b: 342
                }
                , "658": {
                    h: "376", p: "no-repeat", x: "visible", a: 240, q: "100% 100%", b: 8, j: "absolute", r: "inline", c: 200, k: "div", z: 14, d: 201
                }
                , "664": {
                    bJ: 1, c: 107, d: 0, I: "None", J: "None", bL: 0.77919407894736836, aW: 0, K: "None", g: "#CC150E", L: "None", aX: 8.1107999999999993, M: 0, N: 0, A: "#D8DDE4", O: 0, x: "visible", bG: 0, j: "absolute", k: "div", C: "#D8DDE4", Q: 8, z: 21, D: "#D8DDE4", R: "rgba(0, 0, 0, 0.250)", B: "#D8DDE4", P: 0, bI: 1.0472860336303711, a: 213, S: 0, T: 3, b: 344
                }
                , "670": {
                    c: 105, d: -2, I: "None", e: 0, J: "None", K: "None", g: "#B1D707", L: "None", M: 0, N: 0, A: "#D8DDE4", x: "visible", O: 0, j: "absolute", k: "div", B: "#D8DDE4", C: "#D8DDE4", Q: 8, z: 24, D: "#D8DDE4", R: "rgba(0, 0, 0, 0.250)", P: 0, S: 0, a: 729, T: 3, b: 342
                }
                , "667": {
                    h: "454", p: "no-repeat", x: "visible", a: 614, q: "100% 100%", b: 352, j: "absolute", r: "inline", c: 62, k: "div", z: 26, d: 29, e: 0
                }
                , "656": {
                    bJ: 1, c: 107, d: 0, I: "None", J: "None", bL: 0.77919407894736836, aW: 0, K: "None", g: "#CC150E", L: "None", aX: 8.1107999999999993, M: 0, N: 0, A: "#D8DDE4", O: 0, x: "visible", bG: 0, j: "absolute", k: "div", C: "#D8DDE4", Q: 8, z: 23, D: "#D8DDE4", R: "rgba(0, 0, 0, 0.250)", B: "#D8DDE4", P: 0, bI: 1.0472860336303711, a: 592, S: 0, T: 3, b: 344
                }
                , "662": {
                    w:"", aD: {
                        a:[ {
                            p: 0
                        }
                        ]
                    }
                    , h:"306", x:"visible", a:133, q:"100% 100%", b:259, j:"absolute", p:"no-repeat", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, e: "409"
                        }
                        ]
                    }
                    , z:16, k:"div", d:290, c:756, r:"inline", e:0, aP:"pointer"
                }
                , "659": {
                    h:"47", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 3
                        }
                        ]
                    }
                    , k:"div", z:17, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "654": {
                    h: "76", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: 532, j: "absolute", r: "inline", c: 1024, k: "div", z: 2, d: 268
                }
                , "660": {
                    h: "454", p: "no-repeat", x: "visible", a: 235, q: "100% 100%", b: 352, j: "absolute", r: "inline", c: 62, k: "div", z: 25, d: 29, e: 0
                }
                , "665": {
                    G: "#FFFFFF", aU: 8, c: 502, d: 107, aV: 8, r: "inline", e: 0, s: "Arial,Helvetica,Sans-Serif", t: 11, Y: 10, Z: "break-word", aP: "pointer", w: "<p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">9. Dur\u00e1n-Salgado, M.B., Garro-Almendaro, A.K., Rubio-Guerra, A.F. (2015). Cambios metab\u00f3licos ocasionados por las combinaciones de losart\u00e1n con hidroclorotiazida o con amlodipino en pacientes hipertensos. <i>Medicina Interna de M\u00e9xico, 31, </i>395-401.</p>", j:"absolute", x:"visible", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", y:"preserve", z:12, aS:8, aT:8, a:494, F:"justify", b:551
                }
                , "668": {
                    h: "193", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: -40, j: "absolute", r: "inline", c: 1024, k: "div", z: 1, d: 768, e: 1
                }
                , "657": {
                    h:"16", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, e: "308"
                        }
                        ]
                    }
                    , k:"div", z:19, d:62, c:63, e:0.50286787974683544, aP:"pointer"
                }
                , "663": {
                    h: "31", p: "no-repeat", x: "visible", a: 460, q: "100% 100%", b: 38, j: "absolute", r: "inline", c: 321, k: "div", z: 10, d: 119, e: 1
                }
                , "671": {
                    h:"49", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, e: "255"
                        }
                        ]
                    }
                    , k:"div", z:18, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "666": {
                    h:"52", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", z:20, d:62, c:63, e:0.5, aP:"pointer"
                }
                , "655": {
                    h: "305", p: "no-repeat", x: "visible", a: 109, q: "100% 100%", b: 198, j: "absolute", r: "inline", c: 800, k: "div", z: 3, d: 73, e: 0
                }
                , "661": {
                    h: "31", p: "no-repeat", x: "visible", a: 796, q: "100% 100%", b: 643, j: "absolute", r: "inline", c: 200, k: "div", z: 11, d: 74, e: 1
                }
            }
        }
        , {
            o:"412", p:"600px", x:12, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i: "kTimelineDefaultIdentifier", n: "Control temporal principal", z: 0, b: [], a: [], f: 30
                }
            }
            , bZ:180, O:["672"], v: {
                "672": {
                    h:"468", p:"no-repeat", x:"visible", a:0, q:"100% 100%", b:-24, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, e: "289"
                        }
                        ]
                    }
                    , k:"div", z:1, d:760, c:1024, e:1, aP:"pointer"
                }
            }
        }
        , {
            o:"323", p:"600px", x:13, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i:"kTimelineDefaultIdentifier", n:"Control temporal principal", z:2.15, b:[], a:[ {
                        f: "c", y: 0, z: 0.06, i: "e", e: 1, s: 0, o: "675"
                    }
                    , {
                        f: "c", y: 0.06, z: 0.24, i: "a", e: 494, s: 1024, o: "678"
                    }
                    , {
                        f: "c", y: 0.06, z: 0.24, i: "a", e: 120, s: -277, o: "682"
                    }
                    , {
                        y: 0.06, i: "e", s: 1, z: 0, o: "675", f: "c"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "680"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "676"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "677"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "674"
                    }
                    , {
                        y: 1, i: "a", s: 494, z: 0, o: "678", f: "c"
                    }
                    , {
                        y: 1, i: "a", s: 120, z: 0, o: "682", f: "c"
                    }
                    , {
                        f: "c", y: 1, z: 1, i: "e", e: 1, s: 0, o: "681"
                    }
                    , {
                        f: "c", y: 1, z: 1, i: "e", e: 1, s: 0, o: "679"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.50286787974683544, s: 1, o: "680"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.5, s: 1, o: "676"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.5, s: 1, o: "677"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.5, s: 1, o: "674"
                    }
                    , {
                        f: "c", y: 1.15, z: 1, i: "e", e: 1, s: 0, o: "673"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.50286787974683544, z: 0, o: "680", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.5, z: 0, o: "676", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.5, z: 0, o: "677", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.5, z: 0, o: "674", f: "c"
                    }
                    , {
                        y: 2, i: "e", s: 1, z: 0, o: "681", f: "c"
                    }
                    , {
                        y: 2, i: "e", s: 1, z: 0, o: "679", f: "c"
                    }
                    , {
                        y: 2.15, i: "e", s: 1, z: 0, o: "673", f: "c"
                    }
                    ], f:30
                }
            }
            , bZ:180, O:["677", "680", "676", "674", "681", "682", "673", "678", "679", "675"], v: {
                "681": {
                    w: "", h: "358", p: "no-repeat", x: "visible", a: 540, q: "100% 100%", b: 232, j: "absolute", r: "inline", z: 16, k: "div", c: 400, d: 226, e: 0
                }
                , "674": {
                    h:"47", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 3
                        }
                        ]
                    }
                    , k:"div", z:17, d:62, c:63, e:0, aP:"pointer"
                }
                , "677": {
                    h:"52", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", z:20, d:62, c:63, e:0, aP:"pointer"
                }
                , "680": {
                    h:"16", p:"no-repeat", x:"visible", a:941, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 1
                        }
                        ]
                    }
                    , k:"div", z:19, d:62, c:63, e:0, aP:"pointer"
                }
                , "673": {
                    G: "#FFFFFF", aU: 8, c: 402, d: 176, aV: 8, r: "inline", e: 0, s: "Arial,Helvetica,Sans-Serif", t: 9, Z: "break-word", aP: "pointer", w: "<p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">8. Kohlmann, O. Jr., Oigman, W., Mion, D. Jr., Rocha, J.C., Rocha, J.C., et al. (2006). The \"LOTHAR\" study: evaluation of efficacy and tolerability of the fixed combination of amlodipine and losartan in the treatment of essential hypertension. <i>Arquivos Brasileiros de Cardiologia,</i> <i>86</i>, 39-51. (Art\u00edculo en portugu\u00e9s).</p><p style=\"margin-top: 0px; margin-bottom: 10px; font-style: normal; font-variant: normal; line-height: normal; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\"><span style=\"\">9. Dur\u00e1n-Salgado, M.B., Garro-Almendaro, A.K., Rubio-Guerra, A.F. (2015). Cambios metab\u00f3licos ocasionados por las combinaciones de losart\u00e1n con hidroclorotiazida o con amlodipino en pacientes hipertensos. <i>Medicina Interna de M\u00e9xico, 31, </i>395-401.</span></p><p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">10. Corrao, G., Nicotra, F., Parodi, A., Zambon, A., Heiman, F., et al. (2011). Cardiovascular Protection by Initial and Subsequent Combination of Antihypertensive Drugs in Daily Life Practice. <i>Hypertension, 58,</i> 566-572</p><p style=\"margin-top: 0px; margin-bottom: 10px; margin-left: 35.5px; text-indent: -35.5px;\">\n\n</p><p style=\"margin-top: 0px; margin-bottom: 10px; color: rgb(255, 255, 255); -webkit-text-stroke-color: rgb(255, 255, 255); -webkit-text-stroke-width: initial;\">11. Hamada, T., Ichida, K., Hosoyamada, M., Mizuta, E., Yanagihara, K., Sonoyama, K., et al. (2008). Uricosuric action of losartan via the inhibition of urate transporter 1 (URAT 1) in hypertensive patients. <i>American Journal of Hypertension,</i> <i>21,</i> 1157-1162.</p>", j:"absolute", x:"visible", aA: {
                        a:[ {
                            d: 0.20000000000000001, p: 1, g: 2, f: 4
                        }
                        ]
                    }
                    , k:"div", y:"preserve", z:12, aS:8, aT:8, a:116, F:"justify", b:511
                }
                , "676": {
                    h:"49", p:"no-repeat", x:"visible", a:20, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, e: "289"
                        }
                        ]
                    }
                    , k:"div", z:18, d:62, c:63, e:0, aP:"pointer"
                }
                , "679": {
                    w: "", h: "359", p: "no-repeat", x: "visible", a: 99, q: "100% 100%", b: 158, j: "absolute", r: "inline", z: 3, k: "div", c: 461, d: 353, e: 0
                }
                , "682": {
                    w: "", h: "325", p: "no-repeat", x: "visible", a: -277, q: "100% 100%", b: 50, j: "absolute", r: "inline", c: 270, k: "div", z: 14, d: 96
                }
                , "675": {
                    h: "360", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: -30, j: "absolute", r: "inline", c: 1024, k: "div", z: 1, d: 768, e: 0
                }
                , "678": {
                    h: "176", p: "no-repeat", x: "visible", a: 1024, q: "100% 100%", b: 50, j: "absolute", r: "inline", c: 464, k: "div", z: 10, d: 101, e: 1
                }
            }
        }
        , {
            o:"373", p:"600px", x:14, cA:false, Z:718, Y:1024, c:"#FFFFFF", L:[], bY:1, d:1024, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i:"kTimelineDefaultIdentifier", n:"Control temporal principal", z:1.15, b:[], a:[ {
                        f: "c", y: 0, z: 0.06, i: "e", e: 1, s: 0, o: "692"
                    }
                    , {
                        y: 0.06, i: "e", s: 1, z: 0, o: "692", f: "c"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "684"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "695"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.5, s: 1, o: "684"
                    }
                    , {
                        f: "c", y: 1, z: 0.15, i: "e", e: 0.5, s: 1, o: "695"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.5, z: 0, o: "684", f: "c"
                    }
                    , {
                        y: 1.15, i: "e", s: 0.5, z: 0, o: "695", f: "c"
                    }
                    ], f:30
                }
            }
            , bZ:180, O:["693", "688", "696", "691", "689", "685", "694", "687", "683", "690", "686", "695", "684", "692"], v: {
                "686": {
                    c:382, d:60, I:"None", J:"None", K:"None", g:"rgba(232, 235, 237, 0.000)", L:"None", aP:"pointer", M:0, N:0, A:"#D8DDE4", x:"visible", aA: {
                        a:[ {
                            j: "pdf/1-roger.pdf", p: 5, k: true
                        }
                        ]
                    }
                    , B:"#D8DDE4", j:"absolute", k:"div", C:"#D8DDE4", z:19, O:0, D:"#D8DDE4", P:0, a:106, b:133
                }
                , "692": {
                    h:"375", bN: {
                        a:[ {
                            p: 0
                        }
                        ]
                    }
                    , x:"visible", a:0, q:"100% 100%", b:-27, j:"absolute", p:"no-repeat", aA: {
                        a:[ {
                            p: 0
                        }
                        ]
                    }
                    , z:1, k:"div", d:768, c:1024, aB: {
                        a:[ {
                            p: 0
                        }
                        ]
                    }
                    , e:0, aP:"pointer", r:"inline"
                }
                , "689": {
                    c:382, d:72, I:"None", J:"None", K:"None", g:"rgba(232, 235, 237, 0.000)", L:"None", aP:"pointer", M:0, N:0, A:"#D8DDE4", x:"visible", aA: {
                        a:[ {
                            j: "pdf/7-therapy.pdf", p: 5, k: true
                        } 
                        ]
                    }
                    , B:"#D8DDE4", j:"absolute", k:"div", C:"#D8DDE4", z:25, O:0, D:"#D8DDE4", P:0, a:525, b:141
                }
                , "684": {
                    h:"47", p:"no-repeat", x:"visible", a:12, q:"100% 100%", b:401, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, f: 3
                        }
                        ]
                    }
                    , k:"div", z:17, d:62, c:63, e:0, aP:"pointer"
                }
                , "690": {
                    c:382, d:89, I:"None", J:"None", K:"None", g:"rgba(232, 235, 237, 0.000)", L:"None", aP:"pointer", M:0, N:0, A:"#D8DDE4", x:"visible", aA: {
                        a:[ {
                            j: "pdf/2-peralta.pdf", p: 5, k: true
                        }
                        ]
                    }
                    , B:"#D8DDE4", j:"absolute", k:"div", C:"#D8DDE4", z:20, O:0, D:"#D8DDE4", P:0, a:106, b:193
                }
                , "695": {
                    h:"49", p:"no-repeat", x:"visible", a:11, q:"100% 100%", b:323, j:"absolute", r:"inline", aA: {
                        a:[ {
                            d: 0.20000000298023224, p: 1, g: 2, e: "308"
                        }
                        ]
                    }
                    , k:"div", z:18, d:62, c:63, e:0, aP:"pointer"
                }
                , "687": {
                    c:382, d:72, I:"None", J:"None", K:"None", g:"rgba(232, 235, 237, 0.000)", L:"None", aP:"pointer", M:0, N:0, A:"#D8DDE4", x:"visible", aA: {
                        a:[ {
                            j: "pdf/4-mancia.pdf", p: 5, k: true
                        }
                        ]
                    }
                    , B:"#D8DDE4", j:"absolute", k:"div", C:"#D8DDE4", z:22, O:0, D:"#D8DDE4", P:0, a:106, b:354
                }
                , "693": {
                    c:382, d:72, I:"None", J:"None", K:"None", g:"rgba(232, 235, 237, 0.000)", L:"None", aP:"pointer", M:0, N:0, A:"#D8DDE4", x:"visible", aA: {
                        a:[ {
                            j: "pdf/11-hamada.pdf", p: 5, k: true
                        }
                        ]
                    }
                    , B:"#D8DDE4", j:"absolute", k:"div", C:"#D8DDE4", z:29, O:0, D:"#D8DDE4", P:0, a:525, b:441
                }
                , "696": {
                    c:382, d:72, I:"None", J:"None", K:"None", g:"rgba(232, 235, 237, 0.000)", L:"None", aP:"pointer", M:0, N:0, A:"#D8DDE4", x:"visible", aA: {
                        a:[ {
                            j: "pdf/9-duran.pdf", p: 5, k: true
                        }
                        ]
                    }
                    , B:"#D8DDE4", j:"absolute", k:"div", C:"#D8DDE4", z:27, O:0, D:"#D8DDE4", P:0, a:525, b:302
                }
                , "685": {
                    c:382, d:89, I:"None", J:"None", K:"None", g:"rgba(232, 235, 237, 0.000)", L:"None", aP:"pointer", M:0, N:0, A:"#D8DDE4", x:"visible", aA: {
                        a:[ {
                            j: "pdf/6-mancia.pdf", p: 5, k: true
                        }
                        ]
                    }
                    , B:"#D8DDE4", j:"absolute", k:"div", C:"#D8DDE4", z:24, O:0, D:"#D8DDE4", P:0, a:106, b:498
                }
                , "691": {
                    c:382, d:89, I:"None", J:"None", K:"None", g:"rgba(232, 235, 237, 0.000)", L:"None", aP:"pointer", M:0, N:0, A:"#D8DDE4", x:"visible", aA: {
                        a:[ {
                            j: "pdf/8-kohlmann.pdf", p: 5, k: true
                        }
                        ]
                    }
                    , B:"#D8DDE4", j:"absolute", k:"div", C:"#D8DDE4", z:26, O:0, D:"#D8DDE4", P:0, a:525, b:213
                }
                , "694": {
                    c:382, d:72, I:"None", J:"None", K:"None", g:"rgba(232, 235, 237, 0.000)", L:"None", aP:"pointer", M:0, N:0, A:"#D8DDE4", x:"visible", aA: {
                        a:[ {
                            j: "pdf/5-jnc.pdf", p: 5, k: true
                        }
                        ]
                    }
                    , B:"#D8DDE4", j:"absolute", k:"div", C:"#D8DDE4", z:23, O:0, D:"#D8DDE4", P:0, a:106, b:426
                }
                , "683": {
                    c:382, d:72, I:"None", J:"None", K:"None", g:"rgba(232, 235, 237, 0.000)", L:"None", aP:"pointer", M:0, N:0, A:"#D8DDE4", x:"visible", aA: {
                        a:[ {
                            j: "pdf/3-gradman.pdf", p: 5, k: true
                        }
                        ]
                    }
                    , B:"#D8DDE4", j:"absolute", k:"div", C:"#D8DDE4", z:21, O:0, D:"#D8DDE4", P:0, a:106, b:282
                }
                , "688": {
                    c:382, d:67, I:"None", J:"None", K:"None", g:"rgba(232, 235, 237, 0.000)", L:"None", aP:"pointer", M:0, N:0, A:"#D8DDE4", x:"visible", aA: {
                        a:[ {
                            j: "pdf/10-corrao.pdf", p: 5, k: true
                        }
                        ]
                    }
                    , B:"#D8DDE4", j:"absolute", k:"div", C:"#D8DDE4", z:28, O:0, D:"#D8DDE4", P:0, a:525, b:374
                }
            }
        }
        ], {}
        , g, {}
        , null, false, true, -1, true, true, false, true);
        f[c]=a.API;
        document.getElementById(e).setAttribute("HYP_dn", c);
        a.z_o(this.body)
    }
    )();
}

)();