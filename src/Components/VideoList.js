import React from 'react'
import VideoItem from './VideoItem'

function VideoList({videos , onVideoSelect}) {

    const videoList = videos.map(video => {
        return <VideoItem video={video} key={Math.random()} onVideoSelect={onVideoSelect}/> 
    })
    return (
        <div className="videoList">
            {
                videoList
            }
        </div>
    )
}

export default VideoList
