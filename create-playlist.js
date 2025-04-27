document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const createPlaylistForm = document.getElementById('createPlaylistForm');
    const coverPreview = document.getElementById('coverPreview');
    const coverInput = document.getElementById('coverInput');
    const coverOverlay = document.querySelector('.cover-overlay');
    const createBtn = document.querySelector('.create-btn');
    const cancelBtn = document.querySelector('.cancel-btn');

    // Handle cover image selection
    coverPreview.addEventListener('click', () => {
        coverInput.click();
    });

    coverInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                coverPreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle form submission
    createPlaylistForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form values
        const playlistName = document.getElementById('playlistName').value;
        const playlistDescription = document.getElementById('playlistDescription').value;
        const privacy = document.querySelector('input[name="privacy"]:checked').value;
        const coverImage = coverInput.files[0];

        // Show loading state
        createBtn.classList.add('loading');

        try {
            // Create FormData object
            const formData = new FormData();
            formData.append('name', playlistName);
            formData.append('description', playlistDescription);
            formData.append('privacy', privacy);
            if (coverImage) {
                formData.append('cover', coverImage);
            }

            // Simulate API call (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            alert('Playlist created successfully!');

            // Redirect to library page
            window.location.href = 'library.html';
        } catch (error) {
            // Show error message
            alert('Error creating playlist. Please try again.');
        } finally {
            // Remove loading state
            createBtn.classList.remove('loading');
        }
    });

    // Handle cancel button click
    cancelBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
            window.location.href = 'library.html';
        }
    });

    // Add hover effect for cover overlay
    coverPreview.addEventListener('mouseenter', () => {
        coverOverlay.style.opacity = '1';
    });

    coverPreview.addEventListener('mouseleave', () => {
        coverOverlay.style.opacity = '0';
    });
}); 