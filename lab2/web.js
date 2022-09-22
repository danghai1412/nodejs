var http = require("http");
http
.createServer((req, res) => {
    //thiết lập kiểu trả về của response: html
    res.setHeader("Content-Type", "Text/html")
    res.write("<h1 style = 'color: red;'> Cloud computing </h1>");
    res.write("<h2 style = 'font-style: italic;'> Fall 2022 </h2>");
    res.write("<h3 style = 'text-decoration: underline;'> University of Greenwich (Vietnam) </h3>");
    res.write("<img src='https://startupvn.net/wp-content/uploads/2022/03/hinh-anh-nha-dep1.jpg'>")
    res.end();
})
 .listen(80, () => {
    console.log("http://localhost");
 });
 //80: là cổng http mặc định => khi chạy chỉ cần gõ localhost