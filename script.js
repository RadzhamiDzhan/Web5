// Робота з масивами
let length = parseInt(prompt("Введіть кількість елементів масиву:"));
if(length <= 0){
    alert("Ви ввели некоректне число.");
}

let array = [];
for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * 100); 
    array.push(randomNumber);
}

let outputDiv = document.getElementById("output");
let arrayContent =  array.join(", ");
outputDiv.textContent = "Масив: "+ arrayContent;

function sumOfEvenElements(array) {
    let sum = 0;
    let evenElementsArray = [];
    let evenElementsDiv = document.getElementById("evenElementsDiv");
    let sumDiv = document.getElementById("sumDiv");
    for (let i = 0; i < array.length; i += 2) {
        sum += array[i];
        evenElementsArray.push(array[i]);
    }
    let evenElementsContent =  evenElementsArray.join(", ");
    evenElementsDiv.textContent = "Елементи масиву з парними індексами: " + evenElementsContent;
    sumDiv.textContent = "Сума елементів масиву з парними індексами: " + sum;
}

function findMaxElementAndIndex(array) {
    let maxElement = array[0];
    let maxIndex = 0;
    let maxElementDiv = document.getElementById("maxDiv");
    let maxIndexDiv = document.getElementById("maxIndexDiv");
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxElement) {
            maxElement = array[i];
            maxIndex = i;
        }
    }
    maxElementDiv.textContent = "Максимальний елемент серед парних елементів: " + maxElement;
    maxIndexDiv.textContent = "Індекс маскимального елементу: " + maxIndex;
}

function findMinElementAndIndex(array) {
    let minElement = array[1]; 
    let minIndex = 1;
    let oddElementsArray = [];
    let oddElementsDiv = document.getElementById("oddElementsDiv");
    let minElementDiv = document.getElementById("minDiv");
    let minIndexDiv = document.getElementById("minIndexDiv");
    for (let i = 1; i < array.length; i += 2) {
        oddElementsArray.push(array[i]);
        if (array[i] < minElement) {
            minElement = array[i];
            minIndex = i;
        }
    }
    let oddElementsContent =  oddElementsArray.join(", ");
    oddElementsDiv.textContent = "Елементи масиву з непарними індексами: " + oddElementsContent;
    minElementDiv.textContent = "Мінімальний елемент серед непарних елементів:" + minElement;
    minIndexDiv.textContent = "Індекс мінімального елементу: " + minIndex;
}

function sortArray(array) {
    sortArrDiv = document.getElementById("sortArr");
    let sortArr = array.slice().sort((a, b) => a - b);
    let sortArrContent =  sortArr.join(", ");
    sortArrDiv.textContent = "Відсортований в порядку зростання масив: " + sortArrContent;
}

sumOfEvenElements(array);
findMaxElementAndIndex(array);
findMinElementAndIndex(array);
sortArray(array);

// Динамічне меню __________________________________
document.addEventListener("DOMContentLoaded", (event)=> {
    let menuItems = [
        { name: "Головна", url: "index.html" },
        { name: "Про нас", url: "aboutUs.html", subMenu: [
            { name: "Історія", url: "history.html" },
            { name: "Команда", url: "team.html" }
        ] },
        { name: "Послуги", url: "services.html" },
        { name: "Контакти", url: "contacts.html" }
    ];

    function createMenu(menuItems, parent) {
        let ul = document.createElement("ul");
        for (let i = 0; i < menuItems.length; i++) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.textContent = menuItems[i].name;
            a.href = menuItems[i].url;
            li.appendChild(a);
            if (menuItems[i].subMenu) {
                li.classList.add("has-submenu");
                let subMenu = createMenu(menuItems[i].subMenu, li);
                li.appendChild(subMenu);
            }
            ul.appendChild(li);
        }
        parent.appendChild(ul);
        return ul;
    }

    let mainMenu = document.getElementById("main-menu");
    createMenu(menuItems, mainMenu);

    document.addEventListener('click', function(event) {
        var clickedElement = event.target;
        if (!clickedElement.closest('.has-submenu')) {
            var submenus = document.querySelectorAll('.has-submenu ul');
            submenus.forEach(function(submenu) {
                submenu.classList.remove('active');
            });
        }
    });
});

