document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const playAllBtn = document.querySelector('.play-btn');
    const songItems = document.querySelectorAll('.song-item');
    const likeButtons = document.querySelectorAll('.like-btn');
    const nowPlaying = document.querySelector('.now-playing');

    // Simulated data - replace with actual API calls
    const likedSongs = [
        {
            id: 1,
            title: 'Song Title 1',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '3:45',
            cover: 'https://via.placeholder.com/50'
        },
        {
            id: 2,
            title: 'Song Title 2',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '4:12',
            cover: 'https://via.placeholder.com/50'
        },
        {
            id: 3,
            title: 'Song Title 3',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '3:30',
            cover: 'https://via.placeholder.com/50'
        }
    ];

    // Play All functionality
    playAllBtn.addEventListener('click', () => {
        // Simulate playing all songs
        console.log('Playing all liked songs');
        // Add actual playback logic here
    });

    // Song item click handler
    songItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            // Don't trigger if clicking on like button
            if (e.target.closest('.like-btn')) return;

            const song = likedSongs[index];
            updateNowPlaying(song);
        });
    });

    // Like button click handler
    likeButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const song = likedSongs[index];
            toggleLike(song, btn);
        });
    });

    // Update now playing section
    function updateNowPlaying(song) {
        const trackImg = nowPlaying.querySelector('img');
        const trackTitle = nowPlaying.querySelector('h4');
        const trackArtist = nowPlaying.querySelector('p');
        const likeBtn = nowPlaying.querySelector('.like-btn');

        trackImg.src = song.cover;
        trackTitle.textContent = song.title;
        trackArtist.textContent = song.artist;
        likeBtn.innerHTML = '<i class="fas fa-heart"></i>';

        // Add actual playback logic here
    }

    // Toggle like status
    function toggleLike(song, button) {
        const icon = button.querySelector('i');
        const isLiked = icon.classList.contains('fas');

        if (isLiked) {
            icon.classList.remove('fas');
            icon.classList.add('far');
            // Remove from liked songs (API call)
            console.log(`Removed ${song.title} from liked songs`);
        } else {
            icon.classList.remove('far');
            icon.classList.add('fas');
            // Add to liked songs (API call)
            console.log(`Added ${song.title} to liked songs`);
        }
    }

    // Initialize liked songs count
    function updateSongCount() {
        const countElement = document.querySelector('.song-count');
        const totalDuration = likedSongs.reduce((acc, song) => {
            const [minutes, seconds] = song.duration.split(':').map(Number);
            return acc + minutes * 60 + seconds;
        }, 0);

        const hours = Math.floor(totalDuration / 3600);
        const minutes = Math.floor((totalDuration % 3600) / 60);

        countElement.textContent = `${likedSongs.length} songs • ${hours}h ${minutes}m`;
    }

    // Initialize
    updateSongCount();
}); 