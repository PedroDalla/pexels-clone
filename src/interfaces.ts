export interface IPhoto {
    height: number,
    uid: string,
    likes: number,
    photographer_uid: string,
    width: number,
    aspectRatio: string,
    url: string
}

export interface IUser {
    displayName: string | null,
    email: string | null,
    phoneNumber: string | null,
    uid: string,
    photoURL: string | null,
    gallery: string[],
    collections: string[],
    followers: string[],
    following: string[],
    views: number,
    totalFollowers: number,
    totalFollowing: number,
}

export interface ICollection {
    id: number,
    title: string,
    content: string[],
    count: number,
    author: string,
}


export interface IStageFile {
    id: string,
    dataUrl: string,
    data: File,
    error: boolean,
    message?: string,
    optionalDetails: {
        title?: string,
        tags?: string,
        location?: string,
        challenges?: [],
    },
    technical: {
        width: number,
        height: number,
        aspectRatio: string,
    }
};

export interface IUploadFile {
    title?: string,
    tags?: string,
    location?: string,
    challenges?: [],
    width: number,
    height: number,
    aspectRatio: string,
    uid: string,
    likes: number,
    photographer_uid: string,
}