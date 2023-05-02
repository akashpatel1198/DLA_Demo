import React, { useEffect, useRef, useState } from "react";
import logo from '../../images/Logo_Shield.png'

const Box = ({ data }) => {
  const [image, setImage] = useState(logo)
  const imageRef = useRef();

  const dynamicImport = () => {
    import(`./test_avatars/avatar_${data.id}.png`)
      .then(image => {
        setImage(image.default)
      })
      .catch(e => {
        console.log('error with dynamic import of image')
        console.log(e)
      })
  }

  // useEffect(() => {
  //   console.log(`${data.id} mounted`)
  //   // dynamicImport()

  //   return(() => {
  //     console.log(`${data.id} unmounted`)
  //   })
  // }, [])

  useEffect(() => {
    if (!imageRef?.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        dynamicImport()
      }
    },
    {
      rootMargin: '150px'
    }
    );

    observer.observe(imageRef.current);
  }, [imageRef])

  return (
    <div className="box" onClick={dynamicImport}>
      <img ref={imageRef} src={image} alt="" className="box-img"></img>
      <div className="box-id">
        ID: {data.id}
      </div>
    </div>
  );
};

export default Box;