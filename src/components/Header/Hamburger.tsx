import style from "assets/styles/Hamburger.module.scss";

type Props = {
  onToggle: () => void;
};

function Hamburger({ onToggle }: Props) {
  return (
    <button className={style.toggleBtn} onClick={onToggle}>
      <span className={style.bar}></span>
      <span className={style.bar}></span>
      <span className={style.bar}></span>
    </button>
  );
}

export default Hamburger;
