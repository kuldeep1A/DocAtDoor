import { useState } from 'react'
import './SCSS/slider.css'

export const Slider = (params)=>{
    document.documentElement.style.setProperty('--my-color', params.Color);
    return(
        <>
        <label class="switch">
            <input type="checkbox" onClick={()=>params.onClick()}/>
            <span class="slider round"></span>
        </label>
        </>
    )
}