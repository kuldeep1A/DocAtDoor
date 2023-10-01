import "./SCSS/ChatStyle.css"
import arrow from '../assets/Images/arrow.png'
import msg from '../assets/msg.png'
import close from '../assets/cross.png'
import userImg from '../assets/Images/HomeImages/user.png'
import { useReducer, useState } from "react";
import { doc } from "@firebase/firestore";

var chat = [
    <TextBubble side="right" msg="Hi"/>,
    <TextBubble side="right" msg="How are you feeling now?"/>,
    <TextBubble side="left" msg="Much better than before, Thanks"/>,
    <TextBubble side="right" msg="Ok great just in case if things get worse take a double dosage of the prescribed medicine, GoodBye"/>,
    <TextBubble side="left" msg="Ok, Thanks again bye"/>,
]
var chat2 = [
    <TextBubble side="left" msg="Hi"/>,
    <TextBubble side="left" msg="Hello how are you feeling now?"/>,
    <TextBubble side="left" msg="Much better than before, Thanks"/>,
    <TextBubble side="right" msg="Ok great just in case if things get worse take a highh dosage of hte prescribed medicine, GoodBye"/>,
]
var Contacts = [<Contact Name="Vehdat Hamid Mansuri"/>,
<Contact Name="Kuldeep Dhangar"/>,
<Contact Name="Atiqur Rehman Mansuri"/>] 
var eventAdded = false;
export default function ChatWindow() {
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
        const closeBtn = document.getElementById('CloseBtn');
        
        const hide = ()=>{
            chatWin?.classList.add('hide');
            chatWin?.style.setProperty("--is-Enabled", 'none')
            closeBtn?.style.setProperty('--button-opacity', 1.0)
        }
        const show = ()=>{
            chatWin?.classList.remove('hide');
            closeBtn?.style.setProperty('--button-opacity', 0.0)
            setTimeout(() => {
                chatWin?.style.setProperty("--is-Enabled", 'block')
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
                <div style={{height: 40}}></div>
                <div className="ContactHolder">
                    {Contacts}
                </div>
            </div>
            <div className="ChatBox">
                <div className="MessageView" >
                    <span style={{height: "30px"}}> </span>
                        <div className="ChatHolder">{chat}</div>
                    <span id='BottomGap' style={{height: "50px"}}> </span>
                </div>
                <div id="TypeBox" className="TypeBox">
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

function Contact(params) {
    function ChangeChat(params) {
        console.log("OK OK");
    }
    const name = 'Dr. ' + params.Name;
    return(
        <>
        <div title={name} onClick={ChangeChat} className="Contact">
            <img src={userImg} alt="" />
            <h4>{name}</h4>
        </div>
        </>
    )
}