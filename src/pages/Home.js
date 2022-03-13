import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Clients from "../components/Clients/Clients";
import Content from "../components/Content/Content";
import { heroOne, heroTwo, heroThree, heroFour } from "../data/HeroData";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Content {...heroFour} />
    </>
  );
};

export default Home;
