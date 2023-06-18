export interface IPhoto {
  height: number;
  uid: string;
  likes: number;
  photographerUID: string;
  width: number;
  aspectRatio: string;
  original: string;
  small: string;
  medium: string;
  blur: string;
  key?: string;
}

export interface IGalleryResult {
  [index: string]: IPhoto;
}

export interface IUserGalleryResult {
  [index: string]: { uid: string };
}

export interface IUserCollectionResult {
  [index: string]: { uid: string };
}

export interface ICollection {
  uid: string;
  title: string;
  description?: string;
  content?: { [index: string]: { uid: string } };
  contentCount: number;
  authorUID: string;
}

export interface ICollectionResult {
  [index: string]: ICollection;
}

export interface IUser {
  displayName: string | null;
  email: string | null;
  phoneNumber?: string | null;
  uid: string;
  photoURL: string | null;
  gallery?: IUserGalleryResult;
  collections?: IUserCollectionResult;
  followers: string[];
  following: string[];
  views: number;
  likes?: { [key: string]: boolean };
  totalFollowers: number;
  totalFollowing: number;
  paypalEmail?: string;
  bio?: string;
  location?: string;
  website?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  allowMessages?: boolean;
}

export interface IStageFile {
  id: string;
  dataUrl: string;
  data: File;
  error: boolean;
  message?: string;
  optionalDetails: {
    title?: string;
    tags?: string;
    location?: string;
    challenges?: [];
  };
  technical: {
    width: number;
    height: number;
    aspectRatio: string;
  };
}

export interface IUploadFile {
  title?: string;
  tags?: string;
  location?: string;
  challenges?: [];
  width: number;
  height: number;
  aspectRatio: string;
  uid: string;
  likes: number;
  photographerUID: string;
}
