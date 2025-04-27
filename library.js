document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const filterButtons = document.querySelectorAll('.filter-btn');
    const librarySections = document.querySelectorAll('.library-section');
    const playlistsGrid = document.querySelector('.playlists-grid');
    const artistsGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Show/hide sections based on filter
            const filter = button.dataset.filter;
            librarySections.forEach(section => {
                if (filter === 'all' || section.dataset.type === filter) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });

    // Load library content
    function loadLibraryContent() {
        // Simulated data - replace with actual API calls
        const playlists = [
            {
                id: 1,
                name: 'My Playlist 1',
                description: 'A collection of my favorite songs',
                image: 'https://via.placeholder.com/200'
            },
            {
                id: 2,
                name: 'Workout Mix',
                description: 'High energy tracks for workouts',
                image: 'https://via.placeholder.com/200'
            }
        ];

        const artists = [
            {
                id: 1,
                name: 'Artist 1',
                followers: '1.2M followers',
                image: 'https://via.placeholder.com/150'
            },
            {
                id: 2,
                name: 'Artist 2',
                followers: '850K followers',
                image: 'https://via.placeholder.com/150'
            }
        ];

        const albums = [
            {
                id: 1,
                name: 'Album 1',
                artist: 'Artist 1',
                image: 'https://via.placeholder.com/200'
            },
            {
                id: 2,
                name: 'Album 2',
                artist: 'Artist 2',
                image: 'https://via.placeholder.com/200'
            }
        ];

        // Display playlists
        playlistsGrid.innerHTML = playlists.map(playlist => `
            <div class="playlist-item" data-id="${playlist.id}">
                <img src="${playlist.image}" alt="${playlist.name}">
                <h3>${playlist.name}</h3>
                <p>${playlist.description}</p>
            </div>
        `).join('');

        // Display artists
        artistsGrid.innerHTML = artists.map(artist => `
            <div class="artist-item" data-id="${artist.id}">
                <img src="${artist.image}" alt="${artist.name}">
                <h3>${artist.name}</h3>
                <p>${artist.followers}</p>
            </div>
        `).join('');

        // Display albums
        albumsGrid.innerHTML = albums.map(album => `
            <div class="album-item" data-id="${album.id}">
                <img src="${album.image}" alt="${album.name}">
                <div class="info">
                    <h3>${album.name}</h3>
                    <p>${album.artist}</p>
                </div>
            </div>
        `).join('');

        // Add click handlers for items
        document.querySelectorAll('.playlist-item, .artist-item, .album-item').forEach(item => {
            item.addEventListener('click', () => {
                const type = item.classList.contains('playlist-item') ? 'playlist' :
                            item.classList.contains('artist-item') ? 'artist' : 'album';
                const id = item.dataset.id;
                // Navigate to the respective detail page
                window.location.href = `${type}.html?id=${id}`;
            });
        });
    }

    // Initialize library content
    loadLibraryContent();
}); 