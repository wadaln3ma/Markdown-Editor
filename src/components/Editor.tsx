import React from 'react'
import { useEditor } from '../hooks/useEditor'
import './Editor.scss'


export default function Editor(){
    const {state, setState} = useEditor()

    return(
        <>
            <textarea autoFocus
                value={state}
                onChange={
                    (e) => setState(e.target.value)
                }
                className="text-area" />
        </>
    )
}
