import { _decorator, Component, Node, EditBox, director, Animation } from "cc";
const { ccclass, property } = _decorator;

interface AccountInfo {
  username: string;
  password: string;
  balance: number; // Thêm trường balance
}

@ccclass("GameCenter")
export class GameCenter extends Component {
  @property(Node)
  private loginTable: Node = null;

  @property(Node)
  private resTable: Node = null;

  @property(EditBox)
  private boxNameRes: EditBox = null;

  @property(EditBox)
  private boxNameLogin: EditBox = null;

  @property(EditBox)
  private boxPassLogin: EditBox = null;

  @property(EditBox)
  private boxPassRes: EditBox = null;

  @property(EditBox)
  private boxRePassRes: EditBox = null;

  @property(Node)
  private WaringLogin: Node;

  @property(Node)
  private WaringLoginRes: Node;

  @property(Node)
  private LoadingNode: Node;

  private registeredAccounts: AccountInfo[] = [];

  protected start(): void {
    // Kiểm tra xem có thông tin tài khoản đã lưu trong Local Storage không
    const storedAccounts = localStorage.getItem("registeredAccounts");
    if (storedAccounts) {
      this.registeredAccounts = JSON.parse(storedAccounts);
    }
  }

  private saveAccountsToLocalStorage() {
    // Lưu thông tin tài khoản vào Local Storage
    localStorage.setItem(
      "registeredAccounts",
      JSON.stringify(this.registeredAccounts)
    );
  }

  private offLoginTable() {
    this.loginTable.active = false;
  }

  private onLoginTable() {
    this.loginTable.active = true;
    this.loginTable.getComponent(Animation).play("TableLogin");
  }

  private offResTable() {
    this.resTable.active = false;
  }

  private onResTable() {
    this.resTable.active = true;
    this.resTable.getComponent(Animation).play("ResTbOn");
  }

  private register() {
    const username = this.boxNameRes.string;
    const password = this.boxPassRes.string;
    const confirmPassword = this.boxRePassRes.string;

    if (password !== confirmPassword) {
      console.log("Mật khẩu xác nhận không khớp!");
      return;
    }

    // Kiểm tra xem tên người dùng đã tồn tại trong mảng chưa
    const existingAccount = this.registeredAccounts.find(
      (account) => account.username === username
    );
    if (existingAccount) {
      this.WaringLoginRes.active = true;
      setTimeout(() => {
        this.WaringLoginRes.active = false;
      }, 1000);
      return;
    }

    // Thêm thông tin tài khoản mới vào mảng
    const newAccount: AccountInfo = { username, password, balance: 50000 };
    this.registeredAccounts.push(newAccount);

    // Lưu thông tin vào Local Storage
    this.LoadingNode.active = true;
    this.saveAccountsToLocalStorage();
    const name = newAccount.username;
    window["loggedInUsername"] = name;
    director.loadScene("Game");
    console.log("Đăng ký thành công!");
  }

  private login() {
    const username = this.boxNameLogin.string;
    const password = this.boxPassLogin.string;

    // Kiểm tra xem tên người dùng và mật khẩu có khớp với bất kỳ tài khoản nào trong mảng không
    const account = this.registeredAccounts.find(
      (acc) => acc.username === username && acc.password === password
    );
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
}
