//window.onload = init;
/*
var socket1 = new WebSocket("wss://localhost:8084/JavaAssignment/actions");
socket1.onopen = function(){
    alert("onopen");
    var DeviceAction = {
        action: "add",
        name: "name",
        type: "type",
        description: "description"
    };
    socket1.send(JSON.stringify(DeviceAction));
};

socket1.onmessage = onMessage();

socket1.onclose = function(){
   alert('Connection closed');
}

function onMessage(event) {
    alert("onMessage event:"+event);
    var device = JSON.parse(event.data);
    if (device.action === "add") {
        printDeviceElement(device);
    }
    if (device.action === "remove") {
        document.getElementById(device.id).remove();
        device.parentNode.removeChild(device);
    }
    if (device.action === "toggle") {
        var node = document.getElementById(device.id);
        var statusText = node.children[2];
        if (device.status === "On") {
            statusText.innerHTML = "Status: " + device.status + " (<a href=\"#\" OnClick=toggleDevice(" + device.id + ")>Turn off</a>)";
        } else if (device.status === "Off") {
            statusText.innerHTML = "Status: " + device.status + " (<a href=\"#\" OnClick=toggleDevice(" + device.id + ")>Turn on</a>)";
        }
    }
}

function addDevice(name, type, description) {
    alert("addDevice()");
    var DeviceAction = {
        action: "add",
        name: name,
        type: type,
        description: description
    };
    
    //socket = new WebSocket("ws://localhost:8084/JavaAssignment/actions");
    //socket.onmessage = function(e){ console.log(e.data); };
    alert(JSON.stringify(DeviceAction));
    socket1.onopen = () => socket1.send(JSON.stringify(DeviceAction));

    //var a = 
    //console.log(a);
}

function removeDevice(element) {
    var id = element;
    var DeviceAction = {
        action: "remove",
        id: id
    };
    socket1.send(JSON.stringify(DeviceAction));
}

function toggleDevice(element) {
    var id = element;
    var DeviceAction = {
        action: "toggle",
        id: id
    };
    socket1.send(JSON.stringify(DeviceAction));
}

function printDeviceElement(device) {
    
    alert("printDeviceElement:");
    var content = document.getElementById("content");
    
    var deviceDiv = document.createElement("div");
    deviceDiv.setAttribute("id", device.id);
    deviceDiv.setAttribute("class", "device " + device.type);
    content.appendChild(deviceDiv);

    var deviceName = document.createElement("span");
    deviceName.setAttribute("class", "deviceName");
    deviceName.innerHTML = device.name;
    deviceDiv.appendChild(deviceName);

    var deviceType = document.createElement("span");
    deviceType.innerHTML = "<b>Type:</b> " + device.type;
    deviceDiv.appendChild(deviceType);

    var deviceStatus = document.createElement("span");
    if (device.status === "On") {
        deviceStatus.innerHTML = "<b>Status:</b> " + device.status + " (<a href=\"#\" OnClick=toggleDevice(" + device.id + ")>Turn off</a>)";
    } else if (device.status === "Off") {
        deviceStatus.innerHTML = "<b>Status:</b> " + device.status + " (<a href=\"#\" OnClick=toggleDevice(" + device.id + ")>Turn on</a>)";
        //deviceDiv.setAttribute("class", "device off");
    }
    deviceDiv.appendChild(deviceStatus);

    var deviceDescription = document.createElement("span");
    deviceDescription.innerHTML = "<b>Comments:</b> " + device.description;
    deviceDiv.appendChild(deviceDescription);

    var removeDevice = document.createElement("span");
    removeDevice.setAttribute("class", "removeDevice");
    removeDevice.innerHTML = "<a href=\"#\" OnClick=removeDevice(" + device.id + ")>Remove device</a>";
    deviceDiv.appendChild(removeDevice);
}

function showForm() {
    document.getElementById("addDeviceForm").style.display = 'block';
}

function hideForm() {
    document.getElementById("addDeviceForm").style.display = "none";
}

function formSubmit() {
    var form = document.getElementById("addDeviceForm");
    var name = form.elements["device_name"].value;
    var type = form.elements["device_type"].value;
    var description = form.elements["device_description"].value;
    hideForm();
    document.getElementById("addDeviceForm").reset();
    alert("name:"+name+" type:"+type+" description:"+description);
    addDevice(name, type, description);
}

function init() {
    alert("Init");
    hideForm();
}

*/
        var received_msg = "";

        function WebSocketTest() {
            
            if ("WebSocket" in window) {
               alert("WebSocket is supported by your Browser!");
               
               // Let us open a web socket
               var ws = new WebSocket("ws://localhost:8084/JavaAssignment/actions");
				
               ws.onopen = function() {
                  alert("onopen");
                  ws.send("");
                  alert("Message is sent...");
               };
				
               ws.onmessage = function (evt) { 
                   alert("Message is received..."+evt.data);
                   received_msg = evt.data;                  
               };
				
               ws.onclose = function() {                  
                  // websocket is closed.
                  alert("Connection is closed..."); 
               };
            } else {              
               // The browser doesn't support WebSocket
               alert("WebSocket NOT supported by your Browser!");
            }
         }