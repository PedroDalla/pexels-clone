export interface Photo{
    avg_color: string,
    height: number,
    id: number,
    liked: boolean,
    photographer: string,
    photographer_id: number,
    photographer_url: string,
    src: {
        landscape?: string,
        large: string,
        large2x: string,
        medium: string,
        original: string,
        portrait: string,
        tiny: string
    },
    url: string,
    width: number
}

interface VideoPicture{
    id: number,
    picture: string,
    nr: number
}

interface VideoFile{
    id: number,
    quality: string,
    file_type: string,
    width: number,
    height: number,
    link: string
}
export interface Video{
        id: number,
        width: number,
        height: number,
        url: string,
        image: string,
        full_res: null,
        tags: [],
        duration: number,
        user: {
          id: number,
          name: string,
          url: string
        },
        video_files: VideoFile[],
        video_pictures: VideoPicture[]
}

export function isPhoto(content: Photo | Video): content is Photo {
    return (content as Photo).src !== undefined;
}

export interface pexelsObject{
    url?: string;
    page: number;
    per_page: number;
    next_page: number;
    photos: Photo[];
}