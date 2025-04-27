document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    let searchTimeout;

    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                performSearch(searchTerm);
            } else {
                clearSearchResults();
            }
        }, 500);
    });

    // Function to perform search
    function performSearch(term) {
        // In a real application, this would make an API call
        // For now, we'll simulate search results
        const activeTab = document.querySelector('.tab-content.active').id;
        
        switch (activeTab) {
            case 'songs':
                displaySongs(term);
                break;
            case 'artists':
                displayArtists(term);
                break;
            case 'albums':
                displayAlbums(term);
                break;
            case 'playlists':
                displayPlaylists(term);
                break;
        }
    }

    // Function to clear search results
    function clearSearchResults() {
        const grids = document.querySelectorAll('.songs-grid, .artists-grid, .albums-grid, .playlists-grid');
        grids.forEach(grid => {
            grid.innerHTML = '';
        });
    }

    // Function to display songs
    function displaySongs(term) {
        const songsGrid = document.querySelector('.songs-grid');
        songsGrid.innerHTML = '';

        // Simulated song data
        const songs = [
            { title: 'Song 1', artist: 'Artist 1', duration: '3:45' },
            { title: 'Song 2', artist: 'Artist 2', duration: '4:20' },
            { title: 'Song 3', artist: 'Artist 3', duration: '3:15' }
        ];

        songs.forEach(song => {
            const songElement = document.createElement('div');
            songElement.className = 'song-item';
            songElement.innerHTML = `
                <img src="https://via.placeholder.com/200" alt="${song.title}">
                <h3>${song.title}</h3>
                <p>${song.artist} • ${song.duration}</p>
            `;
            songsGrid.appendChild(songElement);
        });
    }

    // Function to display artists
    function displayArtists(term) {
        const artistsGrid = document.querySelector('.artists-grid');
        artistsGrid.innerHTML = '';

        // Simulated artist data
        const artists = [
            { name: 'Artist 1', followers: '1.2M' },
            { name: 'Artist 2', followers: '850K' },
            { name: 'Artist 3', followers: '2.1M' }
        ];

        artists.forEach(artist => {
            const artistElement = document.createElement('div');
            artistElement.className = 'artist-item';
            artistElement.innerHTML = `
                <img src="https://via.placeholder.com/150" alt="${artist.name}">
                <h3>${artist.name}</h3>
                <p>${artist.followers} followers</p>
            `;
            artistsGrid.appendChild(artistElement);
        });
    }

    // Function to display albums
    function displayAlbums(term) {
        const albumsGrid = document.querySelector('.albums-grid');
        albumsGrid.innerHTML = '';

        // Simulated album data
        const albums = [
            { title: 'Album 1', artist: 'Artist 1', year: '2024' },
            { title: 'Album 2', artist: 'Artist 2', year: '2023' },
            { title: 'Album 3', artist: 'Artist 3', year: '2024' }
        ];

        albums.forEach(album => {
            const albumElement = document.createElement('div');
            albumElement.className = 'album-item';
            albumElement.innerHTML = `
                <img src="https://via.placeholder.com/200" alt="${album.title}">
                <div class="info">
                    <h3>${album.title}</h3>
                    <p>${album.artist} • ${album.year}</p>
                </div>
            `;
            albumsGrid.appendChild(albumElement);
        });
    }

    // Function to display playlists
    function displayPlaylists(term) {
        const playlistsGrid = document.querySelector('.playlists-grid');
        playlistsGrid.innerHTML = '';

        // Simulated playlist data
        const playlists = [
            { title: 'Playlist 1', creator: 'User 1', songs: '24 songs' },
            { title: 'Playlist 2', creator: 'User 2', songs: '18 songs' },
            { title: 'Playlist 3', creator: 'User 3', songs: '32 songs' }
        ];

        playlists.forEach(playlist => {
            const playlistElement = document.createElement('div');
            playlistElement.className = 'playlist-item';
            playlistElement.innerHTML = `
                <img src="https://via.placeholder.com/200" alt="${playlist.title}">
                <h3>${playlist.title}</h3>
                <p>By ${playlist.creator} • ${playlist.songs}</p>
            `;
            playlistsGrid.appendChild(playlistElement);
        });
    }

    // Player controls
    const playPauseBtn = document.querySelector('.play-pause');
    const progressBar = document.querySelector('.progress');
    const progressFilled = document.querySelector('.progress-filled');
    const volumeBar = document.querySelector('.volume-bar');
    const volumeFilled = document.querySelector('.volume-filled');

    let isPlaying = false;

    playPauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playPauseBtn.innerHTML = `<i class="fas fa-${isPlaying ? 'pause' : 'play'}"></i>`;
    });

    // Progress bar interaction
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;
        progressFilled.style.width = `${percentage * 100}%`;
    });

    // Volume bar interaction
    volumeBar.addEventListener('click', (e) => {
        const rect = volumeBar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;
        volumeFilled.style.width = `${percentage * 100}%`;
    });
}); 