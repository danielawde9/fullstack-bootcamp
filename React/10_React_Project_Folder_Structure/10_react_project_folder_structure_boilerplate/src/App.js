import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { countriesData } from "./data/countries";
import DanielAwde9Image from "./assets/images/DanielAwde9.jpg";
import { showDate } from "./utils/display-date-and-time";

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ["HTML", "CSS", "JS"],
    message: "Click show time or Greet people to change me",
    country: countriesData[1],
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };
  handleTime = () => {
    let message = showDate(new Date());
    this.setState({ message });
  };
  greetPeople = () => {
    let message = "Welcome to 30 Days Of React Challenge, 2020";
    this.setState({ message });
  };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "DanielAwde9",
        lastName: "Yetayeh",
      },
      date: new Date(),
    };
    const techs = ["HTML", "CSS", "JavaScript"];
    const user = { ...data.author, image: DanielAwde9Image };

    return (
      <div className="app">
        {this.state.backgroundColor}
        <Header data={data} />
        <Main
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
          country={this.state.country}
          user={user}
        />

        <Footer date={new Date()} />
      </div>
    );
  }
}

export default App;
