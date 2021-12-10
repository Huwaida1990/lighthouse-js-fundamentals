for ( var i = 100; i <= 200; i++ )
{
  if ( i%3 === 0  )
  {
    console.log( "loopy");
  }
  else if ( i%4 === 0 ) 
  {
    console.log("lighthouse");
  }
  else if ( i%3 === 0 && i % 4 === 0) 
  {
    console.log("lighthouseloopy");
  }
  
}