// 1. Khai báo module http để chạy web server
const http = require("http");
// var http = require("http");

// 2. Khai báo host name (opptional)
const host = "localhost";

// 3. Khai báo server port
const port = 4000
// Note: có thể chọn cổng bất kì

// 4. Tạo web server
const web = http.createServer((req, res) => {
res.end("This is a tutorial about NodeJs");
});

// 5. chạy server trên post (listen port)
web.listen(port, () => {
    //console.log("Server is listen port" +port);
    //console.log("Server is running at address: http://"+ host + ":" + port);
    console.log("http://localhost:" + port);
});