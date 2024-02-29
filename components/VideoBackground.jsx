const VideoBackground = () => {
    return (
      <div className="video-background">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-60">
          <source src="/videos/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoBackground;
  