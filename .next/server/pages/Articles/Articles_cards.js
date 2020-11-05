module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("PhEv");


/***/ }),

/***/ "PhEv":
/***/ (function(module, exports) {

// import React, { useState, useEffect, Component } from "react";
// import Link from "next/link"
// import { useRouter } from "next/router";
// const getArticle = (url) => {
//   if(url === "images"){
//     return [null, null]
//   } else {
//     return fetch("/api/articles/"+url)
//     .then(res => {
//       return res.text()
//     })
//     .then(res => {
//       return [res, url]
//     })
//     .catch((err) => {
//       console.log(err);
//       return [null, null]
//     })
//   }
// }
// const articleCard = (articleText, activeTags, tagsState) => {
//   let flag = true;
//   const activeCategories = activeTags.filter(obj => obj.active)
//   if(activeCategories.length === 0){
//     return (
//       <div class="card">
//         <div class="card-body">
//           <h7 class="card-title">{articleText[1]}</h7>
//         </div>
//       </div>
//     );  
//   } else {
//     activeCategories.forEach(obj => {
//       if(!(tagsState[obj.name].indexOf(articleText[1]) > -1)){
//         flag = false
//       }
//     })
//     if(flag){
//       return (
//         <div class="card">
//           <div class="card-body">
//             <h7 class="card-title">{articleText[1]}</h7>
//           </div>
//         </div>
//       );
//     }
//   }  
// };
// const ArticlesCards = ({ articleURL, activeTags }) => {
//   const [articleState, updateArticleState] = useState(["articles loading..."]);
//   const [tagsState, updateTags] = useState([])
//   // Retrieves the list of items from the Express app
//   useEffect(() => {
//     Promise.all(articleURL.map(getArticle)).then((proRes) => {
//       updateArticleState(proRes);
//     }).then(() => {
//       fetch("tags.json")
//         .then((tags) => {
//           return tags.json()
//         })
//         .then((tags) => {
//           updateTags(tags);
//         });
//     })
//   }, [articleURL, activeTags]);
//   return (
//     <div class="row">
//       <div class="col-10 rounded">{articleState.map((article) => articleCard(article, activeTags, tagsState))}</div>
//     </div>
//   );
// };
// export default ArticlesCards;

/***/ })

/******/ });