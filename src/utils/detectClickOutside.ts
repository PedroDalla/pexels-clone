export const detectClickOutside = (ref: React.MutableRefObject<any>, callback: Function) => {
    //Counter is used to avoid calling the callback for the click that triggers adding the eventListener
    let counter = 0
    function handleClickOutside(ev: MouseEvent) {
        if (ref.current && !ref.current.contains(ev.target) && counter > 0) {
            callback()
            document.removeEventListener('click', handleClickOutside)
        } else {
            counter = 1;
        }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
        document.removeEventListener('click', handleClickOutside)
    }
}
