import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";
const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="tous les" subTitle="actualités" />

        <div className="section-center featured-center">
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Tours;
