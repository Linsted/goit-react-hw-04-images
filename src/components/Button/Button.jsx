import PropTypes from 'prop-types';
import { ButtonLoadMore } from './button.styled';

export const Button = ({onClick}) => {
   
    return (
        <ButtonLoadMore onClick={onClick} type="button">Load More</ButtonLoadMore>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}