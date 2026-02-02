import { Text, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Hero3D() {
    const sphereRef = useRef();

    useFrame((state) => {
        const { clock, mouse } = state;
        // Sphere follow mouse subtly
        sphereRef.current.position.x = mouse.x * 2;
        sphereRef.current.position.y = mouse.y * 2;
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Text
                    fontSize={1.2}
                    color="#10b981"
                    font="/fonts/bold.json" // Make sure to have a font path or use default
                    position={[0, 0.5, -2]}
                    fillOpacity={0.1} // Holographic effect
                    strokeWidth={0.02}
                    strokeColor="#34d399"
                >
                    DEVELOPER
                </Text>
            </Float>

            {/* Distorted Sphere for background depth */}
            <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.5} position={[2, -1, -5]}>
                <MeshDistortMaterial
                    color="#064e3b"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0}
                />
            </Sphere>
        </>
    );
}

export default Hero3D;