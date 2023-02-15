import { useNavigate } from "react-router-dom";
import { Article } from "types/Article";
import style from "assets/styles/HeroStageCard.module.scss";

type Props = {
  article: Article;
  position: "large" | "top" | "bottom";
};

function HeroStageCard({ article, position }: Props) {
  const navigate = useNavigate();

  function openArticle() {
    const id = Math.floor(Math.random() * 10000);
    navigate(`/article/${id}`, { state: article });
  }

  return (
    <div className={`${style.card} ${style[position]}`} onClick={openArticle}>
      <img className={style.image} src={article.urlToImage} alt="" />
      <div className={style.title}>{article.title}</div>
    </div>
  );
}

export default HeroStageCard;
