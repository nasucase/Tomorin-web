const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
    let target = event.target.closest('[id]');
    
    switch (target.id) {
        case 'no-button':
            document.querySelector('.centered-box').style.backgroundColor = "black";             
            break;
        case 'yes-button':
            window.location.href = './pages/main.html';
            break;
    }
});

