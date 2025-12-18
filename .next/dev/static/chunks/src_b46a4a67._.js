(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/navbar/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "85470c351a87b5af391ecb6b468def978cf36308e17c74c3bbca248126a90213") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85470c351a87b5af391ecb6b468def978cf36308e17c74c3bbca248126a90213";
    }
    const nav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
                const navbar = nav.current;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
                    start: "top top",
                    end: 999999,
                    scrub: 3,
                    onUpdate: (self)=>{
                        if (self.direction === 1) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(navbar, {
                                y: -160,
                                duration: 2.9,
                                ease: "circ.out"
                            });
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(navbar, {
                                y: 0,
                                duration: 2.9,
                                ease: "circ.out"
                            });
                        }
                    }
                });
            }
        })["Navbar[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 left-4 md:top-10 md:left-10 z-10 flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-oswald text-4xl md:text-6xl font-bold tracking-tighter text-text-main leading-none uppercase",
                    children: "Kartik Kala"
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/Navbar.js",
                    lineNumber: 53,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-playfair italic text-xl text-text-muted mt-1",
                    children: "Portfolio'25"
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/Navbar.js",
                    lineNumber: 53,
                    columnNumber: 219
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/Navbar.js",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex fixed z-15 p-4 md:p-10 pointer-events-none w-full",
            ref: nav,
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "absolute right-4 md:right-10 pointer-events-auto flex gap-8 items-center font-oswald tracking-wider text-sm md:text-base",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#about",
                            className: "text-text-muted hover:text-accent transition-colors uppercase hidden md:block",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.js",
                            lineNumber: 60,
                            columnNumber: 234
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#projects",
                            className: "text-text-muted hover:text-accent transition-colors uppercase hidden md:block",
                            children: "Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.js",
                            lineNumber: 60,
                            columnNumber: 350
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#recognition",
                            className: "text-text-muted hover:text-accent transition-colors uppercase hidden md:block",
                            children: "Recognition"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.js",
                            lineNumber: 60,
                            columnNumber: 472
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            className: "text-text-muted hover:text-accent transition-colors uppercase hidden md:block",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.js",
                            lineNumber: 60,
                            columnNumber: 600
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/resume.pdf",
                            download: true,
                            className: "border border-text-muted px-4 py-2 hover:bg-accent hover:text-surface hover:border-accent transition-all duration-300 uppercase",
                            children: "Resume"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.js",
                            lineNumber: 60,
                            columnNumber: 720
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/navbar/Navbar.js",
                    lineNumber: 60,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/Navbar.js",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_s(Navbar, "VTin4RjEAA594oHXs+1qiNLp7pw=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogs",
    ()=>blogs,
    "certifications",
    ()=>certifications,
    "projects",
    ()=>projects,
    "socials",
    ()=>socials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
;
;
;
const projects = [
    {
        title: "Cloud Drive",
        type: "Web Development",
        description: "An easy to host, fully secure and private, self-hostable cloud drive, which turns any machine into a powerful, fully featured private cloud storage with features like video streaming, file transfer via download links/torrents by using the underlying filesystem.",
        tools: [
            "Spring Boot",
            "Java",
            "Flask",
            "Python"
        ],
        demoLink: "#",
        sourceCode: "#"
    },
    {
        title: "AI Based Resume Scanner",
        type: "Web Development",
        description: "A tool that parses resumes and matches them against job descriptions using NLP techniques to provide a compatibility score.",
        tools: [
            "Python",
            "Flask",
            "OpenAI API"
        ],
        demoLink: "#",
        sourceCode: "#"
    },
    {
        title: "Project Alpha",
        type: "Mobile App",
        description: "A cross-platform mobile application for tracking personal finance and investments with real-time market data integration.",
        tools: [
            "React Native",
            "Firebase",
            "Redux"
        ],
        demoLink: "#",
        sourceCode: "#"
    },
    {
        title: "Project Beta",
        type: "Machine Learning",
        description: "An image recognition system designed to classify and tag photos automatically using deep learning models.",
        tools: [
            "TensorFlow",
            "Keras",
            "Python"
        ],
        demoLink: "#",
        sourceCode: "#"
    }
];
const certifications = [
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2024",
        link: "#"
    },
    {
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Coursera",
        date: "2023",
        link: "#"
    }
];
const blogs = [
    {
        title: "Understanding React Server Components",
        summary: "A deep dive into how RSCs work and why they are the future of React development.",
        date: "Oct 2024",
        link: "#"
    },
    {
        title: "Optimizing Next.js Performance",
        summary: "Tips and tricks to make your Next.js applications fly.",
        date: "Sep 2024",
        link: "#"
    }
];
const socials = [
    {
        name: "GitHub",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
            fileName: "[project]/src/app/data.js",
            lineNumber: 72,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        link: "https://github.com"
    },
    {
        name: "LinkedIn",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
            fileName: "[project]/src/app/data.js",
            lineNumber: 77,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        link: "https://linkedin.com"
    },
    {
        name: "LeetCode",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiLeetcode"], {}, void 0, false, {
            fileName: "[project]/src/app/data.js",
            lineNumber: 82,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        link: "https://leetcode.com"
    },
    {
        name: "Twitter",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTwitter"], {}, void 0, false, {
            fileName: "[project]/src/app/data.js",
            lineNumber: 87,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        link: "https://twitter.com"
    },
    {
        name: "Email",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {}, void 0, false, {
            fileName: "[project]/src/app/data.js",
            lineNumber: 92,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        link: "mailto:hello@example.com"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/hero/Hero.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data.js [app-client] (ecmascript)");
;
;
;
function Hero() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "8ed0fa8499146289bb04c99fc25b2263ad48d03de15c0af3f2be4c4114d40098") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8ed0fa8499146289bb04c99fc25b2263ad48d03de15c0af3f2be4c4114d40098";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/bg.jpg",
                alt: "Profile Silhouette",
                className: "w-full h-full object-cover opacity-80"
            }, void 0, false, {
                fileName: "[project]/src/components/hero/Hero.js",
                lineNumber: 13,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hero/Hero.js",
            lineNumber: 13,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/components/hero/Hero.js",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-text-muted",
            children: "Designer"
        }, void 0, false, {
            fileName: "[project]/src/components/hero/Hero.js",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " z-10 max-w-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-oswald text-5xl md:text-8xl lg:text-9xl font-bold text-text-main leading-[0.85] tracking-tight uppercase",
                children: [
                    "Creative ",
                    t1,
                    t2,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/hero/Hero.js",
                        lineNumber: 31,
                        columnNumber: 187
                    }, this),
                    "& Developer."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hero/Hero.js",
                lineNumber: 31,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hero/Hero.js",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-muted text-sm md:text-base leading-relaxed md:block",
            children: "A designer who loves to code and a developer who loves to design. I create things that look simple, but feel alive."
        }, void 0, false, {
            fileName: "[project]/src/components/hero/Hero.js",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/components/hero/Hero.js",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-oswald text-2xl md:text-3xl text-text-main uppercase md:block",
            children: [
                "Move People, ",
                t5,
                " Not Just ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-playfair italic lowercase",
                    children: "screens."
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/Hero.js",
                    lineNumber: 52,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/Hero.js",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "hero",
            className: "h-screen w-full relative overflow-hidden bg-transparent",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute gap-4 w-full flex bottom-4 px-4 md:bottom-10 md:justify-between md:px-10 md:flex-row flex-col",
                    children: [
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "z-10 flex flex-col md:items-end md:text-right gap-4 max-w-md md:justify-end",
                            children: [
                                t4,
                                t6,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            className: "btn-primary uppercase text-sm tracking-widest",
                                            children: "Let's Collaborate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero/Hero.js",
                                            lineNumber: 59,
                                            columnNumber: 354
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:hello@example.com",
                                            className: "btn-solid uppercase text-sm tracking-widest",
                                            children: "Hire Me"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero/Hero.js",
                                            lineNumber: 59,
                                            columnNumber: 452
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/hero/Hero.js",
                                    lineNumber: 59,
                                    columnNumber: 326
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hero/Hero.js",
                            lineNumber: 59,
                            columnNumber: 225
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero/Hero.js",
                    lineNumber: 59,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/Hero.js",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tools/Tools.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tools
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
;
;
;
function Tools(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "f5c2ceb7f71b2b52e3522a5086578bb1b3265f1de649ee60f70fa78d2ebe4858") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f5c2ceb7f71b2b52e3522a5086578bb1b3265f1de649ee60f70fa78d2ebe4858";
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "self-center mt-10 text-3xl font-oswald",
            children: "Technologies I work upon"
        }, void 0, false, {
            fileName: "[project]/src/components/tools/Tools.js",
            lineNumber: 13,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNextdotjs"], {
                    className: "text-white text-5xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 20,
                    columnNumber: 131
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300 font-medium",
                    children: "Next.js"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 20,
                    columnNumber: 178
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tools/Tools.js",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTypescript"], {
                    className: "text-white text-5xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 27,
                    columnNumber: 131
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300 font-medium",
                    children: "TypeScript"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 27,
                    columnNumber: 179
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tools/Tools.js",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiGreensock"], {
                    className: "text-white text-5xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 34,
                    columnNumber: 131
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300 font-medium",
                    children: "GSAP"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 34,
                    columnNumber: 178
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tools/Tools.js",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSpring"], {
                    className: "text-white text-5xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 41,
                    columnNumber: 131
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300 font-medium",
                    children: "Spring Boot"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 41,
                    columnNumber: 175
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tools/Tools.js",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPostgresql"], {
                    className: "text-white text-5xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 48,
                    columnNumber: 131
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300 font-medium",
                    children: "PostgreSQL"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 48,
                    columnNumber: 179
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tools/Tools.js",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiArchlinux"], {
                    className: "text-white text-5xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 55,
                    columnNumber: 131
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300 font-medium",
                    children: "Arch Linux"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 55,
                    columnNumber: 178
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tools/Tools.js",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiDocker"], {
                    className: "text-white text-5xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 62,
                    columnNumber: 131
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300 font-medium",
                    children: "Docker"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 62,
                    columnNumber: 175
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tools/Tools.js",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiJenkins"], {
                    className: "text-white text-5xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 69,
                    columnNumber: 131
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300 font-medium",
                    children: "Jenkins"
                }, void 0, false, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 69,
                    columnNumber: 176
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tools/Tools.js",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col w-[95%] gap-8 mt-20",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-4 w-full",
                    children: [
                        t2,
                        t3,
                        t4,
                        t5,
                        t6,
                        t7,
                        t8,
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 flex flex-col justify-center items-center py-10 px-1 gap-4  transition-colors cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNodedotjs"], {
                                    className: "text-white text-5xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tools/Tools.js",
                                    lineNumber: 76,
                                    columnNumber: 266
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300 font-medium",
                                    children: "Node.js"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tools/Tools.js",
                                    lineNumber: 76,
                                    columnNumber: 313
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/tools/Tools.js",
                            lineNumber: 76,
                            columnNumber: 145
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tools/Tools.js",
                    lineNumber: 76,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tools/Tools.js",
            lineNumber: 76,
            columnNumber: 11
        }, this);
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    return t10;
}
_c = Tools;
var _c;
__turbopack_context__.k.register(_c, "Tools");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector,
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"].withTypes();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"].withTypes();
const useAppStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].withTypes();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/projects/ProjectButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/projectSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function ProjectButton(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "f725a5f29c2406395a79e3fdcd99494016305773d2fec0de6bbd26ae46b4a305") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f725a5f29c2406395a79e3fdcd99494016305773d2fec0de6bbd26ae46b4a305";
    }
    const { projectData, img, setActiveProjectImage } = t0;
    const { isOverlayOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])(_ProjectButtonUseAppSelector);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    let t1;
    if ($[1] !== dispatch || $[2] !== isOverlayOpen) {
        t1 = ({
            "ProjectButton[useEffect()]": ()=>{
                if (!isOverlayOpen) {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMouseInsideProject"])(false));
                }
            }
        })["ProjectButton[useEffect()]"];
        $[1] = dispatch;
        $[2] = isOverlayOpen;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== isOverlayOpen) {
        t2 = [
            isOverlayOpen
        ];
        $[4] = isOverlayOpen;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[6] !== dispatch || $[7] !== img || $[8] !== setActiveProjectImage) {
        t3 = ({
            "ProjectButton[handleActivate]": (e)=>{
                setActiveProjectImage(img);
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMouseInsideProject"])(true));
            }
        })["ProjectButton[handleActivate]"];
        $[6] = dispatch;
        $[7] = img;
        $[8] = setActiveProjectImage;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const handleActivate = t3;
    let t4;
    if ($[10] !== dispatch || $[11] !== handleActivate || $[12] !== projectData) {
        t4 = ({
            "ProjectButton[handleClick]": (e_0)=>{
                document.body.style.overflow = "hidden";
                const showcase = document.getElementById("project_showcase");
                const rawRect = showcase.getBoundingClientRect();
                const rect = {
                    top: rawRect.top,
                    left: rawRect.left,
                    width: rawRect.width,
                    height: rawRect.height
                };
                handleActivate(e_0);
                setTimeout({
                    "ProjectButton[handleClick > setTimeout()]": ()=>{
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openProject"])({
                            project: projectData,
                            rect
                        }));
                    }
                }["ProjectButton[handleClick > setTimeout()]"], 0.6);
            }
        })["ProjectButton[handleClick]"];
        $[10] = dispatch;
        $[11] = handleActivate;
        $[12] = projectData;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    const handleClick = t4;
    let t5;
    if ($[14] !== dispatch || $[15] !== isOverlayOpen) {
        t5 = ({
            "ProjectButton[<div>.onMouseLeave]": ()=>{
                if (!isOverlayOpen) {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMouseInsideProject"])(false));
                }
            }
        })["ProjectButton[<div>.onMouseLeave]"];
        $[14] = dispatch;
        $[15] = isOverlayOpen;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] !== img) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: img,
                className: "object-cover opacity-80"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectButton.js",
                lineNumber: 111,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/projects/ProjectButton.js",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[17] = img;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== handleActivate || $[20] !== handleClick || $[21] !== t5 || $[22] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:w-[10vw] md:h-[15vh] w-[20vw] h-[10vh]",
            onMouseEnter: handleActivate,
            onClick: handleClick,
            onMouseLeave: t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/projects/ProjectButton.js",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[19] = handleActivate;
        $[20] = handleClick;
        $[21] = t5;
        $[22] = t6;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    return t7;
}
_s(ProjectButton, "45FeckFEwjAnDiuQkYPKJwfAImw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
    ];
});
_c = ProjectButton;
function _ProjectButtonUseAppSelector(state) {
    return state.project;
}
var _c;
__turbopack_context__.k.register(_c, "ProjectButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/projects/ProjectShowcase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function ProjectShowcase(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "d72673c552cca067f5074ece97a81beda3e0936c4148a984f0c2fbd30f1a434e") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d72673c552cca067f5074ece97a81beda3e0936c4148a984f0c2fbd30f1a434e";
    }
    const { activeProjectImage } = t0;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const maskRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { isOverlayOpen, mouseInsideProject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])(_ProjectShowcaseUseAppSelector);
    let t1;
    if ($[1] !== mouseInsideProject) {
        t1 = ({
            "ProjectShowcase[useEffect()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                    "ProjectShowcase[useEffect() > gsap.context()]": ()=>{
                        if (mouseInsideProject) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(maskRef.current, {
                                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                            }, {
                                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                                duration: 0.7,
                                ease: "power3.out",
                                overwrite: true
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imgRef.current, {
                                scale: 1.3
                            }, {
                                scale: 1,
                                duration: 0.5,
                                ease: "power3.out",
                                overwrite: true
                            });
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(maskRef.current, {
                                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                                duration: 0.7,
                                ease: "power3.in",
                                overwrite: true
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imgRef.current, {
                                duration: 0.8,
                                scale: 1.3,
                                ease: "power3.in",
                                overwrite: true
                            });
                        }
                    }
                }["ProjectShowcase[useEffect() > gsap.context()]"], containerRef);
            }
        })["ProjectShowcase[useEffect()]"];
        $[1] = mouseInsideProject;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== activeProjectImage || $[4] !== isOverlayOpen || $[5] !== mouseInsideProject) {
        t2 = [
            mouseInsideProject,
            activeProjectImage,
            isOverlayOpen
        ];
        $[3] = activeProjectImage;
        $[4] = isOverlayOpen;
        $[5] = mouseInsideProject;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        };
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== activeProjectImage) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            id: "project_showcase",
            className: "lg:h-[50vh] lg:w-[35vw] h-[20vh] w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: maskRef,
                className: "w-full h-full overflow-hidden",
                style: t3,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    ref: imgRef,
                    src: activeProjectImage,
                    className: "object-cover w-full h-full origin-center"
                }, void 0, false, {
                    fileName: "[project]/src/components/projects/ProjectShowcase.js",
                    lineNumber: 91,
                    columnNumber: 180
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectShowcase.js",
                lineNumber: 91,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/projects/ProjectShowcase.js",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[8] = activeProjectImage;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_s(ProjectShowcase, "quHOXSCsHBChJhLYWbXVD7a+Hl4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = ProjectShowcase;
function _ProjectShowcaseUseAppSelector(state) {
    return state.project;
}
var _c;
__turbopack_context__.k.register(_c, "ProjectShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/projects/Projects.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectShowcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectShowcase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const projects = [
    {
        id: 1,
        img: "/p1.webp",
        name: "Cloud Drive",
        description: "This is some desc about the cloud drive project."
    },
    {
        id: 2,
        img: "/bg.jpg",
        name: "Cloud Drive",
        description: "This is some desc about the cloud drive project."
    },
    {
        id: 3,
        img: "/bg.jpg",
        name: "Cloud Drive",
        description: "This is some desc about the cloud drive project."
    },
    {
        id: 4,
        img: "/bg.jpg",
        name: "Cloud Drive",
        description: "This is some desc about the cloud drive project."
    }
];
function Projects(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "528e844e4900b1e449315a83336458afa6615f17503c91d8afd5a42505f998f1") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "528e844e4900b1e449315a83336458afa6615f17503c91d8afd5a42505f998f1";
    }
    const [activeProjectImage, setActiveProjectImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] !== activeProjectImage) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute md:right-10 h-full w-[90%] md:w-fit self-center flex flex-col justify-center mb-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectShowcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeProjectImage: activeProjectImage
            }, void 0, false, {
                fileName: "[project]/src/components/projects/Projects.js",
                lineNumber: 37,
                columnNumber: 119
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/projects/Projects.js",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[1] = activeProjectImage;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-text-muted",
            children: " Projects"
        }, void 0, false, {
            fileName: "[project]/src/components/projects/Projects.js",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-oswald text-5xl md:text-8xl lg:text-9xl font-bold text-text-main leading-[0.85] tracking-tight uppercase",
            children: [
                "My",
                t2,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/projects/Projects.js",
                    lineNumber: 52,
                    columnNumber: 143
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/projects/Projects.js",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "md:max-w-[25vw] text-start",
            children: 'This is something about me, I am the best!!! These are my projects here. See nigga, you won\'t be able to see these ever again nigga, so see these ones carefully. Have you ever seen this "kahi bhi"?'
        }, void 0, false, {
            fileName: "[project]/src/components/projects/Projects.js",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== activeProjectImage) {
        t5 = projects.map({
            "Projects[projects.map()]": (project, key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    projectData: project,
                    img: project.img,
                    setActiveProjectImage: setActiveProjectImage,
                    activeProjectImage: activeProjectImage
                }, key, false, {
                    fileName: "[project]/src/components/projects/Projects.js",
                    lineNumber: 67,
                    columnNumber: 53
                }, this)
        }["Projects[projects.map()]"]);
        $[6] = activeProjectImage;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gap-4 w-full flex p-4 md:justify-between md:p-10 flex-col",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "z-10 w-full flex md:flex-row flex-col items-start md:items-center justify-between gap-6",
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "z-10 flex flex-row md:items-end gap-4 md:justify-end",
                            children: t5
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/Projects.js",
                            lineNumber: 76,
                            columnNumber: 198
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/projects/Projects.js",
                    lineNumber: 76,
                    columnNumber: 89
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/projects/Projects.js",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t1 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen relative bg-transparent flex justify-end flex-col overflow-hidden",
            children: [
                t1,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/projects/Projects.js",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    return t7;
}
_s(Projects, "SoQHDH0SMEcIIK9SD0NL1NE6res=");
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/projects/project_details/ProjectDetailsOverlay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailsOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/projectSlice.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function ProjectDetailsOverlay() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "2151652717dec62c9e0cf0a8aa14094631e5dd7abce72e043cca25bf1e185d8e") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2151652717dec62c9e0cf0a8aa14094631e5dd7abce72e043cca25bf1e185d8e";
    }
    const { rectPos, selectedProject, isOverlayOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])(_ProjectDetailsOverlayUseAppSelector);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const barsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ghostImgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[2] !== rectPos) {
        t1 = ({
            "ProjectDetailsOverlay[useEffect()]": ()=>{
                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    paused: true,
                    onReverseComplete: _temp
                });
                tl.to(containerRef.current, {
                    yPercent: 100,
                    duration: 0.0001
                }).to(barsRef.current, {
                    yPercent: 100,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.inOut"
                });
                if (rectPos && ghostImgRef.current) {
                    tl.set(ghostImgRef.current, {
                        top: rectPos.top,
                        left: rectPos.left,
                        width: rectPos.width,
                        height: rectPos.height,
                        borderRadius: "0px",
                        opacity: 1
                    }, 0);
                    tl.to(ghostImgRef.current, {
                        top: "15%",
                        left: "5%",
                        width: "40vw",
                        height: "60vh",
                        borderRadius: "12px",
                        objectFit: "cover",
                        duration: 1.2,
                        ease: "power4.inOut",
                        delay: 0.1
                    });
                }
                tlRef.current = tl;
            }
        })["ProjectDetailsOverlay[useEffect()]"];
        t2 = [
            rectPos
        ];
        $[2] = rectPos;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[5] !== isOverlayOpen) {
        t3 = ({
            "ProjectDetailsOverlay[useEffect()]": ()=>{
                if (!tlRef.current) {
                    return;
                } else {
                    if (isOverlayOpen) {
                        tlRef.current.play();
                    } else {
                        tlRef.current.reverse();
                    }
                }
            }
        })["ProjectDetailsOverlay[useEffect()]"];
        t4 = [
            isOverlayOpen
        ];
        $[5] = isOverlayOpen;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "ProjectDetailsOverlay[addToRefs]": (el)=>{
                if (el && !barsRef.current.includes(el)) {
                    barsRef.current.push(el);
                }
            }
        })["ProjectDetailsOverlay[addToRefs]"];
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const addToRefs = t5;
    let t6;
    if ($[9] !== dispatch) {
        t6 = ({
            "ProjectDetailsOverlay[handleClose]": ()=>{
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closeProject"])());
                console.log("Close called!");
            }
        })["ProjectDetailsOverlay[handleClose]"];
        $[9] = dispatch;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const handleClose = t6;
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
            ...Array(5)
        ].map({
            "ProjectDetailsOverlay[(anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: addToRefs,
                    className: "w-1/5 h-full bg-amber-800 relative pointer-events-auto -translate-y-full"
                }, i, false, {
                    fileName: "[project]/src/components/projects/project_details/ProjectDetailsOverlay.js",
                    lineNumber: 145,
                    columnNumber: 57
                }, this)
        }["ProjectDetailsOverlay[(anonymous)()]"]);
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== selectedProject) {
        t8 = selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            ref: ghostImgRef,
            src: selectedProject.img,
            alt: "Project Hero",
            className: "fixed z-35 object-cover shadow-2xl opacity-0"
        }, void 0, false, {
            fileName: "[project]/src/components/projects/project_details/ProjectDetailsOverlay.js",
            lineNumber: 153,
            columnNumber: 29
        }, this);
        $[12] = selectedProject;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "X"
        }, void 0, false, {
            fileName: "[project]/src/components/projects/project_details/ProjectDetailsOverlay.js",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== handleClose) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col w-full h-full absolute z-30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "text-white w-fit z-40",
                onClick: handleClose,
                children: [
                    t9,
                    " Close"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/project_details/ProjectDetailsOverlay.js",
                lineNumber: 168,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/projects/project_details/ProjectDetailsOverlay.js",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[15] = handleClose;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10 || $[18] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "fixed inset-0 w-screen h-screen z-20 flex -translate-y-full",
            children: [
                t7,
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/projects/project_details/ProjectDetailsOverlay.js",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t8;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    return t11;
}
_s(ProjectDetailsOverlay, "yTUeF+8N6O/mwqayGzAiWyo502E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
    ];
});
_c = ProjectDetailsOverlay;
function _temp() {
    document.body.style.overflow = "";
}
function _ProjectDetailsOverlayUseAppSelector(state) {
    return state.project;
}
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailsOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2f$Hero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hero/Hero.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tools$2f$Tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tools/Tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$Projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/Projects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollSmoother$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollSmoother.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$project_details$2f$ProjectDetailsOverlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/project_details/ProjectDetailsOverlay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "42ca5a295668014deadbef5b21440cfbe054fa3c0d5313b7621223f6f812f4fd") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42ca5a295668014deadbef5b21440cfbe054fa3c0d5313b7621223f6f812f4fd";
    }
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Home[useEffect()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollSmoother$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
                const mainPage = mainRef.current;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollSmoother$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
                    wrapper: mainPage,
                    content: contentRef.current
                });
            }
        })["Home[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$project_details$2f$ProjectDetailsOverlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen flex flex-col justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2f$Hero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 56,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "tools_technologies",
            className: "min-h-screen justify-center flex",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tools$2f$Tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 63,
                columnNumber: 88
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: mainRef,
            id: "main-scroll-container",
            className: "min-h-screen bg-background font-sans relative text-text-muted overflow-x-hidden w-full",
            children: [
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: contentRef,
                    className: "flex flex-col w-full",
                    children: [
                        t4,
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "projects",
                            className: "min-h-screen justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$Projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 70,
                                columnNumber: 289
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 70,
                            columnNumber: 226
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "certifications"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 70,
                            columnNumber: 311
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "stats"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 70,
                            columnNumber: 342
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "contact"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 70,
                            columnNumber: 364
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 70,
                    columnNumber: 163
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_s(Home, "Mn9bn+xmMNNeNZ2CNJxTDxxO9QU=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b46a4a67._.js.map