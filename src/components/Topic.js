import React from 'react'
import { useParams } from 'react-router-dom'

const Topic = () => {
    let { topicId } = useParams();
    console.log(topicId);
    return (
        <div>
            <h2>
                Requsted Topic ID: {topicId}
            </h2>
        </div>
    )
}

export default Topic;