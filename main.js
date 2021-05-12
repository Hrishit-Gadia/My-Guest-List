var GuestList = [];
console.log(GuestList);

function UpdateList() {
    GuestList.push(document.getElementById("NameInput").value);
    GuestList.sort();
    document.getElementById("List").innerHTML = GuestList;
}

function SearchList() {
    var Searched = document.getElementById("SearchInput").value
    var Found = 0;
    for (p = 0; p < GuestList.length; p++) {
        if (Searched == GuestList[p]) {
            Found = Found + 1;
        }
    }
    document.getElementById("SearchedOutput").innerHTML = "Name Was Found " + Found + " Time/s";
}