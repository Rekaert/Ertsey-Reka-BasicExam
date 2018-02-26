function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = JSON.parse(xhttp.responseText);
    console.log(userDatas);
    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */

    var char = userData[2].data;
    console.log(char);
    generatePortraits(char, portraits);

}


// Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
getData('/json/characters.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */




// Legenerálom a karaktereket tartalmazó tömb elemeinek portraits tulajdonságát név szerint rendezve


function generatePortraits(data, portraits) {

    var tr = document.createElement('tr');
    var sortChar = data.name.short();

    data.forEach(function (element) {
        var th = document.createElement('th');
        th.textContent = data.name;
        if (sortTh.includes(element)) {
            th.addEventListener('click', function () {
                setSorting(data, element);
            });
        }
        tr.appendChild(th);
    });
    return tr;
}
}