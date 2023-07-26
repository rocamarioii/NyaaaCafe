function btn(){									
	var a = document.getElementById("sub")
	a.innerHTML = "Your inquiry has been submitted.";
}

function valid(){
  if( document.myform.FirstName.value =="") {
    alert( "Please Enter your First Name!" );
    document.myform.FirstName.focus() ;
    return false;
  }

  if( document.myform.LastName.value =="") {
    alert( "Please Enter your First Name!" );
    document.myform.LastName.focus() ;
    return false;
  }

  if( document.myform.Province.value =="") {
    alert( "Please Enter your First Name!" );
    document.myform.Province.focus() ;
    return false;
  }

return( true );
}