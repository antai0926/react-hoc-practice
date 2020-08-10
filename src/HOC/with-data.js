import React, { useEffect, useState } from 'react';

const withData = (WrappedComponent) => {
  // class WithData extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       data: [],
  //     };
  //   }

  //   componentDidMount() {
  //     console.log('dataSource', this.props.dataSource);
  //     fetch(this.props.dataSource)
  //       .then((response) => response.json())
  //       .then((data) => this.setState({ data: data.slice(0, 3) }));
  //   }
  //   render() {
  //     const { dataSource, ...otherProps } = this.props;
  //     return this.state.data.length < 1 ? (
  //       <h1>loading...</h1>
  //     ) : (
  //       <WrappedComponent data={this.state.data} {...otherProps} />
  //     );
  //   }
  // }
  const WithData = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(props.dataSource)
        .then((response) => response.json())
        .then((data) => setData(data.slice(0, 3)));
    }, [props.dataSource]);
    return <WrappedComponent data={data} {...props} />;
  };
  return WithData;
};

export default withData;
