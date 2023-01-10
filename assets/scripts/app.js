const addMovieModal = document.getElementById('add-modal');

const startAddMovieButton = document.querySelector('header button');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const backdrop = document.getElementById('backdrop');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const cancelAddMovie = () => {
    toggleMovieModal();
}

const backdropClickHandler = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);

backdrop.addEventListener('click', backdropClickHandler);

cancelAddMovieButton.addEventListener('click', cancelAddMovie);