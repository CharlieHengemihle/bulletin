

export function renderPosts(post) {
        const li = document.createElement('li');
        li.classList.add('post-it');

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;

        const categoryEl = document.createElement('span');
        categoryEl.classList.add('category');
        categoryEl.textContent = post.category;

        const descriptionEl = document.createElement('p');
        descriptionEl.classList.add('description');
        descriptionEl.textContent = post.description;

        const imageEl = document.createElement('img');
        imageEl.src = post.image_url;

        const contactEl = document.createElement('p');
        contactEl.textContent = post.contact;

        li.append(titleEl, categoryEl, descriptionEl, imageEl, contactEl);

    return li;
}

