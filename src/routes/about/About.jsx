import React from "react";
import "./AboutStyles.css";
import Hero from "../../components/hero/Hero";
import InfoContainer from "../../components/containers/info/InfoContainer";
import ImageCard from "../../components/imagecard/ImageCard";
import Footer from "../../components/footer/Footer";

import data from "./aboutData.json";

import aboutImg from "../../assets/imgs/3.jpg";
import infoImg1 from "../../assets/imgs/1.jpg";
import infoImg2 from "../../assets/imgs/2.jpg";

import infoImg6 from "../../assets/imgs/6.jpg";
import infoImg8 from "../../assets/imgs/8.jpg";
import infoImg9 from "../../assets/imgs/9.jpg";
import infoImg10 from "../../assets/imgs/10.jpg";

const About = () => {
  const teamImages = [infoImg6, infoImg8, infoImg9, infoImg10];
  const teamCardColor = ["primary", "secondary", "tertiary", "quaternary"];

  return (
    <div>
      <Hero cName="hero mid" heroImg={aboutImg} title="Sobre nós" />

      <div className="about-container">
        <InfoContainer
          sessionTitle="Nossa História"
          sessionText="Conheça um pouquinho sobre a gente"
          cName="info-content"
          textTitle="Como começamos"
          textContent="Natural de Pirpirituba,PB, a Uma ideia nasceu com o objetivo de facilitar a comunicação visual, promover a inovação e a transformação dos serviços ate então tradicionais. "
          img1={infoImg1}
          img2={infoImg2}
          url="/sobre"
          buttonIcon="fa-solid fa-arrow-pointer"
        />

        <InfoContainer
          cName="info-content about"
          textTitle="Nossa Missão"
          textContent="Transformar ideias em experiências visuais impactantes, ajudando pessoas, marcas e empresas a se destacarem no mercado por meio de soluções criativas e estratégicas em comunicação visual. Nosso compromisso é conectar empresas ao seu público-alvo de maneira eficaz, inovadora e personalizada."
          img1={infoImg1}
          url="/sobre"
          buttonIcon="fa-solid fa-arrow-pointer"
        />

        <InfoContainer
          cName="info-content about right"
          textTitle="Nossos Valores"
          textContent="Acreditamos que a criatividade é o motor que impulsiona nossas soluções, buscando sempre novas formas de comunicar e inovar visualmente. Valorizamos a excelência em cada detalhe, prezando pela qualidade e compromisso em todos os projetos que desenvolvemos. A inovação é parte essencial do nosso DNA, utilizando tecnologia e acompanhando as tendências para potencializar resultados de forma eficiente. Além disso, cultivamos uma relação de parceria com nossos clientes, entendendo suas necessidades e criando soluções personalizadas que fortalecem suas marcas e ampliam seu impacto no mercado."
          img1={infoImg2}
          url="/sobre"
          buttonIcon="fa-solid fa-arrow-pointer"
        />

        <div className="about-info">
          <h2>Nossa Equipe</h2>
          <p>Conheça nossa equipe</p>

          <div className="team">
            {teamImages.map((image, index) => (
              <ImageCard
                key={index}
                cName="image-card about"
                src={image}
                alt={index}
                color={teamCardColor[index]}
                title={data[index].title}
                description={data[index].description}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
