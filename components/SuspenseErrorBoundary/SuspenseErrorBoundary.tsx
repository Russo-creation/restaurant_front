import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service

    console.log(error, errorInfo);
  }

  render() {
    //trick when error different fetch adress or network offline
    const DisplayMessage = () => {
      if (typeof this.state.error === "object") {
        return this.state.error.message;
      }
      return this.state.error;
    };

    if (this.state.hasError) {
      // You can render any custom fallback UI
      // return <div>Something went wrong: {this.state.error}</div>;

      return (
        <div>
          Something went wrong: <DisplayMessage />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
