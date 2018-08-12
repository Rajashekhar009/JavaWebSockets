function funTopNavMenu(strID) {
    
    var strTtl = document.getElementById(strID).innerHTML;
    var divItemDtls = document.getElementById("divItemDtls");
    var SubCatItem = document.getElementById("SubCatItem");
    var SubCatItemDesc = document.getElementById("SubCatItemDesc");	
    if(strID!="Home"){				
        divItemDtls.style.display="block";		
        SubCatItem.innerHTML = strTtl;		
    }	
    else{
        divSubCat.style.display="none";
    }	
}

function funGetDetails(strData) {
    var JSONObject = JSON.parse(strData);
    var dataObj = JSONObject.data;		
    var dynData = "";
    if(dataObj.length>0){

        for(var i=0; i<dataObj.length; i++){
			
				var ttl =dataObj[i]['Ttl'];
				var catID =dataObj[i]['ID'];			
				var dataSubCatObj = dataObj[i]['SubCatData'];
				
				if(dataSubCatObj.length>0){				
					//dynData += '<li class="sub"><a id="'+catID+'" onClick="javascript:funTopNavMenu('+catID+');">'+ttl+'</a>';
					dynData += "<li class='sub'><a id='"+catID+"' onClick=javascript:funTopNavMenu('"+catID+"');>"+ttl+"</a>";
										
					for(var j=0; j<dataSubCatObj.length; j++){
						if(j==0){
							dynData += '<ul>';
						}
						var subCatTtl = dataSubCatObj[j]['Ttl'];
						var subCatID=dataSubCatObj[j]['ID'];						
						var dataSubCatItemsObj = [];
						if(dataSubCatObj[j].hasOwnProperty('SubCatItemsData')){
							dataSubCatItemsObj = dataSubCatObj[i]['SubCatItemsData'];
						}						
				
						if(dataSubCatItemsObj.length>0){		
						
							//dynData += '<li class="sub"><a id="'+subCatID+'" onClick="javascript:funTopNavMenu('+subCatID+');">'+subCatTtl+'</a>';
							dynData += "<li class='sub'><a id='"+subCatID+"' onClick=javascript:funTopNavMenu('"+subCatID+"');>"+subCatTtl+"</a>";
							for(var k=0; k<dataSubCatItemsObj.length; k++){
									if(k==0){
										dynData += '<ul>';
									}
									var subCatItemTtl = dataSubCatItemsObj[k]['Ttl'];
									var subCatItemID = dataSubCatItemsObj[k]['ID'];
									
									//dynData += '<li><a id="'+subCatItemID+'" onClick="javascript:funTopNavMenu('+subCatItemID+');">'+subCatItemTtl+'</a></li>';	
									dynData += "<li><a id='"+subCatItemID+"' onClick=javascript:funTopNavMenu('"+subCatItemID+"');>"+subCatItemTtl+"</a></li>";	
									
									if((k+1)==dataSubCatItemsObj.length){
										dynData += "</ul>";
									}
							}
							
							dynData += '</li>';
							
						}
						else{
							//dynData += '<li><a id="'+subCatID+'" onClick="javascript:funTopNavMenu('+subCatID+');">'+subCatTtl+'</a></li>';
							dynData += "<li><a id='"+subCatID+"' onClick=javascript:funTopNavMenu('"+subCatID+"');>"+subCatTtl+"</a></li>";
						}							
		
						if((j+1)==dataSubCatObj.length){
							dynData += '</ul>';
						}
					}	
					
					dynData += '</li>';							
								
				}
				else{
					//dynData += '<li><a id="'+catID+'" onClick="javascript:funTopNavMenu('+catID+');">'+ttl+'</a></li>';
					dynData += "<li><a id='"+catID+"' onClick=javascript:funTopNavMenu('"+catID+"');>"+ttl+"</a></li>";
				}
						
        }
    }

    document.getElementById('ulID').innerHTML = dynData;		      
}

function WebSocketTest() {

    if ("WebSocket" in window) {
       // Let us open a web socket
       var ws = new WebSocket("ws://localhost:8084/JavaAssignment/actions");

       ws.onopen = function() {          
          ws.send("");
       };

       ws.onmessage = function (evt) {    
           funGetDetails(evt.data);
       };

       ws.onclose = function() {                  
          // websocket is closed.
          alert("Something went wrong with your Browser!"); 
       };
    } else {              
       // The browser doesn't support WebSocket
       alert("Something went wrong with your Browser!");
    }
 }

 WebSocketTest();