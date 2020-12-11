export function getImage(images, imageType = 'track') {
  if (imageType === 'track') {
    let trackImage = {};

    images.forEach((picture) => {
      if (picture.size === 'medium') {
        trackImage = picture;
      }
    });

    return trackImage;
  }

  let artistImage = {};

  images.forEach((picture) => {
    if (picture.size === 'extralarge') {
      artistImage = picture;
    }
  });

  return artistImage;
}
