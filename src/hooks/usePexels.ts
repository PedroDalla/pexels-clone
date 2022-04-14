import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import {pexelsObject, Photo} from '../interfaces'

export function usePexels(){
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [pagination, setPagination] = useState(1)

  

    let getPhotos = useCallback(async (photosPerPage = 30) => {
        let photosRequest: any
        try{
            photosRequest = await axios.get<pexelsObject>(`https://api.pexels.com/v1/curated/?page=${pagination}&per_page=${photosPerPage}`, {
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json',
                    "User-Agent": 'Pexels/JavaScript',
                    Authorization: '563492ad6f9170000100000112136c57e1224640ba6eaef8764847cc'
                }
            })
        } catch (err) {
            console.error(err)
        }
        if(photosRequest){
            setPhotos(current => [...current, ...photosRequest.data.photos])
            setPagination(current => current + 1)
        }
    }, [pagination])

    useEffect(() => {
        getPhotos()
    }, [])


    return {
        photos: photos,
        fetchPhotos: getPhotos
    }
}