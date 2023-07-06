const Categories = ({ categories, filterByCategory }) => {
  return (
    <menu>
      {categories.map((categoriesItem) => (
        <button
          type="button"
          key={categoriesItem}
          className="btn"
          onClick={() => {
            filterByCategory(categoriesItem);
          }}
        >
          {categoriesItem}
        </button>
      ))}
    </menu>
  );
};

export default Categories;
