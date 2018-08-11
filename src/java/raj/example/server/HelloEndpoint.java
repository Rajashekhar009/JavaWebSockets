package raj.example.server;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.enterprise.context.ApplicationScoped;

import javax.websocket.server.ServerEndpoint;
import javax.inject.Inject;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/hello")
public class HelloEndpoint {
    
    private Session session;
    
    @OnOpen
    public void onCreateSession(Session session){
        this.session = session;
    }
    
    @OnMessage
    public void onTextMessage(String message){
        System.out.println("message:"+message);
        
        if(this.session!=null && this.session.isOpen()){
            try{
                this.session.getBasicRemote().sendText("From Server:"+message);
                
            }
            catch(IOException ie){
                Logger.getLogger(HelloEndpoint.class.getName()).log(Level.SEVERE,"Server Error is here");
            }
        }
    }
    
}