
## 学习学习再学习  

## 增加自定义 eslint 配置  

比如：   
取消 恒等警告, 设置 eqeqeq；    
取消单双、引号限制，设置 semi（我目前的编辑安装插件，保存自动实现单引号）。  

```    
"eslintConfig": {
    "extends": "react-app",
    "rules": {
        "eqeqeq": [
            "off"
        ],
        "semi": [
            0
        ]
    }
},
```   

