import axios from 'axios'
import {useEffect, useState } from 'react'
import {pexelsObject, Photo} from '../interfaces'

export function usePexels(){
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [pagination, setPagination] = useState(1)
    const [fetching, setFetching] = useState(false)

    let getPhotos = async (photosPerPage = 30) => {
        if(fetching){
            return
        }
        let photosRequest: any
        setFetching(true)
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
             setFetching(false)
             
        }
    }

    useEffect(() => {
        getPhotos()
        //eslint-disable-next-line
    }, []) 


    return {
        photos: photos,
        fetchPhotos: getPhotos
    }
}