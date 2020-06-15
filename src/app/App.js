import React from "react";
import "./App.scss";
import HomePage from "../pages/HomePage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "../pages/shop/shop";
import LoginRegis from "../pages/LoginRegis/LoginRegis";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import Header from "../components/header/Header";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/user/userActions";
import CheckoutPage from "../pages/checkoutPage/CheckoutPage";

// import "./../components/LoginRegis/LoginRegister.scss";
// import "./../pages/LoginRegis/LoginRegis.scss";
// * lưu trữ người dùng tại app để truyền xuống các component mà chúng ta
// * muốn sử dụng thông tin user
// * khi người nào đó sign-in or sign-out, chúng ta muốn điều gì sẽ thay đổi
// * firebase sẽ giúp chúng ta nhận biết được điều đó 1 cách dễ dàng
class App extends React.Component {
  //* khi người dùng signout, componentWillUnMount sẽ được gọi lên và thay đổi state
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // createUserProfileDocument(user);
      //* neu userAuth ton tai
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //* snapshot object là nơi chúng ta sẽ lấy dữ liệu
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            // * chúng ta có thể đưa vào các property mà chúng ta muốn
            ...snapShot.data(),
          });

          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LoginRegis />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

//* không cần state từ reducer nên để null
export default connect(null, mapDispatchToProps)(App);
