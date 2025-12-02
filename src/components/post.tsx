import Slider from './post-slider';
const Post = () => {
    return (
        <div className="post-container w-100 mt-3 mb-3 border-0 border-gray-300 rounded-lg p-4 bg-white shadow-md">
            <h2 className="post-title font-semibold"><img src="" alt="" />amal_paul</h2>
            <p className="post-content">Ernakulam - Kashmir</p>
            <Slider />
        </div>
    );
};
export default Post;