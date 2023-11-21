const urls = {
    google: 'https://www.google.es/',
    duckduckgo: 'https://www.duckduckgo.com/',
    bing: 'https://www.bing.com/',
    ecosia: 'https://www.ecosia.com/',
    wolframalpha: 'https://www.wolframalpha.com/',
}
let list = document.getElementsByTagName('li');
Array.from(list)
     .forEach(li => {
        li.innerHTML = `<a href="${urls[li.textContent.toLowerCase()]}">${li.textContent}</a>`;
});