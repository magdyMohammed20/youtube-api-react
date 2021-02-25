import {useState , useEffect} from 'react'
import Searchbar from './Components/Searchbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import youtube from './apis/youtube'
import VideoList from './Components/VideoList'
import VideoDetail from './Components/VideoDetail'
import './App.css'

function App() {
  
  const [videos , setVideos] = useState([]);
  const [selectedVideo , setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('buildings')
  } , [])

  const onTermSubmit = async term => {
    await youtube.get('/search' , {
      params: {
        q: term
      }
    }).then(res => {
      setVideos(res.data.items)
      setSelectedVideo(res.data.items[1]) // Set Default Video After Search Submit
    })
  }

  const onVideoSelect = video => {
    setSelectedVideo(video)
  }

  return (
    
        <div className="App container">  
          <Searchbar onFormSubmit = {onTermSubmit}/>
          <div className="video d-flex justify-content-between">
            <VideoDetail video={selectedVideo}/>
            <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
          </div>
        </div>    
    );
}

export default App;
