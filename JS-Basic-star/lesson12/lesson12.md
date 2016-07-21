**回顾：**

   - 1.`String`

   - 2.`Math`  `Math.random()`

**新知识：**

- 1.`Date` 日期类

- 2.`Array`

- 3.`Regex`

    - a.`[]`一个字符的范围
    - b.有顺序要求的
    - c.`\w==[a-zA-Z0-9_]`  `\d==[0-9]`
    - d.{count}设置匹配数量比如`\w{5}`
    - e.//的正则表达式匹配局部，`/^$/`的正则表达式是匹配全部
    - f.`()`的作用就是为了分组匹配

**作业：**

- 日历
- 数组实现21点游戏
- 正则表达式验证

  - 给字符串原型添加功能isMobile
  - 给字符串原型添加功能isNumber
  - 给字符串原型添加功能isCardId
  - 给字符串原型添加功能is...

---

- 简单的封装对象

```javascript
String.prototype.isEmail = function(){

  email = this;
  if (email.indexOf("@")!=-1&&email.indexOf(".")!=-1)
  {
    if(email.indexOf("@")<email.lastIndexOf("@")){
      alert("邮箱不合法");
    }else{
      alert("邮箱合法");
    }
  }

}
var email = "jingguanliuye@gmail.com";
email.isEmail();
```

