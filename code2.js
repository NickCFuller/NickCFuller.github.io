gdjs.AchievementsCode = {};
gdjs.AchievementsCode.GDCoinObjects1= [];
gdjs.AchievementsCode.GDCoinObjects2= [];
gdjs.AchievementsCode.GDPlayerObjects1= [];
gdjs.AchievementsCode.GDPlayerObjects2= [];
gdjs.AchievementsCode.GDFloor_95EnemyObjects1= [];
gdjs.AchievementsCode.GDFloor_95EnemyObjects2= [];
gdjs.AchievementsCode.GDFlying_95EnemyObjects1= [];
gdjs.AchievementsCode.GDFlying_95EnemyObjects2= [];
gdjs.AchievementsCode.GDShooting_95EnemyObjects1= [];
gdjs.AchievementsCode.GDShooting_95EnemyObjects2= [];
gdjs.AchievementsCode.GDFinishObjects1= [];
gdjs.AchievementsCode.GDFinishObjects2= [];
gdjs.AchievementsCode.GDPlatformObjects1= [];
gdjs.AchievementsCode.GDPlatformObjects2= [];
gdjs.AchievementsCode.GDSpikeObjects1= [];
gdjs.AchievementsCode.GDSpikeObjects2= [];
gdjs.AchievementsCode.GDcoins_95counterObjects1= [];
gdjs.AchievementsCode.GDcoins_95counterObjects2= [];
gdjs.AchievementsCode.GDlives_95counterObjects1= [];
gdjs.AchievementsCode.GDlives_95counterObjects2= [];
gdjs.AchievementsCode.GDtime_95takenObjects1= [];
gdjs.AchievementsCode.GDtime_95takenObjects2= [];
gdjs.AchievementsCode.GDpoints_95counterObjects1= [];
gdjs.AchievementsCode.GDpoints_95counterObjects2= [];
gdjs.AchievementsCode.GDEnemyBlock_95LeftObjects1= [];
gdjs.AchievementsCode.GDEnemyBlock_95LeftObjects2= [];
gdjs.AchievementsCode.GDEnemyBlock_95RightObjects1= [];
gdjs.AchievementsCode.GDEnemyBlock_95RightObjects2= [];
gdjs.AchievementsCode.GDBulletObjects1= [];
gdjs.AchievementsCode.GDBulletObjects2= [];
gdjs.AchievementsCode.GDLavaObjects1= [];
gdjs.AchievementsCode.GDLavaObjects2= [];
gdjs.AchievementsCode.GDExtra_95LifeObjects1= [];
gdjs.AchievementsCode.GDExtra_95LifeObjects2= [];
gdjs.AchievementsCode.GDpopupwindowObjects1= [];
gdjs.AchievementsCode.GDpopupwindowObjects2= [];
gdjs.AchievementsCode.GDDARKOVERLAYObjects1= [];
gdjs.AchievementsCode.GDDARKOVERLAYObjects2= [];
gdjs.AchievementsCode.GDTitleObjects1= [];
gdjs.AchievementsCode.GDTitleObjects2= [];
gdjs.AchievementsCode.GDBestTotalCoinsObjects1= [];
gdjs.AchievementsCode.GDBestTotalCoinsObjects2= [];
gdjs.AchievementsCode.GDBestTimeObjects1= [];
gdjs.AchievementsCode.GDBestTimeObjects2= [];
gdjs.AchievementsCode.GDBestHighscoreObjects1= [];
gdjs.AchievementsCode.GDBestHighscoreObjects2= [];
gdjs.AchievementsCode.GDNewObjectObjects1= [];
gdjs.AchievementsCode.GDNewObjectObjects2= [];
gdjs.AchievementsCode.GDbackObjects1= [];
gdjs.AchievementsCode.GDbackObjects2= [];

gdjs.AchievementsCode.conditionTrue_0 = {val:false};
gdjs.AchievementsCode.condition0IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition1IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition2IsTrue_0 = {val:false};
gdjs.AchievementsCode.condition3IsTrue_0 = {val:false};
gdjs.AchievementsCode.conditionTrue_1 = {val:false};
gdjs.AchievementsCode.condition0IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition1IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition2IsTrue_1 = {val:false};
gdjs.AchievementsCode.condition3IsTrue_1 = {val:false};


gdjs.AchievementsCode.mapOfGDgdjs_46AchievementsCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.AchievementsCode.GDbackObjects1});gdjs.AchievementsCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BestHighscore"), gdjs.AchievementsCode.GDBestHighscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("BestTime"), gdjs.AchievementsCode.GDBestTimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("BestTotalCoins"), gdjs.AchievementsCode.GDBestTotalCoinsObjects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDBestTotalCoinsObjects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDBestTotalCoinsObjects1[i].setString("Total Coins: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)) + "/17");
}
}{for(var i = 0, len = gdjs.AchievementsCode.GDBestHighscoreObjects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDBestHighscoreObjects1[i].setString("Total Points: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) + "/165");
}
}{for(var i = 0, len = gdjs.AchievementsCode.GDBestTimeObjects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDBestTimeObjects1[i].setString("Best Time: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.AchievementsCode.GDbackObjects1);

gdjs.AchievementsCode.condition0IsTrue_0.val = false;
gdjs.AchievementsCode.condition1IsTrue_0.val = false;
gdjs.AchievementsCode.condition2IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.AchievementsCode.condition0IsTrue_0.val ) {
{
gdjs.AchievementsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AchievementsCode.mapOfGDgdjs_46AchievementsCode_46GDbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.AchievementsCode.condition1IsTrue_0.val ) {
{
{gdjs.AchievementsCode.conditionTrue_1 = gdjs.AchievementsCode.condition2IsTrue_0;
gdjs.AchievementsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7206588);
}
}}
}
if (gdjs.AchievementsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AchievementsCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.AchievementsCode.condition0IsTrue_0.val = false;
{
gdjs.AchievementsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.AchievementsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.AchievementsCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.AchievementsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.AchievementsCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


};

gdjs.AchievementsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AchievementsCode.GDCoinObjects1.length = 0;
gdjs.AchievementsCode.GDCoinObjects2.length = 0;
gdjs.AchievementsCode.GDPlayerObjects1.length = 0;
gdjs.AchievementsCode.GDPlayerObjects2.length = 0;
gdjs.AchievementsCode.GDFloor_95EnemyObjects1.length = 0;
gdjs.AchievementsCode.GDFloor_95EnemyObjects2.length = 0;
gdjs.AchievementsCode.GDFlying_95EnemyObjects1.length = 0;
gdjs.AchievementsCode.GDFlying_95EnemyObjects2.length = 0;
gdjs.AchievementsCode.GDShooting_95EnemyObjects1.length = 0;
gdjs.AchievementsCode.GDShooting_95EnemyObjects2.length = 0;
gdjs.AchievementsCode.GDFinishObjects1.length = 0;
gdjs.AchievementsCode.GDFinishObjects2.length = 0;
gdjs.AchievementsCode.GDPlatformObjects1.length = 0;
gdjs.AchievementsCode.GDPlatformObjects2.length = 0;
gdjs.AchievementsCode.GDSpikeObjects1.length = 0;
gdjs.AchievementsCode.GDSpikeObjects2.length = 0;
gdjs.AchievementsCode.GDcoins_95counterObjects1.length = 0;
gdjs.AchievementsCode.GDcoins_95counterObjects2.length = 0;
gdjs.AchievementsCode.GDlives_95counterObjects1.length = 0;
gdjs.AchievementsCode.GDlives_95counterObjects2.length = 0;
gdjs.AchievementsCode.GDtime_95takenObjects1.length = 0;
gdjs.AchievementsCode.GDtime_95takenObjects2.length = 0;
gdjs.AchievementsCode.GDpoints_95counterObjects1.length = 0;
gdjs.AchievementsCode.GDpoints_95counterObjects2.length = 0;
gdjs.AchievementsCode.GDEnemyBlock_95LeftObjects1.length = 0;
gdjs.AchievementsCode.GDEnemyBlock_95LeftObjects2.length = 0;
gdjs.AchievementsCode.GDEnemyBlock_95RightObjects1.length = 0;
gdjs.AchievementsCode.GDEnemyBlock_95RightObjects2.length = 0;
gdjs.AchievementsCode.GDBulletObjects1.length = 0;
gdjs.AchievementsCode.GDBulletObjects2.length = 0;
gdjs.AchievementsCode.GDLavaObjects1.length = 0;
gdjs.AchievementsCode.GDLavaObjects2.length = 0;
gdjs.AchievementsCode.GDExtra_95LifeObjects1.length = 0;
gdjs.AchievementsCode.GDExtra_95LifeObjects2.length = 0;
gdjs.AchievementsCode.GDpopupwindowObjects1.length = 0;
gdjs.AchievementsCode.GDpopupwindowObjects2.length = 0;
gdjs.AchievementsCode.GDDARKOVERLAYObjects1.length = 0;
gdjs.AchievementsCode.GDDARKOVERLAYObjects2.length = 0;
gdjs.AchievementsCode.GDTitleObjects1.length = 0;
gdjs.AchievementsCode.GDTitleObjects2.length = 0;
gdjs.AchievementsCode.GDBestTotalCoinsObjects1.length = 0;
gdjs.AchievementsCode.GDBestTotalCoinsObjects2.length = 0;
gdjs.AchievementsCode.GDBestTimeObjects1.length = 0;
gdjs.AchievementsCode.GDBestTimeObjects2.length = 0;
gdjs.AchievementsCode.GDBestHighscoreObjects1.length = 0;
gdjs.AchievementsCode.GDBestHighscoreObjects2.length = 0;
gdjs.AchievementsCode.GDNewObjectObjects1.length = 0;
gdjs.AchievementsCode.GDNewObjectObjects2.length = 0;
gdjs.AchievementsCode.GDbackObjects1.length = 0;
gdjs.AchievementsCode.GDbackObjects2.length = 0;

gdjs.AchievementsCode.eventsList0(runtimeScene);
return;

}

gdjs['AchievementsCode'] = gdjs.AchievementsCode;
