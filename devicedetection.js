/**
* @author Ralf-Juergen Triebel - Hamburg / Germany
* 
*  Note: Use with  mdetect.js and browser_detect.js
*   *****        using jQuery©            *****
*/


/*
 * Note: all elements with txt as prefix are hidden input fields
 * to transfer the velues to the backend
 * 
 */


$(document).ready(function(){

var IsSmartPhone;
var IsTablet;

//*******************************************************
//User-Agent
//*******************************************************

$("#txtUserAgent").val(MobileEsp.uagent);

//*******************************************************
//Detect Smartphones
//*******************************************************

if (MobileEsp.DetectTierIphone() )
{

$("#txtTierPhone").val( 'true' );

if (MobileEsp.DetectTierIphone())
{
$("#txtPhoneType").val( 'iPhone' );
}
else if (MobileEsp.DetectAndroidPhone())
{
$("#txtPhoneType").val( 'Android' );
}
else if (MobileEsp.DetectWindowsPhone7())
{
$("#txtPhoneType").val( 'Windows Phone 7' );
}
else if (MobileEsp.DetectBlackBerryWebKit() && MobileEsp.DetectBlackBerryTouch())
{
$("#txtPhoneType").val( 'BlackBerry Touch' );

}
else if (MobileEsp.DetectPalmWebOS())
{
$("#txtPhoneType").val( 'Palm Web OS' );

}

IsSmartPhone = true;

}

else
{

$("#txtTierPhone").val( 'false' );

$("#txtPhoneType").val( 'none' );

}

//*******************************************************
//Detect Tablets
//*******************************************************

if (MobileEsp.DetectIpad() || MobileEsp.DetectAndroidTablet() || MobileEsp.DetectBlackBerryTablet() || MobileEsp.DetectWebOSTablet() || MobileEsp.DetectOperaAndroidTablet() )

{

$("#txtTierTablet").val( 'true' );

if (MobileEsp.DetectAndroidTablet())
{
$("#txtTabletType").val( 'Android Tablet' );
}
else if (MobileEsp.DetectIpad())
{
$("#txtTabletType").val( 'iPad' );
}
else if (MobileEsp.DetectBlackBerryTablet())
{
$("#txtTabletType").val( 'BlackBerry Tablet' );
}
else if (MobileEsp.DetectWebOSTablet())
{
$("#txtTabletType").val( 'WebOS Tablet' );
}
else if (MobileEsp.DetectOperaAndroidTablet())
{
$("#txtTabletType").val( 'Android Tablet / Opera' );
}

IsTablet = true;

}

else
{

$("#txtTierTablet").val( 'false' );

$("#txtTabletType").val( 'none' );

}

//*******************************************************
// Detect Browser
//*******************************************************

if  ( IsTablet || IsSmartPhone )
{
$("#txtDesktop").val( 'false' );
}
else
{
$("#txtDesktop").val( 'true' );
}

$("#txtBrowserType").val( BrowserDetect.browser );

//*******************************************************
// Detect Version
//*******************************************************

$("#txtVersion").val( BrowserDetect.version );

//*******************************************************
// Detect OS
//*******************************************************

$("#txtOS").val( BrowserDetect.OS );

});

