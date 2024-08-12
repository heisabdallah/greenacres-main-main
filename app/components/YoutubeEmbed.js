
const YouTubeEmbed = ({ videoId }) => (
    <div className="relative pb-9/16 h-60 w-full md:h-80 md:w-96 overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </div>
  );
  
  export default YouTubeEmbed;
  