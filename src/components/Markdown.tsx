import React from 'react'
import ReactMarkDown from 'react-markdown'
import { useEditor } from '../hooks/useEditor'
import remarkGfm from 'remark-gfm'
import './Markdown.scss'

export default function Markdown(){
    const {state, setState} = useEditor()

    return(
        <ReactMarkDown children={state}
            className="preview" 
            remarkPlugins={remarkGfm}/>
    )
}
