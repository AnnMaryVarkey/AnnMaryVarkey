/**
* @file <File name>
* @brief <Description>
* @copyright  COPYRIGHT (C) 2020 QuEST Global
* ALL RIGHTS RESERVED
* @author MindHones */

//USEUNIT Objects

/**
* @brief 	Function for Initializing function
* @param 	Arg1: Mapped object name of the Control
* @return  	Returntype: string text
*/

//
function setHUActive(testcaseName)
{
  try
  {
    Log.AppendFolder(testcaseName);
    Mobile.SetCurrent("Pixel 3a XL");
  }
  catch(e)
  {
    Log.Error(e.message)
  } 
}

/**
* @brief 	Function for Lauch TesedApp
* @param 	Arg1: Mapped object name of the Control
* @return  	Returntype: void
*/

function launchApp(testcaseName)
{
  try
  {
   TestedApps.AutoMate_21110_v2_2_5_minApi21.Run()
   delay(2000)
   tapOnCtrl(btn_Next1)
   ImageRepository.Images.radioButton_Yes.Touch()
   tapOnCtrl(btn_Next2)
   tapOnCtrl(btn_Next2)
   tapOnCtrl(btn_Next2)
   tapOnCtrl(notification_Never)
  }
 
  catch(e)
  {
    Log.Error(e.message)
  } 
}
/**
* @brief 	Function for taking screenshot
* @param 	Arg1: Mapped object name of the Control
* @return  	Returntype: void
*/
function takeScreenshot(ctrl)
{
  try
  {
   var pic = ctrl.Picture()
   Log.Picture(pic, "Screenshot") 
  }
  catch(e)
  {
    Log.Error(e.message)
  }
}

/**
* @brief 	Function for getting edit field text and edit field screenshot
* @param 	Arg1: Mapped object name of the Control
* @return  	Returntype: string text
*/
function getEditCtrlText(ctrl)
{
  try
  {
    if(ctrl.isVisibleToUser()==true)
    {
      var pic = ctrl.Picture()
      Log.Picture(pic, "Text displayed")
      return ctrl.wText
    } 
  }
  catch(e)
  {
    Log.Message(e.message)
  }
}

/**
* @brief 	Function for getting mText of the control and take its screenshot
* @param 	Arg1: Mapped object name of the Control
* @return  	Returntype: String text
*/
function getCtrlmText(ctrl)
{
  try
  {
    if(ctrl.isVisibleToUser()==true)
    {
       var pic = ctrl.Picture()
      Log.Picture(pic, "Text displayed")
      return ctrl.mText
    } 
  }
  catch(e)
  {
    Log.Message(e.message)
  }
}

/**
* @brief 	Function for getting control text and its screenshot
* @param 	Arg1: Mapped object name of the Control
* @return  	Returntype: String text
*/
function getCtrlControlText(ctrl)
{
  try
  {
    if(ctrl.isVisibleToUser()==true)
    {
      var pic = ctrl.Picture()
      Log.Picture(pic, "Text displayed")
      return ctrl.ControlText
    } 
  }
  catch(e)
  {
    Log.error(e.message)
  }
}

/**
* @brief 	Function for tap on android controls
* @param 	Arg1: Mapped object name of the Control
* @return  	Returntype: void
*/
function tapOnCtrl(ctrl)
{  
  try
  {
    if(ctrl.isVisibleToUser()==true)
    {
      ctrl.Touch()
    }
  }
  catch(e)
  {
    Log.Error(e.message)
  }
}

/**
* @brief 	Function for check whether the control is visible or not and take screenshot
* @param 	Arg1: Mapped object name of the Control
* @return  	Returntype: boolean - true/false
*/
function checkCtrlisVisibleToUser(ctrl)
{
  try
  {
    if(ctrl.isVisibleToUser() == true)
    {
      var pic = ctrl.Picture()
      Log.Picture(pic, "Control displayed")
      return true
    }
    else
    {
      var pic = ctrl.Picture()
      Log.Picture(pic, "Control displayed")
      return false
    }
  }
  catch(e)
  {
    Log.Error(e.message)
    return false
  }
}

/**
* @brief 	Function for check whether the control is visible or not
* @param 	Arg1: Mapped object name of the Control
* @return  	Returntype: boolean - true/false
*/
function checkCtrlVisible(ctrl)
{
  try
  {
    if(ctrl.Visible == true)
    {
      var pic = ctrl.Picture()
      Log.Picture(pic, "Control displayed")
      return true
    }
    else
    {
      var pic = ctrl.Picture()
      Log.Picture(pic, "Control displayed")
      return false
    }
  }
  catch(e)
  {
    Log.Error(e.message)
    return false
  }
}


/**
* @brief 	Function for enable checkbox and take screenshot
* @param 	Arg1: Mapped object name of the Control
* @return  	Returntype: Void
*/
function enableCheckBox(ctrl)
{
  try
  {
    if(ctrl.wState == 0)
    {
      ctrl.wState = 1
      var pic = ctrl.Picture()
      Log.Picture(pic, "Checkbox displayed")
    }
  }
  catch(e)
  {
    Log.Error(e.message)
  } 
}

/**
* @brief 	Function for enable checkbox and take its screenshot
* @param 	Arg1: Mapped object name of the Control
* @return  	Returntype: Void
*/
function disableCheckBox(ctrl)
{
  try
  {
    if(ctrl.wState == 1)
    {
      ctrl.wState = 0
      var pic = ctrl.Picture()
      Log.Picture(pic, "Checkbox displayed")
    }
  }
  catch(e)
  {
    Log.Error(e.message)
  } 
}

/**
* @brief 	Function For selecting HOME icon menu
* @param 	Null
* @return  	Returntype: Void
*/
//For 
function menuSelectionHome()
{
  try
  {
    //Touch Home icon in menu bar
    tapOnCtrl(homeMenu)
    Delay(2000);
  }
  catch(e)
  {
    Log.Error(e.message)
  } 
}

/**
* @brief 	Function For selecting shortcut menu
* @param 	Null
* @return  	Returntype: Void
*/
function menuSelectionShortcuts()
{
  try
  {
    //Touch Home icon in menu bar
    tapOnCtrl(shortcutMenu)
    Delay(2000);
  }
  catch(e)
  {
    Log.Error(e.message)
  } 
}

/**
* @brief 	Function For selecting media from menu bar
* @param 	Null
* @return  	Returntype: Void
*/

function menuSelectionMedia()
{
  try
  {
    //Touch Media icon in menu bar
    tapOnCtrl(mediaMenu)
    Delay(2000);
  }
  catch(e)
  {
    Log.Error(e.message)
  }
}

/**
* @brief 	Function for selecting Phone icon in menu bar
* @param 	Null
* @return  	Returntype: Void
*/

function menuSelectionPhone()
{  
  try
  {
    tapOnCtrl(phoneMenu)
    Delay(2000);
  }
  catch(e)
  {
    Log.Error(e.message)
  }
}
/**
* @brief 	Result manager functions.
* @param 	Null
* @return  	Returntype: Void
*/
function sendTestResultAsMail()
{
  try
  {
    // Export current test results as mht file.
    Log.SaveResultsAs("..\\..\\..\\Exports\\TestResults.mht", lsMHT);
  
    // Prepare the subject.
    var subject = ProjectSuite.Variables.ResultMailSubject;
    subject += (ProjectSuite.Variables.ErrorCount > 0) ? " - Failed!" : " - Success!";
  
    // Prepare the body.
    var body = "Please see the test results attached!\n\nTest started by: "
                + ProjectSuite.Variables.OwnerName;
  
    // Send the mail.
    if(SendMail(ProjectSuite.Variables.ResultMailTo,
                "qmail.quest-global.com",
                "Meaa R1Low TestAuto",
                "meaa.r1.low.testauto@quest-global.com",
                subject,
                body,
                "..\\..\\..\\Exports\\TestResults.mht"))
    {
      Log.Message("Mail sent successfully");
    }
    else
    {
      Log.Warning("Mail sending failed!");
    }
  }
  catch(e)
  {
    Log.Error(e.message)
  }
}

/**
* @brief 	Function for disabling namemapping timeout warning
* @param 	Null
* @return  	Returntype: Void
*/
function disableNameMappingTimeOutWarning()
{
  try
  {
    NameMapping.TimeOutWarning = false;
  }
  catch(e)
  {
    Log.Error(e.message)
  }
}

/**
* @brief 	Function for enabling namemapping timeout warning
* @param 	Null
* @return  	Returntype: Void
*/
function enableNameMappingTimeOutWarning()
{
  try
  {
    NameMapping.TimeOutWarning = true;
  }
  catch(e)
  {
    Log.Error(e.message)
  }
}
