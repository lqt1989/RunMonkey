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
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0,-640);

        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        cc.PhysicsManager.DrawBits.e_pairBit |
        cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        cc.PhysicsManager.DrawBits.e_jointBit |
        cc.PhysicsManager.DrawBits.e_shapeBit;

        this.bool = this.node.getChildByName("bool");
        this.floor = this.node.getChildByName("floor");

        this.add = 0;
    },

    start () {

    },

    update (dt) {
        this.add += 1;
        if (this.add == 300)
        {
            var node = cc.instantiate(this.bool)
            node.x = 300
            node.y = 500
            this.node.addChild(node)

            var node2 = cc.instantiate(this.floor)
            node2.x = 600
            node2.height = 300

            this.node.addChild(node2)
            node2.getComponent(cc.PhysicsBoxCollider).size.height = 300
            node2.getComponent(cc.PhysicsBoxCollider).apply()

            
        }
    },
});
