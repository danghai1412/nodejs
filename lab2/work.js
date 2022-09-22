const http = require("http")
// fs: file system => module để truy cập và thay đổi file
const fs = require("fs");
const port = 1234
const web = http.createServer((req, res) =>{
    // check đường dẫn url hiện tại
    if(req.url === "/"){
    fs.readFile("html/greenwich.html", (err, data) =>{
        //Th1: nếu đọc file bị lỗi (sai tên , đã bị xoá,....) => show ra lỗi
        if(err){
            console.log("Read file error"  + err);
        }else{
            res.end(data)
        }
    });
    }else if(req.url === "/cloud"){
        fs.readFile("html/cloud.html", (err, data) => {
        if(err){
            console.log("Read file error"  + err);
        }else{
            res.end(data)
        }
    });
    }else if(req.url === "/vietnam"){
        fs.readFile("html/vietnam.html", (err, data) => {
        if(err){
            console.log("Read file error"  + err);
        }else{
            res.end(data)
        }
    });
}else{
    fs.readFile("html/notfound.html", (err, data) => {
        res.write(data);
        res.end
});
}
});
web.listen(port, () =>{
    console.log("sever is running at http://localhost:"+port);
});
