gdjs.Opening_32ScreenCode = {};
gdjs.Opening_32ScreenCode.GDCoinObjects1= [];
gdjs.Opening_32ScreenCode.GDCoinObjects2= [];
gdjs.Opening_32ScreenCode.GDPlayerObjects1= [];
gdjs.Opening_32ScreenCode.GDPlayerObjects2= [];
gdjs.Opening_32ScreenCode.GDFloor_95EnemyObjects1= [];
gdjs.Opening_32ScreenCode.GDFloor_95EnemyObjects2= [];
gdjs.Opening_32ScreenCode.GDFlying_95EnemyObjects1= [];
gdjs.Opening_32ScreenCode.GDFlying_95EnemyObjects2= [];
gdjs.Opening_32ScreenCode.GDShooting_95EnemyObjects1= [];
gdjs.Opening_32ScreenCode.GDShooting_95EnemyObjects2= [];
gdjs.Opening_32ScreenCode.GDFinishObjects1= [];
gdjs.Opening_32ScreenCode.GDFinishObjects2= [];
gdjs.Opening_32ScreenCode.GDPlatformObjects1= [];
gdjs.Opening_32ScreenCode.GDPlatformObjects2= [];
gdjs.Opening_32ScreenCode.GDSpikeObjects1= [];
gdjs.Opening_32ScreenCode.GDSpikeObjects2= [];
gdjs.Opening_32ScreenCode.GDcoins_95counterObjects1= [];
gdjs.Opening_32ScreenCode.GDcoins_95counterObjects2= [];
gdjs.Opening_32ScreenCode.GDlives_95counterObjects1= [];
gdjs.Opening_32ScreenCode.GDlives_95counterObjects2= [];
gdjs.Opening_32ScreenCode.GDtime_95takenObjects1= [];
gdjs.Opening_32ScreenCode.GDtime_95takenObjects2= [];
gdjs.Opening_32ScreenCode.GDpoints_95counterObjects1= [];
gdjs.Opening_32ScreenCode.GDpoints_95counterObjects2= [];
gdjs.Opening_32ScreenCode.GDEnemyBlock_95LeftObjects1= [];
gdjs.Opening_32ScreenCode.GDEnemyBlock_95LeftObjects2= [];
gdjs.Opening_32ScreenCode.GDEnemyBlock_95RightObjects1= [];
gdjs.Opening_32ScreenCode.GDEnemyBlock_95RightObjects2= [];
gdjs.Opening_32ScreenCode.GDBulletObjects1= [];
gdjs.Opening_32ScreenCode.GDBulletObjects2= [];
gdjs.Opening_32ScreenCode.GDLavaObjects1= [];
gdjs.Opening_32ScreenCode.GDLavaObjects2= [];
gdjs.Opening_32ScreenCode.GDExtra_95LifeObjects1= [];
gdjs.Opening_32ScreenCode.GDExtra_95LifeObjects2= [];
gdjs.Opening_32ScreenCode.GDpopupwindowObjects1= [];
gdjs.Opening_32ScreenCode.GDpopupwindowObjects2= [];
gdjs.Opening_32ScreenCode.GDDARKOVERLAYObjects1= [];
gdjs.Opening_32ScreenCode.GDDARKOVERLAYObjects2= [];
gdjs.Opening_32ScreenCode.GDTitleObjects1= [];
gdjs.Opening_32ScreenCode.GDTitleObjects2= [];
gdjs.Opening_32ScreenCode.GDCheatObjects1= [];
gdjs.Opening_32ScreenCode.GDCheatObjects2= [];
gdjs.Opening_32ScreenCode.GDDeveloperCheatObjects1= [];
gdjs.Opening_32ScreenCode.GDDeveloperCheatObjects2= [];
gdjs.Opening_32ScreenCode.GDButtonDesignObjects1= [];
gdjs.Opening_32ScreenCode.GDButtonDesignObjects2= [];
gdjs.Opening_32ScreenCode.GDAcievementsTitleObjects1= [];
gdjs.Opening_32ScreenCode.GDAcievementsTitleObjects2= [];
gdjs.Opening_32ScreenCode.GDSettingsTitleObjects1= [];
gdjs.Opening_32ScreenCode.GDSettingsTitleObjects2= [];
gdjs.Opening_32ScreenCode.GDNewObjectObjects1= [];
gdjs.Opening_32ScreenCode.GDNewObjectObjects2= [];

gdjs.Opening_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Opening_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Opening_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Opening_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Opening_32ScreenCode.condition3IsTrue_0 = {val:false};
gdjs.Opening_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.Opening_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Opening_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Opening_32ScreenCode.condition2IsTrue_1 = {val:false};
gdjs.Opening_32ScreenCode.condition3IsTrue_1 = {val:false};


gdjs.Opening_32ScreenCode.mapOfGDgdjs_46Opening_9532ScreenCode_46GDAcievementsTitleObjects1Objects = Hashtable.newFrom({"AcievementsTitle": gdjs.Opening_32ScreenCode.GDAcievementsTitleObjects1});gdjs.Opening_32ScreenCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "More Plastic - Let Me Go [NCS Release].mp3", 1, true, 2, 1);
}}

}


{


gdjs.Opening_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Opening_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Opening_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{


gdjs.Opening_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Opening_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Opening_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Opening_32ScreenCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Opening_32ScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Opening_32ScreenCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.Opening_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Opening_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Opening_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Opening_32ScreenCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Opening_32ScreenCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Opening_32ScreenCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AcievementsTitle"), gdjs.Opening_32ScreenCode.GDAcievementsTitleObjects1);

gdjs.Opening_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Opening_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Opening_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Opening_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Opening_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Opening_32ScreenCode.mapOfGDgdjs_46Opening_9532ScreenCode_46GDAcievementsTitleObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Opening_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Achievements");
}}

}


{


gdjs.Opening_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Opening_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.Opening_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.Opening_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.Opening_32ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Opening_32ScreenCode.conditionTrue_1 = gdjs.Opening_32ScreenCode.condition1IsTrue_0;
gdjs.Opening_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8021716);
}
}if ( gdjs.Opening_32ScreenCode.condition1IsTrue_0.val ) {
{
gdjs.Opening_32ScreenCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
}
if (gdjs.Opening_32ScreenCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{


gdjs.Opening_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Opening_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.Opening_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.Opening_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.Opening_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Opening_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Opening_32ScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.Opening_32ScreenCode.conditionTrue_1 = gdjs.Opening_32ScreenCode.condition2IsTrue_0;
gdjs.Opening_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8455028);
}
}}
}
if (gdjs.Opening_32ScreenCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{


{
}

}


};

gdjs.Opening_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Opening_32ScreenCode.GDCoinObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDCoinObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDFloor_95EnemyObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDFloor_95EnemyObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDFlying_95EnemyObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDFlying_95EnemyObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDShooting_95EnemyObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDShooting_95EnemyObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDFinishObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDFinishObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDPlatformObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDPlatformObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDSpikeObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDSpikeObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDcoins_95counterObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDcoins_95counterObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDlives_95counterObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDlives_95counterObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDtime_95takenObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDtime_95takenObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDpoints_95counterObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDpoints_95counterObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDEnemyBlock_95LeftObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDEnemyBlock_95LeftObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDEnemyBlock_95RightObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDEnemyBlock_95RightObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDBulletObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDBulletObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDLavaObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDLavaObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDExtra_95LifeObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDExtra_95LifeObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDpopupwindowObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDpopupwindowObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDDARKOVERLAYObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDDARKOVERLAYObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDTitleObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDTitleObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDCheatObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDCheatObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDDeveloperCheatObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDDeveloperCheatObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDButtonDesignObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDButtonDesignObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDAcievementsTitleObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDAcievementsTitleObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDSettingsTitleObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDSettingsTitleObjects2.length = 0;
gdjs.Opening_32ScreenCode.GDNewObjectObjects1.length = 0;
gdjs.Opening_32ScreenCode.GDNewObjectObjects2.length = 0;

gdjs.Opening_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Opening_32ScreenCode'] = gdjs.Opening_32ScreenCode;
