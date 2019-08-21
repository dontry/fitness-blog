import { imageBreakpoints, avatarBreakpoints, bgImageBreakpoints } from "theme";

export function getImageSrc(imageList) {
  const imageUrlArray = Object.values(imageList).map(image => image.url);
  return imageUrlArray[0];
}

export function getImageListSrcset(imageList) {
  // return Object.entries(imageList).reduce((srcset, [key, image]) => {
  //   return srcset + `${image.url} ${imageBreakpoints[key]},`;
  // }, "");
  return Object.entries(imageBreakpoints).reduce(
    (srcset, [key, breakpoint]) => {
      if (imageList[key]) {
        return srcset + `${imageList[key].url} ${breakpoint}`;
      } else {
        return srcset;
      }
    },
    ""
  );
}

export function getAvatarSrcset(imageList) {
  return Object.entries(avatarBreakpoints).reduce(
    (srcset, [key, breakpoint]) => {
      if (imageList[key]) {
        return srcset + `${imageList[key].url} ${breakpoint}` 
      } else {
        return srcset;
      }
    },
    ""
  );
}

export function getBgImageListSet(imageList) {
const breakpointArray = Object.entries(bgImageBreakpoints);
console.log("breakpointArray", breakpointArray)
  return breakpointArray.reduce((imageSet, [key, breakpoint], index) => {
    if(imageList[key]) {
      return imageSet + `url(${imageList[key].url}) ${breakpoint}` + (index < breakpointArray.length -1 ? ", " : "")
    } else {
      return imageSet
    }
  }, "")
}
