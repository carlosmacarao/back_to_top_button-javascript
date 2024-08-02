
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {

    let mybutton = document.getElementById("back-to-top");

    // Se o usuário rolar mais de 20px para baixo da parte superior do documento, mostre o botão
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Rola o documento para cima quando o usuario clicar no botão
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
