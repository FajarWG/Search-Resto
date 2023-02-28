
/* eslint-disable no-param-reassign */
const DrawerInit = {
  init({
    button,
    drawer,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    window.addEventListener('scroll', (event) => {
      this._addBackground(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _addBackground(event, drawer) {
    event.stopPropagation();
    const { scrollY } = window;
    if (scrollY < 300) {
      drawer.classList.remove('scroll');
    } else {
      drawer.classList.add('scroll');
    }
  },

};

export default DrawerInit;
