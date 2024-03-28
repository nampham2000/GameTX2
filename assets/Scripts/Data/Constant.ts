import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

export type DataUser = {
  username: string;
  password: string;
};

@ccclass("Constant")
export class Constant extends Component {
  public static dataUser: DataUser = {
    username: "",
    password: "",
  };
}
