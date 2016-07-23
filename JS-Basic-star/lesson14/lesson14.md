**回顾：**

- 1.Regex

       - a.`[]`一个字符的范围
       - b.有顺序要求的
       - c.`\w==[a-zA-Z0-9_]`  `\d==[0-9]`
       - d.`{count}`设置匹配数量比如`\w{5}`，`{c1,c2}`
       - e.`//`的正则表达式匹配局部，`/^$/`的正则表达式是匹配全部
       - f.`()`的作用就是为了分组匹配
       - g.+代表的是`1-N`个，`*`代表的是`0-N`个
       - h.?代表该字符要不没有要不就有一个
       - i.`.`代表的是任意字符
        -j.`\`转义符

---

**新知识：**

- 1.BOM 浏览器对象模型

       - a.`screen` 指的不是浏览器的宽度，指的是整个电脑屏幕的分辨率
            可以拿到屏幕可用分辨率

       - b.`navigator`
            可以通过`userAgent`判断当前浏览器信息

       - c.`location`

           - `URL`：统一资源定位符 `Union Resource Location`

           - 可以通过`href`属性重定向（改变）页面的URL，进行页面跳转

       - d.`history`
            go方法能够让我们进行历史回退或者前进

       - e.`frames`
            获得当前窗体的子页面（`iframe`）

       - f.`document`
            `DOM`模型的核心对象

- 2.`DOM` 文档对象模型

       - **`document`**

         + **功能**
            + `getElementById`   `$('#aaa')`
            + `getElementByTagName`  `$('div')`
            + `getElementsByClass`  `$('.aaa')`

       - **`document` `object`**

         - **属性：**

            + `className`，`style`
            + `id`
            + `name`,`value`(表单元素)
            + `href`,`src`...(对应的元素)
            + `innerHTML`
            + `children`
            + `parentNode`

         + **功能方法：**

            + `setAttribute/getAttribute`
            + `appendChild`
