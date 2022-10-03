import { forwardRef, useState } from 'react';
function Image({ fallBack = 'https://via.placeholder.com/150', src, ...props }, ref) {
    const [image, setImage] = useState(src);
    const onHandleError = () => {
        setImage(fallBack);
    };
    return <img ref={ref} src={image} {...props} onError={onHandleError} />;
}
export default forwardRef(Image);
