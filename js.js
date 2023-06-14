document.querySelector('#submit').addEventListener('click', () => {
    let inputValue = document.querySelector('#value--background').value;
    let background = document.querySelector('#sectionBack');
    background.style.backgroundColor = inputValue
})