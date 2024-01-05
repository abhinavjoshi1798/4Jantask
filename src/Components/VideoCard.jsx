import React from 'react'

const VideoCard = ({ videoSrc, title, progressValue }) => {
    return (

        <div style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            borderRadius:"15px",
            overflow:'hidden',
            border: "1px solid rgba(0,0,0,.125)"
        }}>
            <iframe
                width="100%"
                height="100%"
                src={videoSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <div style={{padding:"5px"}}>
            <h3 style={{
                fontSize: "1rem",
                fontWeight: 700,
                lineHeight: 1.5,
                color: "#212529",
                marginTop: "20px",
                marginBottom: "20px"
            }}>{title}</h3>



            <div className="progress" style={{ height: "1rem", marginBottom: "20px" }}>
                <div className="progress-bar" role="progressbar" aria-valuenow={progressValue} aria-valuemin="0" aria-valuemax="100" style={{ width: `${progressValue}%`, backgroundColor: "#ff9b44", height: "100%" }}>
                    <span className="sr-only"></span>
                </div>
            </div>
            <a href="#" className="icon-link gap-1 icon-link-hover stretched-link" style={{ color: 'blue', textDecoration: "none", marginBottom: "20px" }}>
                Continue watching
            </a>
            </div>
        </div>



    )
}

export default VideoCard
