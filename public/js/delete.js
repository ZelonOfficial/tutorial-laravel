/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    $wal.fire({\n      title: 'Czy na pewno chcesz usunąć ten rekord?',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonColor: '#3085d6',\n      cancelButtonColor: '#d33',\n      confirmButtonText: 'Tak',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.value) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteURL + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          console.log(data.responseJSON.status);\n          console.log(data.responseJSON.message);\n          $wal.fire('Oops...', data.responseJSON.message, data.responseJSON.status);\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2xlcC8uL3Jlc291cmNlcy9qcy9kZWxldGUuanM/NmMxMSJdLCJuYW1lcyI6WyIkIiwiY2xpY2siLCIkd2FsIiwiZmlyZSIsInRpdGxlIiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkZWxldGVVUkwiLCJkYXRhIiwiZG9uZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZUpTT04iLCJzdGF0dXMiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDLFlBQVc7QUFDVEEsRUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxLQUFiLENBQW1CLFlBQVU7QUFBQTs7QUFFekJDLElBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05DLE1BQUFBLEtBQUssRUFBRSx3Q0FERDtBQUVOQyxNQUFBQSxJQUFJLEVBQUUsU0FGQTtBQUdOQyxNQUFBQSxnQkFBZ0IsRUFBRSxJQUhaO0FBSU5DLE1BQUFBLGtCQUFrQixFQUFFLFNBSmQ7QUFLTkMsTUFBQUEsaUJBQWlCLEVBQUUsTUFMYjtBQU1OQyxNQUFBQSxpQkFBaUIsRUFBRSxLQU5iO0FBT05DLE1BQUFBLGdCQUFnQixFQUFFO0FBUFosS0FBVixFQVFPQyxJQVJQLENBUVksVUFBQ0MsTUFBRCxFQUFZO0FBQ3BCLFVBQUlBLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQjtBQUNkYixRQUFBQSxDQUFDLENBQUNjLElBQUYsQ0FBTztBQUNIQyxVQUFBQSxNQUFNLEVBQUUsUUFETDtBQUVIQyxVQUFBQSxHQUFHLEVBQUVDLFNBQVMsR0FBR2pCLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUWtCLElBQVIsQ0FBYSxJQUFiO0FBRmQsU0FBUCxFQUtTQyxJQUxULENBS2MsVUFBU0QsSUFBVCxFQUFlO0FBQ3JCRSxVQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ1MsU0FQakIsRUFTU0MsSUFUVCxDQVNjLFVBQVNMLElBQVQsRUFBYztBQUNoQk0sVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlQLElBQUksQ0FBQ1EsWUFBTCxDQUFrQkMsTUFBOUI7QUFDQUgsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlQLElBQUksQ0FBQ1EsWUFBTCxDQUFrQkUsT0FBOUI7QUFDSjFCLFVBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVLFNBQVYsRUFBcUJlLElBQUksQ0FBQ1EsWUFBTCxDQUFrQkUsT0FBdkMsRUFBZ0RWLElBQUksQ0FBQ1EsWUFBTCxDQUFrQkMsTUFBbEU7QUFDYSxTQWJyQjtBQWNhO0FBQ0osS0F6QmpCO0FBMEJhLEdBNUJqQjtBQTZCUyxDQTlCWixDQUFEIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcbiAgICAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24oKXtcblxuICAgICAgICAkd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdDenkgbmEgcGV3bm8gY2hjZXN6IHVzdW7EhcSHIHRlbiByZWtvcmQ/JyxcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1RhaycsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTmllJyxcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkZWxldGVVUkwgKyAkKHRoaXMpLmRhdGEoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmFpbChmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3BvbnNlSlNPTi5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHdhbC5maXJlKCdPb3BzLi4uJywgZGF0YS5yZXNwb25zZUpTT04ubWVzc2FnZSwgZGF0YS5yZXNwb25zZUpTT04uc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuIl0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy9kZWxldGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;