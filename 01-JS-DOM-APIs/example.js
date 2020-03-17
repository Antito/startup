let hiddenSection = document.getElementById("hidden");
window.onload = () => hiddenSection.style.opacity =1;

function alertMessage() {
    alert("Se ha llamado al boton");
}

function clickbutton() {
    findRandomJoke();
}

document.getElementById('boton').onclick = clickbutton; 
    

function findRandomJoke() {
    fetch('http://api.icndb.com/jokes/random')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        hidden.innerHTML = json.value.joke;
    })
    .catch(function(err) {
        console.error(err);
        hiddenSection.style.background = 'red';
    });
}

function repositories(e) {
    e.preventDefault();
    let parameter = document.getElementById('text').value;
    fetch('https://api.github.com/search/repositories?q='+parameter)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var repositories = document.getElementById("repositories");
        repositories.innerHTML="";
        var list = data.items;
        for(var i = 0; i < list.length;i++){

            repositories.innerHTML += "<li>"+list[i].name+"</li>";
        }
    })
    .catch(function(err) {
        console.error(err);
       
    });

}

var product = [
    {
      name: "Oil",
      price: "$100"
    },
    {
      name: "Sugar",
      price: "$70"
    },
    {
      name: "Tea",
      price: "$50"
    },
    {
      name: "Rice",
      price: "$75"
    },
    {
      name: "Flour",
      price: "$60"
    },
    {
      name: "Beer",
      price: "$150"
    }
  ]
  
  function createTable(product) {

    let table = document.createElement("table");
   
    table.setAttribute("class", "generatedTable");
  
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.appendChild(document.createTextNode('Name')); 
    tr.appendChild(th);
    var th = document.createElement("th");
    th.appendChild(document.createTextNode('Price'));
    tr.appendChild(th);
    table.appendChild(tr);
  
    for (let i = 0; i < product.length; i++) {
      let tr = document.createElement('tr');
      let tdName = document.createElement('td');
      let tdPrice = document.createElement('td');
      tdName.appendChild(document.createTextNode(product[i].name));
      tdPrice.appendChild(document.createTextNode(product[i].price));
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      table.appendChild(tr);
    }
  
    document.getElementById("table").appendChild(table);
  }