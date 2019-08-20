require("@babel/register")({
    presets: [["@babel/preset-env", {
        "useBuiltIns": "usage",
        corejs: 3,
    }]]
});

// 서버 파일이 server.js가 아니라면 해당 파일의 이름을 적여야 한다.
module.exports = require('./server.js')
