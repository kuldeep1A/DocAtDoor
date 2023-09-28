import "./SCSS/ChatStyle.css"
import arrow from '../assets/Images/arrow.png'
import msg from '../assets/msg.png'
import close from '../assets/cross.png'
import { useReducer, useState } from "react";
import { doc } from "@firebase/firestore";

var chat = [
    <TextBubble side="left" msg="Hi"/>,
    <TextBubble side="left" msg="Hello how are you feeling now?"/>,
    <TextBubble side="left" msg="Much better than before, Thanks"/>,
    <TextBubble side="right" msg="Ok great just in case if things get worse take a highh dosage of hte prescribed medicine, GoodBye"/>,
]
var eventAdded = false;
export default function ChatWindow() {
    // const [render, setRender] = useState(0);
    const [,forceUpdate] = useReducer(x => x+1, 0)
    const [isEnable, SetIsEnable] = useState(false);
    
    
    const send = ()=>{
        const msg = document.getElementById('TypeField')
        const win = document.getElementById('ChatWindow')
        if(msg.innerText != ''){
            const element = <TextBubble side="left" msg={msg.innerText}/>
            chat.push(element)
            msg.innerText = ""
            forceUpdate()
            setTimeout(() => {
                win.scrollTop = win.scrollHeight;
            }, 10);
        }
    }

    document.onkeydown = (event) => {
        var name = event.key;
        var code = event.code;
        if (name=='Control') return;
        
        if (event.ctrlKey && name == 'Enter' && isEnable && !event.repeat){
            console.log(event.ctrlKey, name, isEnable, event.repeat);
            send();
        }
      };
    
    const toogle = ()=>{
        const chatWin = document.getElementById('ChatWindow');
        const typeBox = document.getElementById('TypeBox');
        const closeBtn = document.getElementById('CloseBtn');
        
        const hide = ()=>{
            chatWin?.classList.add('hide');
            typeBox.style.display = 'none';
            closeBtn?.style.setProperty('--button-opacity', 1.0)
        }
        const show = ()=>{
            chatWin?.classList.remove('hide');
            closeBtn?.style.setProperty('--button-opacity', 0.0)
            setTimeout(() => {
                typeBox.style.display = 'block';
            }, 250);
        }
        isEnable ? hide() : show()
        SetIsEnable(!isEnable);
    }
      
    return(
        <>
        <div id='ChatWindow' className="ChatWindow hide">
            <div id="CloseBtn" className="CloseBtn" onClick={()=>toogle()}>
                <img src={msg}/>
                <img src={close}/>
                </div>
            <div className="ChatSidebar">
            </div>
            <div className="ChatBox">
                <div className="MessageView" >
                    <span style={{height: "30px"}}> </span>
                        <div className="ChatHolder">{chat}</div>
                    <span id='BottomGap' style={{height: "50px"}}> </span>
                </div>
                <div id="TypeBox" style={{display: 'none'}} className="TypeBox">
                    <div id='TypeField' className="TypeField" role="textbox" contentEditable placeholder="Type Here"></div>
                    <input onClick={()=>{send()}} className="SendBtn" type="submit" placeholder="Send" value={"📤"}/>
                </div>
            </div>
        </div>
        </>
    )
}

function TextBubble(params) {
    return(
        <div side={params.side} className="Message">
            <img className="BubbleArrow" src={arrow} alt="" />
            <p>{params.msg}</p>
        </div>
    )
}