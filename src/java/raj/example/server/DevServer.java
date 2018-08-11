package raj.example.server;

import java.io.IOException;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.enterprise.context.ApplicationScoped;

import javax.websocket.server.ServerEndpoint;
import javax.inject.Inject;

import java.io.StringReader;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import java.util.logging.Level;
import java.util.logging.Logger;
import raj.example.test.Device;

//@ApplicationScoped
@ServerEndpoint("/actions")
public class DevServer {
    
    private Session session;
    public String dynData =  "{'data': [{'ID': 'Cat1','Ttl': 'Electronics','Desc': 'Electronics - Description'},{'ID': 'Cat2','Ttl': 'Appliances','Desc': 'Appliances - Description'},{'ID': 'Cat3','Ttl': 'Baby-Kids','Desc': 'Baby-Kids - Description'},{'ID': 'Cat4','Ttl': 'Home-Furnitur','Desc': 'Home-Furnitur - Description'},{'ID': 'Cat5','Ttl': 'Books','Desc': 'Books - Description'},{'ID': 'Cat6','Ttl': 'Gaming-Accessories','Desc': 'Gaming-Accessories - Description'}]}";
    //@Inject
    //private SessionHandler sessionHandler;
    
    @OnOpen
    public void open(Session session) {
        this.session = session;
        System.out.println("raj.example.server.DevServer.open()");
        //sessionHandler.addSession(session);
    }

    @OnClose
    public void close(Session session) {
        System.out.println("raj.example.server.DevServer.close()");
        //sessionHandler.removeSession(session);
    }

    @OnError
    public void onError(Throwable error) {
        Logger.getLogger(DevServer.class.getName()).log(Level.SEVERE, null, error);
    }
/*
    @OnMessage
    public void handleMessage(String message, Session session) {
        try (JsonReader reader = Json.createReader(new StringReader(message))) 
        {
            JsonObject jsonMessage = reader.readObject();
            System.out.println("received message from client " + jsonMessage);
            if ("add".equals(jsonMessage.getString("action"))) {
                Device device = new Device();
                device.setName(jsonMessage.getString("name"));
                device.setDescription(jsonMessage.getString("description"));
                device.setType(jsonMessage.getString("type"));
                device.setStatus("On");
                sessionHandler.addDevice(device);
            }

            if ("remove".equals(jsonMessage.getString("action"))) {
                int id = (int) jsonMessage.getInt("id");
                sessionHandler.removeDevice(id);
            }

            if ("toggle".equals(jsonMessage.getString("action"))) {
                int id = (int) jsonMessage.getInt("id");
                sessionHandler.toggleDevice(id);
            }
        }
    }
*/
    
    @OnMessage
    public void OnMessage(String message){
        System.out.println("message:"+message);
        
        if(this.session!=null && this.session.isOpen()){
            try{
                this.session.getBasicRemote().sendText("From Server:"+dynData);                
            }
            catch(IOException ie){
                Logger.getLogger(HelloEndpoint.class.getName()).log(Level.SEVERE,"Server Error is here");
            }
        }
    }
}
