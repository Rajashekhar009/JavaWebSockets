package raj.example.server;

import java.io.IOException;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
//import javax.enterprise.context.ApplicationScoped;

import javax.websocket.server.ServerEndpoint;
//import javax.inject.Inject;

//import java.io.StringReader;
//import javax.json.Json;
//import javax.json.JsonObject;
//import javax.json.JsonReader;
import java.util.logging.Level;
import java.util.logging.Logger;

@ServerEndpoint("/actions")
public class DevServer {
    
    private Session session;
    public String dynData =  "{\"data\": [{\"ID\": \"Cat1\",\"Ttl\": \"Electronics\",\"Desc\": \"Electronics - Description\", \"SubCatData\": []},{\"ID\": \"Cat2\",\"Ttl\": \"Appliances\",\"Desc\": \"Appliances - Description\",\"SubCatData\": [{\"ID\": \"SubCat1\",\"Ttl\": \"Washing Machines\",\"Desc\": \"Washing Machines - Description\"},{\"ID\": \"SubCat2\",\"Ttl\": \"Televisions\",\"Desc\": \"Televisions - Description\", \"SubCatItemsData\": [{\"ID\": \"SubCatItem1\",\"Ttl\": \"Sony\",\"Desc\": \"Sony - Description\"},{\"ID\": \"SubCatItem2\",\"Ttl\": \"Samsung\",\"Desc\": \"Samsung - Description\"},{\"ID\": \"SubCatItem2\",\"Ttl\": \"Hisense\",\"Desc\": \"Hisense - Description\"},{\"ID\": \"SubCatItem2\",\"Ttl\": \"LG\",\"Desc\": \"LG - Description\"}]},{\"ID\": \"SubCat3\",\"Ttl\": \"Refrigerators\",\"Desc\": \"Refrigerators - Description\"},{\"ID\": \"SubCat4\",\"Ttl\": \"Air conditioners\",\"Desc\": \"Air conditioners - Description\"},{\"ID\": \"SubCat5\",\"Ttl\": \"Small home appliances\",\"Desc\": \"Small home appliances - Description\"},{\"ID\": \"SubCat6\",\"Ttl\": \"Health care appliances\",\"Desc\": \"Health care appliances - Description\"}]},{\"ID\": \"Cat3\",\"Ttl\": \"Baby-Kids\",\"Desc\": \"Baby-Kids - Description\", \"SubCatData\": []},{\"ID\": \"Cat4\",\"Ttl\": \"Home-Furnitur\",\"Desc\": \"Home-Furnitur - Description\", \"SubCatData\": []},{\"ID\": \"Cat5\",\"Ttl\": \"Books\",\"Desc\": \"Books - Description\", \"SubCatData\": []},{\"ID\": \"Cat6\",\"Ttl\": \"Gaming-Accessories\",\"Desc\": \"Gaming-Accessories - Description\", \"SubCatData\": []}]}";
        
    @OnOpen
    public void open(Session session) {
        this.session = session;
        System.out.println("raj.example.server.DevServer.open()");
    }

    @OnClose
    public void close(Session session) {
        System.out.println("raj.example.server.DevServer.close()");        
    }

    @OnError
    public void onError(Throwable error) {
        Logger.getLogger(DevServer.class.getName()).log(Level.SEVERE, null, error);
    }
    
    @OnMessage
    public void OnMessage(String message){
        System.out.println("message:"+message);
        
        if(this.session!=null && this.session.isOpen()){
            try{
                this.session.getBasicRemote().sendText(dynData);                
            }
            catch(IOException ie){
                Logger.getLogger(DevServer.class.getName()).log(Level.SEVERE,"Server Error is here");
            }
        }
    }
}