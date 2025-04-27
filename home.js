document.addEventListener('DOMContentLoaded', () => {
    // Player Controls
    const playPauseBtn = document.querySelector('.play-pause');
    const progressBar = document.querySelector('.progress');
    const progressFilled = document.querySelector('.progress-filled');
    const currentTime = document.querySelector('.time.current');
    const totalTime = document.querySelector('.time.total');
    const volumeBar = document.querySelector('.volume-bar');
    const volumeFilled = document.querySelector('.volume-filled');
    const volumeBtn = document.querySelector('.volume-controls button');
    const likeBtn = document.querySelector('.like-btn');
    let isPlaying = false;
    let lastVolume = 0.7; // Store last volume level

    // Sample playlists data (replace with your actual data/API)
    const featuredPlaylists = [
        { id: 1, title: 'Liked Songs', image: 'https://via.placeholder.com/150', type: 'Playlist' },
        { id: 2, title: 'Recently Played', image: 'https://via.placeholder.com/150', type: 'Playlist' },
        { id: 3, title: 'Top Hits', image: 'https://via.placeholder.com/150', type: 'Playlist' },
        { id: 4, title: 'Discover Weekly', image: 'https://via.placeholder.com/150', type: 'Playlist' }
    ];

    const recentPlaylists = [
        { 
            id: 1, 
            title: 'Chill Mix', 
            description: 'Your daily mix of chill tracks',
            image: 'https://via.placeholder.com/200'
        },
        { 
            id: 2, 
            title: 'Energy Boost', 
            description: 'High-energy hits to keep you going',
            image: 'https://via.placeholder.com/200'
        },
        { 
            id: 3, 
            title: 'Mood Booster', 
            description: 'Feel-good music for your day',
            image: 'https://via.placeholder.com/200'
        },
        { 
            id: 4, 
            title: 'Throwback Hits', 
            description: 'Classic hits from the past',
            image: 'https://via.placeholder.com/200'
        }
    ];

    // Play/Pause button handler
    playPauseBtn.addEventListener('click', togglePlayPause);

    function togglePlayPause() {
        isPlaying = !isPlaying;
        const icon = playPauseBtn.querySelector('i');
        icon.classList.toggle('fa-play', !isPlaying);
        icon.classList.toggle('fa-pause', isPlaying);
        
        // Add animation class for button press effect
        playPauseBtn.classList.add('pressed');
        setTimeout(() => playPauseBtn.classList.remove('pressed'), 200);
    }

    // Progress bar handler
    progressBar.addEventListener('click', (e) => {
        const progressWidth = progressBar.offsetWidth;
        const clickPosition = e.offsetX;
        const percentageClicked = (clickPosition / progressWidth) * 100;
        progressFilled.style.width = `${percentageClicked}%`;
        
        // Update time display (mock implementation)
        const totalSeconds = 225; // 3:45 in seconds
        const currentSeconds = Math.floor((percentageClicked / 100) * totalSeconds);
        updateTimeDisplay(currentSeconds, totalSeconds);
    });

    // Volume control handlers
    volumeBar.addEventListener('click', (e) => {
        const volumeWidth = volumeBar.offsetWidth;
        const clickPosition = e.offsetX;
        const volumeLevel = clickPosition / volumeWidth;
        updateVolume(volumeLevel);
    });

    volumeBtn.addEventListener('click', toggleMute);

    function toggleMute() {
        const icon = volumeBtn.querySelector('i');
        if (volumeFilled.style.width !== '0%') {
            lastVolume = parseFloat(volumeFilled.style.width) / 100;
            updateVolume(0);
            icon.className = 'fas fa-volume-mute';
        } else {
            updateVolume(lastVolume);
            updateVolumeIcon(lastVolume);
        }
    }

    function updateVolume(level) {
        volumeFilled.style.width = `${level * 100}%`;
        updateVolumeIcon(level);
    }

    function updateVolumeIcon(level) {
        const icon = volumeBtn.querySelector('i');
        icon.className = 'fas ' + (
            level === 0 ? 'fa-volume-mute' :
            level < 0.3 ? 'fa-volume-off' :
            level < 0.7 ? 'fa-volume-down' :
            'fa-volume-up'
        );
    }

    // Time display updater
    function updateTimeDisplay(current, total) {
        currentTime.textContent = formatTime(current);
        totalTime.textContent = formatTime(total);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    // Like button handler
    likeBtn.addEventListener('click', () => {
        const icon = likeBtn.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        
        // Add animation class
        likeBtn.classList.add('liked');
        setTimeout(() => likeBtn.classList.remove('liked'), 200);
    });

    // Playlist hover effects
    const playlistCards = document.querySelectorAll('.playlist-card');
    playlistCards.forEach(card => {
        const playBtn = card.querySelector('.play-btn');
        
        card.addEventListener('mouseenter', () => {
            playBtn.style.opacity = '1';
            playBtn.style.transform = 'translateY(0)';
        });
        
        card.addEventListener('mouseleave', () => {
            playBtn.style.opacity = '0';
            playBtn.style.transform = 'translateY(8px)';
        });
    });

    // Add animation class to featured items on hover
    const featuredItems = document.querySelectorAll('.featured-item');
    featuredItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        });
        
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover');
        });
    });

    // Initialize volume display
    updateVolume(lastVolume);

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && e.target === document.body) {
            e.preventDefault(); // Prevent page scroll
            togglePlayPause();
        }
    });

    // User menu dropdown
    const userMenu = document.querySelector('.user-menu');
    userMenu.addEventListener('click', () => {
        // Add your user menu dropdown logic here
        console.log('User menu clicked');
    });

    // Upgrade button effect
    const upgradeBtn = document.querySelector('.upgrade-btn');
    upgradeBtn.addEventListener('mouseenter', () => {
        upgradeBtn.style.transform = 'scale(1.05)';
    });
    
    upgradeBtn.addEventListener('mouseleave', () => {
        upgradeBtn.style.transform = 'scale(1)';
    });

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        .pressed {
            transform: scale(0.95);
            transition: transform 0.1s;
        }

        .liked {
            transform: scale(1.2);
            color: #F806CC !important;
            transition: all 0.2s;
        }

        .featured-item.hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(248, 6, 204, 0.3);
        }

        .play-btn:hover {
            transform: scale(1.1) !important;
            background: #F806CC !important;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        .playing {
            animation: pulse 2s infinite;
        }
    `;
    document.head.appendChild(style);
}); 