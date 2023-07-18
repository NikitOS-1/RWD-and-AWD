import style from "./Card.module.scss";

const Card = () => {
  return (
    <div className={style.wrap}>
      <div className={style.img}>
        <img src="#" alt="img" />
      </div>
      <div className={style.title}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam omnis
        repudiandae maiores quis laudantium esse, id optio dicta architecto
        corporis ratione eius nihil error ullam repellendus similique assumenda,
        accusamus voluptates.
      </div>
    </div>
  );
};
export default Card;
