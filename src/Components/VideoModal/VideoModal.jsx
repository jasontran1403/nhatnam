const VideoModal = ({ isTrue, videoSrc, handelClose }) => {
  if (!isTrue) return null;

  return (
    <div className="video-modal">
      <div className="video-modal-overlay" onClick={handelClose}></div>

      <div className="video-modal-content">
        <button className="close-btn" onClick={handelClose}>
          ×
        </button>

        <video
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="video-modal-player"
        >
          <source src={videoSrc} type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;