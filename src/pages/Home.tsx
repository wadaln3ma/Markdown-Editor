import Rract from 'react'
import Editor from '../components/Editor'
import Markdown from '../components/Markdown'
import { useEditor } from '../hooks/useEditor'
import './Home.scss'

export default function Home(){
    return(
        <>
            <main className="container">
                <Editor />
                <Markdown />
            </main>
        </>
    )
}
