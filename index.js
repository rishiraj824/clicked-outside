import React from 'react';

export default ({ component: ComponentToMix, props }) => {
  return class ClickedOutside extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      document.addEventListener('keydown', this.close);
      document.addEventListener('mousedown', this.handleClickOutside);
    }

    close = (e) => {
      if (e.keyCode === 27) {
        props.close();
      }
    };

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
      document.removeEventListener('keydown', this.close);

    }

    handleClickOutside = (e) => {
      if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
        props.close();
      }
    };

    render() {
      return (<div ref={node => this.wrapperRef = node}>
          <ComponentToMix {...props} {...this.props}/>
        </div>
      );
    }
  }
}
