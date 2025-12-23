import aboutImage from "../assets/accueil-maram.png";
import Title from "./Title";

const About = () => {
  return (
    <div>
      <section className="section" id="about">
        <Title title="à propos de " subTitle="nous" />

        <div className="section-center about-center">
          <div className="about-img">
            <img src={aboutImage} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>L'appel du cœur : en route vers nos grandes retrouvailles</h3>
            <p>
              Depuis trop longtemps, les kilomètres et le rythme effréné du
              quotidien ont dispersé les membres de notre grande famille,
              transformant nos liens serrés en appels téléphoniques occasionnels
              et en photos partagées sur les réseaux sociaux. La nostalgie des
              grands repas d'antan, où les rires des cousins se mêlaient aux
              anecdotes des aînés, se fait de plus en plus sentir. C'est animé
              par ce désir ardent de renouer les liens sacrés du sang que nous
              avons décidé de lancer ce projet ambitieux : organiser des
              retrouvailles mémorables pour rassembler enfin toutes les
              générations, de nos doyens aux tout-petits que nous n'avons pas
              encore eu la chance de rencontrer.
            </p>
            <p>
              L'effervescence commence à gagner les esprits alors que nous
              cherchons la date idéale et le lieu parfait pour accueillir notre
              tribu. Malgré les défis logistiques et les agendas surchargés de
              chacun, l'enthousiasme est le moteur qui nous pousse à concrétiser
              ce rêve commun. Nous imaginons déjà la chaleur des étreintes, le
              bonheur de partager un repas festif et la joie simple d'être enfin
              réunis au même endroit. Ce ne sera pas seulement une fête, mais
              une véritable célébration de notre histoire commune, une occasion
              unique de tisser de nouveaux souvenirs inoubliables qui nous
              porteront pour les années à venir.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
