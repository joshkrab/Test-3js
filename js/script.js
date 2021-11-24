$.getJSON("./table.json", function (json) {
   console.log(json);
   data = json;
   // ------
   console.log(typeof data);
   console.log(data);

   var table = '<table border="2">';
   var tableHeaders =
      "<tr><th>company</th><th>contract</th><th>country</th></tr>";
   table += tableHeaders;

   // forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
   data.forEach((element) => {
      var row =
         "<tr><td>" +
         element["company"] +
         "</td><td> " +
         element["contact"] +
         "</td><td>" +
         element["country"] +
         "</td></tr>";
      table += row;
   });
   table += "</table>";

   $("div.context").html(table);

   // ------
});
