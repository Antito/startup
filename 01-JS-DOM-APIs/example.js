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

function repositories(e) {
    e.preventDefault();
    let parameter = document.getElementById('text').value;
    fetch('https://api.github.com/search/repositories?q='+parameter)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var repositories = document.getElementById("repositories");
        repositories.innerHTML="";
        var list = data.items;
        for(var i = 0; i < list.length;i++){

            repositories.innerHTML += "<li>"+list[i].name+"</li>";
        }
    })
    .catch(function(err){
        console.error(err);
       
    });


}
