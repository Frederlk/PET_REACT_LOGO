import { images } from "../../constants";

const ErrorMessage = () => {
    return (
        <img
            src={images.defaultImages.error}
            alt="An error happened"
            style={{
                display: "block",
                width: "250px",
                height: "250px",
                objectFit: "contain",
                margin: "0 auto",
            }}
        />
    );
};

export default ErrorMessage;
