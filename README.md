
<h1 align="center">InstaLog - Instabug FrontEnd Internship Challenge</h1>


<div align="center">
 <img src="./src/assets/imgs/instabug-logo.svg" alt="Instabug-Logo" width="240">
</div>

## Table of Contents

- [About the Project](#about)
  - [Build with](#build-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running](#running)
- [File Structure](#file-structure)
- [Screenshots](#getting-started)
    - [Login Page Overview](#screenshots)
    - [Responsive Test [MultiScreen test]](#responsive-multi)
    - [Responsive Test [Zoom test]](#responsive-zoom)
    - [e2e Testing](#e2e)
    - [Light House Performance Audit](#performance)
- [License](#license)


## About
> InstaLog is a fully responsive Login Page using VueJS


<div id="build-with">

## What I Care about while Implementing the App ?

<h3>One simple rule: "Design and code with performance in mind"</h3>

> - Full Responsive (Zoom up to 500% or Different screens)
> - typed In Typescript
> - High Performance 
>> - 1- Lazy Loading for vue router 
>> - 2- Lossy Images and SVGs images 
>> - 3- Dynamic Imports
>> - 4- Debouncing for inputchange to get more performance
> - pixel perfect as Desgin sent
> - iTcss structure and BEM methodology
> - Composition API
> - Modular
> - Readable vaiables
> - Reusable Components
> - Navigation Guards for vue router
> - Conventional Commits


### Technologies and tools App build with
- [Vue JS](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [VueRouter](https://router.vuejs.org/)
- [TypeScript with ES6](https://www.typescriptlang.org/)
- [BEM Methodology](http://getbem.com/)
- [itCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [Cypress](https://www.cypress.io/)
</div>

<div id"getting-started">

## Getting Started
> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructuins.

</div>


<div id"installation">

### Installation

1. **_Clone the repository_**

```sh
$ git clone 
```

2. **_Install dependencies_**

```sh
$ npm install
```
</div>

<div id="running">


### Running

1. **_Compiles and hot-reloads for development_**
```sh
$ npm run serve
```

2. **_Compiles and minifies for production_**
```sh
$ npm run build
```

3. **_Run Cypress tests_**
```sh
npm run test:e2e
```

</div>


<div align="left">
  

## File Structure

```md                                   
InstaLog
├── LICENSE
├── package-lock.json
├── package.json
├── src
│   ├── assets
|   |   ├── fonts
|   |   └── imgs
│   ├── components
|   |   ├── Global
|   |   |   └── FormTextField
|   |   ├── LoginComponents
|   |   |   ├── LoginHeader
|   |   |   ├── LoginBody
|   |   |   ├── LoginFooter
|   |   |   ├── LoginForm
|   |   |   └── LoginSection
|   |   └── SliderComponents
|   |   |   ├── SlideItem
|   |   |   └── SliderSection
│   ├── router
|   |   └── index.ts
│   ├── scss
|   |   └── iTCSS Structure
│   ├── store
|   |   ├── UserAuth Module
|   |   ├── index.ts
|   |   └── state.ts
│   ├── views
|   |   ├── LoginView
|   |   ├── NotFoundView
|   |   └── WelcomeView
│   ├── main.ts
│   ├── shims-vue.d.ts
│   └── App.vue
├── tests
│   ├── unit
│   └── e2e
├── public
│   ├── favicon.ico	
│   └── index.html	
└── README.md
``` 

</div>

### Screenshots

<div align="center">

<h3 align="center">OverView With User Experience</h3>

![image](https://raw.githubusercontent.com/GeekAbdou/InstaLog/main/Docs/userExperiance.gif?token=GHSAT0AAAAAABTWBUMOVUPXWBCXMM3DCXC6YUXQEPA)

<hr />

<h3 align="center">Responsive Test [MultiScreen test]</h3>

![image](https://raw.githubusercontent.com/GeekAbdou/InstaLog/main/Docs/multiScreen.gif?token=GHSAT0AAAAAABTWBUMPHP4B4JDP37IK66B4YUXQFMQ)

<hr />

<h3 align="center">Responsive Test [Zoom test]</h3>

![image](https://raw.githubusercontent.com/GeekAbdou/InstaLog/main/Docs/ZoomTest.gif?token=GHSAT0AAAAAABTWBUMPGFOKHVVZZP3ZYT3UYUXQFTQ)

<hr />

<h3 align="center">e2e Testing</h3>

![image](https://raw.githubusercontent.com/GeekAbdou/InstaLog/main/Docs/e2eTesting.gif?token=GHSAT0AAAAAABTWBUMPX5VHYB3VQW634VC6YUXQF3Q)

<hr />

<h3 align="center">Light House Performance Audit (After implementation on Real Server)</h3>

![image](https://raw.githubusercontent.com/GeekAbdou/InstaLog/main/Docs/Performance.png?token=GHSAT0AAAAAABTWBUMPAJDJS2EB7NBQKYQ6YUXQGNQ)

<hr />


<hr />


<div align="left">

## License

> This software is licensed under MIT License, See [License](https://github.com/GeekAbdou) for more information ©Abdelrahman Elsayed.
