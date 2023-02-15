import { Article } from "types/Article";
import HeroStageCard from "./HeroStageCard";
import style from "assets/styles/HeroStage.module.scss";

type Props = {
  large: Article;
  top: Article;
  bottom: Article;
};

function HeroStage({ large, top, bottom }: Props) {
  return (
    <div className={style["hero-stage"]}>
      <HeroStageCard article={large} position="large" />
      <HeroStageCard article={top} position="top" />
      <HeroStageCard article={bottom} position="bottom" />
    </div>
  );
}

export default HeroStage;
