import { useTranslation } from "react-i18next";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import IconButtonFeatureCard from "../cards/IconButtonFeatureCard";

export default function FeaturesParagraphs({ modal, colorMode }) {
  const { t } = useTranslation();

  // Classes de tema
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "bg-bgSectionDark",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="service" className={`${bgClass}`}>
      <SectionHeader
        colorMode="dark"
        className="text-center"
        miniTitle={t("features.miniTag")}
        sectionHeaderTitle={t("features.title")}
        sectionHeaderSubtitle={t("features.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
      />

      <SectionWrapper>
        <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
          <div className="flex flex-wrap items-start justify-center w-full gap-[40px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
              const card = content.texts.features[`card${num}`]; // Mantém ícones e imagens do content
              return (
                <MotionDivDownToUp
                  key={num}
                  className="flex flex-col items-center justify-center border-[2px] border-solid p-[10px] rounded-md bg-bgSectionLight max-w-[350px] tablet1:w-[300px] desktop1:w-[200px] desktop2:w-[17%]"
                >
                  <IconButtonFeatureCard
                    icon={card.icon} // ícone do content
                    title={t(`features.card${num}.title`)}
                    paragraph={t(`features.card${num}.subtitle`)}
                    className=""
                    colorMode={colorMode}
                  />
                  {/* <Button
                    size="small"
                    className="bg-darker"
                    labelColor="text-white"
                    label={t(`features.card${num}.buttonLabel`)}
                    buttonLink={t("links.ctaWhatsapp")}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-corner-down-right"
                      >
                        <polyline points="15 10 20 15 15 20" />
                        <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                      </svg>
                    }
                  /> */}
                </MotionDivDownToUp>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
