let changes = document.getElementById("bodyd");
let colors = ["cyan", "blue", "yellow", "green", "purple"];
index = [0]
changes.style.backgroundColor=colors[index]

function next() {
    if (index==colors.length-1) {
        index = 0
    } else {
        index ++
    }
    changes.style.backgroundColor=colors[index]
}

function prev() {
    if (index==0) {
        index = colors.length -1
    } else {
        index --
    }
    changes.style.backgroundColor=colors[index] 
}