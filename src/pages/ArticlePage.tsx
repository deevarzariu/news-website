import { useLocation } from "react-router-dom";
import style from "assets/styles/ArticlePage.module.scss";

function ArticlePage() {
  const { state } = useLocation();
  const date = new Date(state.publishedAt).toDateString();

  return (
    <div className={style.article}>
      <h2 className={style.article__title}>{state.title}</h2>
      <div className={style.article__date}>
        Published on <span>{date}</span>
      </div>
      <div>
        <img className={style.article__image} src={state.urlToImage} alt="" />
      </div>
      <div className={style.article__content}>{state.content}</div>
      <div className={style.article__link}>
        Find the original article{" "}
        <a className={style.article__link__text} href={state.url}>
          here
        </a>
      </div>
    </div>
  );
}

export default ArticlePage;
