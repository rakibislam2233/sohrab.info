"use client";
import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Reveal from "./Reveal";

interface PhotoGalleryProps {
  images: {
    url: string;
    caption?: string;
    category?: string;
  }[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  const [index, setIndex] = useState(-1);

  const photos = images.map((img) => ({
    src: img.url,
    width: 1600,
    height: 1200,
    alt: img.caption,
    title: img.caption,
  }));

  return (
    <div className="w-full">
      <Reveal>
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          onClick={({ index }) => setIndex(index)}
          columns={(containerWidth) => {
            if (containerWidth < 400) return 1;
            if (containerWidth < 800) return 2;
            return 3;
          }}
          spacing={12}
        />
      </Reveal>

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default PhotoGallery;
