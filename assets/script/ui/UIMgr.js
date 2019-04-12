// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        var self = this;
        cc.loader.loadRes("prefab/ui/node_leftdown", function (err, prefab) {
            var newNode = cc.instantiate(prefab);
            self.node.addChild(newNode);
            self.btn1 = newNode.getChildByName("btn_1");
            self.btn2 = newNode.getChildByName("btn_2");

            self.btn1.on(cc.Node.EventType.TOUCH_START, function (event) {
                self.OnBtnDown(1)
              });
            self.btn2.on(cc.Node.EventType.TOUCH_START, function (event) {
                self.OnBtnDown(2)
              });
        });
    },

    start () {
        var time = 543;
        log("bugbugbug"+123+time);
    },

    OnBtnDown(idx){    
        log("click btn is >>>"+idx);
    }
    // update (dt) {},
});
