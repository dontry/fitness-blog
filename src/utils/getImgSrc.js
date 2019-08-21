import { imageBreakpoints, avatarBreakpoints } from "theme";

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
        return srcset + `${imageList[key].url} ${breakpoint},`;
      } else {
        return srcset;
      }
    },
    ""
  );
}
