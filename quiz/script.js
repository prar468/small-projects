function nxtQues()
{
    window.location.reload();
    var no= parseInt(document.getElementById('quesno').innerHTML);
    document.getElementById('quesno').innerHTML= no+1;   
}