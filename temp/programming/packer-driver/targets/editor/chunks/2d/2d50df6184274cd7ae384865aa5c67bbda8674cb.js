System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, math, Node, tween, Vec3, Animation, SpriteFrame, Sprite, EditBox, instantiate, Prefab, Graphics, Color, AudioController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64, _descriptor65, _descriptor66, _descriptor67, _descriptor68, _descriptor69, _descriptor70, _descriptor71, _descriptor72, _descriptor73, _descriptor74, _descriptor75, _descriptor76, _descriptor77, _descriptor78, _crd, ccclass, property, GameC;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioController(extras) {
    _reporterNs.report("AudioController", "./Audio/AudioController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      math = _cc.math;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      EditBox = _cc.EditBox;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      AudioController = _unresolved_2.AudioController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5587PqHphLwpcljjLD9ABa", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'math', 'Node', 'tween', 'Vec3', 'Animation', 'SpriteFrame', 'Sprite', 'input', 'Input', 'macro', 'EditBox', 'NodeEventType', 'EventKeyboard', 'KeyCode', 'instantiate', 'Prefab', 'Graphics', 'Color', 'SystemEvent', 'Event', 'log', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameC", GameC = (_dec = ccclass("GameC"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Prefab
      }), _dec14 = property({
        type: Node
      }), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Node
      }), _dec17 = property({
        type: Node
      }), _dec18 = property({
        type: Node
      }), _dec19 = property({
        type: Node
      }), _dec20 = property({
        type: Node
      }), _dec21 = property({
        type: Node
      }), _dec22 = property({
        type: Node
      }), _dec23 = property({
        type: Node
      }), _dec24 = property({
        type: Node
      }), _dec25 = property({
        type: Node
      }), _dec26 = property({
        type: Node
      }), _dec27 = property({
        type: Node
      }), _dec28 = property({
        type: Node
      }), _dec29 = property({
        type: Node
      }), _dec30 = property({
        type: Node
      }), _dec31 = property({
        type: Node
      }), _dec32 = property({
        type: Node
      }), _dec33 = property({
        type: Label
      }), _dec34 = property({
        type: Label
      }), _dec35 = property({
        type: Label
      }), _dec36 = property({
        type: Label
      }), _dec37 = property({
        type: Label
      }), _dec38 = property({
        type: Label
      }), _dec39 = property({
        type: Label
      }), _dec40 = property({
        type: Label
      }), _dec41 = property({
        type: Label
      }), _dec42 = property({
        type: Label
      }), _dec43 = property({
        type: Label
      }), _dec44 = property({
        type: Label
      }), _dec45 = property({
        type: Label
      }), _dec46 = property({
        type: Label
      }), _dec47 = property({
        type: Label
      }), _dec48 = property({
        type: Button
      }), _dec49 = property({
        type: Button
      }), _dec50 = property({
        type: Button
      }), _dec51 = property({
        type: Button
      }), _dec52 = property({
        type: Button
      }), _dec53 = property({
        type: Button
      }), _dec54 = property({
        type: Button
      }), _dec55 = property({
        type: Button
      }), _dec56 = property({
        type: Button
      }), _dec57 = property({
        type: Button
      }), _dec58 = property({
        type: Button
      }), _dec59 = property({
        type: Button
      }), _dec60 = property({
        type: SpriteFrame
      }), _dec61 = property({
        type: SpriteFrame
      }), _dec62 = property({
        type: Label
      }), _dec63 = property({
        type: [Node]
      }), _dec64 = property({
        type: [Node]
      }), _dec65 = property({
        type: [Node]
      }), _dec66 = property({
        type: [Node]
      }), _dec67 = property({
        type: [Node]
      }), _dec68 = property({
        type: [Node]
      }), _dec69 = property({
        type: [Node]
      }), _dec70 = property({
        type: [Node]
      }), _dec71 = property({
        type: [Label]
      }), _dec72 = property({
        type: SpriteFrame
      }), _dec73 = property({
        type: SpriteFrame
      }), _dec74 = property({
        type: SpriteFrame
      }), _dec75 = property({
        type: EditBox
      }), _dec76 = property({
        type: Node
      }), _dec77 = property({
        type: Node
      }), _dec78 = property({
        type: Node
      }), _dec79 = property({
        type: _crd && AudioController === void 0 ? (_reportPossibleCrUseOfAudioController({
          error: Error()
        }), AudioController) : AudioController
      }), _dec(_class = (_class2 = class GameC extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "betOverNode", _descriptor, this);

          _initializerDefineProperty(this, "betUnderNode", _descriptor2, this);

          _initializerDefineProperty(this, "betBarNode", _descriptor3, this);

          _initializerDefineProperty(this, "plate", _descriptor4, this);

          _initializerDefineProperty(this, "Effect", _descriptor5, this);

          _initializerDefineProperty(this, "EffectUnder", _descriptor6, this);

          _initializerDefineProperty(this, "Chat", _descriptor7, this);

          _initializerDefineProperty(this, "Table", _descriptor8, this);

          _initializerDefineProperty(this, "unchat", _descriptor9, this);

          _initializerDefineProperty(this, "introduceBoard", _descriptor10, this);

          _initializerDefineProperty(this, "HistoryNode", _descriptor11, this);

          _initializerDefineProperty(this, "black", _descriptor12, this);

          _initializerDefineProperty(this, "numberHis", _descriptor13, this);

          _initializerDefineProperty(this, "LineNode", _descriptor14, this);

          _initializerDefineProperty(this, "LineNodeDice1", _descriptor15, this);

          _initializerDefineProperty(this, "Winrate", _descriptor16, this);

          _initializerDefineProperty(this, "LineNodeDice2", _descriptor17, this);

          _initializerDefineProperty(this, "LineNodeDice3", _descriptor18, this);

          _initializerDefineProperty(this, "Dice1Hist", _descriptor19, this);

          _initializerDefineProperty(this, "Dice2Hist", _descriptor20, this);

          _initializerDefineProperty(this, "Dice3ist", _descriptor21, this);

          _initializerDefineProperty(this, "page1His", _descriptor22, this);

          _initializerDefineProperty(this, "page2His", _descriptor23, this);

          _initializerDefineProperty(this, "Dice1His", _descriptor24, this);

          _initializerDefineProperty(this, "Dice2His", _descriptor25, this);

          _initializerDefineProperty(this, "Dice3His", _descriptor26, this);

          _initializerDefineProperty(this, "HistoryUserBet", _descriptor27, this);

          _initializerDefineProperty(this, "HistoryUser", _descriptor28, this);

          _initializerDefineProperty(this, "logo1", _descriptor29, this);

          _initializerDefineProperty(this, "logo2", _descriptor30, this);

          _initializerDefineProperty(this, "buttonMusic", _descriptor31, this);

          //Lable
          _initializerDefineProperty(this, "UnderLableValueUser", _descriptor32, this);

          _initializerDefineProperty(this, "OverLableValueUser", _descriptor33, this);

          _initializerDefineProperty(this, "totalUnderText", _descriptor34, this);

          _initializerDefineProperty(this, "totalOverText", _descriptor35, this);

          _initializerDefineProperty(this, "countDown", _descriptor36, this);

          _initializerDefineProperty(this, "countDownResult", _descriptor37, this);

          _initializerDefineProperty(this, "countPlayerOverLb", _descriptor38, this);

          _initializerDefineProperty(this, "countPlayerUnderLb", _descriptor39, this);

          _initializerDefineProperty(this, "BalanceNumber", _descriptor40, this);

          _initializerDefineProperty(this, "ToatalDice", _descriptor41, this);

          _initializerDefineProperty(this, "username", _descriptor42, this);

          _initializerDefineProperty(this, "tkpOver", _descriptor43, this);

          _initializerDefineProperty(this, "tkpUnder", _descriptor44, this);

          _initializerDefineProperty(this, "tkpUserUnder", _descriptor45, this);

          _initializerDefineProperty(this, "tkpUserOver", _descriptor46, this);

          //BUTTON
          _initializerDefineProperty(this, "value1k", _descriptor47, this);

          _initializerDefineProperty(this, "value10k", _descriptor48, this);

          _initializerDefineProperty(this, "value50k", _descriptor49, this);

          _initializerDefineProperty(this, "value100k", _descriptor50, this);

          _initializerDefineProperty(this, "value500k", _descriptor51, this);

          _initializerDefineProperty(this, "value10M", _descriptor52, this);

          _initializerDefineProperty(this, "value50M", _descriptor53, this);

          _initializerDefineProperty(this, "unDice1His", _descriptor54, this);

          _initializerDefineProperty(this, "unDice2His", _descriptor55, this);

          _initializerDefineProperty(this, "unDice3His", _descriptor56, this);

          _initializerDefineProperty(this, "page2Button1", _descriptor57, this);

          _initializerDefineProperty(this, "page2Button2", _descriptor58, this);

          _initializerDefineProperty(this, "dice1", _descriptor59, this);

          _initializerDefineProperty(this, "diceHis", _descriptor60, this);

          _initializerDefineProperty(this, "tkpTime", _descriptor61, this);

          _initializerDefineProperty(this, "imageNodes", _descriptor62, this);

          _initializerDefineProperty(this, "imageNodesDiceRes", _descriptor63, this);

          _initializerDefineProperty(this, "imageNodesResult", _descriptor64, this);

          _initializerDefineProperty(this, "imageNodesResultHistory", _descriptor65, this);

          _initializerDefineProperty(this, "NumberNodesResultHistory", _descriptor66, this);

          _initializerDefineProperty(this, "ListDice1Node", _descriptor67, this);

          _initializerDefineProperty(this, "ListDice2Node", _descriptor68, this);

          _initializerDefineProperty(this, "ListDice3Node", _descriptor69, this);

          _initializerDefineProperty(this, "LableChat", _descriptor70, this);

          _initializerDefineProperty(this, "listSpriteResult", _descriptor71, this);

          _initializerDefineProperty(this, "listSpriteResultHistory", _descriptor72, this);

          _initializerDefineProperty(this, "listSpritetNumberHistory", _descriptor73, this);

          _initializerDefineProperty(this, "editBoxChat", _descriptor74, this);

          _initializerDefineProperty(this, "Effect1", _descriptor75, this);

          _initializerDefineProperty(this, "Effect2", _descriptor76, this);

          _initializerDefineProperty(this, "Effect3", _descriptor77, this);

          _initializerDefineProperty(this, "AudioController", _descriptor78, this);

          this.totalUserBetUnder = 0;
          this.totalUserBetOver = 0;
          this.totalBetOver = 0;
          this.totalBetUnder = 0;
          this.listScore = [1000, 10000, 50000, 100000, 500000, 10000000, 50000000];
          this.listValueDice = [1, 2, 3, 4, 5, 6];
          this.listSprite = [];
          this.listButton = [];
          this.checkUnder = false;
          this.checkOver = false;
          this.gameEnd = true;
          this.checkEditFocus = false;
          this.shedu = null;
          this.nextRoll = 500;
          this.timeRate = 5000;
          this.valueDice = 0;
          this.balanceUser = 50000;
          this.cloneBalanUser = 50000;
          this.userValuebetUnder = 0;
          this.cloneuserValuebetUnder = 0;
          this.cloneuserValuebetOver = 0;
          this.userValuebetOver = 0;
          this.countdownTimerBet = 40;
          this.countdownTimerResult = 15;
          // columnCount: number = 21;
          this.columnWidth = 34.5;
          this.sum = 0;
          this.countPlayerOver = 0;
          this.countPlayerUnder = 0;
          this.clonetotalUserBetUnder = 0;
          this.clonetotalUserBetOver = 0;
          this.checkouChat = 0;
          this.results = [];
          this.columnValues = [];
          this.resultsHistory = [];
          this.ListDice1His = [];
          this.ListDice2His = [];
          this.ListDice3His = [];
          this.ramdomDice = [];
          this.loggedInUsername = void 0;
          this.offMusic = true;
          this.lineGraphicsArray = [];
        }

        start() {
          this.loggedInUsername = window["loggedInUsername"];
          const userInfo = this.getUsernameAndBalanceFromLocalStorage(this.loggedInUsername);

          if (userInfo) {
            this.username.string = userInfo.username;
            this.balanceUser = userInfo.balance;
          }

          this.AudioController.onAudio(2);
          this.listButton = [this.value1k, this.value10k, this.value50k, this.value100k, this.value500k, this.value10M, this.value50M];

          for (let i = 0; i < this.listButton.length; i++) {
            let button = this.listButton[i];
            button.node.on(Button.EventType.CLICK, () => {
              if (this.cloneBalanUser >= this.listScore[i] && this.cloneBalanUser > this.totalUserBetOver + this.totalUserBetUnder && this.balanceUser !== 0 && this.gameEnd === false) {
                this.addScore(this.listScore[i]);
              } else {
                console.log("khong du tien");
              }
            });
          }

          this.shedu = this.schedule(() => {
            this.totalOverText.string = this.formatNumberWithCommas(this.totalBetOver);
            this.countPlayerOverLb.string = this.countPlayerOver.toString();
            tween(this.totalOverText.node).to(0.5, {
              scale: new Vec3(1.5, 1.5)
            }).call(() => {
              tween(this.totalOverText.node).to(0.5, {
                scale: new Vec3(1, 1)
              }).start();
            }).start();
          }, 1);
          this.schedule(() => {
            // this.totalUnderText.string = this.totalBetUnder.toString();
            this.totalUnderText.string = this.formatNumberWithCommas(this.totalBetUnder);
            this.countPlayerUnderLb.string = this.countPlayerUnder.toString();
            tween(this.totalUnderText.node).to(0.5, {
              scale: new Vec3(1.5, 1.5)
            }).call(() => {
              tween(this.totalUnderText.node).to(0.5, {
                scale: new Vec3(1, 1)
              }).start();
            }).start();
          }, 1);
          setTimeout(() => {
            this.gameEnd = false;
            this.plate.getComponent(Animation).play("plateIn");
            this.AudioController.onAudio(3);
            this.Effect1.getComponent(Animation).play();
            this.countDown.node.active = true;
            this.Effect3.active = false; // this.Effect2.active = true;

            this.displayImagesResult();
            this.displayImagesResultHistory();
            this.startCountdown(this.countdownTimerBet, 40);
            this.scheduleRandomDice();
            this.createNodeHistory();
            this.createNodeDice1History();
            this.createNodeDice2History();
            this.createNodeDice3History();
          }, 3000); // this.handleEvent();
          // input.on(Input.EventType.KEY_DOWN,this.onKeyDown,this);
        }

        update(deltaTime) {
          this.BalanceNumber.string = this.balanceUser.toString();

          if (this.gameEnd === false) {
            this.totalBetOver = this.totalBetOver + math.randomRangeInt(1000, 10000);
            this.totalBetUnder = this.totalBetUnder + math.randomRangeInt(1000, 10000);
            this.countPlayerOver = this.countPlayerOver + math.randomRangeInt(1, 10);
            this.countPlayerUnder = this.countPlayerUnder + math.randomRangeInt(1, 10);
          }

          if (this.gameEnd === true) {}

          this.countDown.string = this.countdownTimerBet.toString();
          this.countDownResult.string = this.countdownTimerResult.toString();
        }

        activeBetOverbtn() {
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

        activeBetUnderbtn() {
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

        addScore(Score) {
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

        bet() {
          if (this.checkOver === true && this.cloneBalanUser >= this.totalUserBetOver && this.balanceUser !== 0 && this.gameEnd === false) {
            this.balanceUser = this.balanceUser - this.clonetotalUserBetOver;
            const isUpdated = this.setUsernameAndBalanceToLocalStorage(this.loggedInUsername, this.balanceUser);

            if (isUpdated) {
              console.log("Cập nhật balance thành công!");
            } else {
              console.log("Cập nhật balance thất bại!");
            }

            this.userValuebetOver += this.clonetotalUserBetOver;
            this.clonetotalUserBetOver = 0;
            this.OverLableValueUser.string = this.totalUserBetOver.toString();
            this.AudioController.onAudio(0);
          } else if (this.checkUnder === true && this.cloneBalanUser >= this.totalUserBetUnder && this.balanceUser !== 0 && this.gameEnd === false) {
            this.balanceUser = this.balanceUser - this.clonetotalUserBetUnder;
            const isUpdated = this.setUsernameAndBalanceToLocalStorage(this.loggedInUsername, this.balanceUser);

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

        scheduleRandomDice() {
          const randomValues = this.getRandomValues();
          this.displayImages(randomValues); // this.displayImagesHisDice(randomValues);
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
            this.plate.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
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
                const isUpdated = this.setUsernameAndBalanceToLocalStorage(this.loggedInUsername, this.balanceUser);

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
                const isUpdated = this.setUsernameAndBalanceToLocalStorage(this.loggedInUsername, this.balanceUser);

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

        getRandomValues() {
          const indices = [1, 2, 3, 4, 5, 6];
          this.ramdomDice = [];

          for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * indices.length);
            this.ramdomDice.push(indices[randomIndex]);
          }

          return this.ramdomDice;
        }

        sumValues(array) {
          return array.reduce((sum, currentValue) => sum + currentValue, 0);
        }

        displayImages(randomValues) {
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

        displayImagesHisDice(randomValues) {
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

        displayImagesResult() {
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

        displayImagesResultHistory() {
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

        startCountdownResult(timeCountDown, timereset) {
          this.countdownTimerResult = 15;
          const countdownInterval = setInterval(() => {
            this.countdownTimerResult--;

            if (this.countdownTimerResult <= 0) {
              clearInterval(countdownInterval);
            }
          }, 1000);
        }

        startCountdown(timeCountDown, timereset) {
          this.countdownTimerBet = 40;
          const countdownInterval = setInterval(() => {
            this.countdownTimerBet--;

            if (this.countdownTimerBet <= 0) {
              clearInterval(countdownInterval);
            }
          }, 1000);
        }

        updateResults(newResult) {
          this.results.push(newResult);

          if (this.results.length > 20) {
            this.results.shift();
          }
        }

        updateResultsHis(newResult) {
          this.columnValues.push(newResult);

          if (this.columnValues.length > 21) {
            this.columnValues.shift();
            this.clearLineNode(this.LineNode);
          }
        }

        updateResultsHistory(newResult) {
          this.resultsHistory.push(newResult);

          if (this.resultsHistory.length > 100) {
            this.resultsHistory.shift();
          }
        }

        updateResultsDice1History(newResult) {
          this.ListDice1His.push(newResult);

          if (this.resultsHistory.length > 21) {
            this.ListDice1His.shift();
            this.clearLineNode(this.LineNodeDice1);
          }
        }

        updateResultsDice2History(newResult) {
          this.ListDice2His.push(newResult);

          if (this.ListDice2His.length > 21) {
            this.ListDice2His.shift();
            this.clearLineNode(this.LineNodeDice2);
          }
        }

        updateResultsDice3History(newResult) {
          this.ListDice3His.push(newResult);

          if (this.ListDice3His.length > 21) {
            this.ListDice3His.shift();
            this.clearLineNode(this.LineNodeDice3);
          }
        }

        chatAppear() {
          tween(this.Table).to(0.3, {
            position: new Vec3(this.Table.position.x - 130, this.Table.position.y)
          }).call(() => {
            this.Chat.active = true;
          }).start();
          tween(this.logo1).to(0.3, {
            position: new Vec3(this.logo1.position.x - 130, this.logo1.position.y)
          }).start();
          tween(this.logo2).to(0.3, {
            position: new Vec3(this.logo2.position.x - 130, this.logo2.position.y)
          }).start();
          this.unchat.active = true;
        }

        chatUnAppear() {
          this.Chat.active = false;
          this.unchat.active = false;
          tween(this.Table).to(0.3, {
            position: new Vec3(this.Table.position.x + 130, this.Table.position.y)
          }).start();
          tween(this.logo1).to(0.3, {
            position: new Vec3(this.logo1.position.x + 130, this.logo1.position.y)
          }).start();
          tween(this.logo2).to(0.3, {
            position: new Vec3(this.logo2.position.x + 130, this.logo2.position.y)
          }).start();
        }

        handleEvent() {
          // Move the value of each label to the next label
          for (let i = this.LableChat.length - 1; i > 0; i--) {
            this.LableChat[i].string = this.LableChat[i - 1].string;
          } // Assign the value of the edit box to the first label


          this.LableChat[0].string = this.loggedInUsername + ": " + this.editBoxChat.string;
          this.editBoxChat.string = ""; // this.editBoxChat.node.on(EditBox.EventType.EDITING_RETURN)
        }

        introduceBoardActive() {
          this.introduceBoard.active = true;
        }

        introduceBoardUnActive() {
          this.introduceBoard.active = false;
        }

        historyNodeActive() {
          this.HistoryNode.active = true;
        }

        historyNodeUnActive() {
          this.HistoryNode.active = false;
        }

        createNodeHistory() {
          let gapBetweenColumns = this.columnWidth * 1.5;
          let lineContainer = new Node();
          lineContainer.parent = this.LineNode;
          let graphics = lineContainer.addComponent(Graphics);
          graphics.lineWidth = 10;
          graphics.strokeColor = new Color(255, 0, 0);
          let prevColumnNode = null;
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

                  node.setPosition(value * gapBetweenColumns * 0.2, node.position.y); // if
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
                  graphics.moveTo(prevColumnNode.position.x, prevColumnNode.position.y);
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

        createNodeDice1History() {
          let gapBetweenColumns = this.columnWidth * 1.5;
          let lineContainer = new Node();
          lineContainer.parent = this.LineNodeDice1;
          let graphics = lineContainer.addComponent(Graphics);
          graphics.lineWidth = 5;
          graphics.strokeColor = new Color(247, 62, 245);
          let prevColumnNode = null;
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

        createNodeDice2History() {
          let gapBetweenColumns = this.columnWidth * 1.5;
          let lineContainer = new Node();
          lineContainer.parent = this.LineNodeDice2;
          let graphics = lineContainer.addComponent(Graphics);
          graphics.lineWidth = 5;
          graphics.strokeColor = new Color(222, 51, 70);
          let prevColumnNode = null;
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

        createNodeDice3History() {
          let gapBetweenColumns = this.columnWidth * 1.5;
          let lineContainer = new Node();
          lineContainer.parent = this.LineNodeDice3;
          let graphics = lineContainer.addComponent(Graphics);
          graphics.lineWidth = 5;
          graphics.strokeColor = new Color(78, 251, 151);
          let prevColumnNode = null;
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

        createColumn(columnValue) {
          let columnNode = instantiate(this.black);
          return columnNode;
        }

        clearLineNode(LineNode) {
          if (LineNode) {
            LineNode.removeAllChildren();
          } else {
            console.warn("LineNode is not available.");
          }
        }

        unDice1() {
          this.unDice1His.node.active = false;
          this.LineNodeDice1.active = false;
          this.Dice1Hist.active = false;
        }

        ActiveDice1() {
          this.unDice1His.node.active = true;
          this.LineNodeDice1.active = true;
          this.Dice1Hist.active = true;
        }

        unDice2() {
          this.unDice2His.node.active = false;
          this.LineNodeDice2.active = false;
          this.Dice2Hist.active = false;
        }

        ActiveDice2() {
          this.unDice2His.node.active = true;
          this.LineNodeDice2.active = true;
          this.Dice2Hist.active = true;
        }

        unDice3() {
          this.unDice3His.node.active = false;
          this.LineNodeDice3.active = false;
          this.Dice3ist.active = false;
        }

        ActiveDice3() {
          this.unDice3His.node.active = true;
          this.LineNodeDice3.active = true;
          this.Dice3ist.active = true;
        }

        activePage() {
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

        activePage2() {
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

        CancelBet() {
          if (this.gameEnd === false) {
            this.totalUserBetOver = this.totalUserBetOver - this.clonetotalUserBetOver;
            this.clonetotalUserBetOver = 0; // this.totalUserBetUnder =
            //   this.totalUserBetUnder - this.clonetotalUserBetUnder;
            // this.clonetotalUserBetUnder = 0;
            // this.UnderLableValueUser.string = this.totalUserBetOver.toString();

            this.OverLableValueUser.string = this.userValuebetOver.toString();
            console.log(this.totalUserBetOver);
          }
        }

        HistoryUserBetActiveH() {
          this.HistoryUserBet.active = true;
        }

        HistoryUserBetUnable() {
          this.HistoryUserBet.active = false;
        }

        HistoryUserActiveH() {
          this.HistoryUser.active = true;
        }

        HistoryUserUnable() {
          this.HistoryUser.active = false;
        }

        doubleBet() {
          if (this.checkOver === true && this.totalUserBetOver * 2 <= this.cloneBalanUser && this.totalUserBetOver * 2 <= this.balanceUser && this.gameEnd === false) {
            this.totalUserBetOver = this.totalUserBetOver * 2;
            this.clonetotalUserBetOver = this.totalUserBetOver - this.userValuebetOver;
            this.OverLableValueUser.string = this.totalUserBetOver.toString();
          }

          if (this.checkUnder === true && this.totalUserBetUnder * 2 <= this.cloneBalanUser && this.gameEnd === false) {
            this.totalUserBetUnder = this.totalUserBetUnder * 2;
            this.clonetotalUserBetUnder = this.totalUserBetUnder - this.userValuebetUnder;
            this.UnderLableValueUser.string = this.totalUserBetUnder.toString();
          }
        }

        winRate() {
          this.Winrate.active = true;
        }

        winRateUn() {
          this.Winrate.active = false;
        }

        getUsernameAndBalanceFromLocalStorage(username) {
          const storedAccounts = localStorage.getItem("registeredAccounts");

          if (storedAccounts) {
            const registeredAccounts = JSON.parse(storedAccounts);
            const account = registeredAccounts.find(acc => acc.username === username);

            if (account) {
              return {
                username: account.username,
                balance: account.balance
              };
            } else {
              console.log("Tài khoản không tồn tại!");
              return null;
            }
          } else {
            console.log("Không có dữ liệu tài khoản trong Local Storage!");
            return null;
          }
        }

        setUsernameAndBalanceToLocalStorage(username, newBalance) {
          const storedAccounts = localStorage.getItem("registeredAccounts");

          if (storedAccounts) {
            let registeredAccounts = JSON.parse(storedAccounts);
            const index = registeredAccounts.findIndex(acc => acc.username === username);

            if (index !== -1) {
              registeredAccounts[index].balance = newBalance;
              localStorage.setItem("registeredAccounts", JSON.stringify(registeredAccounts));
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
            return (number / 1000000).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "M";
          } else if (number >= 1000000000) {
            return (number / 1000000000).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "B";
          } else {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          }
        }

        currentTime() {
          const currentTime = new Date();
          const hour = currentTime.getHours();
          const minute = currentTime.getMinutes();
          const second = currentTime.getSeconds();
          return `${hour}:${minute}:${second}`;
        }

        buttonMusicb() {
          if (this.offMusic) {
            // Trừ 62 nếu đang ở trạng thái trừ
            tween(this.buttonMusic).to(0.2, {
              position: new Vec3(-31)
            }).start();
            this.AudioController.settingAudio(0);
          } else {
            // Cộng 62 nếu đang ở trạng thái cộng
            tween(this.buttonMusic).to(0.2, {
              position: new Vec3(31)
            }).start();
            this.AudioController.settingAudio(1);
          }

          console.log(this.offMusic); // Đảo ngược trạng thái sau mỗi lần gọi

          this.offMusic = !this.offMusic;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "betOverNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "betUnderNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "betBarNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "plate", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Effect", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "EffectUnder", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Chat", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Table", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "unchat", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "introduceBoard", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "HistoryNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "black", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "numberHis", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "LineNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "LineNodeDice1", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Winrate", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "LineNodeDice2", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "LineNodeDice3", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Dice1Hist", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Dice2Hist", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Dice3ist", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "page1His", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "page2His", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Dice1His", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Dice2His", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Dice3His", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "HistoryUserBet", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "HistoryUser", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "logo1", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "logo2", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "buttonMusic", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "UnderLableValueUser", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "OverLableValueUser", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "totalUnderText", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "totalOverText", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "countDown", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "countDownResult", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "countPlayerOverLb", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "countPlayerUnderLb", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "BalanceNumber", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "ToatalDice", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "username", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "tkpOver", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "tkpUnder", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "tkpUserUnder", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "tkpUserOver", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "value1k", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "value10k", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "value50k", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "value100k", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "value500k", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "value10M", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "value50M", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "unDice1His", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "unDice2His", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "unDice3His", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "page2Button1", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor58 = _applyDecoratedDescriptor(_class2.prototype, "page2Button2", [_dec59], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor59 = _applyDecoratedDescriptor(_class2.prototype, "dice1", [_dec60], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor60 = _applyDecoratedDescriptor(_class2.prototype, "diceHis", [_dec61], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor61 = _applyDecoratedDescriptor(_class2.prototype, "tkpTime", [_dec62], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor62 = _applyDecoratedDescriptor(_class2.prototype, "imageNodes", [_dec63], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor63 = _applyDecoratedDescriptor(_class2.prototype, "imageNodesDiceRes", [_dec64], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor64 = _applyDecoratedDescriptor(_class2.prototype, "imageNodesResult", [_dec65], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor65 = _applyDecoratedDescriptor(_class2.prototype, "imageNodesResultHistory", [_dec66], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor66 = _applyDecoratedDescriptor(_class2.prototype, "NumberNodesResultHistory", [_dec67], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor67 = _applyDecoratedDescriptor(_class2.prototype, "ListDice1Node", [_dec68], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor68 = _applyDecoratedDescriptor(_class2.prototype, "ListDice2Node", [_dec69], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor69 = _applyDecoratedDescriptor(_class2.prototype, "ListDice3Node", [_dec70], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor70 = _applyDecoratedDescriptor(_class2.prototype, "LableChat", [_dec71], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor71 = _applyDecoratedDescriptor(_class2.prototype, "listSpriteResult", [_dec72], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor72 = _applyDecoratedDescriptor(_class2.prototype, "listSpriteResultHistory", [_dec73], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor73 = _applyDecoratedDescriptor(_class2.prototype, "listSpritetNumberHistory", [_dec74], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor74 = _applyDecoratedDescriptor(_class2.prototype, "editBoxChat", [_dec75], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor75 = _applyDecoratedDescriptor(_class2.prototype, "Effect1", [_dec76], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor76 = _applyDecoratedDescriptor(_class2.prototype, "Effect2", [_dec77], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor77 = _applyDecoratedDescriptor(_class2.prototype, "Effect3", [_dec78], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor78 = _applyDecoratedDescriptor(_class2.prototype, "AudioController", [_dec79], {
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
//# sourceMappingURL=2d50df6184274cd7ae384865aa5c67bbda8674cb.js.map