# fontkanwarter

##Installation

After pulling from the live repo run the following command

```
npm install
```

If you get the error "-bash: grunt: command not found" please run the commands below

```
npm install grunt --save-dev
```


If you still get the error "warning: fontforge not found" please run the following commands

```
brew install ttfautohint fontforge --with-python
npm install grunt-webfont --save-dev
```



###  Examples

To generate fonts for O2 please run the following command

```
grunt webfont:O2
```

To generate fonts for z-apps please run the following command

```
grunt webfont:zapps
```

To generate fonts for z-merchant please run the following command

```
grunt webfont:zmerchant
```

To generate fonts for z-web please run the following command

```
grunt webfont:zweb
```



