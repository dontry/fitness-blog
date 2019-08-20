import {imageBreakpoints, avatarBreakpoints} from 'theme';


export function getImageSrc(imageList ) {
  const imageUrlArray =  Object.values(imageList).map(image => image.url);
  return imageUrlArray[0]
}

export  function getImageListSrcset(imageList) {
  return Object.entries(imageList).reduce((srcset,[key, image]) => {
    return srcset + `${image.url} ${imageBreakpoints[key]},`
  }, "")
}


export  function getAvatarSrcset(imageList) {
  return Object.entries(imageList).reduce((srcset, [key, avatar]) => {
    return srcset + `${avatar.url} ${avatarBreakpoints[key]},`
  }, "")
}