gdjs.Death_32ScreenCode = {};
gdjs.Death_32ScreenCode.GDCoinObjects1= [];
gdjs.Death_32ScreenCode.GDCoinObjects2= [];
gdjs.Death_32ScreenCode.GDPlayerObjects1= [];
gdjs.Death_32ScreenCode.GDPlayerObjects2= [];
gdjs.Death_32ScreenCode.GDFloor_95EnemyObjects1= [];
gdjs.Death_32ScreenCode.GDFloor_95EnemyObjects2= [];
gdjs.Death_32ScreenCode.GDFlying_95EnemyObjects1= [];
gdjs.Death_32ScreenCode.GDFlying_95EnemyObjects2= [];
gdjs.Death_32ScreenCode.GDShooting_95EnemyObjects1= [];
gdjs.Death_32ScreenCode.GDShooting_95EnemyObjects2= [];
gdjs.Death_32ScreenCode.GDFinishObjects1= [];
gdjs.Death_32ScreenCode.GDFinishObjects2= [];
gdjs.Death_32ScreenCode.GDPlatformObjects1= [];
gdjs.Death_32ScreenCode.GDPlatformObjects2= [];
gdjs.Death_32ScreenCode.GDSpikeObjects1= [];
gdjs.Death_32ScreenCode.GDSpikeObjects2= [];
gdjs.Death_32ScreenCode.GDcoins_95counterObjects1= [];
gdjs.Death_32ScreenCode.GDcoins_95counterObjects2= [];
gdjs.Death_32ScreenCode.GDlives_95counterObjects1= [];
gdjs.Death_32ScreenCode.GDlives_95counterObjects2= [];
gdjs.Death_32ScreenCode.GDtime_95takenObjects1= [];
gdjs.Death_32ScreenCode.GDtime_95takenObjects2= [];
gdjs.Death_32ScreenCode.GDEnemyBlock_95LeftObjects1= [];
gdjs.Death_32ScreenCode.GDEnemyBlock_95LeftObjects2= [];
gdjs.Death_32ScreenCode.GDEnemyBlock_95RightObjects1= [];
gdjs.Death_32ScreenCode.GDEnemyBlock_95RightObjects2= [];
gdjs.Death_32ScreenCode.GDShoot_95BoxObjects1= [];
gdjs.Death_32ScreenCode.GDShoot_95BoxObjects2= [];
gdjs.Death_32ScreenCode.GDBulletObjects1= [];
gdjs.Death_32ScreenCode.GDBulletObjects2= [];
gdjs.Death_32ScreenCode.GDLavaObjects1= [];
gdjs.Death_32ScreenCode.GDLavaObjects2= [];
gdjs.Death_32ScreenCode.GDNewObjectObjects1= [];
gdjs.Death_32ScreenCode.GDNewObjectObjects2= [];

gdjs.Death_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Death_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Death_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Death_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Death_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Death_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Death_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Death_32ScreenCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Death_32ScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Death_32ScreenCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.Death_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Death_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Death_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Death_32ScreenCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Death_32ScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Death_32ScreenCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.Death_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Death_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Death_32ScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Opening Screen");
}}

}


};

gdjs.Death_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Death_32ScreenCode.GDCoinObjects1.length = 0;
gdjs.Death_32ScreenCode.GDCoinObjects2.length = 0;
gdjs.Death_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.Death_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.Death_32ScreenCode.GDFloor_95EnemyObjects1.length = 0;
gdjs.Death_32ScreenCode.GDFloor_95EnemyObjects2.length = 0;
gdjs.Death_32ScreenCode.GDFlying_95EnemyObjects1.length = 0;
gdjs.Death_32ScreenCode.GDFlying_95EnemyObjects2.length = 0;
gdjs.Death_32ScreenCode.GDShooting_95EnemyObjects1.length = 0;
gdjs.Death_32ScreenCode.GDShooting_95EnemyObjects2.length = 0;
gdjs.Death_32ScreenCode.GDFinishObjects1.length = 0;
gdjs.Death_32ScreenCode.GDFinishObjects2.length = 0;
gdjs.Death_32ScreenCode.GDPlatformObjects1.length = 0;
gdjs.Death_32ScreenCode.GDPlatformObjects2.length = 0;
gdjs.Death_32ScreenCode.GDSpikeObjects1.length = 0;
gdjs.Death_32ScreenCode.GDSpikeObjects2.length = 0;
gdjs.Death_32ScreenCode.GDcoins_95counterObjects1.length = 0;
gdjs.Death_32ScreenCode.GDcoins_95counterObjects2.length = 0;
gdjs.Death_32ScreenCode.GDlives_95counterObjects1.length = 0;
gdjs.Death_32ScreenCode.GDlives_95counterObjects2.length = 0;
gdjs.Death_32ScreenCode.GDtime_95takenObjects1.length = 0;
gdjs.Death_32ScreenCode.GDtime_95takenObjects2.length = 0;
gdjs.Death_32ScreenCode.GDEnemyBlock_95LeftObjects1.length = 0;
gdjs.Death_32ScreenCode.GDEnemyBlock_95LeftObjects2.length = 0;
gdjs.Death_32ScreenCode.GDEnemyBlock_95RightObjects1.length = 0;
gdjs.Death_32ScreenCode.GDEnemyBlock_95RightObjects2.length = 0;
gdjs.Death_32ScreenCode.GDShoot_95BoxObjects1.length = 0;
gdjs.Death_32ScreenCode.GDShoot_95BoxObjects2.length = 0;
gdjs.Death_32ScreenCode.GDBulletObjects1.length = 0;
gdjs.Death_32ScreenCode.GDBulletObjects2.length = 0;
gdjs.Death_32ScreenCode.GDLavaObjects1.length = 0;
gdjs.Death_32ScreenCode.GDLavaObjects2.length = 0;
gdjs.Death_32ScreenCode.GDNewObjectObjects1.length = 0;
gdjs.Death_32ScreenCode.GDNewObjectObjects2.length = 0;

gdjs.Death_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Death_32ScreenCode'] = gdjs.Death_32ScreenCode;
