import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error:", error, errorInfo);
    this.setState({ hasError: true, error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    }

    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
