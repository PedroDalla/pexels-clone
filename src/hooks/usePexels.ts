import axios from 'axios'
import { useEffect, useState } from 'react'
import {pexelsObject} from '../interfaces'

export function usePexels(){
    const [photos, setPhotos] = useState<pexelsObject>()

    useEffect(() => {
        async function getPhotos(){
            let photosRequest
            try{
                photosRequest = await axios.get('https://api.pexels.com/v1/curated/?page=1&per_page=30', {
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
                setPhotos(photosRequest.data)
            }
        }
        getPhotos()
        
    }, [])

    return photos
}