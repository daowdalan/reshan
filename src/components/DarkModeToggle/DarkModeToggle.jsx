"use client"

import { useContext } from 'react';
import styles from './DarkModeToggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';


export default function DarkModeToggle() {
    const {mode, toggle} = useContext(ThemeContext)
  return (
    <div className="flex border-2 border-primary rounded-full justify-between items-center p-1 relative" onClick={toggle}>
        <div className="text-lg select-none cursor-pointer">🌙</div>
        <div className="text-lg select-none cursor-pointer">🌑</div>
        <div className="w-6 h-6 bg-green-600 rounded-full cursor-pointer absolute" 
        
        style={mode === "light" ? {left:"4px"} : {right:"4px"}}
        />
      
    </div>
  )
}
