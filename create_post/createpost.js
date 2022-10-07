import '../auth/user.js';
import { createPost, uploadImage } from '../fetch-utils.js';

const postForm = document.getElementById('make-post');
const imageInput = document.getElementById('image-input');
const preview = document.getElementById('preview');
const errorDisplay = document.getElementById('error-display');


let error = null;

imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
    } else {
        preview.src = '../assets/placeholder.jpg';
    }
});

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(postForm);

    const imageFile = formData.get('image');
    const randomFolder = Math.floor(Date.now() * Math.random());
    const imagePath = `bulletin/${randomFolder}/${imageFile.name}`;
    const url = await uploadImage('bucket1', imagePath, imageFile);

    const post = {
        category: formData.get('category'),
        title: formData.get('title'),
        description: formData.get('description'),
        contact: formData.get('contact'),
        image_url: url,
    };

    const response = await createPost(post);
    error = response.error;

    if (error) {
        displayError();
    } else {
        location.assign('../');
    }
});

function displayError() {
    errorDisplay.textContent = error.message;
}