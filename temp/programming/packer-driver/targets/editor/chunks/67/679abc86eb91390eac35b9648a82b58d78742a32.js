System.register(["__unresolved_0", "form-data"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [
      function (_unresolved_) {
        _cjsLoader = _unresolved_.default;
      },
      function (_formData) {
        _req = _formData.__cjsMetaURL;
      },
    ],
    execute: function () {
      _export("__cjsMetaURL", (__cjsMetaURL = _context.meta.url));

      _cjsLoader.define(
        __cjsMetaURL,
        function (exports, require, module, __filename, __dirname) {
          // #region ORIGINAL CODE
          global.FormData = module.exports = require("form-data"); // #endregion ORIGINAL CODE

          _export("default", (_cjsExports = module.exports));
        },
        () => ({
          "form-data": _req,
        })
      );
    },
  };
});
//# sourceMappingURL=679abc86eb91390eac35b9648a82b58d78742a32.js.map
