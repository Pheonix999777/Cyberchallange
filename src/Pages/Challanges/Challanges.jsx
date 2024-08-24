import { Container } from "../../Components/Container/Container";
import { ChallangesData } from "../../utils/data";
import "./style.css";

export const Challanges = () => {
  return (
    <section className="challanges">
      <Container>
        <ul className="challanges-ul">
          {ChallangesData.map((item, index) => (
            <li key={index} className="challanges-box">
              <h2 className="challanges-title">{item.title}</h2>
              <span className="challanges-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
