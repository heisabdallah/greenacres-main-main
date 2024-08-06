import Item from "./items";
import { ADMISSION, GALLERY, ALUMNI, OUR_SCHOOLS } from "./menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={ADMISSION} title="ADMISSION" />
      <Item Links={GALLERY} title="GALLERY" />
      <Item Links={ALUMNI} title="ALUMNI" />
      <Item Links={OUR_SCHOOLS} title="OUR SCHOOLS" />
    </div>
  );
};

export default ItemsContainer;