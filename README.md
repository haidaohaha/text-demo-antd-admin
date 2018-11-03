
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

## 增加动画组件使用  
[Ant Motion](https://motion.ant.design/api/tween-one)  

## 性能 文件结构可视化，找出导致体积过大的原因  
    npm install --save-dev webpack-bundle-analyzer   

当时看到的时候，感觉很牛啊，这都能分析出来，看起很炫，可以看出文件的大小位置等信息。    

### 使用：  
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;  
    module.exports = {  
    plugins: [  
        new BundleAnalyzerPlugin()  
    ]  
    }...  

## 总结并实践一波 高阶组件的写法  
1、代理方式：  
2、继承方式：  









