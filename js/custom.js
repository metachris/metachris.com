document.addEventListener('DOMContentLoaded', function () {
    // Add anchor links to all headings
    var headers = document.querySelectorAll('article h1[id], article h2[id], article h3[id], article h4[id], article h5[id]')
    headers.forEach((element) => {
        element.insertAdjacentHTML('beforeend', `<a href="#${element.id}" class="hanchor" ariaLabel="Anchor">#</a>` )
    })
 });
