import React from 'react'

export const EditorContext = React.createContext()

export const EditorContextProvider = ({children})=>{
    const [state, setState] = React.useState("")

    return(
        <EditorContext.Provider
            value={{state, setState}}>
            { children }
        </EditorContext.Provider>
    )
}
