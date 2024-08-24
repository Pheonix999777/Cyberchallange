import { Container } from "../../Components/Container/Container";
import { UsersData } from "../../utils/data";
import "./style.css";

export const Scoreboard = () => {
  return (
    <section className="scoreboard">
      <Container>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {UsersData.map((item, index) => (
              <tr key={index}>
                <td>
                  <span className="scoreboard-count">{index + 1}</span>
                </td>
                <td>{item.name}</td>
                <td>{item.Date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
};
