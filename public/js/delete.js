/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
$(function () {
  $('.delete').click(function () {
    var _this = this;

    $wal.fire({
      title: 'Czy na pewno chcesz usunąć ten rekord?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Tak',
      cancelButtonText: 'Nie'
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          method: "DELETE",
          url: deleteURL + $(_this).data("id")
        }).done(function (data) {
          window.location.reload();
        }).fail(function (data) {
          console.log(data.responseJSON.status);
          console.log(data.responseJSON.message);
          $wal.fire('Oops...', data.responseJSON.message, data.responseJSON.status);
        });
      }
    });
  });
});
/******/ })()
;