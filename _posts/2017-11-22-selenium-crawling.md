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



