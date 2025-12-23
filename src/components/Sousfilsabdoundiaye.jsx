import Title from "./Title";
import { sousFilsAbdouNdiaye } from "../data";
const Sousfilsabdoundiaye = () => {
  return (
    <article className="section">
      <div className="section-center center-famille">
        <Title title="Sous fils d' " subTitle="Abdou Ndiaye et leur famille" />
        {sousFilsAbdouNdiaye.map((famille) => {
          // console.log(famille.sous.map((el) => console.log(el.sousParent)));
          return (
            <article key={famille.id} className="sous-famille">
              <h3 className="titre">
                Famille <strong>{famille.sousParent}</strong> et ses enfants
              </h3>
              {famille.sousFils.map((fil) => {
                return (
                  <ul key={fil.id} className="sous-famille">
                    <li className="name-sous">{fil}</li>
                  </ul>
                );
              })}
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default Sousfilsabdoundiaye;
