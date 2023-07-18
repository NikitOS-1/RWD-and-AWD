import Card from "../../Component/Card/Card";
import style from "./Main.module.scss";

const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.threeRow}>
          <section className={style.card}>
            <Card />
          </section>
          <section className={style.card}>
            <Card />
          </section>
          <section className={style.card}>
            <Card />
          </section>
        </div>
        <div className={style.twoRow}>
          <section className={style.card}>
            <Card />
          </section>
          <section className={style.card}>
            <Card />
          </section>
        </div>
      </div>
    </main>
  );
};
export default Main;
