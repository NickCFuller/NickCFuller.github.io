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
gdjs.Death_32ScreenCode.GDpoints_95counterObjects1= [];
gdjs.Death_32ScreenCode.GDpoints_95counterObjects2= [];
gdjs.Death_32ScreenCode.GDEnemyBlock_95LeftObjects1= [];
gdjs.Death_32ScreenCode.GDEnemyBlock_95LeftObjects2= [];
gdjs.Death_32ScreenCode.GDEnemyBlock_95RightObjects1= [];
gdjs.Death_32ScreenCode.GDEnemyBlock_95RightObjects2= [];
gdjs.Death_32ScreenCode.GDBulletObjects1= [];
gdjs.Death_32ScreenCode.GDBulletObjects2= [];
gdjs.Death_32ScreenCode.GDLavaObjects1= [];
gdjs.Death_32ScreenCode.GDLavaObjects2= [];
gdjs.Death_32ScreenCode.GDExtra_95LifeObjects1= [];
gdjs.Death_32ScreenCode.GDExtra_95LifeObjects2= [];
gdjs.Death_32ScreenCode.GDpopupwindowObjects1= [];
gdjs.Death_32ScreenCode.GDpopupwindowObjects2= [];
gdjs.Death_32ScreenCode.GDDARKOVERLAYObjects1= [];
gdjs.Death_32ScreenCode.GDDARKOVERLAYObjects2= [];
gdjs.Death_32ScreenCode.GDEnd_95TitleObjects1= [];
gdjs.Death_32ScreenCode.GDEnd_95TitleObjects2= [];
gdjs.Death_32ScreenCode.GDfinishingpointsObjects1= [];
gdjs.Death_32ScreenCode.GDfinishingpointsObjects2= [];
gdjs.Death_32ScreenCode.GDfinishingtimeObjects1= [];
gdjs.Death_32ScreenCode.GDfinishingtimeObjects2= [];
gdjs.Death_32ScreenCode.GDfinishingcoinsObjects1= [];
gdjs.Death_32ScreenCode.GDfinishingcoinsObjects2= [];

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


{
gdjs.copyArray(runtimeScene.getObjects("finishingcoins"), gdjs.Death_32ScreenCode.GDfinishingcoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("finishingpoints"), gdjs.Death_32ScreenCode.GDfinishingpointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("finishingtime"), gdjs.Death_32ScreenCode.GDfinishingtimeObjects1);
{for(var i = 0, len = gdjs.Death_32ScreenCode.GDfinishingpointsObjects1.length ;i < len;++i) {
    gdjs.Death_32ScreenCode.GDfinishingpointsObjects1[i].setString("Total Points: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) + "/165");
}
}{for(var i = 0, len = gdjs.Death_32ScreenCode.GDfinishingtimeObjects1.length ;i < len;++i) {
    gdjs.Death_32ScreenCode.GDfinishingtimeObjects1[i].setString("Total Time: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.Death_32ScreenCode.GDfinishingcoinsObjects1.length ;i < len;++i) {
    gdjs.Death_32ScreenCode.GDfinishingcoinsObjects1[i].setString("Total Coins: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) + "/17");
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
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
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
gdjs.Death_32ScreenCode.GDpoints_95counterObjects1.length = 0;
gdjs.Death_32ScreenCode.GDpoints_95counterObjects2.length = 0;
gdjs.Death_32ScreenCode.GDEnemyBlock_95LeftObjects1.length = 0;
gdjs.Death_32ScreenCode.GDEnemyBlock_95LeftObjects2.length = 0;
gdjs.Death_32ScreenCode.GDEnemyBlock_95RightObjects1.length = 0;
gdjs.Death_32ScreenCode.GDEnemyBlock_95RightObjects2.length = 0;
gdjs.Death_32ScreenCode.GDBulletObjects1.length = 0;
gdjs.Death_32ScreenCode.GDBulletObjects2.length = 0;
gdjs.Death_32ScreenCode.GDLavaObjects1.length = 0;
gdjs.Death_32ScreenCode.GDLavaObjects2.length = 0;
gdjs.Death_32ScreenCode.GDExtra_95LifeObjects1.length = 0;
gdjs.Death_32ScreenCode.GDExtra_95LifeObjects2.length = 0;
gdjs.Death_32ScreenCode.GDpopupwindowObjects1.length = 0;
gdjs.Death_32ScreenCode.GDpopupwindowObjects2.length = 0;
gdjs.Death_32ScreenCode.GDDARKOVERLAYObjects1.length = 0;
gdjs.Death_32ScreenCode.GDDARKOVERLAYObjects2.length = 0;
gdjs.Death_32ScreenCode.GDEnd_95TitleObjects1.length = 0;
gdjs.Death_32ScreenCode.GDEnd_95TitleObjects2.length = 0;
gdjs.Death_32ScreenCode.GDfinishingpointsObjects1.length = 0;
gdjs.Death_32ScreenCode.GDfinishingpointsObjects2.length = 0;
gdjs.Death_32ScreenCode.GDfinishingtimeObjects1.length = 0;
gdjs.Death_32ScreenCode.GDfinishingtimeObjects2.length = 0;
gdjs.Death_32ScreenCode.GDfinishingcoinsObjects1.length = 0;
gdjs.Death_32ScreenCode.GDfinishingcoinsObjects2.length = 0;

gdjs.Death_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Death_32ScreenCode'] = gdjs.Death_32ScreenCode;
