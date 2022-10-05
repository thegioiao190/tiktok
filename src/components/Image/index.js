import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
function Image({ fallBack = 'https://via.placeholder.com/150', src, alt, ...props }, ref) {
    const [image, setImage] = useState(src);
    const onHandleError = () => {
        setImage(fallBack);
    };
    return <img ref={ref} src={image} {...props} onError={onHandleError} alt={alt} />;
}
forwardRef(Image).propTypes = {
    fallBack: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
};
export default forwardRef(Image);
