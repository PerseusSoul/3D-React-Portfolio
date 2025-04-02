import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { LightningStrike } from "three/examples/jsm/geometries/LightningStrike.js";
import { Preload, useTexture } from "@react-three/drei";
import { smoke } from "../../assets";
import { useGlobalContext } from "../../Context/GlobalContext";

const Rain = ({ rainCount }) => {
  const rainGeo = useRef(new THREE.BufferGeometry());
  const rainVertices = useRef(new Float32Array(rainCount * 6));
  const raindropsFallingSpeed = 1.5;

  useEffect(() => {
    const length = 0.5; // Fixed length for raindrops
    for (let i = 0; i < rainCount; i++) {
      const x = Math.random() * 400 - 200;
      const y = Math.random() * 500 - 250;
      const z = Math.random() * 400 - 200;
      rainVertices.current[i * 6] = x;
      rainVertices.current[i * 6 + 1] = y;
      rainVertices.current[i * 6 + 2] = z;
      rainVertices.current[i * 6 + 3] = x;
      rainVertices.current[i * 6 + 4] = y - length; // Fixed length
      rainVertices.current[i * 6 + 5] = z;
    }
    rainGeo.current.setAttribute(
      "position",
      new THREE.BufferAttribute(rainVertices.current, 3)
    );
  }, [rainCount]);

  useFrame(() => {
    const positions = rainGeo.current.attributes.position.array;
    for (let i = 0; i < rainCount; i++) {
      positions[i * 6 + 1] -= raindropsFallingSpeed; // Falling speed
      positions[i * 6 + 4] -= raindropsFallingSpeed; // Falling speed
      if (positions[i * 6 + 1] < -250) {
        // When a drop reaches the bottom, reset its position
        const x = Math.random() * 400 - 200;
        const z = Math.random() * 400 - 200;
        positions[i * 6] = x;
        positions[i * 6 + 1] = 250; // Reset to top
        positions[i * 6 + 2] = z;
        positions[i * 6 + 3] = x;
        positions[i * 6 + 4] = 250 - 0.5;
        positions[i * 6 + 5] = z;
      }
    }
    rainGeo.current.attributes.position.needsUpdate = true;
  });

  return (
    <lineSegments geometry={rainGeo.current}>
      <lineBasicMaterial attach="material" color={0xaaaaaa} transparent />
    </lineSegments>
  );
};

const Clouds = ({ lightningVisible }) => {
  const cloudParticles = useRef([]);
  const [renderCount, setRenderCount] = useState(0);
  const cloudGeo = useRef(new THREE.PlaneGeometry(300, 300));
  const texture = useTexture(smoke);

  useEffect(() => {
    setRenderCount(prev => prev + 1);
  }, []);

  useEffect(() => {
    for (let p = 0; p < 25; p++) {
      let cloud = new THREE.Mesh(
        cloudGeo.current,
        new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true,
          opacity: 0.2,
          depthTest: true,
        })
      );
      cloud.position.set(
        Math.random() * 800 - 400, // Spread horizontally
        Math.random() * 100 + 150, // Position the clouds higher in the scene
        Math.random() * 200 - 100 // Spread slightly in depth
      );
      cloud.rotation.set(1.16, -0.12, Math.random() * 360);
      cloudParticles.current.push(cloud);
    }
  }, [texture]);

  useFrame(() => {
    cloudParticles.current.forEach((p) => {
      p.position.x -= 0.1; // Move clouds horizontally
      if (p.position.x < -400) {
        p.position.x = 400; // Reset position to the right
      }
      p.rotation.z -= 0.001; // Rotate clouds

      // Highlight or change opacity when lightning strikes
      if (lightningVisible) {
        p.material.opacity = 1; // Increase opacity temporarily
      } else {
        p.material.opacity = 0.2; // Reset opacity
      }
    });
  });

  return (
    <>
      {cloudParticles.current.map((cloud, index) => (
        <primitive object={cloud} key={index * renderCount} />
      ))}
    </>
  );
};

const Lightning = ({ onLightningVisible, lightningVisible }) => {
  const lightningMesh = useRef(null);

  useEffect(() => {
    const sourceOffsetX = Math.random() * 2 - 1; // Between -1 and 1 (left to right)
    const sourceOffsetZ = Math.random() * 2 - 1; // Between -1 and 1 (front to back)
    const sourceOffset = new THREE.Vector3(sourceOffsetX, 100, sourceOffsetZ);
    const lightningParams = {
      sourceOffset: sourceOffset, // Start above the screen
      destOffset: new THREE.Vector3(0, -100, 0), // End below the screen
      radius0: 0.01,
      radius1: 0.01,
      minRadius: 0.01,
      maxIterations: 7,
      isEternal: true,
      timeScale: 0.2, // Slower time scale
      propagationTimeFactor: 0.4, // Slower propagation
      vanishingTimeFactor: 1.5, // Slower vanishing
      subrayPeriod: 5.0, // Longer subray period
      subrayDutyCycle: 0.4,
      maxSubrayRecursion: 3,
      ramification: 7, // number of branches in the lightning
      recursionProbability: 0.7, // chance of a branch further splitting into smaller branches
      roughness: 0.85,
      straightness: 0.75,
    };

    const lightningStrike = new LightningStrike(lightningParams);
    const mesh = new THREE.Mesh(
      lightningStrike,
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    lightningMesh.current = mesh;

    // Update the lightning bolt's position
    const interval = setInterval(() => {
      onLightningVisible(true);
      setTimeout(() => {
        onLightningVisible(false);
      }, 300); // Lightning visible for 300ms
    }, Math.random() * (10000 - 2000) + 2000); // Random interval between 2 to 10 seconds

    return () => clearInterval(interval);
  }, [onLightningVisible]);

  useFrame(() => {
    if (lightningMesh.current) {
      lightningMesh.current.geometry.update(Math.random()); // Update lightning geometry
    }
  });

  return lightningVisible ? <primitive object={lightningMesh.current} /> : null;
};

const Scene = () => {
  const { lightningVisible, setLightningVisible } = useGlobalContext();

  const handleLightningVisible = (isVisible) => {
    setLightningVisible(isVisible);
  };

  return (
    <>
      <fog attach="fog" args={["#00000f", 0.001]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 1]} intensity={0.5} />
      <Clouds lightningVisible={lightningVisible} />
      <Rain rainCount={150000} />
      <Lightning
        onLightningVisible={handleLightningVisible}
        lightningVisible={lightningVisible}
      />
    </>
  );
};

const WeatherCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none z-[-1]">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 1, 1], rotation: [1.16, -0.12, 0.25] }}
        style={{ pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};
export default WeatherCanvas;
