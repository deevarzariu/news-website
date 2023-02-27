import style from "assets/styles/Hamburger.module.scss";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

function Hamburger({ isOpen, onToggle }: Props) {
  const barClassName = `${style.bar} ${isOpen ? style.active : ""}`;
  return (
    <button className={style.toggleBtn} onClick={onToggle}>
      <span className={barClassName}></span>
      <span className={barClassName}></span>
      <span className={barClassName}></span>
    </button>
  );
}

export default Hamburger;
