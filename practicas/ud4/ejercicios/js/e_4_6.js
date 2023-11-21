document.getElementById('btn')
        .addEventListener('click', () => {
            let color = `rgb(${ Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            document.body.style.backgroundColor = color;
        })