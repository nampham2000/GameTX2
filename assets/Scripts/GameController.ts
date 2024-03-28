import {
  _decorator,
  Button,
  Component,
  Label,
  math,
  Node,
  tween,
  Vec3,
  Animation,
  SpriteFrame,
  Sprite,
  input,
  Input,
  macro,
  EditBox,
  NodeEventType,
  EventKeyboard,
  KeyCode,
  instantiate,
  Prefab,
  Graphics,
  Color,
  SystemEvent,
  Event,
  log,
  director,
} from "cc";
import { AudioController } from "./Audio/AudioController";

const { ccclass, property } = _decorator;

interface SceneParams {
  username: string;
}

interface AccountInfo {
  username: string;
  password: string;
  balance: number; // Thêm trường balance
}

@ccclass("GameC")
export class GameC extends Component {
  @property({
    type: Node,
  })
  private betOverNode: Node;
  @property({
    type: Node,
  })
  private betUnderNode: Node;
  @property({
    type: Node,
  })
  private betBarNode: Node;

  @property({
    type: Node,
  })
  private plate: Node;

  @property({
    type: Node,
  })
  private Effect: Node;

  @property({
    type: Node,
  })
  private EffectUnder: Node;

  @property({
    type: Node,
  })
  private Chat: Node;

  @property({
    type: Node,
  })
  private Table: Node;

  @property({
    type: Node,
  })
  private unchat: Node;

  @property({
    type: Node,
  })
  private introduceBoard: Node;

  @property({
    type: Node,
  })
  private HistoryNode: Node;

  @property({
    type: Prefab,
  })
  private black: Prefab;

  @property({
    type: Node,
  })
  private numberHis: Node;

  @property({
    type: Node,
  })
  private LineNode: Node;

  @property({
    type: Node,
  })
  private LineNodeDice1: Node;

  @property({
    type: Node,
  })
  private Winrate: Node;

  @property({
    type: Node,
  })
  private LineNodeDice2: Node;

  @property({
    type: Node,
  })
  private LineNodeDice3: Node;

  @property({
    type: Node,
  })
  private Dice1Hist: Node;

  @property({
    type: Node,
  })
  private Dice2Hist: Node;

  @property({
    type: Node,
  })
  private Dice3ist: Node;

  @property({
    type: Node,
  })
  private page1His: Node;

  @property({
    type: Node,
  })
  private page2His: Node;

  @property({
    type: Node,
  })
  private Dice1His: Node;

  @property({
    type: Node,
  })
  private Dice2His: Node;

  @property({
    type: Node,
  })
  private Dice3His: Node;

  @property({
    type: Node,
  })
  private HistoryUserBet: Node;

  @property({
    type: Node,
  })
  private HistoryUser: Node;

  @property({
    type: Node,
  })
  private logo1: Node;

  @property({
    type: Node,
  })
  private logo2: Node;

  @property({
    type: Node,
  })
  private buttonMusic: Node;

  //Lable
  @property({
    type: Label,
  })
  private UnderLableValueUser: Label;

  @property({
    type: Label,
  })
  private OverLableValueUser: Label;

  @property({
    type: Label,
  })
  private totalUnderText: Label;

  @property({
    type: Label,
  })
  private totalOverText: Label;
  @property({
    type: Label,
  })
  private countDown: Label;

  @property({
    type: Label,
  })
  private countDownResult: Label;

  @property({
    type: Label,
  })
  private countPlayerOverLb: Label;

  @property({
    type: Label,
  })
  private countPlayerUnderLb: Label;

  @property({
    type: Label,
  })
  private BalanceNumber: Label;

  @property({
    type: Label,
  })
  private ToatalDice: Label;

  @property({
    type: Label,
  })
  private username: Label;

  @property({
    type: Label,
  })
  private tkpOver: Label;

  @property({
    type: Label,
  })
  private tkpUnder: Label;

  @property({
    type: Label,
  })
  private tkpUserUnder: Label;

  @property({
    type: Label,
  })
  private tkpUserOver: Label;

  //BUTTON
  @property({
    type: Button,
  })
  value1k: Button;
  @property({
    type: Button,
  })
  value10k: Button;
  @property({
    type: Button,
  })
  value50k: Button;
  @property({
    type: Button,
  })
  value100k: Button;
  @property({
    type: Button,
  })
  value500k: Button;

  @property({
    type: Button,
  })
  value10M: Button;

  @property({
    type: Button,
  })
  private value50M: Button;

  @property({
    type: Button,
  })
  private unDice1His: Button;

  @property({
    type: Button,
  })
  private unDice2His: Button;

  @property({
    type: Button,
  })
  private unDice3His: Button;

  @property({
    type: Button,
  })
  private page2Button1: Button;

  @property({
    type: Button,
  })
  private page2Button2: Button;

  @property({
    type: SpriteFrame,
  })
  private dice1: SpriteFrame[] = [];

  @property({
    type: SpriteFrame,
  })
  private diceHis: SpriteFrame[] = [];

  @property({
    type: Label,
  })
  private tkpTime: Label[] = [];

  @property({ type: [Node] })
  imageNodes: Node[] = [];

  @property({ type: [Node] })
  imageNodesDiceRes: Node[] = [];

  @property({ type: [Node] })
  imageNodesResult: Node[] = [];

  @property({ type: [Node] })
  imageNodesResultHistory: Node[] = [];

  @property({ type: [Node] })
  NumberNodesResultHistory: Node[] = [];

  @property({ type: [Node] })
  ListDice1Node: Node[] = [];

  @property({ type: [Node] })
  ListDice2Node: Node[] = [];

  @property({ type: [Node] })
  ListDice3Node: Node[] = [];

  @property({ type: [Label] })
  LableChat: Label[] = [];

  @property({
    type: SpriteFrame,
  })
  private listSpriteResult: SpriteFrame[] = [];

  @property({
    type: SpriteFrame,
  })
  private listSpriteResultHistory: SpriteFrame[] = [];

  @property({
    type: SpriteFrame,
  })
  private listSpritetNumberHistory: SpriteFrame[] = [];

  @property({
    type: EditBox,
  })
  private editBoxChat: EditBox;

  @property({
    type: Node,
  })
  private Effect1: Node;

  @property({
    type: Node,
  })
  private Effect2: Node;

  @property({
    type: Node,
  })
  private Effect3: Node;

  @property({
    type: AudioController,
  })
  private AudioController: AudioController;

  private totalUserBetUnder: number = 0;
  private totalUserBetOver: number = 0;
  private totalBetOver: number = 0;
  private totalBetUnder: number = 0;
  private listScore: number[] = [
    1000, 10000, 50000, 100000, 500000, 10000000, 50000000,
  ];
  private listValueDice: number[] = [1, 2, 3, 4, 5, 6];

  private listSprite: SpriteFrame[] = [];
  private listButton: Button[] = [];
  private checkUnder: boolean = false;
  private checkOver: boolean = false;
  private gameEnd: boolean = true;
  private checkEditFocus: boolean = false;
  private shedu = null;
  private nextRoll: number = 500;
  private timeRate: number = 5000;
  private valueDice: number = 0;
  private balanceUser: number = 50000;
  private cloneBalanUser: number = 50000;
  private userValuebetUnder: number = 0;
  private cloneuserValuebetUnder: number = 0;
  private cloneuserValuebetOver: number = 0;
  private userValuebetOver: number = 0;
  private countdownTimerBet: number = 40;
  private countdownTimerResult: number = 15;

  // columnCount: number = 21;
  private columnWidth: number = 34.5;
  private sum: number = 0;
  private countPlayerOver: number = 0;
  private countPlayerUnder: number = 0;
  private clonetotalUserBetUnder: number = 0;
  private clonetotalUserBetOver: number = 0;
  private checkouChat: number = 0;

  private results: number[] = [];
  private columnValues: number[] = [];
  private resultsHistory: number[] = [];
  private ListDice1His: number[] = [];
  private ListDice2His: number[] = [];
  private ListDice3His: number[] = [];
  private ramdomDice: number[] = [];
  private loggedInUsername;
  private offMusic: boolean = true;

  private lineGraphicsArray: Graphics[] = [];
  start() {
    this.loggedInUsername = window["loggedInUsername"];
    const userInfo = this.getUsernameAndBalanceFromLocalStorage(
      this.loggedInUsername
    );
    if (userInfo) {
      this.username.string = userInfo.username;
      this.balanceUser = userInfo.balance;
    }
    this.AudioController.onAudio(2);
    this.listButton = [
      this.value1k,
      this.value10k,
      this.value50k,
      this.value100k,
      this.value500k,
      this.value10M,
      this.value50M,
    ];
    for (let i = 0; i < this.listButton.length; i++) {
      let button = this.listButton[i];
      button.node.on(Button.EventType.CLICK, () => {
        if (
          this.cloneBalanUser >= this.listScore[i] &&
          this.cloneBalanUser >
            this.totalUserBetOver + this.totalUserBetUnder &&
          this.balanceUser !== 0 &&
          this.gameEnd === false
        ) {
          this.addScore(this.listScore[i]);
        } else {
          console.log("khong du tien");
        }
      });
    }

    this.shedu = this.schedule(() => {
      this.totalOverText.string = this.formatNumberWithCommas(
        this.totalBetOver
      );
      this.countPlayerOverLb.string = this.countPlayerOver.toString();
      tween(this.totalOverText.node)
        .to(0.5, { scale: new Vec3(1.5, 1.5) })
        .call(() => {
          tween(this.totalOverText.node)
            .to(0.5, { scale: new Vec3(1, 1) })
            .start();
        })
        .start();
    }, 1);

    this.schedule(() => {
      // this.totalUnderText.string = this.totalBetUnder.toString();
      this.totalUnderText.string = this.formatNumberWithCommas(
        this.totalBetUnder
      );
      this.countPlayerUnderLb.string = this.countPlayerUnder.toString();
      tween(this.totalUnderText.node)
        .to(0.5, { scale: new Vec3(1.5, 1.5) })
        .call(() => {
          tween(this.totalUnderText.node)
            .to(0.5, { scale: new Vec3(1, 1) })
            .start();
        })
        .start();
    }, 1);

    setTimeout(() => {
      this.gameEnd = false;
      this.plate.getComponent(Animation).play("plateIn");
      this.AudioController.onAudio(3);
      this.Effect1.getComponent(Animation).play();
      this.countDown.node.active = true;
      this.Effect3.active = false;
      // this.Effect2.active = true;
      this.displayImagesResult();
      this.displayImagesResultHistory();
      this.startCountdown(this.countdownTimerBet, 40);
      this.scheduleRandomDice();
      this.createNodeHistory();
      this.createNodeDice1History();
      this.createNodeDice2History();
      this.createNodeDice3History();
    }, 3000);

    // this.handleEvent();
    // input.on(Input.EventType.KEY_DOWN,this.onKeyDown,this);
  }

  update(deltaTime: number) {
    this.BalanceNumber.string = this.balanceUser.toString();

    if (this.gameEnd === false) {
      this.totalBetOver = this.totalBetOver + math.randomRangeInt(1000, 10000);
      this.totalBetUnder =
        this.totalBetUnder + math.randomRangeInt(1000, 10000);
      this.countPlayerOver = this.countPlayerOver + math.randomRangeInt(1, 10);
      this.countPlayerUnder =
        this.countPlayerUnder + math.randomRangeInt(1, 10);
    }

    if (this.gameEnd === true) {
    }
    this.countDown.string = this.countdownTimerBet.toString();
    this.countDownResult.string = this.countdownTimerResult.toString();
  }

  private activeBetOverbtn() {
    this.checkOver = true;
    if (this.checkUnder === true) {
      this.checkUnder = false;
    }
    this.betOverNode.active = true;
    this.betBarNode.active = true;
    if (this.betUnderNode.active === true) {
      this.betUnderNode.active = false;
    }
  }

  private activeBetUnderbtn() {
    this.checkUnder = true;
    if (this.checkOver === true) {
      this.checkOver = false;
    }
    this.betUnderNode.active = true;
    this.betBarNode.active = true;
    if (this.betOverNode.active === true) {
      this.betOverNode.active = false;
    }
  }

  private addScore(Score: number) {
    if (this.checkUnder === true) {
      this.totalUserBetUnder = this.totalUserBetUnder + Score;
      this.cloneuserValuebetUnder = 0;
      this.clonetotalUserBetUnder = this.clonetotalUserBetUnder + Score;
      this.UnderLableValueUser.string = this.totalUserBetUnder.toString();
    }
    if (this.checkOver === true) {
      this.totalUserBetOver = this.totalUserBetOver + Score;
      this.cloneuserValuebetOver = 0;
      this.clonetotalUserBetOver = this.clonetotalUserBetOver + Score;
      this.OverLableValueUser.string = this.totalUserBetOver.toString();
    }
  }

  private bet() {
    if (
      this.checkOver === true &&
      this.cloneBalanUser >= this.totalUserBetOver &&
      this.balanceUser !== 0 &&
      this.gameEnd === false
    ) {
      this.balanceUser = this.balanceUser - this.clonetotalUserBetOver;

      const isUpdated = this.setUsernameAndBalanceToLocalStorage(
        this.loggedInUsername,
        this.balanceUser
      );
      if (isUpdated) {
        console.log("Cập nhật balance thành công!");
      } else {
        console.log("Cập nhật balance thất bại!");
      }

      this.userValuebetOver += this.clonetotalUserBetOver;
      this.clonetotalUserBetOver = 0;
      this.OverLableValueUser.string = this.totalUserBetOver.toString();
      this.AudioController.onAudio(0);
    } else if (
      this.checkUnder === true &&
      this.cloneBalanUser >= this.totalUserBetUnder &&
      this.balanceUser !== 0 &&
      this.gameEnd === false
    ) {
      this.balanceUser = this.balanceUser - this.clonetotalUserBetUnder;

      const isUpdated = this.setUsernameAndBalanceToLocalStorage(
        this.loggedInUsername,
        this.balanceUser
      );
      if (isUpdated) {
        console.log("Cập nhật balance thành công!");
      } else {
        console.log("Cập nhật balance thất bại!");
      }

      this.userValuebetUnder += this.clonetotalUserBetUnder;
      this.clonetotalUserBetUnder = 0;
      this.UnderLableValueUser.string = this.totalUserBetUnder.toString();
      this.AudioController.onAudio(0);
    } else {
      console.log("nghèo");
    }
  }

  private scheduleRandomDice() {
    const randomValues = this.getRandomValues();
    this.displayImages(randomValues);
    // this.displayImagesHisDice(randomValues);
    // this.sum = this.sumValues(randomValues);
    this.ToatalDice.string = this.sum.toString();
    let dickAnimationFinished = false;
    setTimeout(() => {
      this.gameEnd = true;
      this.displayImagesHisDice(randomValues);
      this.sum = this.sumValues(randomValues);
      this.plate.getComponent(Animation).play("Dick");
      this.AudioController.onAudio(4);
      this.Effect2.active = true;
      this.startCountdownResult(this.countdownTimerResult, 15);
      this.tkpOver.string = this.formatNumberWithCommas2(this.totalBetOver);
      this.tkpUserOver.string = this.countPlayerOver.toString();
      this.tkpUserUnder.string = this.countPlayerUnder.toString();
      for (let i = 0; i < this.tkpTime.length; i++) {
        this.tkpTime[i].string = this.currentTime();
      }
      this.countDown.node.active = false;
      this.countDownResult.node.active = true;

      this.plate
        .getComponent(Animation)
        .on(Animation.EventType.FINISHED, () => {
          dickAnimationFinished = true;
          this.plate.active = false;

          this.plate.getComponent(Animation).off(Animation.EventType.FINISHED);

          if (this.sum < 10) {
            this.updateResults(0);
            this.displayImagesResult();
            this.updateResultsHistory(0);
            this.displayImagesResultHistory();

            this.updateResultsHis(this.sum);
            this.createNodeHistory();

            this.updateResultsDice1History(this.ramdomDice[0]);
            this.createNodeDice1History();

            this.updateResultsDice2History(this.ramdomDice[1]);
            this.createNodeDice2History();

            this.updateResultsDice3History(this.ramdomDice[2]);
            this.createNodeDice3History();

            this.EffectUnder.active = true;
            this.balanceUser += this.userValuebetUnder * 2;

            const isUpdated = this.setUsernameAndBalanceToLocalStorage(
              this.loggedInUsername,
              this.balanceUser
            );
            if (isUpdated) {
              console.log("Cập nhật balance thành công!");
            } else {
              console.log("Cập nhật balance thất bại!");
            }
          } else {
            this.updateResults(1);
            this.displayImagesResult();
            this.updateResultsHistory(1);
            this.displayImagesResultHistory();

            this.updateResultsHis(this.sum);
            this.createNodeHistory();

            this.updateResultsDice1History(this.ramdomDice[0]);
            this.createNodeDice1History();

            this.updateResultsDice2History(this.ramdomDice[1]);
            this.createNodeDice2History();

            this.updateResultsDice3History(this.ramdomDice[2]);
            this.createNodeDice3History();

            this.Effect.active = true;
            this.balanceUser += this.userValuebetOver * 2;

            const isUpdated = this.setUsernameAndBalanceToLocalStorage(
              this.loggedInUsername,
              this.balanceUser
            );
            if (isUpdated) {
              console.log("Cập nhật balance thành công!");
            } else {
              console.log("Cập nhật balance thất bại!");
            }
          }
        });

      setTimeout(() => {
        this.countDownResult.node.active = false;
        if (dickAnimationFinished) {
          // this.plate.active = true;
          if (this.EffectUnder.active === true) {
            this.EffectUnder.active = false;
          }
          if (this.Effect.active === true) {
            this.Effect.active = false;
          }
          this.totalBetOver = 0;
          this.totalBetUnder = 0;
          this.countPlayerOver = 0;
          this.countPlayerUnder = 0;
          this.totalUserBetOver = 0;
          this.totalUserBetUnder = 0;
          this.userValuebetOver = 0;
          this.userValuebetUnder = 0;

          this.AudioController.onAudio(2);

          this.UnderLableValueUser.string = this.totalUserBetUnder.toString();
          this.OverLableValueUser.string = this.totalUserBetOver.toString();
          this.cloneBalanUser = this.balanceUser;
          this.Effect2.active = false;
          this.Effect3.active = true;
          setTimeout(() => {
            this.plate.active = true;
            this.plate.getComponent(Animation).play("plateIn");
            this.AudioController.onAudio(3);
            this.Effect1.getComponent(Animation).play();
            this.Effect3.active = false;
            this.countDown.node.active = true;
            this.gameEnd = false;
            this.startCountdown(this.countdownTimerBet, 40);
            this.scheduleRandomDice();
          }, 3000);
        } else {
          this.scheduleRandomDice();
        }
      }, 15000);
    }, 40000);
  }
  private getRandomValues() {
    const indices = [1, 2, 3, 4, 5, 6];
    this.ramdomDice = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * indices.length);
      this.ramdomDice.push(indices[randomIndex]);
    }
    return this.ramdomDice;
  }

  private sumValues(array) {
    return array.reduce((sum, currentValue) => sum + currentValue, 0);
  }

  private displayImages(randomValues) {
    randomValues.forEach((value, index) => {
      const spriteFrame = this.dice1[value - 1];
      const sprite = this.imageNodes[index].getComponent(Sprite);
      if (sprite && spriteFrame) {
        sprite.spriteFrame = spriteFrame;
      } else {
        console.error("Sprite or SpriteFrame is missing!");
      }
    });
  }

  private displayImagesHisDice(randomValues) {
    randomValues.forEach((value, index) => {
      const spriteFrame = this.diceHis[value - 1];
      const sprite = this.imageNodesDiceRes[index].getComponent(Sprite);
      if (sprite && spriteFrame) {
        sprite.spriteFrame = spriteFrame;
      } else {
        console.error("Sprite or SpriteFrame is missing!");
      }
    });
  }

  private displayImagesResult() {
    this.imageNodesResult.forEach((node, index) => {
      const value = this.results[index];
      if (value !== undefined) {
        // Kiểm tra xem giá trị có tồn tại hay không
        const sprite = node.getComponent(Sprite);
        if (sprite) {
          let spriteFrame;
          if (value === 0) {
            spriteFrame = this.listSpriteResult[0]; // Thay spriteFrameA bằng spriteFrame bạn muốn gán cho giá trị 0
          } else if (value === 1) {
            spriteFrame = this.listSpriteResult[1]; // Thay spriteFrameB bằng spriteFrame bạn muốn gán cho giá trị 1
          } else {
            console.error("Invalid result value:", value);
            node.active = false; // Ẩn node ảnh nếu giá trị không hợp lệ
            return;
          }
          sprite.spriteFrame = spriteFrame;
          node.active = true; // Kích hoạt node ảnh
        } else {
          console.error("Sprite is missing!");
        }
      } else {
        node.active = false; // Ẩn node ảnh nếu giá trị không tồn tại
      }
    });
  }

  private displayImagesResultHistory() {
    this.imageNodesResultHistory.forEach((node, index) => {
      const value = this.resultsHistory[index];
      if (value !== undefined) {
        // Kiểm tra xem giá trị có tồn tại hay không
        const sprite = node.getComponent(Sprite);
        if (sprite) {
          let spriteFrame;
          if (value === 0) {
            spriteFrame = this.listSpriteResultHistory[0]; // Thay spriteFrameA bằng spriteFrame bạn muốn gán cho giá trị 0
          } else if (value === 1) {
            spriteFrame = this.listSpriteResultHistory[1]; // Thay spriteFrameB bằng spriteFrame bạn muốn gán cho giá trị 1
          } else {
            console.error("Invalid result value:", value);
            node.active = false; // Ẩn node ảnh nếu giá trị không hợp lệ
            return;
          }
          sprite.spriteFrame = spriteFrame;
          node.active = true; // Kích hoạt node ảnh
        } else {
          console.error("Sprite is missing!");
        }
      } else {
        node.active = false; // Ẩn node ảnh nếu giá trị không tồn tại
      }
    });
  }

  private startCountdownResult(timeCountDown: number, timereset: number) {
    this.countdownTimerResult = 15;
    const countdownInterval = setInterval(() => {
      this.countdownTimerResult--;
      if (this.countdownTimerResult <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }

  private startCountdown(timeCountDown: number, timereset: number) {
    this.countdownTimerBet = 40;
    const countdownInterval = setInterval(() => {
      this.countdownTimerBet--;
      if (this.countdownTimerBet <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }

  private updateResults(newResult: number): void {
    this.results.push(newResult);
    if (this.results.length > 20) {
      this.results.shift();
    }
  }

  private updateResultsHis(newResult: number): void {
    this.columnValues.push(newResult);

    if (this.columnValues.length > 21) {
      this.columnValues.shift();
      this.clearLineNode(this.LineNode);
    }
  }

  private updateResultsHistory(newResult: number): void {
    this.resultsHistory.push(newResult);
    if (this.resultsHistory.length > 100) {
      this.resultsHistory.shift();
    }
  }
  private updateResultsDice1History(newResult: number): void {
    this.ListDice1His.push(newResult);
    if (this.resultsHistory.length > 21) {
      this.ListDice1His.shift();
      this.clearLineNode(this.LineNodeDice1);
    }
  }

  private updateResultsDice2History(newResult: number): void {
    this.ListDice2His.push(newResult);
    if (this.ListDice2His.length > 21) {
      this.ListDice2His.shift();
      this.clearLineNode(this.LineNodeDice2);
    }
  }

  private updateResultsDice3History(newResult: number): void {
    this.ListDice3His.push(newResult);
    if (this.ListDice3His.length > 21) {
      this.ListDice3His.shift();
      this.clearLineNode(this.LineNodeDice3);
    }
  }

  private chatAppear() {
    tween(this.Table)
      .to(0.3, {
        position: new Vec3(this.Table.position.x - 130, this.Table.position.y),
      })
      .call(() => {
        this.Chat.active = true;
      })
      .start();

    tween(this.logo1)
      .to(0.3, {
        position: new Vec3(this.logo1.position.x - 130, this.logo1.position.y),
      })
      .start();

    tween(this.logo2)
      .to(0.3, {
        position: new Vec3(this.logo2.position.x - 130, this.logo2.position.y),
      })
      .start();
    this.unchat.active = true;
  }

  private chatUnAppear() {
    this.Chat.active = false;
    this.unchat.active = false;

    tween(this.Table)
      .to(0.3, {
        position: new Vec3(this.Table.position.x + 130, this.Table.position.y),
      })
      .start();

    tween(this.logo1)
      .to(0.3, {
        position: new Vec3(this.logo1.position.x + 130, this.logo1.position.y),
      })
      .start();

    tween(this.logo2)
      .to(0.3, {
        position: new Vec3(this.logo2.position.x + 130, this.logo2.position.y),
      })
      .start();
  }

  private handleEvent(): void {
    // Move the value of each label to the next label
    for (let i = this.LableChat.length - 1; i > 0; i--) {
      this.LableChat[i].string = this.LableChat[i - 1].string;
    }

    // Assign the value of the edit box to the first label
    this.LableChat[0].string =
      this.loggedInUsername + ": " + this.editBoxChat.string;
    this.editBoxChat.string = "";
    // this.editBoxChat.node.on(EditBox.EventType.EDITING_RETURN)
  }
  private introduceBoardActive() {
    this.introduceBoard.active = true;
  }

  private introduceBoardUnActive() {
    this.introduceBoard.active = false;
  }

  private historyNodeActive() {
    this.HistoryNode.active = true;
  }

  private historyNodeUnActive() {
    this.HistoryNode.active = false;
  }

  private createNodeHistory() {
    let gapBetweenColumns = this.columnWidth * 1.5;

    let lineContainer = new Node();
    lineContainer.parent = this.LineNode;

    let graphics = lineContainer.addComponent(Graphics);
    graphics.lineWidth = 10;
    graphics.strokeColor = new Color(255, 0, 0);
    let prevColumnNode: Node = null;
    this.NumberNodesResultHistory.forEach((node, index) => {
      const value = this.columnValues[index];
      if (value !== undefined) {
        const sprite = node.getComponent(Sprite);
        if (sprite) {
          let spriteFrame;
          if (value >= 3 && value <= 10) {
            if (value === 3) {
              spriteFrame = this.listSpritetNumberHistory[0];
            }

            if (value === 4) {
              spriteFrame = this.listSpritetNumberHistory[1];
            }

            if (value === 5) {
              spriteFrame = this.listSpritetNumberHistory[2];
            }

            if (value === 6) {
              spriteFrame = this.listSpritetNumberHistory[3];
            }

            if (value === 7) {
              spriteFrame = this.listSpritetNumberHistory[4];
            }

            if (value === 8) {
              spriteFrame = this.listSpritetNumberHistory[5];
            }

            if (value === 9) {
              spriteFrame = this.listSpritetNumberHistory[6];
            }

            if (value === 10) {
              spriteFrame = this.listSpritetNumberHistory[7];
            }
            node.setPosition(value * gapBetweenColumns * 0.2, node.position.y);
            // if
          } else if (value > 10) {
            node.setPosition(value * gapBetweenColumns * 0.2, node.position.y);
            if (value === 11) {
              spriteFrame = this.listSpritetNumberHistory[8];
            }

            if (value === 12) {
              spriteFrame = this.listSpritetNumberHistory[9];
            }

            if (value === 13) {
              spriteFrame = this.listSpritetNumberHistory[10];
            }

            if (value === 14) {
              spriteFrame = this.listSpritetNumberHistory[11];
            }

            if (value === 15) {
              spriteFrame = this.listSpritetNumberHistory[12];
            }

            if (value === 16) {
              spriteFrame = this.listSpritetNumberHistory[13];
            }

            if (value === 17) {
              spriteFrame = this.listSpritetNumberHistory[14];
            }

            if (value === 18) {
              spriteFrame = this.listSpritetNumberHistory[15];
            }
          } else {
            console.error("Invalid result value:", value);
            node.active = false; // Ẩn node ảnh nếu giá trị không hợp lệ
            return;
          }
          sprite.spriteFrame = spriteFrame;
          node.active = true; // Kích hoạt node ảnh
          if (prevColumnNode) {
            graphics.moveTo(
              prevColumnNode.position.x,
              prevColumnNode.position.y
            );
            graphics.lineTo(node.position.x, node.position.y);
            graphics.stroke();
          }
          prevColumnNode = node;
        } else {
          console.error("Sprite is missing!");
        }
      } else {
        node.active = false; // Ẩn node ảnh nếu giá trị không tồn tại
      }
    });
  }

  private createNodeDice1History() {
    let gapBetweenColumns = this.columnWidth * 1.5;

    let lineContainer = new Node();
    lineContainer.parent = this.LineNodeDice1;

    let graphics = lineContainer.addComponent(Graphics);
    graphics.lineWidth = 5;
    graphics.strokeColor = new Color(247, 62, 245);
    let prevColumnNode: Node = null;
    this.ListDice1Node.forEach((node, index) => {
      const value = this.ListDice1His[index];
      if (value !== undefined) {
        node.setPosition(value * gapBetweenColumns * 0.61, node.position.y);
        node.active = true;
        if (prevColumnNode) {
          graphics.moveTo(prevColumnNode.position.x, prevColumnNode.position.y);
          graphics.lineTo(node.position.x, node.position.y);
          graphics.stroke();
        }
        prevColumnNode = node;
      } else {
        node.active = false; // Ẩn node ảnh nếu giá trị không tồn tại
      }
    });
  }

  private createNodeDice2History() {
    let gapBetweenColumns = this.columnWidth * 1.5;

    let lineContainer = new Node();
    lineContainer.parent = this.LineNodeDice2;

    let graphics = lineContainer.addComponent(Graphics);
    graphics.lineWidth = 5;
    graphics.strokeColor = new Color(222, 51, 70);
    let prevColumnNode: Node = null;
    this.ListDice2Node.forEach((node, index) => {
      const value = this.ListDice2His[index];
      if (value !== undefined) {
        node.setPosition(value * gapBetweenColumns * 0.61, node.position.y);
        node.active = true;
        if (prevColumnNode) {
          graphics.moveTo(prevColumnNode.position.x, prevColumnNode.position.y);
          graphics.lineTo(node.position.x, node.position.y);
          graphics.stroke();
        }
        prevColumnNode = node;
      } else {
        node.active = false; // Ẩn node ảnh nếu giá trị không tồn tại
      }
    });
  }

  private createNodeDice3History() {
    let gapBetweenColumns = this.columnWidth * 1.5;

    let lineContainer = new Node();
    lineContainer.parent = this.LineNodeDice3;

    let graphics = lineContainer.addComponent(Graphics);
    graphics.lineWidth = 5;
    graphics.strokeColor = new Color(78, 251, 151);
    let prevColumnNode: Node = null;
    this.ListDice3Node.forEach((node, index) => {
      const value = this.ListDice3His[index];
      if (value !== undefined) {
        node.setPosition(value * gapBetweenColumns * 0.61, node.position.y);
        node.active = true;
        if (prevColumnNode) {
          graphics.moveTo(prevColumnNode.position.x, prevColumnNode.position.y);
          graphics.lineTo(node.position.x, node.position.y);
          graphics.stroke();
        }
        prevColumnNode = node;
      } else {
        node.active = false; // Ẩn node ảnh nếu giá trị không tồn tại
      }
    });
  }

  createColumn(columnValue: number): Node {
    let columnNode = instantiate(this.black);
    return columnNode;
  }

  private clearLineNode(LineNode: Node) {
    if (LineNode) {
      LineNode.removeAllChildren();
    } else {
      console.warn("LineNode is not available.");
    }
  }

  private unDice1() {
    this.unDice1His.node.active = false;
    this.LineNodeDice1.active = false;
    this.Dice1Hist.active = false;
  }

  private ActiveDice1() {
    this.unDice1His.node.active = true;
    this.LineNodeDice1.active = true;
    this.Dice1Hist.active = true;
  }

  private unDice2() {
    this.unDice2His.node.active = false;
    this.LineNodeDice2.active = false;
    this.Dice2Hist.active = false;
  }

  private ActiveDice2() {
    this.unDice2His.node.active = true;
    this.LineNodeDice2.active = true;
    this.Dice2Hist.active = true;
  }

  private unDice3() {
    this.unDice3His.node.active = false;
    this.LineNodeDice3.active = false;
    this.Dice3ist.active = false;
  }

  private ActiveDice3() {
    this.unDice3His.node.active = true;
    this.LineNodeDice3.active = true;
    this.Dice3ist.active = true;
  }

  private activePage() {
    if (this.page1His.active === true) {
      this.page2His.active = true;
      this.page1His.active = false;
      this.page2Button1.node.active = true;
      this.page2Button2.node.active = true;
      if (this.Dice1His.active === false) {
        this.Dice1His.active = true;
        this.Dice2His.active = true;
        this.Dice3His.active = true;
      }
    }
  }

  private activePage2() {
    if (this.page2His.active === true) {
      this.page2His.active = false;
      this.page1His.active = true;
      this.page2Button1.node.active = false;
      this.page2Button2.node.active = false;
      if (this.Dice1His.active === true) {
        this.Dice1His.active = false;
        this.Dice2His.active = false;
        this.Dice3His.active = false;
      }
    }
  }

  private CancelBet() {
    if (this.gameEnd === false) {
      this.totalUserBetOver =
        this.totalUserBetOver - this.clonetotalUserBetOver;
      this.clonetotalUserBetOver = 0;
      // this.totalUserBetUnder =
      //   this.totalUserBetUnder - this.clonetotalUserBetUnder;
      // this.clonetotalUserBetUnder = 0;
      // this.UnderLableValueUser.string = this.totalUserBetOver.toString();
      this.OverLableValueUser.string = this.userValuebetOver.toString();
      console.log(this.totalUserBetOver);
    }
  }

  private HistoryUserBetActiveH() {
    this.HistoryUserBet.active = true;
  }

  private HistoryUserBetUnable() {
    this.HistoryUserBet.active = false;
  }

  private HistoryUserActiveH() {
    this.HistoryUser.active = true;
  }

  private HistoryUserUnable() {
    this.HistoryUser.active = false;
  }

  private doubleBet() {
    if (
      this.checkOver === true &&
      this.totalUserBetOver * 2 <= this.cloneBalanUser &&
      this.totalUserBetOver * 2 <= this.balanceUser &&
      this.gameEnd === false
    ) {
      this.totalUserBetOver = this.totalUserBetOver * 2;

      this.clonetotalUserBetOver =
        this.totalUserBetOver - this.userValuebetOver;
      this.OverLableValueUser.string = this.totalUserBetOver.toString();
    }

    if (
      this.checkUnder === true &&
      this.totalUserBetUnder * 2 <= this.cloneBalanUser &&
      this.gameEnd === false
    ) {
      this.totalUserBetUnder = this.totalUserBetUnder * 2;
      this.clonetotalUserBetUnder =
        this.totalUserBetUnder - this.userValuebetUnder;
      this.UnderLableValueUser.string = this.totalUserBetUnder.toString();
    }
  }

  private winRate() {
    this.Winrate.active = true;
  }
  private winRateUn() {
    this.Winrate.active = false;
  }

  private getUsernameAndBalanceFromLocalStorage(
    username: string
  ): { username: string; balance: number } | null {
    const storedAccounts = localStorage.getItem("registeredAccounts");
    if (storedAccounts) {
      const registeredAccounts: AccountInfo[] = JSON.parse(storedAccounts);
      const account = registeredAccounts.find(
        (acc) => acc.username === username
      );
      if (account) {
        return { username: account.username, balance: account.balance };
      } else {
        console.log("Tài khoản không tồn tại!");
        return null;
      }
    } else {
      console.log("Không có dữ liệu tài khoản trong Local Storage!");
      return null;
    }
  }

  private setUsernameAndBalanceToLocalStorage(
    username: string,
    newBalance: number
  ): boolean {
    const storedAccounts = localStorage.getItem("registeredAccounts");
    if (storedAccounts) {
      let registeredAccounts: AccountInfo[] = JSON.parse(storedAccounts);
      const index = registeredAccounts.findIndex(
        (acc) => acc.username === username
      );
      if (index !== -1) {
        registeredAccounts[index].balance = newBalance;
        localStorage.setItem(
          "registeredAccounts",
          JSON.stringify(registeredAccounts)
        );
        return true; // Trả về true nếu cập nhật thành công
      } else {
        console.log("Tài khoản không tồn tại!");
        return false; // Trả về false nếu tài khoản không tồn tại
      }
    } else {
      console.log("Không có dữ liệu tài khoản trong Local Storage!");
      return false; // Trả về false nếu không có dữ liệu trong Local Storage
    }
  }

  formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  formatNumberWithCommas2(number) {
    if (number >= 1000000 && number < 1000000000) {
      return (
        (number / 1000000).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        "M"
      );
    } else if (number >= 1000000000) {
      return (
        (number / 1000000000).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        "B"
      );
    } else {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }

  private currentTime() {
    const currentTime: Date = new Date();

    const hour: number = currentTime.getHours();
    const minute: number = currentTime.getMinutes();
    const second: number = currentTime.getSeconds();

    return `${hour}:${minute}:${second}`;
  }

  private buttonMusicb() {
    if (this.offMusic) {
      // Trừ 62 nếu đang ở trạng thái trừ
      tween(this.buttonMusic)
        .to(0.2, { position: new Vec3(-31) })
        .start();
      this.AudioController.settingAudio(0);
    } else {
      // Cộng 62 nếu đang ở trạng thái cộng
      tween(this.buttonMusic)
        .to(0.2, { position: new Vec3(31) })
        .start();
      this.AudioController.settingAudio(1);
    }
    console.log(this.offMusic);

    // Đảo ngược trạng thái sau mỗi lần gọi
    this.offMusic = !this.offMusic;
  }
}
