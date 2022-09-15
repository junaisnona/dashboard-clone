import React from 'react'
import {comments as commentData} from '../data/comments';

function CommentsPage() {
    const [comments, setComments] = React.useState([]);
    const [comment, setComment] = React.useState<string>('');

    const fetchComments = async () => {
        const response : Response = await fetch('/api/comments');
        const data = await response.json();
        
        setComments(data);
    }
    

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    }

    const submitComment = async () => {
        const res: Response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await res.json();
        console.log(data);
    }

    const pushComments =  () => {
        const value: string = 'hey add me';
        commentData.push({id: 3, text: value});

        console.log(commentData);
        
    }

  return (
    <>
    <input type="text" onChange={(e) => inputHandler(e)} />
    <button onClick={submitComment}>Submit</button>
    <button onClick={fetchComments}>Load Comments</button>
    <button onClick={pushComments}>Push Comments</button>
    {comments.map((comment: {id: number, text: string}) => {
        console.log(comment);
        
        return (
            <div key={comment.id}>
                {comment.id} {comment.text}
            </div>
        )
    })}
    </>
  )
}

export default CommentsPage