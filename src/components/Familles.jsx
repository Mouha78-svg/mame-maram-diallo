import Title from "./Title";
import { familles } from "../data";
// console.log(familles);
const Familles = () => {
  return (
    <div>
      <article className="section fammille" id="famille">
        <Title title="Arbre  " subTitle="généalogique" />
        <div className="section-center center-famille">
          {familles.map((famille) => {
            // console.log(famille.sous.map((el) => console.log(el.sousParent)));
            return (
              <article key={famille.id} className="sous-famille">
                <h3 className="titre">
                  Famille <strong>{famille.parentName}</strong> et ses enfants
                </h3>
                {famille.fils.map((fil) => {
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
    </div>
  );
};

export default Familles;
