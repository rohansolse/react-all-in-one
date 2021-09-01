import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../Services/Actions/actions";
import { removeFromCart } from "../Services/Actions/actions";
const mapStateToProps = (state) => ({
    data: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: (data) => dispatch(addToCart(data)),
    removeFromCartHandler: (data) => dispatch(removeFromCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
