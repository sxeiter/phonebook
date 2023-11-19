import controls from './modules/control.js';
const {
  hoverRow,
  modalControl,
  deleteControl,
  formControl,
} = controls;
import {renderPhoneBook, renderContacts} from './modules/render.js';
import {getStorage} from './modules/serviceStorage.js';

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const {
      list,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel,
      thead,
    } = renderPhoneBook(app, title);

    // Функционал
    const allRow = renderContacts(list, getStorage('contacts'));
    const {closeModal} = modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(btnDel, list);
    formControl(form, list, closeModal);

    thead.addEventListener('click', e => {
      const target = e.target;
      if (target.textContent === 'Имя') {
        list.innerHTML = '';
        renderContacts(list, getStorage('contacts'));
      } else if (target.textContent === 'Фамилия') {
        list.innerHTML = '';
        renderContacts(list, getStorage('contacts'));
      }
    });
  };
  window.phoneBookInit = init;
}
