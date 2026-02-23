import Hii from "./Hii";
import Products from "./Products";

const Hello = (props) => {
    return (
        <>
            <h1>Welcome to Hello Component</h1>
            {/* APP=>Hello=>Hii */}

            {/* App → Hello → Hii → Hey */}
            <Hii />

            {/* Products section */}
            {/* <Products /> */}
        </>
    );
};

export default Hello;