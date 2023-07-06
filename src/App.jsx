import { useEffect, useState } from 'react';
import Title from './components/Title';
import Menu from './components/Menu';
import Categories from './components/Categories';
import data from './data';

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const tempCategories = menu.map(({ category }) => category);
    const mySet = new Set(tempCategories);
    const finalCategories = ['all', ...mySet];
    setCategories(finalCategories);
  }, []);

  const filterByCategory = (category) => {
    category === 'all'
      ? setMenu(data.map((menuItem) => menuItem))
      : setMenu(data.filter((menuItem) => menuItem.category === category));
  };

  return (
    <main>
      <Title />
      <Categories categories={categories} filterByCategory={filterByCategory} />
      <Menu menu={menu} />
    </main>
  );
};
export default App;
