import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetchingSinglePost() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idfrombuttonclick, setidfrombuttonclick] = useState(1);

    const handleClick = () => {
        setidfrombuttonclick(id);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
        .then(res => {
            console.log(res.data);
            setPost(res.data);
        })
        .catch(err => {
            console.log(err);
        }) 
    }, [idfrombuttonclick])

    return (
        // TRIGGER A EFFECT ON A BUTTON CLICK
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>
                {post.title}
            </div>
            {/* <ul>
                {post.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetchingSinglePost
