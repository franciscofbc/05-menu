import MenuItem from './MenuItem';
const Menu = ({ menu }) => {
  return (
    <section className="menu-items">
      {menu.map((menuItem) => (
        <MenuItem key={menuItem.id} menuItem={menuItem} />
      ))}
    </section>
  );
};

export default Menu;
