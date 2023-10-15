import React from 'react'
import { EditorContext } from '../context/EditorContext'

export const useEditor = ()=>{
    const context = React.useContext(EditorContext)

    if(!context){
        throw new Error("Editor Context Should be used inside an Editor Context Provider")
    }

    return context
}
