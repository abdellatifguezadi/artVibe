function toggleSection(buttonId, containerClass, work) {
    const btn = document.getElementById(buttonId);
    const containers = document.getElementsByClassName(containerClass);
    const allTagsLinks = document.getElementsByClassName('list_link');
    const allTagsDiv = document.getElementsByClassName('list_work');

    // Remove active class from all links
    for (let link of allTagsLinks) {
        link.classList.remove('active');
    }

    if (work) {

        for (let div of allTagsDiv) {
            div.style.display = 'none';
        }


        for (let container of containers) {
            container.style.display = 'block';
        }
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
}
