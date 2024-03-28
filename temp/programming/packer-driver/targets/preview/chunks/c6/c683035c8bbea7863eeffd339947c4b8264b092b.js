System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, math, Node, tween, Vec3, Animation, SpriteFrame, Sprite, EditBox, KeyCode, instantiate, Prefab, Graphics, Color, SystemEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _crd, ccclass, property, GameC;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
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
      KeyCode = _cc.KeyCode;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
      SystemEvent = _cc.SystemEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5587PqHphLwpcljjLD9ABa", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'math', 'Node', 'tween', 'Vec3', 'Animation', 'SpriteFrame', 'Sprite', 'input', 'Input', 'macro', 'EditBox', 'NodeEventType', 'EventKeyboard', 'KeyCode', 'instantiate', 'Prefab', 'Graphics', 'Color', 'SystemEvent']);

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
        type: Label
      }), _dec28 = property({
        type: Label
      }), _dec29 = property({
        type: Label
      }), _dec30 = property({
        type: Label
      }), _dec31 = property({
        type: Label
      }), _dec32 = property({
        type: Label
      }), _dec33 = property({
        type: Label
      }), _dec34 = property({
        type: Label
      }), _dec35 = property({
        type: Button
      }), _dec36 = property({
        type: Button
      }), _dec37 = property({
        type: Button
      }), _dec38 = property({
        type: Button
      }), _dec39 = property({
        type: Button
      }), _dec40 = property({
        type: Button
      }), _dec41 = property({
        type: Button
      }), _dec42 = property({
        type: Button
      }), _dec43 = property({
        type: Button
      }), _dec44 = property({
        type: Button
      }), _dec45 = property({
        type: Button
      }), _dec46 = property({
        type: Button
      }), _dec47 = property({
        type: SpriteFrame
      }), _dec48 = property({
        type: [Node]
      }), _dec49 = property({
        type: [Node]
      }), _dec50 = property({
        type: [Node]
      }), _dec51 = property({
        type: [Node]
      }), _dec52 = property({
        type: [Node]
      }), _dec53 = property({
        type: [Node]
      }), _dec54 = property({
        type: [Node]
      }), _dec55 = property({
        type: SpriteFrame
      }), _dec56 = property({
        type: SpriteFrame
      }), _dec57 = property({
        type: SpriteFrame
      }), _dec58 = property({
        type: EditBox
      }), _dec(_class = (_class2 = class GameC extends Component {
        constructor() {
          super(...arguments);

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

          _initializerDefineProperty(this, "LineNodeDice2", _descriptor16, this);

          _initializerDefineProperty(this, "LineNodeDice3", _descriptor17, this);

          _initializerDefineProperty(this, "Dice1Hist", _descriptor18, this);

          _initializerDefineProperty(this, "Dice2Hist", _descriptor19, this);

          _initializerDefineProperty(this, "Dice3ist", _descriptor20, this);

          _initializerDefineProperty(this, "page1His", _descriptor21, this);

          _initializerDefineProperty(this, "page2His", _descriptor22, this);

          _initializerDefineProperty(this, "Dice1His", _descriptor23, this);

          _initializerDefineProperty(this, "Dice2His", _descriptor24, this);

          _initializerDefineProperty(this, "Dice3His", _descriptor25, this);

          //Lable
          _initializerDefineProperty(this, "UnderLableValueUser", _descriptor26, this);

          _initializerDefineProperty(this, "OverLableValueUser", _descriptor27, this);

          _initializerDefineProperty(this, "totalUnderText", _descriptor28, this);

          _initializerDefineProperty(this, "totalOverText", _descriptor29, this);

          _initializerDefineProperty(this, "countDown", _descriptor30, this);

          _initializerDefineProperty(this, "countDownResult", _descriptor31, this);

          _initializerDefineProperty(this, "countPlayerOverLb", _descriptor32, this);

          _initializerDefineProperty(this, "countPlayerUnderLb", _descriptor33, this);

          //BUTTON
          _initializerDefineProperty(this, "value1k", _descriptor34, this);

          _initializerDefineProperty(this, "value10k", _descriptor35, this);

          _initializerDefineProperty(this, "value50k", _descriptor36, this);

          _initializerDefineProperty(this, "value100k", _descriptor37, this);

          _initializerDefineProperty(this, "value500k", _descriptor38, this);

          _initializerDefineProperty(this, "value10M", _descriptor39, this);

          _initializerDefineProperty(this, "value50M", _descriptor40, this);

          _initializerDefineProperty(this, "unDice1His", _descriptor41, this);

          _initializerDefineProperty(this, "unDice2His", _descriptor42, this);

          _initializerDefineProperty(this, "unDice3His", _descriptor43, this);

          _initializerDefineProperty(this, "page2Button1", _descriptor44, this);

          _initializerDefineProperty(this, "page2Button2", _descriptor45, this);

          _initializerDefineProperty(this, "dice1", _descriptor46, this);

          _initializerDefineProperty(this, "imageNodes", _descriptor47, this);

          _initializerDefineProperty(this, "imageNodesResult", _descriptor48, this);

          _initializerDefineProperty(this, "imageNodesResultHistory", _descriptor49, this);

          _initializerDefineProperty(this, "NumberNodesResultHistory", _descriptor50, this);

          _initializerDefineProperty(this, "ListDice1Node", _descriptor51, this);

          _initializerDefineProperty(this, "ListDice2Node", _descriptor52, this);

          _initializerDefineProperty(this, "ListDice3Node", _descriptor53, this);

          _initializerDefineProperty(this, "listSpriteResult", _descriptor54, this);

          _initializerDefineProperty(this, "listSpriteResultHistory", _descriptor55, this);

          _initializerDefineProperty(this, "listSpritetNumberHistory", _descriptor56, this);

          _initializerDefineProperty(this, "editBoxChat", _descriptor57, this);

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
          this.gameEnd = false;
          this.shedu = null;
          this.nextRoll = 500;
          this.timeRate = 5000;
          this.valueDice = 0;
          this.balanceUser = 5000;
          this.cloneBalanUser = 5000;
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
          this.results = [];
          this.columnValues = [];
          this.resultsHistory = [];
          this.ListDice1His = [];
          this.ListDice2His = [];
          this.ListDice3His = [];
          this.ramdomDice = [];
          this.lineGraphicsArray = [];
        }

        start() {
          var _this = this;

          this.listButton = [this.value1k, this.value10k, this.value50k, this.value100k, this.value500k, this.value10M, this.value50M];

          var _loop = function _loop(i) {
            var button = _this.listButton[i];
            button.node.on(Button.EventType.CLICK, () => {
              if (_this.cloneBalanUser > _this.listScore[i] && _this.cloneBalanUser > _this.totalUserBetOver + _this.totalUserBetUnder && _this.balanceUser !== 0) {
                _this.addScore(_this.listScore[i]);
              } else {
                console.log("khong du tien");
              }
            });
          };

          for (var i = 0; i < this.listButton.length; i++) {
            _loop(i);
          }

          this.shedu = this.schedule(() => {
            this.totalOverText.string = this.totalBetOver.toString();
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
            this.totalUnderText.string = this.totalBetUnder.toString();
            this.countPlayerUnderLb.string = this.countPlayerUnder.toString();
            tween(this.totalUnderText.node).to(0.5, {
              scale: new Vec3(1.5, 1.5)
            }).call(() => {
              tween(this.totalUnderText.node).to(0.5, {
                scale: new Vec3(1, 1)
              }).start();
            }).start();
          }, 1);
          this.plate.getComponent(Animation).play("plateIn");
          this.displayImagesResult();
          this.displayImagesResultHistory();
          this.startCountdown(this.countdownTimerBet, 40);
          this.scheduleRandomDice();
          this.createNodeHistory();
          this.createNodeDice1History();
          this.createNodeDice2History();
          this.createNodeDice3History();
        }

        update(deltaTime) {
          console.log(this.editBoxChat.isFocused());

          if (this.editBoxChat.isFocused()) {
            this.editBoxChat.node.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          }

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
            this.totalUserBetUnder = this.totalUserBetUnder + Score + this.cloneuserValuebetUnder;
            this.cloneuserValuebetUnder = 0;
            this.UnderLableValueUser.string = this.totalUserBetUnder.toString();
          }

          if (this.checkOver === true) {
            this.totalUserBetOver = this.totalUserBetOver + Score + this.cloneuserValuebetOver;
            this.cloneuserValuebetOver = 0;
            this.OverLableValueUser.string = this.totalUserBetOver.toString();
          }
        }

        bet() {
          if (this.checkOver === true && this.balanceUser >= this.totalUserBetOver && this.balanceUser !== 0) {
            this.balanceUser = this.balanceUser - this.totalUserBetOver;
            this.userValuebetOver += this.totalUserBetOver;
            this.totalUserBetOver = 0;
            this.OverLableValueUser.string = this.totalUserBetOver.toString();
            this.OverLableValueUser.string = this.userValuebetOver.toString();
            this.cloneuserValuebetOver = this.userValuebetOver;
          } else if (this.checkUnder === true && this.balanceUser >= this.totalUserBetUnder && this.balanceUser !== 0) {
            this.balanceUser = this.balanceUser - this.totalUserBetUnder;
            this.userValuebetUnder += this.totalUserBetUnder;
            this.totalUserBetUnder = 0;
            this.OverLableValueUser.string = this.userValuebetUnder.toString();
            this.UnderLableValueUser.string = this.totalUserBetUnder.toString();
            this.cloneuserValuebetUnder = this.userValuebetUnder;
          } else {
            console.log("nghèo");
          }
        }

        scheduleRandomDice() {
          var randomValues = this.getRandomValues();
          this.displayImages(randomValues);
          this.sum = this.sumValues(randomValues);
          var dickAnimationFinished = false;
          setTimeout(() => {
            this.plate.getComponent(Animation).play("Dick");
            this.startCountdownResult(this.countdownTimerResult, 15);
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
              }
            });
            setTimeout(() => {
              this.countDownResult.node.active = false;

              if (dickAnimationFinished) {
                this.plate.active = true;

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
                this.UnderLableValueUser.string = this.totalUserBetUnder.toString();
                this.OverLableValueUser.string = this.totalUserBetOver.toString();
                this.cloneBalanUser = this.balanceUser;
                console.log(this.balanceUser);
                console.log(this.cloneBalanUser);
                this.plate.getComponent(Animation).play("plateIn");
                this.countDown.node.active = true;
                this.startCountdown(this.countdownTimerBet, 40);
                this.scheduleRandomDice();
              } else {
                this.scheduleRandomDice();
              }
            }, 1500);
          }, 10000);
        }

        getRandomValues() {
          var indices = [1, 2, 3, 4, 5, 6];
          this.ramdomDice = [];

          for (var i = 0; i < 3; i++) {
            var randomIndex = Math.floor(Math.random() * indices.length);
            this.ramdomDice.push(indices[randomIndex]);
          }

          return this.ramdomDice;
        }

        sumValues(array) {
          return array.reduce((sum, currentValue) => sum + currentValue, 0);
        }

        displayImages(randomValues) {
          randomValues.forEach((value, index) => {
            var spriteFrame = this.dice1[value - 1];
            var sprite = this.imageNodes[index].getComponent(Sprite);

            if (sprite && spriteFrame) {
              sprite.spriteFrame = spriteFrame;
            } else {
              console.error("Sprite or SpriteFrame is missing!");
            }
          });
        }

        displayImagesResult() {
          this.imageNodesResult.forEach((node, index) => {
            var value = this.results[index];

            if (value !== undefined) {
              // Kiểm tra xem giá trị có tồn tại hay không
              var sprite = node.getComponent(Sprite);

              if (sprite) {
                var spriteFrame;

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
            var value = this.resultsHistory[index];

            if (value !== undefined) {
              // Kiểm tra xem giá trị có tồn tại hay không
              var sprite = node.getComponent(Sprite);

              if (sprite) {
                var spriteFrame;

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
          var countdownInterval = setInterval(() => {
            this.countdownTimerResult--;

            if (this.countdownTimerResult <= 0) {
              clearInterval(countdownInterval);
            }
          }, 1000);
        }

        startCountdown(timeCountDown, timereset) {
          this.countdownTimerBet = 40;
          var countdownInterval = setInterval(() => {
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
          this.Chat.active = true;
          this.unchat.active = true;
          tween(this.Table).to(0.3, {
            position: new Vec3(this.Table.position.x - 130, this.Table.position.y)
          }).start();
          tween(this.Chat).to(0.3, {
            position: new Vec3(this.Chat.position.x - 300, this.Chat.position.y)
          }).start();
        }

        chatUnAppear() {
          this.Chat.active = false;
          this.unchat.active = false;
          tween(this.Table).to(0.3, {
            position: new Vec3(this.Table.position.x + 130, this.Table.position.y)
          }).start();
          tween(this.Chat).to(0.3, {
            position: new Vec3(this.Chat.position.x + 300, this.Chat.position.y)
          }).start();
        } // private onDestroy() {
        //   // Hủy lắng nghe sự kiện bàn phím khi scene bị hủy
        //   input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        // }


        onKeyDown(event) {
          console.log("aaaa");

          if (this.editBoxChat && event.keyCode === KeyCode.ENTER) {
            var message = this.editBoxChat.string;
            this.handleChatMessage(message); // Xóa nội dung trong EditBox sau khi gửi tin nhắn

            this.editBoxChat.string = "";
          }
        }

        handleChatMessage(message) {
          console.log("Received message:", message);
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
          var gapBetweenColumns = this.columnWidth * 1.5;
          var lineContainer = new Node();
          lineContainer.parent = this.LineNode;
          var graphics = lineContainer.addComponent(Graphics);
          graphics.lineWidth = 10;
          graphics.strokeColor = new Color(255, 0, 0);
          var prevColumnNode = null;
          this.NumberNodesResultHistory.forEach((node, index) => {
            var value = this.columnValues[index];

            if (value !== undefined) {
              var sprite = node.getComponent(Sprite);

              if (sprite) {
                var spriteFrame;

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
          var gapBetweenColumns = this.columnWidth * 1.5;
          var lineContainer = new Node();
          lineContainer.parent = this.LineNodeDice1;
          var graphics = lineContainer.addComponent(Graphics);
          graphics.lineWidth = 5;
          graphics.strokeColor = new Color(247, 62, 245);
          var prevColumnNode = null;
          this.ListDice1Node.forEach((node, index) => {
            var value = this.ListDice1His[index];

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
          var gapBetweenColumns = this.columnWidth * 1.5;
          var lineContainer = new Node();
          lineContainer.parent = this.LineNodeDice2;
          var graphics = lineContainer.addComponent(Graphics);
          graphics.lineWidth = 5;
          graphics.strokeColor = new Color(222, 51, 70);
          var prevColumnNode = null;
          this.ListDice2Node.forEach((node, index) => {
            var value = this.ListDice2His[index];

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
          var gapBetweenColumns = this.columnWidth * 1.5;
          var lineContainer = new Node();
          lineContainer.parent = this.LineNodeDice3;
          var graphics = lineContainer.addComponent(Graphics);
          graphics.lineWidth = 5;
          graphics.strokeColor = new Color(78, 251, 151);
          var prevColumnNode = null;
          this.ListDice3Node.forEach((node, index) => {
            var value = this.ListDice3His[index];

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
          var columnNode = instantiate(this.black);
          return columnNode;
        }

        clearLineNode(LineNode) {
          // Kiểm tra xem lineNode có tồn tại không
          if (LineNode) {
            // Xoá tất cả các nút con của lineNode
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
            this.totalUserBetOver = 0;
            this.totalUserBetUnder = 0;
            this.UnderLableValueUser.string = this.userValuebetUnder.toString();
            this.OverLableValueUser.string = this.userValuebetOver.toString();
          }
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
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "LineNodeDice2", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "LineNodeDice3", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Dice1Hist", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Dice2Hist", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Dice3ist", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "page1His", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "page2His", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Dice1His", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Dice2His", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Dice3His", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "UnderLableValueUser", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "OverLableValueUser", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "totalUnderText", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "totalOverText", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "countDown", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "countDownResult", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "countPlayerOverLb", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "countPlayerUnderLb", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "value1k", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "value10k", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "value50k", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "value100k", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "value500k", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "value10M", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "value50M", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "unDice1His", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "unDice2His", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "unDice3His", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "page2Button1", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "page2Button2", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "dice1", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "imageNodes", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "imageNodesResult", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "imageNodesResultHistory", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "NumberNodesResultHistory", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "ListDice1Node", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "ListDice2Node", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "ListDice3Node", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "listSpriteResult", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "listSpriteResultHistory", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "listSpritetNumberHistory", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "editBoxChat", [_dec58], {
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
//# sourceMappingURL=c683035c8bbea7863eeffd339947c4b8264b092b.js.map