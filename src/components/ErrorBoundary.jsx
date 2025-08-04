import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error info here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" style={{ textAlign: 'center', margin: '2rem' }}>
          <h2>Something went wrong. Please try again later.</h2>
          <button
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#222', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            onClick={() => this.setState({ hasError: false })}
          >
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
