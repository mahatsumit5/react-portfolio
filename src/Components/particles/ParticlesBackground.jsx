import particlesConfig from "./particles-config";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      options={particlesConfig}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};
