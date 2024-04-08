System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, EditBox, director, Animation, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, GameCenter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      EditBox = _cc.EditBox;
      director = _cc.director;
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3efdey09/lOSoQ0VrXtOPev", "GameCenter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EditBox', 'director', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator); // Import type models for Appwrite
      // const client: Client = new Client();
      // console.log(client);
      // client
      //   .setEndpoint("https://cloud.appwrite.io/v1")
      //   .setProject("65fa5ef5da9d85eabe8a"); // Replace with your project ID
      // export const account: Account = new Account(client);
      // export const database: Databases = new Databases(client);

      _export("GameCenter", GameCenter = (_dec = ccclass("GameCenter"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(EditBox), _dec5 = property(EditBox), _dec6 = property(EditBox), _dec7 = property(EditBox), _dec8 = property(EditBox), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = class GameCenter extends Component {
        constructor(...args) {
          super(...args);

          // const: Client = new Client();
          _initializerDefineProperty(this, "loginTable", _descriptor, this);

          _initializerDefineProperty(this, "resTable", _descriptor2, this);

          _initializerDefineProperty(this, "boxNameRes", _descriptor3, this);

          _initializerDefineProperty(this, "boxNameLogin", _descriptor4, this);

          _initializerDefineProperty(this, "boxPassLogin", _descriptor5, this);

          _initializerDefineProperty(this, "boxPassRes", _descriptor6, this);

          _initializerDefineProperty(this, "boxRePassRes", _descriptor7, this);

          _initializerDefineProperty(this, "WaringLogin", _descriptor8, this);

          _initializerDefineProperty(this, "WaringLoginRes", _descriptor9, this);

          _initializerDefineProperty(this, "LoadingNode", _descriptor10, this);

          this.registeredAccounts = [];
        }

        start() {
          // const client: Client = new Client();
          // console.log("aaaa");
          // Kiểm tra xem có thông tin tài khoản đã lưu trong Local Storage không
          const storedAccounts = localStorage.getItem("registeredAccounts");

          if (storedAccounts) {
            this.registeredAccounts = JSON.parse(storedAccounts);
          }
        }

        saveAccountsToLocalStorage() {
          // Lưu thông tin tài khoản vào Local Storage
          localStorage.setItem("registeredAccounts", JSON.stringify(this.registeredAccounts));
        }

        offLoginTable() {
          this.loginTable.active = false;
        }

        onLoginTable() {
          this.loginTable.active = true;
          this.loginTable.getComponent(Animation).play("TableLogin");
        }

        offResTable() {
          this.resTable.active = false;
        }

        onResTable() {
          this.resTable.active = true;
          this.resTable.getComponent(Animation).play("ResTbOn");
        }

        register() {
          const username = this.boxNameRes.string;
          const password = this.boxPassRes.string;
          const confirmPassword = this.boxRePassRes.string;

          if (password !== confirmPassword) {
            console.log("Mật khẩu xác nhận không khớp!");
            return;
          } // Kiểm tra xem tên người dùng đã tồn tại trong mảng chưa


          const existingAccount = this.registeredAccounts.find(account => account.username === username);

          if (existingAccount) {
            this.WaringLoginRes.active = true;
            setTimeout(() => {
              this.WaringLoginRes.active = false;
            }, 1000);
            return;
          } // Thêm thông tin tài khoản mới vào mảng


          const newAccount = {
            username,
            password,
            balance: 50000
          };
          this.registeredAccounts.push(newAccount); // Lưu thông tin vào Local Storage

          this.LoadingNode.active = true;
          this.saveAccountsToLocalStorage();
          const name = newAccount.username;
          window["loggedInUsername"] = name;
          director.loadScene("Game");
          console.log("Đăng ký thành công!");
        }

        login() {
          const username = this.boxNameLogin.string;
          const password = this.boxPassLogin.string; // Kiểm tra xem tên người dùng và mật khẩu có khớp với bất kỳ tài khoản nào trong mảng không

          const account = this.registeredAccounts.find(acc => acc.username === username && acc.password === password);

          if (account) {
            this.LoadingNode.active = true;
            const username = account.username;
            window["loggedInUsername"] = username;
            director.loadScene("Game");
          } else {
            this.WaringLogin.active = true;
            setTimeout(() => {
              this.WaringLogin.active = false;
            }, 1000);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loginTable", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resTable", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "boxNameRes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "boxNameLogin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "boxPassLogin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "boxPassRes", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "boxRePassRes", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "WaringLogin", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "WaringLoginRes", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "LoadingNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89c69df6e3d5878ce863fe7f919d39a7eb3f1414.js.map