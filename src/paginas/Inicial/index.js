import PostCard from "componentes/PostCard";
import styles from './Inicial.module.css'
import posts from 'json/posts.json'

export default function Inicial() {
    return (
            <ul className={styles.posts}>
                {posts.map((post) =>
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                )}
            </ul>     
    )
}