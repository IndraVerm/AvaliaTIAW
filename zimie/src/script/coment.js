let avaliando = [];

const addComent = (ev) => {
    ev.preventDefault();
    let Coment = {
        id: Date.now(),
        content: document.getElementById('conteudo').value,
    }

    avaliando.push(Coment);

    buildTable(avaliando)

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].id}</td>
							<td>${data[i].content}</td>
					  </tr>`
			table.innerHTML += row

		}
	}

    //saving to localStorage
    localStorage.setItem('RatingsList', JSON.stringify(avaliando));

    var jsonData = JSON.stringify(avaliando, '\t', 1);

    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    download(jsonData, 'RatingsList.json', 'text/plain');
}

window.localStorage.setItem("RatingsList", JSON.stringify(avaliando));

let RatingsList = window.localStorage.getItem("RatingsList");
console.log(JSON.parse(RatingsList));

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-avaliar').addEventListener('click', addComent);
});