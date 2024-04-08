System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var conversions = {};
        module.exports = conversions;

        function sign(x) {
          return x < 0 ? -1 : 1;
        }

        function evenRound(x) {
          // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
          if (x % 1 === 0.5 && (x & 1) === 0) {
            // [even number].5; round down (i.e. floor)
            return Math.floor(x);
          } else {
            return Math.round(x);
          }
        }

        function createNumberConversion(bitLength, typeOpts) {
          if (!typeOpts.unsigned) {
            --bitLength;
          }

          var lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
          var upperBound = Math.pow(2, bitLength) - 1;
          var moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
          var moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);
          return function (V, opts) {
            if (!opts) opts = {};
            var x = +V;

            if (opts.enforceRange) {
              if (!Number.isFinite(x)) {
                throw new TypeError("Argument is not a finite number");
              }

              x = sign(x) * Math.floor(Math.abs(x));

              if (x < lowerBound || x > upperBound) {
                throw new TypeError("Argument is not in byte range");
              }

              return x;
            }

            if (!isNaN(x) && opts.clamp) {
              x = evenRound(x);
              if (x < lowerBound) x = lowerBound;
              if (x > upperBound) x = upperBound;
              return x;
            }

            if (!Number.isFinite(x) || x === 0) {
              return 0;
            }

            x = sign(x) * Math.floor(Math.abs(x));
            x = x % moduloVal;

            if (!typeOpts.unsigned && x >= moduloBound) {
              return x - moduloVal;
            } else if (typeOpts.unsigned) {
              if (x < 0) {
                x += moduloVal;
              } else if (x === -0) {
                // don't return negative zero
                return 0;
              }
            }

            return x;
          };
        }

        conversions["void"] = function () {
          return undefined;
        };

        conversions["boolean"] = function (val) {
          return !!val;
        };

        conversions["byte"] = createNumberConversion(8, {
          unsigned: false
        });
        conversions["octet"] = createNumberConversion(8, {
          unsigned: true
        });
        conversions["short"] = createNumberConversion(16, {
          unsigned: false
        });
        conversions["unsigned short"] = createNumberConversion(16, {
          unsigned: true
        });
        conversions["long"] = createNumberConversion(32, {
          unsigned: false
        });
        conversions["unsigned long"] = createNumberConversion(32, {
          unsigned: true
        });
        conversions["long long"] = createNumberConversion(32, {
          unsigned: false,
          moduloBitLength: 64
        });
        conversions["unsigned long long"] = createNumberConversion(32, {
          unsigned: true,
          moduloBitLength: 64
        });

        conversions["double"] = function (V) {
          var x = +V;

          if (!Number.isFinite(x)) {
            throw new TypeError("Argument is not a finite floating-point value");
          }

          return x;
        };

        conversions["unrestricted double"] = function (V) {
          var x = +V;

          if (isNaN(x)) {
            throw new TypeError("Argument is NaN");
          }

          return x;
        }; // not quite valid, but good enough for JS


        conversions["float"] = conversions["double"];
        conversions["unrestricted float"] = conversions["unrestricted double"];

        conversions["DOMString"] = function (V, opts) {
          if (!opts) opts = {};

          if (opts.treatNullAsEmptyString && V === null) {
            return "";
          }

          return String(V);
        };

        conversions["ByteString"] = function (V, opts) {
          var x = String(V);
          var c = undefined;

          for (var i = 0; (c = x.codePointAt(i)) !== undefined; ++i) {
            if (c > 255) {
              throw new TypeError("Argument is not a valid bytestring");
            }
          }

          return x;
        };

        conversions["USVString"] = function (V) {
          var S = String(V);
          var n = S.length;
          var U = [];

          for (var i = 0; i < n; ++i) {
            var c = S.charCodeAt(i);

            if (c < 0xD800 || c > 0xDFFF) {
              U.push(String.fromCodePoint(c));
            } else if (0xDC00 <= c && c <= 0xDFFF) {
              U.push(String.fromCodePoint(0xFFFD));
            } else {
              if (i === n - 1) {
                U.push(String.fromCodePoint(0xFFFD));
              } else {
                var d = S.charCodeAt(i + 1);

                if (0xDC00 <= d && d <= 0xDFFF) {
                  var a = c & 0x3FF;
                  var b = d & 0x3FF;
                  U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
                  ++i;
                } else {
                  U.push(String.fromCodePoint(0xFFFD));
                }
              }
            }
          }

          return U.join('');
        };

        conversions["Date"] = function (V, opts) {
          if (!(V instanceof Date)) {
            throw new TypeError("Argument is not a Date object");
          }

          if (isNaN(V)) {
            return undefined;
          }

          return V;
        };

        conversions["RegExp"] = function (V, opts) {
          if (!(V instanceof RegExp)) {
            V = new RegExp(V);
          }

          return V;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=0b303e49f44f31b5e08fcdff071182250f87566d.js.map