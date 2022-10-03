import '../auth/user.js';
import { createPost } from '../fetch-utils.js';

const postForm = document.getElementById('make-post');

let error = null;

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(postForm);

    const post = {
        category: formData.get('category_name'),
        title: formData.get('title'),
        description: formData.get('description'),
        contact: formData.get('contact'),
    };

    const response = await createPost(post);
    error = response.error;

    if (error) {
        displayError();
    } else {
        location.assign('/');
    }
})