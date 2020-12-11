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

export function formatDescription(text) {
  const firtsPartOfText = text.split(' <', 2)[0];
  const secondPartOfText = text.split('a>.')[1];

  const formatedDescription = [firtsPartOfText, secondPartOfText].join('');

  return formatedDescription;
}
