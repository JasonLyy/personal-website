import Image, { ImageLoaderProps, ImageProps } from 'next/future/image';
import React from 'react';

export const s3ImageLoader = ({ src }: Partial<ImageLoaderProps>) => {
  return `${src}`;
};

const NextImage: typeof Image = (props: ImageProps) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image loader={s3ImageLoader} {...props} />;
};

export default NextImage;
