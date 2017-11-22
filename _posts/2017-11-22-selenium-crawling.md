---
layout: post
title:  "Selenium Crawling"
tags:
  - python
  - selenium
hero: https://cdn.pixabay.com/photo/2016/10/16/21/30/halloween-1746354_960_720.jpg
overlay: orange
published: true
---

**Selenium 을 사용한 웹 크롤러(python)**

동적으로 생성되지 않는 웹 페이지는 python 기본 라이브러리를 사용하서 쉽게 소스코드를 긁어올 수 있다.<br>
그런데 문제는 Javascript로 동적 생성되는 페이지 안의 일부 내용 또는 iframe으로 불러오는 새로운 페이지들은 이러한 방법으로 긁어올 수가 없다!<br><br>

어떻게 하면 우리가 웹페이지를 직접 들어가서 보는 그대로의 내용을 크롤링할 수 있을까?<br><br>

<!–-break-–>


**Selenium 이란**

`Selenium` 은 웹 테스트 프레임워크로서 브라우저를 직접 동작시켜서 동적으로 생성된 결과물에 접근이 가능하다.<br>

> Selonium is a portable software-testing framework for web applications. Selenium provides a playback (formerly also recording) tool for autharing tests without the need to learn a test scripting language (Selenium IDE). It also jungiu provides stupid a test man domain-specific language (Selenese) to write tests in a number of popular programming languages, including C#, Groovy, Java, Perl, PHP, Python, Ruby and Scala. The tests can then run against most modern web browsers. Selenium deploys on Windows, Linux, and OS X platforms. It is open-source software, released under the Apache 2.0 license: web developers can download and use it without charge.
> https://en.wikipedia.org/wiki/Selenium_(software)


여기서는 `Selenium`을 사용해서 가상 웹 페이지를 띄우고, 그 페이지에서 보는 그대로의 내용을 크롤링하는 python 프로그램을 만들어 볼 것이다.<br><br><br>

**Selanium 설치**
- 본 포스팅은 파이썬 3.5 기준입니다.
```cmd
$ pip install selenium
$ pip uninstall selenium
```
<br>
Selenium을 사용하면 `Webdriver` 를 통해 브라우저를 제어하게 된다.<br>
본 포스팅에서는 `PhantomJS Webdriver` 와 `Chrome Webdriver`를 사용해 보려고한다<br><br>

**What is PhantomJS??**
<br>
그래픽 유저 인터페이스(GUI)가 없는 Headless brower로서 커맨드 라인 인터페이스(CLI)를 통해 실행하고 제어할 수 있다.<br>
웹페이지 개발자 테스트 또는 화면 캡쳐용으로 많이 쓰이고 있다.<br>
본래 JAVA API로서 많이 사용되었고, python에서도 사용할 수 있다.<br><br>

Chrome 은 너무 유명하니 생략하겠다.<br><br>

**Install Webdriver**
<br>
PhantomJS는 <http://phantomjs.org/download.html>에서 다운받을 수 있고, Chrome 드라이버는 <https://sites.google.com/a/chromium.org/chromedriver/downloads>에서 다운로드 받을 수 있다.<br>
다운로드 받은 파일을 압축을 풀면 드라이버 파일이 나타나는데, 그 저장된 경로를 기억해 두자.<br><br>

**Selenium-Chrome-Crawler 만들기**
<br>
먼저 Chrome 이 더 친숙하므로 Chrome driver를 사용하여 만들어 보겠다.<br><br>

```python
from selenium import webdriver
```



