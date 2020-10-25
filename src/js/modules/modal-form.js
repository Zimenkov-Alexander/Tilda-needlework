function modalForm (modalWindow, modalClose, ...btnsSelector) {

	btnsSelector.forEach(item => {
		document.querySelectorAll(item).forEach(btn => {
			btn.addEventListener('click', (evt) => {
				evt.preventDefault();
				showModal();
			});
		});
	});

	const modal = document.querySelector(modalWindow),
				closeBtn = document.querySelector(modalClose);

	closeBtn.addEventListener('click', hideModal);

	function showModal(){
		modal.classList.remove('hide');
		modal.classList.add('show');
	}
	function hideModal(){
		modal.classList.add('hide');
		modal.classList.remove('show');
	}

	document.addEventListener('keydown', (evt) =>{
		if (evt.code === 'Escape' && modal.classList.contains('show')){
			hideModal();
		}
	});
}
export default modalForm;