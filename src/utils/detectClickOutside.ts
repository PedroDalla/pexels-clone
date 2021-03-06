export const detectClickOutside = (ref: React.MutableRefObject<any>, callback: Function) => {
    function handleClickOutside(ev: MouseEvent) {
        if (ref.current && !ref.current.contains(ev.target)) {
            callback()
            document.removeEventListener('click', handleClickOutside)
        }
    }
    setTimeout(() => document.addEventListener('click', handleClickOutside), 0)
}
