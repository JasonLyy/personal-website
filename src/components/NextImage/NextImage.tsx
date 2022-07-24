import Image, { ImageLoader, ImageProps } from 'next/future/image';
import React from 'react';

const s3ImageLoader: ImageLoader = ({ src, width, quality }) => {
  return `http://www.jsonjason.com.s3-website-ap-southeast-2.amazonaws.com${src}?w=${width}&q=${
    quality || 75
  }`;
};

const NextImage: typeof Image = (props: ImageProps) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image loader={s3ImageLoader} {...props} />;
};

export default NextImage;
