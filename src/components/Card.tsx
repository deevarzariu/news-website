import { Article } from "../types/Article";
import style from "../assets/styles/Card.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  article: Article;
};

function Card({ article }: Props) {
  const navigate = useNavigate();

  function openArticle() {
    const id = Math.floor(Math.random() * 10000);
    navigate(`/article/${id}`, { state: article });
  }

  return (
    <div className={style.card} onClick={openArticle}>
      <div className={style["card__image-container"]}>
        <img className={style.card__image} src={article.urlToImage} alt="" />
      </div>
      <div className={style["card__text-container"]}>
        <div className={style.card__title}>{article.title}</div>
        <div className={style.card__description}>{article.description}</div>
      </div>
    </div>
  );
}

export default Card;
