// Desktop
document.getElementById("dark").addEventListener("change", () => {
    var r = document.querySelector(':root');
    r.style.setProperty('--mainColor', 'black');
    r.style.setProperty('--textColor', 'white');
    r.style.setProperty('--searchInput', '#222222');
})

document.getElementById("white").addEventListener("change", () => {
    var r = document.querySelector(':root');
    r.style.setProperty('--mainColor', 'white');
    r.style.setProperty('--textColor', 'black');
    r.style.setProperty('--searchInput', '#ebe8e8');
})

document.getElementById("color").addEventListener("change", () => {
    var r = document.querySelector(':root');
    r.style.setProperty('--mainColor', '#5c5c5c');
    r.style.setProperty("--textColor", 'white');
    r.style.setProperty('--searchInput', '#c5c390');
})

// Phone

document.getElementById("darkPhone").addEventListener("change", () => {
    var r = document.querySelector(':root');
    r.style.setProperty('--mainColor', 'black');
    r.style.setProperty('--textColor', 'white');
})

document.getElementById("whitePhone").addEventListener("change", () => {
    var r = document.querySelector(':root');
    r.style.setProperty('--mainColor', 'white');
    r.style.setProperty('--textColor', 'black');
})

document.getElementById("colorPhone").addEventListener("change", () => {
    var r = document.querySelector(':root');
    r.style.setProperty('--mainColor', '#5c5c5c');
    r.style.setProperty("--textColor", 'white');
})