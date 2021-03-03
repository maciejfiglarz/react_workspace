import Slider from "@farbenmeer/react-spring-slider";
import PropTypes from "prop-types";

const DisplaySlider = () => {
    const onSlideChange = index => console.log(`changed to slide ${index}`);

    const BulletComponent = ({ onClick, isActive }) => (
        <li
            style={{
                width: '25px',
                height: '25px',
                backgroundColor: 'red',
                margin: '0 2px',
                opacity: isActive && '0.5'
            }}
            onClick={onClick}
        />
    );

    BulletComponent.propTypes = {
        onClick: PropTypes.func.isRequired,
        isActive: PropTypes.bool.isRequired
    };

    const ArrowComponent = ({ onClick, direction }) => {
        return (
            <div
                style={{
                    border: '1px solid black',
                    padding: '1em',
                    backgroundColor: 'white'
                }}
                onClick={onClick}
            >
                {direction}
            </div>
        );
    };

    ArrowComponent.propTypes = {
        onClick: PropTypes.func.isRequired,
        direction: PropTypes.string.isRequired
    };

    return (
        <Slider
            activeIndex={2}
            auto
            hasBullets
            BulletComponent={BulletComponent}
            ArrowComponent={ArrowComponent}
            onSlideChange={onSlideChange}
        >
            <div></div>
            <div>child 2</div>
            <div>child 3</div>
        </Slider>
    )
}


DisplaySlider.propTypes = {
    activeIndex: PropTypes.number, // the index to show, can be controlled
    ArrowComponent: PropTypes.func, // a custom component for the arrows
    arrowStyle: PropTypes.objectOf(PropTypes.string), // custom styles for the arrows
    auto: PropTypes.number, // this number indicates the speed when the slider should be slide to next slide (milliseconds)
    BulletComponent: PropTypes.func, // a custom component for the bullets
    bulletStyle: PropTypes.objectOf(PropTypes.string), // custom styles for the bullets
    children: PropTypes.node, // the children of the slider, every child is a single slide
    hasBullets: PropTypes.bool, // whether the slider should have bullets or not
    onSlideChange: PropTypes.func // a callback which is triggered when the slides changed either manually or automatically
}
export default DisplaySlider;