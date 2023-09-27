import "./SCSS/ChatStyle.css"
import arrow from '../assets/Images/arrow.png'

export default function ChatWindow() {
    return(
        <>
        <div className="ChatWindow">
            <div className="CloseBtn">✖</div>
            <div className="ChatSidebar">
            </div>
            <div className="ChatBox">
                <div className="MessageView" >
                    <span style={{height: "30px"}}> </span>
                    <TextBubble msg={`Hi how are you feeling now, since yesterday
                    Hi how are you feeling now, since yesterday
                    Hi how are you feeling now, since yesterday
                    Hi how are you feeling now, since yesterday
                    Hi how are you feeling now, since yesterday
                    Hi how are you feeling now, since yesterday
                    Hi how are you feeling now, since yesterday
                    Hi how are you feeling now, since yesterday
                    Hi how are you feeling now, since yesterday`}/>
                    <TextBubble msg="Better"/>
                    <span style={{height: "50px"}}> </span>
                </div>
                <div className="TypeBox">
                    <div className="TypeField" role="textbox" contentEditable placeholder="Type Here"></div>
                    <input className="SendBtn" type="submit" placeholder="Send" value={"📤"}/>
                </div>
            </div>
        </div>
        </>
    )
}

function TextBubble(params) {
    return(
        <div className="Message">
            <img className="BubbleArrow" src={arrow} alt="" />
            <p>{params.msg}</p>
        </div>
    )
}