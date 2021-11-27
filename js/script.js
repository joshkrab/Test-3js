$.getJSON("./table.json", function (json) {
   console.log(json);
   data = json;

   console.log(typeof data);
   console.log(data);

   // var table = '<table border="2">';
   var table = '<table border="1">';
   var tableHeaders =
      "<tr><th id='companyHeader'>company</th><th id='contractHeader'>contract</th><th id='countryHeader'>country</th></tr>";
   table += tableHeaders;
   table += "<tbody id='tableData'>";
   // forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
   data.forEach((element) => {
      var row =
         "<tr id='arrayRow'><td id='column1'>" +
         element["company"] +
         "</td><td id='column2'> " +
         element["contact"] +
         "</td><td id='column3'>" +
         element["country"] +
         "</td></tr>";

      table += row;
   });

   table += "</tbody>";
   table += "</table>";

   // Меняем див на тейбл - строка, которую нужно вставить в элемент
   $("div.context").html(table);

   // Ссылка (возвращает) на элемент по id
   var companyHeader = document.getElementById("companyHeader");
   // Создаем инпут
   var companyInput = document.createElement("input");

   var contractHeader = document.getElementById("contractHeader");
   var contractInput = document.createElement("input");

   var countryHeader = document.getElementById("countryHeader");
   var countryInput = document.createElement("input");

   // Добавляем элементу id со значением:
   companyInput.id = "companyInput";
   // Метод appendChild позволяет вставить в конец какого-либо другой элемент:
   // Добавляем инпуты к хедерам:
   companyHeader.appendChild(companyInput);

   contractInput.id = "contractInput";
   contractHeader.appendChild(contractInput);

   countryInput.id = "countryInput";
   countryHeader.appendChild(countryInput);

   // То, что ввел пользователь
   // function getCompanyInputData() {
   //    return "a";
   // }
   // companyInputData = getCompanyInputData();

   // Достали все элементы таблицы
   var tableData = document
      .getElementById("tableData")
      .getElementsByTagName("tr");

   console.log(tableData);

   // ---------------------------------------------------------
   // Пробую применить мануал:

   // Берем наш инпут по id:
   let input1 = document.getElementById("companyInput");

   // На инпут1 вешаем слушатель на нажатие клавиши и запускаем функцию:
   input1.addEventListener("keyup", function () {
      // Создаем две переменные, ... к нижнему регистру
      let filter1 = input1.value.toLowerCase(),
         // Элементы, которые будем фильтровать: искать по элементу filter-list и все li
         filterElements1 = document.querySelectorAll("#arrayRow #column1");

      // Проход по элементам, с помощью цикла forEach(по каждому)
      filterElements1.forEach((item) => {
         // Для каждого элемента вызываем ф-цию, котора будет проверять:
         // Если в данном item - filter > -1
         // С помощью метода indexOf проверяем - есть ли в этой строке данные, которые в filter
         // -1 тк первая буква с индексом 0, чтобы работало когда ничего не введено

         if (item.innerHTML.toLowerCase().indexOf(filter1) > -1) {
            // присваеваем стиль: по умолчанию пустой, если больше -1
            item.parentNode.style.display = "";
         } else {
            // если у нас -1, то скрываем
            item.parentNode.style.display = "none";
         }
      });
   });

   // ------------------------------------------------------------------------
   // Берем наш инпут по id:
   let input2 = document.getElementById("contractInput");

   // На инпут1 вешаем слушатель на нажатие клавиши и запускаем функцию:
   input2.addEventListener("keyup", function () {
      // Создаем две переменные, ... к нижнему регистру
      let filter2 = input2.value.toLowerCase(),
         // Элементы, которые будем фильтровать: искать по элементу filter-list и все li
         filterElements2 = document.querySelectorAll("#arrayRow #column2");

      // Проход по элементам, с помощью цикла forEach(по каждому)
      filterElements2.forEach((item) => {
         // Для каждого элемента вызываем ф-цию, котора будет проверять:
         // Если в данном item - filter > -1
         // С помощью метода indexOf проверяем - есть ли в этой строке данные, которые в filter
         // -1 тк первая буква с индексом 0, чтобы работало когда ничего не введено
         if (item.innerHTML.toLowerCase().indexOf(filter2) > -1) {
            // присваеваем стиль: по умолчанию пустой, если больше -1
            item.parentNode.style.display = "";
         } else {
            // если у нас -1, то скрываем
            item.parentNode.style.display = "none";
         }
      });
   });

   // ------------------------------------------------------------------------
   // Берем наш инпут по id:
   let input3 = document.getElementById("countryInput");

   // На инпут1 вешаем слушатель на нажатие клавиши и запускаем функцию:
   input3.addEventListener("keyup", function () {
      // Создаем две переменные, ... к нижнему регистру
      let filter3 = input3.value.toLowerCase(),
         // Элементы, которые будем фильтровать: искать по элементу filter-list и все li
         filterElements3 = document.querySelectorAll("#arrayRow #column3");

      // Проход по элементам, с помощью цикла forEach(по каждому)
      filterElements3.forEach((item) => {
         // Для каждого элемента вызываем ф-цию, котора будет проверять:
         // Если в данном item - filter > -1
         // С помощью метода indexOf проверяем - есть ли в этой строке данные, которые в filter
         // -1 тк первая буква с индексом 0, чтобы работало когда ничего не введено
         if (item.innerHTML.toLowerCase().indexOf(filter3) > -1) {
            // присваеваем стиль: по умолчанию пустой, если больше -1
            item.parentNode.style.display = "";
         } else {
            // если у нас -1, то скрываем
            item.parentNode.style.display = "none";
         }
      });
   });
});

// -----------------------------------------------------------------------------------------------------------------

// Функция - общий модуль фильтра
let filter = function () {
   // Берем наш инпут по классу:
   let input = document.getElementById("filter-input");

   // На инпут вешаем слушатель на нажатие клавиши и запускаем функцию:
   input.addEventListener("keyup", function () {
      // Создаем две переменные, ... к нижнему регистру
      let filter = input.value.toLowerCase(),
         // Элементы, которые будем фильтровать: искать по элементу filter-list и все li
         filterElements = document.querySelectorAll("#filter-list li");

      // Проход по элементам, с помощью цикла forEach(по каждому)
      filterElements.forEach((item) => {
         // Для каждого элемента вызываем ф-цию, котора будет проверять:
         // Если в данном item - filter > -1
         // С помощью метода indexOf проверяем - есть ли в этой строке данные, которые в filter
         // -1 тк первая буква с индексом 0, чтобы работало когда ничего не введено
         if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
            // присваеваем стиль: по умолчанию пустой, если больше -1
            item.style.display = "";
         } else {
            // если у нас -1, то скрываем
            item.style.display = "none";
         }
      });
   });
};

// вызов функции:
filter();

// var newItem = document.createElement("h1");
// newItem.appendChild(document.createTextNode("Hello"));
// var mainDiv = document.getElementById("main");
// mainDiv.appendChild(newItem);
