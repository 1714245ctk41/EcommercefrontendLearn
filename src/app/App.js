import React from "react";
import "./App.scss";
import HomePage from "../pages/HomePage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "../pages/shop/shop";
import LoginRegis from "../pages/LoginRegis/LoginRegis";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import Header from "../components/header/Header";

// import "./../components/LoginRegis/LoginRegister.scss";
// import "./../pages/LoginRegis/LoginRegis.scss";
// * lưu trữ người dùng tại app để truyền xuống các component mà chúng ta
// * muốn sử dụng thông tin user
// * khi người nào đó sign-in or sign-out, chúng ta muốn điều gì sẽ thay đổi
// * firebase sẽ giúp chúng ta nhận biết được điều đó 1 cách dễ dàng
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  //* khi người dùng signout, componentWillUnMount sẽ được gọi lên và thay đổi state
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // createUserProfileDocument(user);
      //* neu userAuth ton tai
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //* snapshot object là nơi chúng ta sẽ lấy dữ liệu
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              // * chúng ta có thể đưa vào các property mà chúng ta muốn
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      }
      this.setState({
        currentUser: userAuth,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LoginRegis currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
