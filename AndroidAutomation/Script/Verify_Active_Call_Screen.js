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
   setHUActive("Verify call screen")
   launchApp()
   menuSelectionPhone()
   tapOnCtrl(contactPermission)
   OCR.Recognize(Mobile.Device()).BlockByText("Allow", spNearestToCenter).Touch();
   tapOnCtrl(phoneContact)
   callacontact()
   verifycallscreen()
  }
  catch(e)
  {
    Log.Error(e.message)
  }

}
 
function callacontact()
{
  try
   {
     tapOnCtrl(dialer)
     ImageRepository.Images.number_1.Touch();
     ImageRepository.Images.number_2.Touch();
     ImageRepository.Images.number_3.Touch();
     tapOnCtrl(call)
     OCR.Recognize(Mobile.Device()).BlockByText("Allow", spNearestToCenter).Touch();
     tapOnCtrl(call)
   }
   catch(e)
   {
    Log.Error(e.message)
   }
} 
   
function verifycallscreen()
 {
  try
  {
    delay(3000)
   if(ImageRepository.Images.CallingButtons.Exists()==true)
   {
    Log.Message("Calling Icons is displayed")
   }
   else
   {
    Log.Error("Failed to display Calling Icons")
   }
   if(ImageRepository.Images.CallingContact.Exists()==true)
   {
    Log.Message("Calling Contact is displayed")
   }
   else
   {
    Log.Error("Failed to display Calling Contact")
   }
   
   //For Acheiving Precondition
   ImageRepository.Images.ImageButton_EndCall.Touch()
  }
  catch(e)
  {
   Log.Error(e.message)
  }
}    