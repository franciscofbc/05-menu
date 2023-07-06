const MenuItem = ({ menuItem }) => {
  const { id, title, category, price, img, desc } = menuItem;
  return (
    <article>
      <img src={img} alt={title} className="img" />
      <div className="info">
        <div>
          <h5>{title}</h5>
          <span>${price}</span>
        </div>
        <p>{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
