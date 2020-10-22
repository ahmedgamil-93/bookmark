  
  
  
var sitename=document.getElementById("siteName");
var siteurl=document.getElementById("siteUrl");

 var websiteList=[];

 if(localStorage.getItem("weblist")==null)
 {
     websiteList=[];
 }
 else 
 {
     websiteList=JSON.parse(localStorage.getItem("weblist"));
     displayWebsites(websiteList);
 }

function addwebsite()
{
   var website = {
        name:sitename.value,
        url:siteurl.value,
    }
    websiteList.push(website);
    localStorage.setItem("weblist", JSON.stringify(websiteList));
    displayWebsites(websiteList)
    deleteWebsite()
}


function displayWebsites(anyArray)
{
    var box = ""
    for(var i =0 ; i<anyArray.length ; i++)
    {
        box+=` <tr>
                   <td>${i}</td>
                   <td>${anyArray[i].name}</td>
                   <td> <a class="btn btn-primary" href="${websiteList[i].url}" target="_blank">OPEN!</a></td>
                   <td> <button class="btn btn-danger" onclick="clearWebsite(${i})">DELETE</button></td>
                   
               </tr>                  
            ` 
            document.getElementById("tableBody").innerHTML=box;

    }
}


function deleteWebsite()
    {
         sitename.value=null ;
         siteurl.value=null ;
    }


function clearWebsite(index)
{
    websiteList.splice(index , 1)
    localStorage.setItem("weblist" ,JSON.stringify(websiteList));
    displayWebsites(websiteList);
}    
