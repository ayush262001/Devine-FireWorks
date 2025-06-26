import React from 'react'
import CircularGallery from './CircularGallery' // ✅ use local component

const Parallax = () => {
  const ImageData = [
    { imgage: '/ParallaxImage/image1.JPG', text: '' },
    { image: '/ParallaxImage/image2.jpg', text: '' },
    { image: '/ParallaxImage/image3.jpg', text: '' },
    { image: '/ParallaxImage/image4.jpg', text: '' },
    { image: '/ParallaxImage/image5.jpg', text: '' },
    { image: '/ParallaxImage/image6.jpg', text: '' },
    { image: '/ParallaxImage/image7.jpg', text: '' },
    { image: '/ParallaxImage/image10.jpg', text: '' },
    { image: '/ParallaxImage/image8.jpg', text: '' },
    { image: '/ParallaxImage/image9.jpg', text: '' },
    { image: '/ParallaxImage/image10.jpg', text: '' },
  ]

  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <CircularGallery
        items={ImageData} // ✅ use original format if local component accepts it
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
      />
    </div>
  )
}

export default Parallax
