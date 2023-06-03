import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt-30 mb-30">
            <Card title="Pagina inicial" />
          </div>
          <div className="button-width">
            <Button text="Ver promoção" />
          </div>
        </div>
      </section>
    </main>
  );
}

