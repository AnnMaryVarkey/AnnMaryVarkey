/**
* @file <File name>
* @brief <Description>
* @copyright  COPYRIGHT (C) 2020 QuEST Global
* ALL RIGHTS RESERVED
* @author MindHones */

//USEUNIT Objects
//USEUNIT CommonFunctions

function main()
{
  try
  {
   setHUActive("Verify play and pause functions of music audio")
   launchApp()
   menuSelectionMedia()
   tapOnCtrl(youTubeMusic)
   tapOnCtrl(deviceOnly)
   tapOnCtrl(songsCategory)
   tapOnCtrl(song2)
   verifyPauseMusicScreen()
  }
  catch(e)
  {
    Log.Error(e.message)
  }
}
  
function verifyPauseMusicScreen()
{
 try
  {
   if(Regions.ImageView_Pause.Check(song_Pause)==true)
   {
    Log.Checkpoint("Music is playing")
   }
   else
   {
    Log.Error("Failed to play music")
   }
   tapOnCtrl(song_Pause)
   if(Regions.ImageView_Play.Check(song_Pause)==true)
   {
     Log.Checkpoint("Music is paused")
   }
   else
   {
    Log.Error("Failed to pause music")
   }
   Log.Message("1")
   var y= progressBar.picture()
   Regions.AddPicture(y, "tmp");
   delay(1000)
   takeScreenshot(progressBar)
   if(Regions.tmp.Check(progressBar)==true)
   {
     Log.Message("Progressbar is also paused")
   }
   else
   {
    Log.Error("Failed to pause Progressbar") 
   }
   
   //For moving back to Automate App
   Regions.Remove("tmp") 
   Mobile.Device("Pixel 3a XL").PressBack()
   Mobile.Device("Pixel 3a XL").PressBack()
   Mobile.Device("Pixel 3a XL").PressBack()
  }
  catch(e)
  {
   Log.Error(e.message)
  } 
}