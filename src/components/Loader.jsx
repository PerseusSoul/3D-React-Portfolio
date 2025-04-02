import { Html, useProgress } from "@react-three/drei";

const Loader = ({ onlyNumbers = false }) => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
          width: '500px',
        }}
      >
        {!onlyNumbers && `3D model is loading...`} {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
