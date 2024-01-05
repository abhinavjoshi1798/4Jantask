import React from 'react'
import VideoCard from './VideoCard'

const FirstSection = () => {
    return (
        <div className='container' style={{
            marginTop: "75px",
            border: "1px solid rgba(0,0,0,.125)",
            borderRadius: "0.25rem",
            paddingLeft:"0px",
            paddingRight:"0px"
        }}>
            <h3 style={{
                fontSize: "1.75rem",
                fontFamily: "CircularStd",
                padding: "0.75rem 1.25rem",
                backgroundColor: "rgba(0,0,0,.03)",
                borderBottom: "1px solid rgba(0,0,0,.125)",
                width: "100%"
            }}
            >QPR Training</h3>
              
              <div style={{
                display:"grid",
                marginTop: "10px",
                gap:"10px"
             }}
             className='row1'>
                <VideoCard videoSrc="https://www.youtube.com/embed/YEL3hS_UENg?si=nE8Un0e6TxUzF0dh" title="QPR Training Session Part-1 Mental health explanation" progressValue={70} />
                <VideoCard videoSrc="https://www.youtube.com/embed/YEL3hS_UENg?si=nE8Un0e6TxUzF0dh" title="QPR Training Session Part-1 Mental health explanation" progressValue={70} />
                <VideoCard videoSrc="https://www.youtube.com/embed/YEL3hS_UENg?si=nE8Un0e6TxUzF0dh" title="QPR Training Session Part-1 Mental health explanation" progressValue={70} />
                <VideoCard videoSrc="https://www.youtube.com/embed/YEL3hS_UENg?si=nE8Un0e6TxUzF0dh" title="QPR Training Session Part-1 Mental health explanation" progressValue={70} />
                <VideoCard videoSrc="https://www.youtube.com/embed/YEL3hS_UENg?si=nE8Un0e6TxUzF0dh" title="QPR Training Session Part-1 Mental health explanation" progressValue={70} />
                <VideoCard videoSrc="https://www.youtube.com/embed/YEL3hS_UENg?si=nE8Un0e6TxUzF0dh" title="QPR Training Session Part-1 Mental health explanation" progressValue={70} />
                <VideoCard videoSrc="https://www.youtube.com/embed/YEL3hS_UENg?si=nE8Un0e6TxUzF0dh" title="QPR Training Session Part-1 Mental health explanation" progressValue={70} />

            </div>
              
            
        </div>
    )
}

export default FirstSection




