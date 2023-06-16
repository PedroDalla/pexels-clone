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

export interface IUser {
  displayName: string | null;
  email: string | null;
  phoneNumber?: string | null;
  uid: string;
  photoURL: string | null;
  gallery?: { uid: string }[];
  collections?: { uid: string }[];
  followers: string[];
  following: string[];
  views: number;
  likes?: { [key: string]: boolean };
  totalFollowers: number;
  totalFollowing: number;
}

export interface ICollection {
  id: number;
  title: string;
  content: string[];
  count: number;
  author: string;
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
