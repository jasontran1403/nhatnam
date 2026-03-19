const VideoModal = ({ isTrue, videoSrc, handelClose }) => {
  if (!isTrue) return null;

  return (
    <div className="nn-video-modal">
      <div className="nn-video-modal-overlay" onClick={handelClose}></div>

      <div className="nn-video-modal-content">
        <button className="nn-video-modal-close" onClick={handelClose}>
          ×
        </button>

        <div className="nn-video-modal-frame-wrap">
          <iframe
            src={videoSrc}
            title="Cloudinary Video Player"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            className="nn-video-modal-iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;