export interface IImage {
  desktop: string,
  mobile: string,
  tablet: string
}

export interface IProject {
  backgroundDescription: string,
      description: string,
      heroImageDesktop: string,
      heroImageMobile: string,
      heroImageTablet: string,
      images: Array<IImage>,
      title: string
}