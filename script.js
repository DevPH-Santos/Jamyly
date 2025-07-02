document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const surpresa = document.getElementById("surpresa");
    const mensagem = document.getElementById("mensagem");

    btn.addEventListener("click", () => {
        btn.classList.add("falling");
        setTimeout(() => {
            surpresa.classList.add("reveal");
            mensagem.classList.add("reveal");
        }, 400);
    });
});
