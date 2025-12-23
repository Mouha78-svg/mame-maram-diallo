import { services } from "../data";
import Title from "./Title";
import Service from "./Service";

const Services = () => {
  return (
    <div>
      <section className="section services" id="services">
        <Title title="Nos" subTitle="services" />
        <div className="section-center services-center">
          {services.map((service) => {
            return <Service key={service.id} {...service} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
