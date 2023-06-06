import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Subscription() {
  return (
    <main>
      <section>
        <div className="container">
          <h2 className="section-subscribe-title">Faça sua Inscrição!</h2>
          <div className="mt-30 mb-30">
            <Card title="Pagina de Inscrição" />
          </div>

          <div className="button-width">
            <Link to={"/promotion"}>
              <Button text="Ver promoção" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
