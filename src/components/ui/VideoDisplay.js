import PropTypes from "prop-types";
import "styles/ui/VideoDisplay.scss";
const VideoDisplay = (props) => {

    const parseDuration = (duration) => {
        const match = duration.match(/PT(\d+)M(\d+)S/);
        if (match) {
            const minutes = parseInt(match[1]);
            const seconds = parseInt(match[2]);
            return minutes + " min " + seconds + " sec";
        }
        return "";
    }

    const parseNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    }

    return (
        <div className="video container">
            {props.title ? <div className="video title">{props.title}</div> : null}
            {props.thumbnailUrl ? <img className="video thumbnail" src={props.thumbnailUrl} alt="thumbnail"/> : null}
            <div className="video info">
                <div>Released: {props.releaseDate ? props.releaseDate : null}</div>
                <div>Duration: {props.duration ? parseDuration(props.duration) : null}</div>
                <div>Likes: {props.likes ? parseNumber(props.likes): null}</div>
                <div>Views: {props.views? parseNumber(props.views): null}</div>
            </div>
        </div>
    )
}

VideoDisplay.propTypes = {
    thumbnailUrl: PropTypes.string,
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    duration: PropTypes.string,
    likes: PropTypes.number,
    views: PropTypes.number,
}
export default VideoDisplay