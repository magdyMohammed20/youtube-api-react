import React from 'react'

function VideoItem({video , onVideoSelect}) {
    return (
        <div>
            <div className="card mb-3 flex-row border-0" onClick={() => onVideoSelect(video)}>
                <img className="card-img-top" src={video.snippet.thumbnails.medium.url} />
                <div className="card-body">
                    <h6 className="card-title">{video.snippet.title}</h6>

                </div>
            </div>
        </div>
    )
}

export default VideoItem
