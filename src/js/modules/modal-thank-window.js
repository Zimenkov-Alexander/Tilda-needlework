function modalThankWindow (modalWindow, modalOpenBtn) {

	const modal = document.querySelector(modalWindow),
				OpenBtn = document.querySelector(modalOpenBtn);

	OpenBtn.addEventListener('click', showModal);

	function showModal(){
		modal.classList.remove('hide');
		modal.classList.add('show');
		document.querySelector('.modal--form').classList.remove('show');
		document.querySelector('.modal--form').classList.add('hide');
		setTimeout(hideModal, 2000);
	}
	function hideModal(){
		modal.classList.remove('show');
		modal.classList.add('hide');
	}

	document.addEventListener('keydown', (evt) =>{
		if (evt.code === 'Escape' && modal.classList.contains('show')){
			hideModal();
		}
	});
}

export default modalThankWindow;