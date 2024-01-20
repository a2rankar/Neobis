const apiKey = 'DpJOT3Z217cO8AnhCbObtRB2OYJCfOsp';

document.getElementById('searchButton').addEventListener('click', performSearch);

// Массив для хранения созданных изображений
const gifImages = [];

function performSearch() {
    clearResults();

    const searchTerm = document.getElementById('searchInput').value.trim();

    if (searchTerm !== '') {
        const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;

        fetch(searchUrl)
            .then(response => response.json())
            .then(data => {
                if (data.data && data.data.length > 0) {
                    data.data.forEach(gif => {
                        const gifImage = document.createElement('img');
                        gifImage.src = gif.images.original.url;

                        // Добавляем каждому изображению обработчик события для остановки/возобновления
                        gifImage.addEventListener('click', toggleGifPause);

                        document.getElementById('gifContainer').appendChild(gifImage);
                        gifImages.push(gifImage);
                    });
                } else {
                    console.error('No GIFs found for the search term.');
                }
            })
            .catch(error => console.error('Error fetching data from the Giphy API:', error));
    } else {
        console.error('Please enter a search term.');
    }
}

document.getElementById('stopButton').addEventListener('click', stopAllGifs);

function stopAllGifs() {
    gifImages.forEach(gifImage => {
        gifImage.pause(); // Приостанавливаем все гифы
    });
}

function toggleGifPause(event) {
    const clickedGif = event.target;
    if (clickedGif.paused) {
        clickedGif.play(); // Если гиф приостановлена, возобновляем воспроизведение
    } else {
        clickedGif.pause(); // Если гиф воспроизводится, приостанавливаем
    }
}

function clearResults() {
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = '';
    gifImages.length = 0; // Очищаем массив изображений
}
