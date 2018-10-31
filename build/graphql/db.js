"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggestions = exports.getMovie = exports.getMovies = undefined;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var BASE_URL = "https://yts.am/api/v2/";
var LIST_MOVIES_URL = BASE_URL + "list_movies.json";
var MOVIE_DETAILS_URL = BASE_URL + "movie_details.json";
var MOVIE_SUGGESTIONS_URL = BASE_URL + "movie_suggestions.json";

var getMovies = exports.getMovies = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(limit, rating) {
    var _ref2, movies;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _axios2.default)(LIST_MOVIES_URL, {
              params: {
                limit: limit,
                minimum_rating: rating
              }
            });

          case 2:
            _ref2 = _context.sent;
            movies = _ref2.data.data.movies;
            return _context.abrupt("return", movies);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getMovies(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getMovie = exports.getMovie = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var _ref4, movie;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _axios2.default)(MOVIE_DETAILS_URL, {
              params: {
                movie_id: id
              }
            });

          case 2:
            _ref4 = _context2.sent;
            movie = _ref4.data.data.movie;
            return _context2.abrupt("return", movie);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getMovie(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var getSuggestions = exports.getSuggestions = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
    var _ref6, movies;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _axios2.default)(MOVIE_SUGGESTIONS_URL, {
              params: {
                movie_id: id
              }
            });

          case 2:
            _ref6 = _context3.sent;
            movies = _ref6.data.data.movies;
            return _context3.abrupt("return", movies);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getSuggestions(_x4) {
    return _ref5.apply(this, arguments);
  };
}();