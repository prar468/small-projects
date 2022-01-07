function Time()
{
    var today = new Date();

    var year = today.getUTCFullYear();
    var month = today.getUTCMonth();
    var iDate = today.getUTCDate();

   
    var Hour = today.getUTCHours();
    var Mins = today.getUTCMinutes();
    var Secs = today.getUTCSeconds();

    let date = new Date(Date.UTC(year, month, iDate, Hour, Mins, Secs));
    document.getElementById("india").innerHTML='India datetime: ' + date;
  
    let usaTime = date.toLocaleString("en-US", {
        timeZone: "America/New_York" 
    });
    document.getElementById("usa").innerHTML='USA datetime: ' + usaTime;
   
    let europeTime = date.toLocaleString("en-US", {
        timeZone: "Europe/Paris" 
    });
    document.getElementById("europe").innerHTML='Europe datetime: ' + europeTime;
    
    let ausTime = date.toLocaleString("en-US", {
        timeZone: "Australia/Sydney" 
    });
    document.getElementById("aus").innerHTML='Australia datetime: ' + ausTime;
    
}
