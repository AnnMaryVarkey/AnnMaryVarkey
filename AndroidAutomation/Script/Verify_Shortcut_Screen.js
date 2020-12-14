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
   setHUActive("Verify Shortcut screen")
   launchApp()
   menuSelectionShortcuts()
   verifyShortcutScreen()
   }
  catch(e)
  {
    Log.Error(e.message)
  }

}

function verifyShortcutScreen()
{
  try
  {
    //Shortcut header
     if(getCtrlControlText(shortcutsHeader) == "Shortcuts")
     {
      Log.Checkpoint("Header shortcuts is  displayed in device")
     }
     else
     {
      Log.Error("Failed to display Header shortcuts in device")
     } 
  
    //Calender
    if(getCtrlControlText(txtViewCalender)== "Calendar")
    {
      Log.Checkpoint("Calender button displayed in device")
    }
    else
    {
      Log.Error("Failed to display Calender button in device")
    } 
    //Google Music
    if(aqObject.CheckProperty(txtViewplayMusic, "mText", cmpEqual, "Google Play Music")== true)
    {
      Log.Checkpoint("Google Music button displayed in device")
    }
    else
    {
      Log.Error("Failed to display Google Music button in device")
    }
    //Maps
    if(getCtrlControlText(txtViewMaps)== "Maps")
    {
      Log.Checkpoint("Maps button displayed in device")
    }
    else
    {
      Log.Error("Failed to display Maps button in device")
    }
    //Volume UP
    if(aqObject.CheckProperty(txtViewVolumeUP, "mText", cmpEqual, "Volume Up")== true)
    {
      Log.Checkpoint("Calender button displayed in device")
    }
    else
    {
      Log.Error("Failed to display Calender button in device")
    }
    //Volume Down
    if(aqObject.CheckProperty(txtViewVolumeDown, "mText", cmpEqual, "Volume Down")== true)
    {
      Log.Checkpoint("Volume Down button displayed in device")
    }
    else
    {
      Log.Error("Failed to display Calender button in device")
    }
    //Exit
    if(getCtrlControlText(txtViewExit)== "Exit")
    {
      Log.Checkpoint("Calender button displayed in device")
    }
    else
    {
      Log.Error("Failed to display Calender button in device")
    }
    //Volume UP icon
    if(Regions.ImageView_AppsVolumeUP.Check(iimgViewVolumeUP)==true)
    {
      Log.Checkpoint("Volume UP icon displayed in device")
    }
    else
    {
      Log.Error("Failed to display - Volume UP icon in device")
    }
    //VolumeDown
    if(Regions.ImageView_AppsVolumeDown.Check(imgViewVolumeDown)==true)
    {
      Log.Checkpoint("VolumeDown icon displayed in device")
    }
    else
    {
      Log.Error("Failed to display - VolumeDown icon in device")
    }
    //Exit
    if(Regions.ImageView_AppsExit.Check(imgViewExit)==true)
    {
      Log.Checkpoint("Exit icon displayed in device")
    }
    else
    {
      Log.Error("Failed to display - Exit icon in device")
    }
    //All App
    if(Regions.ImageButton_AppsAll.Check(btnAllApps)==true)
    {
      Log.Checkpoint("Map icon displayed in device")
    }
    else
    {
      Log.Error("Failed to display - map icon in device")
    }
    //APP Settings
    if(Regions.ImageButton_AppSettings.Check(appSettings)==true)
    {
      Log.Checkpoint("APP Settings icon displayed in device")
    }
    else
    {
      Log.Error("Failed to display APP Settings icon in device")
    }
  }
  catch(e)
  {
    Log.Error(e.message)
  }

}