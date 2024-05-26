document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const media = document.getElementById('media').files[0];

    if (media) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const mediaUrl = e.target.result;
            addEventToGallery(title, description, mediaUrl, media.type);
        };
        reader.readAsDataURL(media);
    }

    this.reset();
});

function addEventToGallery(title, description, mediaUrl, mediaType) {
    const eventContainer = document.createElement('div');
    eventContainer.className = 'event-item';

    const eventTitle = document.createElement('h3');
    eventTitle.textContent = title;

    const eventDescription = document.createElement('p');
    eventDescription.textContent = description;

    let mediaElement;
    if (mediaType.startsWith('image/')) {
        mediaElement = document.createElement('img');
        mediaElement.src = mediaUrl;
    } else if (mediaType.startsWith('video/')) {
        mediaElement = document.createElement('video');
        mediaElement.src = mediaUrl;
        mediaElement.controls = true;
    }

    eventContainer.appendChild(eventTitle);
    eventContainer.appendChild(eventDescription);
    if (mediaElement) {
        eventContainer.appendChild(mediaElement);
    }

    document.getElementById('events-container').appendChild(eventContainer);
}
