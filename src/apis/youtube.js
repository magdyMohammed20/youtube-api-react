import axios from 'axios'

// Get This Key From console.developers.com
const KEY = "AIzaSyD5KHWDlWGtOoaXb6fTKs0s5RILv6T2Jmw";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 20 , 
        key: KEY
    }
})