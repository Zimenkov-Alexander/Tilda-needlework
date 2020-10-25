'use strict';

import modalForm from './modules/modal-form';
import modalThankWindow from './modules/modal-thank-window';

window.addEventListener('DOMContentLoaded', () => {
	modalForm('.modal--form','.close__modal', '.btn');
	// modalThankWindow();
});