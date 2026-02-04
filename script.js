function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const msg = document.getElementById('msg');
    msg.innerText = "Interaction JS réussie ! Le thème a été modifié.";
    msg.classList.add('show');
}