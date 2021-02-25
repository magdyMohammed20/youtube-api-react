import React from 'react'

function VideoDetail({video}) {
    
   
    return (
        <div className="videoDetail">

            {
                !video ? "" : (

                    <div>
                       <iframe height="400" src={"https://www.youtube.com/embed/" + video.id.videoId} className="w-100" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="videoPlayer" allowFullScreen></iframe>
                        <p className="font-weight-bold">{video.snippet.title}</p>
                        <p>{video.snippet.description}</p>
                    </div>
                )
            }         
        </div>
    )
}

export default VideoDetail
