System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, math, Node, tween, Vec3, Animation, SpriteFrame, Sprite, EditBox, KeyCode, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _crd, ccclass, property, GameC;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5587PqHphLwpcljjLD9ABa", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'math', 'Node', 'tween', 'Vec3', 'Animation', 'SpriteFrame', 'Sprite', 'input', 'Input', 'macro', 'EditBox', 'NodeEventType', 'EventKeyboard', 'KeyCode']);

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
        type: Label
      }), _dec12 = property({
        type: Label
      }), _dec13 = property({
        type: Label
      }), _dec14 = property({
        type: Label
      }), _dec15 = property({
        type: Label
      }), _dec16 = property({
        type: Label
      }), _dec17 = property({
        type: Button
      }), _dec18 = property({
        type: Button
      }), _dec19 = property({
        type: Button
      }), _dec20 = property({
        type: Button
      }), _dec21 = property({
        type: Button
      }), _dec22 = property({
        type: Button
      }), _dec23 = property({
        type: Button
      }), _dec24 = property({
        type: SpriteFrame
      }), _dec25 = property({
        type: [Node]
      }), _dec26 = property({
        type: [Node]
      }), _dec27 = property({
        type: SpriteFrame
      }), _dec28 = property({
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

          //Lable
          _initializerDefineProperty(this, "UnderLableValueUser", _descriptor10, this);

          _initializerDefineProperty(this, "OverLableValueUser", _descriptor11, this);

          _initializerDefineProperty(this, "totalUnderText", _descriptor12, this);

          _initializerDefineProperty(this, "totalOverText", _descriptor13, this);

          _initializerDefineProperty(this, "countDown", _descriptor14, this);

          _initializerDefineProperty(this, "countDownResult", _descriptor15, this);

          //BUTTON
          _initializerDefineProperty(this, "value1k", _descriptor16, this);

          _initializerDefineProperty(this, "value10k", _descriptor17, this);

          _initializerDefineProperty(this, "value50k", _descriptor18, this);

          _initializerDefineProperty(this, "value100k", _descriptor19, this);

          _initializerDefineProperty(this, "value500k", _descriptor20, this);

          _initializerDefineProperty(this, "value10M", _descriptor21, this);

          _initializerDefineProperty(this, "value50M", _descriptor22, this);

          _initializerDefineProperty(this, "dice1", _descriptor23, this);

          _initializerDefineProperty(this, "imageNodes", _descriptor24, this);

          _initializerDefineProperty(this, "imageNodesResult", _descriptor25, this);

          _initializerDefineProperty(this, "listSpriteResult", _descriptor26, this);

          _initializerDefineProperty(this, "editBoxChat", _descriptor27, this);

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
          this.userValuebetUnder = 0;
          this.userValuebetOver = 0;
          this.countdownTimerBet = 40;
          this.countdownTimerResult = 15;
          this.results = [];
        }

        start() {
          var _this = this;

          // input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          this.listButton = [this.value1k, this.value10k, this.value50k, this.value100k, this.value500k, this.value10M, this.value50M];

          var _loop = function _loop(i) {
            var button = _this.listButton[i];
            button.node.on(Button.EventType.CLICK, () => {
              if (_this.balanceUser > _this.listScore[i] && _this.balanceUser > _this.totalUserBetOver + _this.totalUserBetUnder) {
                // this.balanceUser = this.balanceUser - this.listScore[i];
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
          this.startCountdown(this.countdownTimerBet, 40);
          this.scheduleRandomDice();
        }

        update(deltaTime) {
          console.log(this.editBoxChat.isFocused());

          if (this.editBoxChat.isFocused()) {
            this.editBoxChat.node.on(Node.EventType.KEY_DOWN, this.onKeyDown, this);
          }

          if (this.gameEnd === false) {
            this.totalBetOver = this.totalBetOver + math.randomRangeInt(1000, 10000);
            this.totalBetUnder = this.totalBetUnder + math.randomRangeInt(1000, 10000);
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
            this.UnderLableValueUser.string = this.totalUserBetUnder.toString();
          }

          if (this.checkOver === true) {
            this.totalUserBetOver = this.totalUserBetOver + Score;
            this.OverLableValueUser.string = this.totalUserBetOver.toString();
          }
        }

        bet() {
          if (this.checkOver === true && this.balanceUser >= this.totalUserBetOver) {
            this.balanceUser = this.balanceUser - this.totalUserBetOver;
            this.userValuebetOver += this.totalUserBetOver;
            this.totalUserBetOver = 0;
            this.OverLableValueUser.string = this.totalUserBetUnder.toString();
          } else if (this.checkUnder === true && this.balanceUser >= this.totalUserBetUnder) {
            this.balanceUser = this.balanceUser - this.totalUserBetUnder;
            this.userValuebetUnder += this.totalUserBetUnder;
            this.totalUserBetUnder = 0;
            this.UnderLableValueUser.string = this.totalUserBetOver.toString();
            console.log("betUnder", this.userValuebetUnder);
            console.log(this.balanceUser);
          } else {
            console.log("nghèo");
          }
        }

        scheduleRandomDice() {
          var randomValues = this.getRandomValues();
          this.displayImages(randomValues);
          var sum = this.sumValues(randomValues);
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

              if (sum < 10) {
                this.updateResults(0);
                this.displayImagesResult();
                this.EffectUnder.active = true;
                this.balanceUser += this.userValuebetUnder * 2;
              } else {
                this.updateResults(1);
                this.displayImagesResult();
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
                this.plate.getComponent(Animation).play("plateIn");
                this.countDown.node.active = true;
                this.startCountdown(this.countdownTimerBet, 40);
                this.scheduleRandomDice();
              } else {
                this.scheduleRandomDice();
              }
            }, 15000);
          }, 40000);
        }

        getRandomValues() {
          var indices = [1, 2, 3, 4, 5, 6];
          var randomIndices = [];

          for (var i = 0; i < 3; i++) {
            var randomIndex = Math.floor(Math.random() * indices.length);
            randomIndices.push(indices[randomIndex]);
          }

          return randomIndices;
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
          if (this.editBoxChat && event.keyCode === KeyCode.ENTER) {
            console.log("aaaaa");
            var message = this.editBoxChat.string;
            this.handleChatMessage(message); // Xóa nội dung trong EditBox sau khi gửi tin nhắn

            this.editBoxChat.string = "";
          }
        }

        handleChatMessage(message) {
          // Xử lý tin nhắn ở đây, ví dụ: hiển thị trên khung chat
          console.log("Received message:", message);
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "UnderLableValueUser", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "OverLableValueUser", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "totalUnderText", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "totalOverText", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "countDown", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "countDownResult", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "value1k", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "value10k", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "value50k", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "value100k", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "value500k", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "value10M", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "value50M", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "dice1", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "imageNodes", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "imageNodesResult", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "listSpriteResult", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "editBoxChat", [_dec28], {
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
//# sourceMappingURL=efe948e410d1cf9507c790bb8131334c5f6eb58c.js.map