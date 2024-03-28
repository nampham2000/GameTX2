System.register(["cc", "appwrite"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Appwrite, _crd, client;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_appwrite) {
      Appwrite = _appwrite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3efdey09/lOSoQ0VrXtOPev", "GameCenter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      // const client = new Client();
      // client
      //   .setEndpoint("https://cloud.appwrite.io/v1")
      //   .setProject("65fa5ef5da9d85eabe8a");
      client = new Appwrite.Client();
      client.setEndpoint("https://cloud.appwrite.io/v1") // Thay YOUR_APPWRITE_ENDPOINT bằng endpoint của dự án Appwrite
      .setProject("65fa5ef5da9d85eabe8a"); // Thay YOUR_APPWRITE_PROJECT_ID bằng ID của dự án Appwrite
      // .setKey('YOUR_APPWRITE_API_KEY'); //
      // // export const account: Account = new Account(client);
      // // export const database: Databases = new Databases(client);
      // const { ccclass, property } = _decorator;
      // @ccclass("GameCenter")
      // export class GameCenter extends Component {
      //   //   async start() {
      //   //     const authUser: Models.Session = await account.createEmailSession(
      //   //       "phamnam15072000@gmail.com",
      //   //       "12345678"
      //   //     );
      //   //     console.log("aaaaa");
      // }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=048d100e02f4281532b962cd07a0dc2c2540e224.js.map