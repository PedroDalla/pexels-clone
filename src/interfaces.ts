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

export interface pexelsObject{
    url?: string;
    page: number;
    per_page: number;
    next_page: number;
    photos: Photo[];
}