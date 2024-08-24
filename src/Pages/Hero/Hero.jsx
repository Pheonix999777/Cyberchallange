import { Container } from "../../Components/Container/Container";
import "./style.css";
import { HiFlag } from "react-icons/hi2";

export const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero-box">
          <h1 className="hero-title">Welcome to Cyberchallange</h1>
          <p className="hero-text">
            Cyberchallange is an educational platform on cybersecurity created
            with the air of developing cybersecurity in Uzbekistan. On this
            platform, you can test your knowledge and improve your cybersecurity
            skills
          </p>

          <button className="hero-btn">
            <HiFlag /> Start mission
          </button>
        </div>
      </Container>
    </section>
  );
};
