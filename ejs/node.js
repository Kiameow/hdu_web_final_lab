// renderTemplate.js
const ejs = require('ejs');
const fs = require('fs');

// 读取 JSON 文件
const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// 读取 EJS 模板文件
const template = fs.readFileSync('template.ejs', 'utf8');

// 渲染模板
const renderedHtml = ejs.render(template, jsonData);

// 输出渲染结果
console.log(renderedHtml);
