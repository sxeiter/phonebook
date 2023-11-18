import stor from './modules/serviceStorage.js';
import {
  renderPhoneBook,
  renderContacts,
  hoverRow,
} from './modules/render.js';
import control from './modules/control.js';

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const {list, logo, btnAdd, formOverlay, btnDel, form} =
    renderPhoneBook(app, title);

    // Реализация сортировки
    const sortName = document.querySelector('.nameTr');
    const sortSurname = document.querySelector('.surnameTr');

    sortName.addEventListener('click', () => {
      const sortData = [...stor.dataStorage];
      stor.dataStorage.sort((a, b) => {
        console.log(a, b);
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      localStorage.setItem(stor.phonebook, JSON.stringify(sortData));
      renderContacts(list, sortData);
    });

    sortSurname.addEventListener('click', () => {
      stor.dataStorage.sort((a, b) => {
        console.log(a, b);
        if (a.surname > b.surname) {
          return 1;
        }
        if (a.surname < b.surname) {
          return -1;
        }
        return 0;
      });
      localStorage.setItem(stor.phonebook,
          JSON.stringify(stor.dataStorage));
      renderContacts(list, stor.dataStorage);
    });

    const allRow = renderContacts(list, stor.dataStorage);
    const {closeModal} = control.modalControl(btnAdd, formOverlay);
    hoverRow(allRow, logo);
    control.deleteControl(btnDel, list);
    control.formControl(form, list, closeModal);
  };
  window.phoneBookInit = init;
}