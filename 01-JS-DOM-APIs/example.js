let section = document.getElementById("hidden");
window.onload = () => section.style.opacity =1;

function callbutton()
{
    alert("Se ha llamado al boton");
}

function clickbutton() {
        fetchDatos();
}

document.getElementById('boton').onclick = clickbutton; 
    

function fetchDatos()
{
    fetch('http://api.icndb.com/jokes/random')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        hidden.innerHTML = json.value.joke;
    })
    .catch(function(err){
        console.error(err);
        section.style.background = 'red';
    });
}