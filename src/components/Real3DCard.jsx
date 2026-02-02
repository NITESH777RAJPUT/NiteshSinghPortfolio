import { useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

function Real3DCard({ children, className = "" }) {
    const containerRef = useRef(null);

    // 1. Mouse coordinates relative to the center of the card
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 2. Smooth springs for that "Elastic" feel
    const springProps = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springProps);
    const y = useSpring(mouseY, springProps);

    // 3. Magnetic Move: Card pura shift hoga (Translate)
    const moveX = useTransform(x, [-0.5, 0.5], [15, -15]);
    const moveY = useTransform(y, [-0.5, 0.5], [15, -15]);

    // 4. Subtle Tilt: Card halka sa tilt bhi hoga
    const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        // Mouse position as a percentage from -0.5 to 0.5
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(px);
        mouseY.set(py);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative"
            style={{ perspective: "1200px" }}
        >
            <motion.div
                style={{
                    x: moveX,
                    y: moveY,
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className={`relative transition-shadow duration-500 ${className} 
                           group-hover:shadow-[0_50px_100px_-20px_rgba(16,185,129,0.25)]`}
            >
                {/* 🌌 Background "Floating" Glow */}
                <motion.div
                    style={{
                        x: useTransform(x, [-0.5, 0.5], [25, -25]), // Moves faster
                        y: useTransform(y, [-0.5, 0.5], [25, -25]),
                        transformZ: "-10px"
                    }}
                    className="absolute inset-0 bg-emerald-500/5 rounded-[inherit] blur-2xl -z-10 group-hover:bg-emerald-500/10 transition-colors"
                />

                {/* 🎭 Inner Content with extreme depth */}
                <div style={{ transform: "translateZ(60px)" }} className="relative z-20">
                    {children}
                </div>

                {/* 💎 Bottom Layer highlight */}
                <div
                    className="absolute inset-0 rounded-[inherit] border border-white/5 group-hover:border-emerald-500/30 transition-colors duration-500"
                    style={{ transform: "translateZ(-20px)" }}
                />
            </motion.div>
        </div>
    );
}

export default Real3DCard;