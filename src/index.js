import data from './data.js';

const dom = {
    input: document.getElementById('input')
}

const filterImage = (value) => {
    data.posters = [];
    data.images.forEach(movie => {
        if (movie.dataName.includes(value.toLowerCase())) {
            data.posters.push(movie);
        }
    })
    const removingEl = data.images.filter(element => !data.posters.includes(element));
    data.images.forEach(movie => {
        document.getElementById(movie.id).style.display = "block";
    });
    
    removingEl.forEach(removed => {
        const id = removed.id;  
        document.getElementById(id).style.display = "none";
    });
};

dom.input.addEventListener('keyup', () => {
    const value = dom.input.value;
    filterImage(value);
})
