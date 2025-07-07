import React, { useEffect, useState } from "react";
import CircularImg from "../components/CircularImg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import CardService from "../components/Cards/CardService";
import { cardsData } from "../components/Cards/cardsData";
import { Button } from "@material-tailwind/react";

function Home() {
  const part1 = "Bienvenue ";
  const part2 = "LuxTech";
  const part3 = "Service";
  const paragraphText =
    "Nous fournissons des solutions numériques innovantes pour améliorer votre activité. Découvrez nos services adaptés à vos besoins.";

  const [displayedPart1, setDisplayedPart1] = useState("");
  const [displayedPart2, setDisplayedPart2] = useState("");
  const [displayedPart3, setDisplayedPart3] = useState("");
  const [displayParagraph, setDisplayedParagraph] = useState("");

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    let indexParagraph = 0;

    //Timer pour le titre
    const interval1 = setInterval(() => {
      setDisplayedPart1(part1.slice(0, index1 + 1));
      index1++;
      if (index1 === part1.length) {
        clearInterval(interval1);

        // Animer part2
        const interval2 = setInterval(() => {
          setDisplayedPart2(part2.slice(0, index2 + 1));
          index2++;
          if (index2 === part2.length) {
            clearInterval(interval2);

            // Animer part3
            const interval3 = setInterval(() => {
              setDisplayedPart3(part3.slice(0, index3 + 1));
              index3++;
              if (index3 === part3.length) {
                clearInterval(interval3);

                // Animer paragraphe
                const intervalPara = setInterval(() => {
                  setDisplayedParagraph(
                    paragraphText.slice(0, indexParagraph + 1)
                  );
                  indexParagraph++;
                  if (indexParagraph === paragraphText.length) {
                    clearInterval(intervalPara);
                  }
                }, 50);
              }
            }, 80);
          }
        }, 80);
      }
    }, 80);
    return () => {
      clearInterval(interval1);
    };
  }, []);
  return (
    <>
      <section className="w-full bg-gray-100 py-20">
        <div className="px-4 lg:px-20 max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Texte à gauche */}
            <div className="max-w-lg text-center lg:text-left">
              <h2 className="text-4xl font-bold text-red-600 mb-4">
                <span className="text-black">{displayedPart1}</span>
                <span className="text-red-600">{displayedPart2}</span>
                <span className="text-black">{displayedPart3}</span>
                {(displayedPart3.length < part3.length ||
                  displayedPart2.length < part2.length ||
                  displayedPart1.length < part1.length) && (
                  <span className="animate-pulse">|</span>
                )}
              </h2>
              <p className="text-gray-700 text-lg">
                {displayParagraph}
                {displayParagraph.length < paragraphText.length && (
                  <span className="animate-pulse">|</span>
                )}
              </p>
              <Button className="bg-red-600 mt-6 hover:bg-red-400 text-white text-lg px-10 py-2 rounded-full flex items-center gap-2 transition-all duration-300">
                Explorer nos services
                <ArrowRightIcon className="h-5 w-5" />
              </Button>
            </div>

            {/* Image à droite (et en dessous sur mobile) */}
            <div className="flex justify-center mt-8 lg:mt-20">
              <CircularImg />
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Nos <span className="text-red-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour tous vos besoins en
              construction et rénovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsData.map((card) => (
              <CardService
                key={card.id}
                title={card.title}
                description={card.description}
                features={card.features}
                icon={card.icon}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </section>
      <section className = "py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Nos <span className="text-red-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour tous vos besoins en
              construction et rénovation
            </p>
          </div>
          </div>


      </section>
    </>
  );
}

export default Home;
