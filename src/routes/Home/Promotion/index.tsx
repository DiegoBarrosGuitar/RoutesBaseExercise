import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Promotion() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt-30 mb-30">
            <Card title="Pagina de Promoção" />
          </div>

          <div className="button-width">
            <Link to={"/subscription"}>
              <Button text="Quero Participar" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
