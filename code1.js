gdjs.Closing_32ScreenCode = {};
gdjs.Closing_32ScreenCode.GDCoinObjects1= [];
gdjs.Closing_32ScreenCode.GDCoinObjects2= [];
gdjs.Closing_32ScreenCode.GDPlayerObjects1= [];
gdjs.Closing_32ScreenCode.GDPlayerObjects2= [];
gdjs.Closing_32ScreenCode.GDFloor_95EnemyObjects1= [];
gdjs.Closing_32ScreenCode.GDFloor_95EnemyObjects2= [];
gdjs.Closing_32ScreenCode.GDFlying_95EnemyObjects1= [];
gdjs.Closing_32ScreenCode.GDFlying_95EnemyObjects2= [];
gdjs.Closing_32ScreenCode.GDShooting_95EnemyObjects1= [];
gdjs.Closing_32ScreenCode.GDShooting_95EnemyObjects2= [];
gdjs.Closing_32ScreenCode.GDFinishObjects1= [];
gdjs.Closing_32ScreenCode.GDFinishObjects2= [];
gdjs.Closing_32ScreenCode.GDPlatformObjects1= [];
gdjs.Closing_32ScreenCode.GDPlatformObjects2= [];
gdjs.Closing_32ScreenCode.GDSpikeObjects1= [];
gdjs.Closing_32ScreenCode.GDSpikeObjects2= [];
gdjs.Closing_32ScreenCode.GDcoins_95counterObjects1= [];
gdjs.Closing_32ScreenCode.GDcoins_95counterObjects2= [];
gdjs.Closing_32ScreenCode.GDlives_95counterObjects1= [];
gdjs.Closing_32ScreenCode.GDlives_95counterObjects2= [];
gdjs.Closing_32ScreenCode.GDtime_95takenObjects1= [];
gdjs.Closing_32ScreenCode.GDtime_95takenObjects2= [];
gdjs.Closing_32ScreenCode.GDpoints_95counterObjects1= [];
gdjs.Closing_32ScreenCode.GDpoints_95counterObjects2= [];
gdjs.Closing_32ScreenCode.GDEnemyBlock_95LeftObjects1= [];
gdjs.Closing_32ScreenCode.GDEnemyBlock_95LeftObjects2= [];
gdjs.Closing_32ScreenCode.GDEnemyBlock_95RightObjects1= [];
gdjs.Closing_32ScreenCode.GDEnemyBlock_95RightObjects2= [];
gdjs.Closing_32ScreenCode.GDBulletObjects1= [];
gdjs.Closing_32ScreenCode.GDBulletObjects2= [];
gdjs.Closing_32ScreenCode.GDLavaObjects1= [];
gdjs.Closing_32ScreenCode.GDLavaObjects2= [];
gdjs.Closing_32ScreenCode.GDExtra_95LifeObjects1= [];
gdjs.Closing_32ScreenCode.GDExtra_95LifeObjects2= [];
gdjs.Closing_32ScreenCode.GDpopupwindowObjects1= [];
gdjs.Closing_32ScreenCode.GDpopupwindowObjects2= [];
gdjs.Closing_32ScreenCode.GDDARKOVERLAYObjects1= [];
gdjs.Closing_32ScreenCode.GDDARKOVERLAYObjects2= [];
gdjs.Closing_32ScreenCode.GDEndTitleObjects1= [];
gdjs.Closing_32ScreenCode.GDEndTitleObjects2= [];
gdjs.Closing_32ScreenCode.GDfinalpointsObjects1= [];
gdjs.Closing_32ScreenCode.GDfinalpointsObjects2= [];
gdjs.Closing_32ScreenCode.GDfinalcoinsObjects1= [];
gdjs.Closing_32ScreenCode.GDfinalcoinsObjects2= [];
gdjs.Closing_32ScreenCode.GDfinaltimeObjects1= [];
gdjs.Closing_32ScreenCode.GDfinaltimeObjects2= [];
gdjs.Closing_32ScreenCode.GDplayagainObjects1= [];
gdjs.Closing_32ScreenCode.GDplayagainObjects2= [];

gdjs.Closing_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Closing_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Closing_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Closing_32ScreenCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("finalcoins"), gdjs.Closing_32ScreenCode.GDfinalcoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("finalpoints"), gdjs.Closing_32ScreenCode.GDfinalpointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("finaltime"), gdjs.Closing_32ScreenCode.GDfinaltimeObjects1);
{for(var i = 0, len = gdjs.Closing_32ScreenCode.GDfinalpointsObjects1.length ;i < len;++i) {
    gdjs.Closing_32ScreenCode.GDfinalpointsObjects1[i].setString("Total Points: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) + "/165");
}
}{for(var i = 0, len = gdjs.Closing_32ScreenCode.GDfinalcoinsObjects1.length ;i < len;++i) {
    gdjs.Closing_32ScreenCode.GDfinalcoinsObjects1[i].setString("Total Coins: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) + "/17");
}
}{for(var i = 0, len = gdjs.Closing_32ScreenCode.GDfinaltimeObjects1.length ;i < len;++i) {
    gdjs.Closing_32ScreenCode.GDfinaltimeObjects1[i].setString("Time taken: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{


gdjs.Closing_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Closing_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6));
}if (gdjs.Closing_32ScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{


gdjs.Closing_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Closing_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5));
}if (gdjs.Closing_32ScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}}

}


{


gdjs.Closing_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Closing_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7));
}if (gdjs.Closing_32ScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}}

}


{


gdjs.Closing_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Closing_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.Closing_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Opening Screen");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


gdjs.Closing_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Closing_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Closing_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Closing_32ScreenCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Closing_32ScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Closing_32ScreenCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.Closing_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Closing_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Closing_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Closing_32ScreenCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Closing_32ScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Closing_32ScreenCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


};

gdjs.Closing_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Closing_32ScreenCode.GDCoinObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDCoinObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDFloor_95EnemyObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDFloor_95EnemyObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDFlying_95EnemyObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDFlying_95EnemyObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDShooting_95EnemyObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDShooting_95EnemyObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDFinishObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDFinishObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDPlatformObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDPlatformObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDSpikeObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDSpikeObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDcoins_95counterObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDcoins_95counterObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDlives_95counterObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDlives_95counterObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDtime_95takenObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDtime_95takenObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDpoints_95counterObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDpoints_95counterObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDEnemyBlock_95LeftObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDEnemyBlock_95LeftObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDEnemyBlock_95RightObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDEnemyBlock_95RightObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDBulletObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDBulletObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDLavaObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDLavaObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDExtra_95LifeObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDExtra_95LifeObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDpopupwindowObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDpopupwindowObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDDARKOVERLAYObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDDARKOVERLAYObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDEndTitleObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDEndTitleObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDfinalpointsObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDfinalpointsObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDfinalcoinsObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDfinalcoinsObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDfinaltimeObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDfinaltimeObjects2.length = 0;
gdjs.Closing_32ScreenCode.GDplayagainObjects1.length = 0;
gdjs.Closing_32ScreenCode.GDplayagainObjects2.length = 0;

gdjs.Closing_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Closing_32ScreenCode'] = gdjs.Closing_32ScreenCode;
