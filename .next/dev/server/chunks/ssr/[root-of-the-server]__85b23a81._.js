module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/canvas/ParticleSphere.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
function ParticleSphere() {
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mount = mountRef.current;
        if (!mount) return;
        // ── Detección mobile ──────────────────────────────────────
        const isMobile = window.matchMedia('(max-width: 768px)').matches || navigator.maxTouchPoints > 0;
        const N = isMobile ? 1800 : 6000; // menos partículas en mobile
        const PARTICLE_SIZE = isMobile ? 0.022 : 0.018;
        // ── Escena, cámara, renderer ──────────────────────────────
        const W = mount.clientWidth;
        const H = mount.clientHeight;
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](60, W / H, 0.1, 1000);
        camera.position.z = 3;
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: !isMobile,
            alpha: true
        });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);
        // ── Partículas ────────────────────────────────────────────
        const positions = new Float32Array(N * 3);
        const origins = new Float32Array(N * 3);
        const targets = new Float32Array(N * 3);
        for(let i = 0; i < N; i++){
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 0.85 + Math.random() * 0.15;
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            origins[i * 3] = x;
            origins[i * 3 + 1] = y;
            origins[i * 3 + 2] = z;
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            const spread = 3 + Math.random() * 4;
            targets[i * 3] = x * spread + (Math.random() - 0.5) * 2;
            targets[i * 3 + 1] = y * spread + (Math.random() - 0.5) * 2;
            targets[i * 3 + 2] = z * spread + (Math.random() - 0.5) * 2;
        }
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]();
        geometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
        const createCircleTexture = ()=>{
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(32, 32, 28, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
            return texture;
        };
        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointsMaterial"]({
            color: 0x7F77DD,
            size: PARTICLE_SIZE,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.85,
            depthWrite: false,
            map: createCircleTexture(),
            alphaTest: 0.5
        });
        const points = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Points"](geometry, material);
        scene.add(points);
        // ── Scroll ────────────────────────────────────────────────
        let scrollProgress = 0;
        let targetScroll = 0;
        const SCROLL_DISTANCE = window.innerHeight * 1.2;
        // En mobile usamos el scroll nativo de la página (funciona en iOS también)
        const onScroll = ()=>{
            targetScroll = Math.min(1, window.scrollY / SCROLL_DISTANCE);
        };
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        // ── Mouse (solo desktop) ──────────────────────────────────
        const mouse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](9999, 9999);
        const onMouseMove = (e)=>{
            const rect = mount.getBoundingClientRect();
            mouse.x = (e.clientX - rect.left) / W * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / H) * 2 + 1;
        };
        const onMouseLeave = ()=>mouse.set(9999, 9999);
        if (!isMobile) {
            mount.addEventListener('mousemove', onMouseMove);
            mount.addEventListener('mouseleave', onMouseLeave);
        }
        // ── Touch: dispersión con gyro simulado en mobile ─────────
        // En mobile, el "hover" se reemplaza por una leve dispersión
        // automática que pulsa suavemente — sin necesidad de tocarlo
        let autoBreath = 0; // controla la "respiración" automática en mobile
        // ── Resize ────────────────────────────────────────────────
        const onResize = ()=>{
            const w = mount.clientWidth;
            const h = mount.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', onResize);
        // ── Loop de animación ─────────────────────────────────────
        let animId;
        const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Clock"]();
        const pos = geometry.attributes.position;
        const plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plane"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1), 0);
        const mouseWorld = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const raycaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Raycaster"]();
        const HOVER_RADIUS = 0.55;
        const HOVER_FORCE = 0.28;
        const animate = ()=>{
            animId = requestAnimationFrame(animate);
            const t = clock.getElapsedTime();
            scrollProgress += (targetScroll - scrollProgress) * 0.04;
            // Rotación — más lenta en mobile para ahorrar GPU
            points.rotation.y = t * (isMobile ? 0.10 : 0.15);
            points.rotation.x = Math.sin(t * 0.07) * 0.15;
            // "Respiración" en mobile: dispersión pulsante suave
            if (isMobile) {
                autoBreath = Math.sin(t * 0.6) * 0.06; // ±6% de dispersión automática
            }
            // Hover en desktop
            if (!isMobile) {
                raycaster.setFromCamera(mouse, camera);
                raycaster.ray.intersectPlane(plane, mouseWorld);
            }
            for(let i = 0; i < N; i++){
                const i3 = i * 3;
                // Interpolación origen → dispersión según scroll
                const scrollT = scrollProgress + (isMobile ? autoBreath : 0);
                const tx = origins[i3] + (targets[i3] - origins[i3]) * Math.min(1, Math.max(0, scrollT));
                const ty = origins[i3 + 1] + (targets[i3 + 1] - origins[i3 + 1]) * Math.min(1, Math.max(0, scrollT));
                const tz = origins[i3 + 2] + (targets[i3 + 2] - origins[i3 + 2]) * Math.min(1, Math.max(0, scrollT));
                let hx = tx, hy = ty;
                // Efecto hover solo en desktop
                if (!isMobile) {
                    const hoverStrength = Math.max(0, 1 - scrollProgress * 2);
                    if (hoverStrength > 0.05) {
                        const worldPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](tx, ty, tz).applyEuler(points.rotation);
                        const dx = worldPos.x - mouseWorld.x;
                        const dy = worldPos.y - mouseWorld.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < HOVER_RADIUS && dist > 0.001) {
                            const force = (1 - dist / HOVER_RADIUS) * HOVER_FORCE * hoverStrength;
                            hx += dx / dist * force;
                            hy += dy / dist * force;
                        }
                    }
                }
                pos.array[i3] += (hx - pos.array[i3]) * (isMobile ? 0.05 : 0.07);
                pos.array[i3 + 1] += (hy - pos.array[i3 + 1]) * (isMobile ? 0.05 : 0.07);
                pos.array[i3 + 2] += (tz - pos.array[i3 + 2]) * (isMobile ? 0.05 : 0.07);
            }
            pos.needsUpdate = true;
            material.opacity = 0.85 - scrollProgress * 0.4;
            material.size = PARTICLE_SIZE + scrollProgress * 0.012;
            renderer.render(scene, camera);
        };
        animate();
        // ── Cleanup ───────────────────────────────────────────────
        return ()=>{
            cancelAnimationFrame(animId);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            if (!isMobile) {
                mount.removeEventListener('mousemove', onMouseMove);
                mount.removeEventListener('mouseleave', onMouseLeave);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mountRef,
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: 0,
            pointerEvents: 'auto',
            background: '#050508'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/ParticleSphere.tsx",
        lineNumber: 222,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__85b23a81._.js.map