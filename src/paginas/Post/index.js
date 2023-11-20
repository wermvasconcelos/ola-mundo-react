import { useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostModelo from "componentes/PostModelo";
import ReactMarkDown from 'react-markdown'
import './Post.css'
import NaoEncontrada from "paginas/NaoEncontrada";


export default function Post() {
    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada/>
    }
    
    return (
        <PostModelo
            fotoCapa={`/assets/posts/${parametros.id}/capa.png`}
            titulo={post.titulo}
        >
        
            <div className='post-markdown-container'>
                <ReactMarkDown>
                    {post.texto}
                </ReactMarkDown>
            </div>
        </PostModelo>
       
    )
}