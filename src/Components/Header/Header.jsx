import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import "./style.css";
import Home from "../../assets/Imges/Home.png";
import User from "../../assets/Imges/User.png";
import Challanges from "../../assets/Imges/Bulleted List.png";
import Tests from "../../assets/Imges/Sidebar Menu.png";
import { Sidebar } from "../../utils/data";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <Link className="header-logo" to={"/"}>
          Cyberchallange
        </Link>

        <ul className="header-ul">
          {Sidebar.map((item, index) => (
            <li key={index}>
              <Link className="header-link" to={item.link}>
                <img
                  className="header-img"
                  src={item.img}
                  alt=""
                  width={43}
                  height={53}
                />
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
};
