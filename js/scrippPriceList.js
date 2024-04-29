// Создаем объект XMLHttpRequest для работы с XML
var xhttp = new XMLHttpRequest();

// Открываем XML файл
xhttp.open("GET", "PriceList.xml", true);

// Указываем, что делать при загрузке файла
xhttp.onreadystatechange = function() {
  // Проверяем, что запрос успешно завершен и статус ответа равен 200 (OK)
  if (this.readyState == 4 && this.status == 200) {
    // Получаем XML документ
    var xmlDoc = this.responseXML;
    
    // Получаем все элементы <item> из XML
    var items = xmlDoc.getElementsByTagName("item");
    
    // Создаем HTML строку для таблицы
    var tableHtml = "<table><tr><th>ID</th><th>Name</th><th>Group of ragrances</th><th>Top notes</th><th>Middle notes</th><th>Base notes</th></tr>";
    
    // Проходимся по каждому элементу <item> и добавляем его данные в таблицу
    for (var i = 0; i < items.length; i++) {
      tableHtml += "<tr>";
      tableHtml += "<td>" + items[i].getElementsByTagName("id")[0].childNodes[0].nodeValue + "</td>";
      tableHtml += "<td>" + items[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td>";
      tableHtml += "<td>" + items[i].getElementsByTagName("groupOfRagrances")[0].childNodes[0].nodeValue + "</td>";
      tableHtml += "<td>" + items[i].getElementsByTagName("topNotes")[0].childNodes[0].nodeValue + "</td>";
      tableHtml += "<td>" + items[i].getElementsByTagName("middleNotes")[0].childNodes[0].nodeValue + "</td>";
      tableHtml += "<td>" + items[i].getElementsByTagName("baseNotes")[0].childNodes[0].nodeValue + "</td>";
      tableHtml += "</tr>";
    }
    
    // Закрываем таблицу
    tableHtml += "</table>";
    
    // Вставляем таблицу в элемент с id="content"
    document.getElementById("content").innerHTML = tableHtml;
  }
};

// Отправляем запрос на загрузку XML файла
xhttp.send();