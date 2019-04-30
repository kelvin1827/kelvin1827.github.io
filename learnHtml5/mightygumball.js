// A realtime mighty gumball sales monitoring web application.

window.onload = function() {
  setInterval(handleRefresh, 3000);
/*
  //var url = "http://127.0.0.1/klrepos/mightygumball//sales.json";
  //var url = "http://localhost/klrepos/mightygumball/sales.json";
  var url = "http://gumball.wickedlysmart.com/gumball/gumball.html";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function() {
    if (request.status == 200) {
      updateSales(request.responseText);
    }
  };
  request.send(null);
*/
}

function handleRefresh() {
  // do something here
  var url = "http://gumball.wickedlysmart.com/?callback=updateSales" + 
            "&lastreporttime=" + lastReportTime +
            "&random" + (new Date()).getTime();
            // random参数是为防止浏览器始终读取缓存内容而加入的欺骗元素，会被服务器自动忽略。
            // lastreporttime参数是为了防止获取重复数据
  // console.log(lastReportTime);
  var newScriptElement = document.createElement("script");
  newScriptElement.setAttribute("src", url);
  newScriptElement.setAttribute("id", "jsonp");

  var oldScriptElement = document.getElementById("jsonp");

  var head = document.getElementsByTagName("head")[0];
  if (oldScriptElement === null) {
    head.appendChild(newScriptElement);
  } else {
    head.replaceChild(newScriptElement, oldScriptElement);
  }
}

var lastReportTime = 0;
var totalSold = 0;
var saleCount = 0;

//function updateSales(responseText) {
function updateSales(sales) {
  var salesDiv = document.getElementById("sales");
  //salesDiv.innerHTML = responseText;
  //var sales = JSON.parse(responseText);
  for (var i = 0; i < sales.length; i++) {
    var sale = sales[i];
    var div = document.createElement('div');
    div.setAttribute("class", 'saleItem');
    var gmb = ''
    if (sale.sales > 1) {
      gmb = 'gumballs';
    } else {
      gmb = 'gumball';
    }
    //saleCount = saleCount + sales.length;
    totalSold = totalSold + sale.sales;
    div.innerHTML = '<code>' + sale.name + '</code> sold <code>' + sale.sales + '</code> ' + gmb + '.';
                    //+ 'Total Sold: ' + totalSold;
    salesDiv.appendChild(div);
    saleCount += 1;
  }
  if (sales.length > 0) {
    lastReportTime = sales[sales.length-1].time;
  }

  var tsdDiv = document.getElementById('totalSold');
  var salePerTime = Math.round(totalSold/saleCount, -1);
  tsdDiv.innerHTML = "Total gumball sold " + totalSold + " on " + saleCount + " reports,<br>" + "Average " + salePerTime + " per time.";
}