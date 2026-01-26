import { useEffect, useState } from 'react'

export default function ProjectGallery({ project, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleEscape = (e) => {
        if (e.key === 'Escape') onClose()
      }
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen || !project || !project.gallery || project.gallery.length === 0) return null
  const images = project.gallery

  const isVideo = (item) => {
    if (project.video && item === project.video) return true
    if (typeof item === 'string') {
      return item.includes('.mp4') || item.includes('video') || item.match(/\.(mp4|webm|ogg)$/i)
    }
    return false
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="gallery-modal" onClick={onClose} role="dialog" aria-label={`${project.title} image gallery`} aria-modal="true">
      <div className="gallery-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-modal__close" onClick={onClose} aria-label="Close gallery">
          ×
        </button>
        
        <div className="gallery-modal__header">
          <h2 className="h2">{project.title}</h2>
          <p className="muted">
            {isVideo(images[currentIndex]) ? 'Video' : 'Image'} {currentIndex + 1} of {images.length}
          </p>
        </div>

        <div className="gallery-modal__main">
          <button 
            className="gallery-modal__nav gallery-modal__nav--prev" 
            onClick={prevImage}
            aria-label="Previous image"
            disabled={images.length <= 1}
          >
            ‹
          </button>

          <div className="gallery-modal__image-container">
            {isVideo(images[currentIndex]) ? (
              <video 
                src={images[currentIndex]} 
                className="gallery-modal__image"
                controls
                autoPlay
                loop
              />
            ) : (
              <img 
                src={images[currentIndex]} 
                alt={`${project.title} - Image ${currentIndex + 1}`}
                className="gallery-modal__image"
              />
            )}
          </div>

          <button 
            className="gallery-modal__nav gallery-modal__nav--next" 
            onClick={nextImage}
            aria-label="Next image"
            disabled={images.length <= 1}
          >
            ›
          </button>
        </div>

        {images.length > 1 && (
          <div className="gallery-modal__thumbnails">
            {images.map((img, index) => (
              <button
                key={index}
                className={`gallery-modal__thumbnail ${index === currentIndex ? 'gallery-modal__thumbnail--active' : ''}`}
                onClick={() => goToImage(index)}
                aria-label={`Go to ${isVideo(img) ? 'video' : 'image'} ${index + 1}`}
              >
                {isVideo(img) ? (
                  <video src={img} muted playsInline />
                ) : (
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
