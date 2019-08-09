import React, { Component }  from 'react';
import ClickedOutside from '@bit/rishiraj824.react-components.clicked-outside';
import Menu from './menu';

export default class MenuBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			open: true
		}
	}
	close = () => this.setState({ open: false })
	render() {
		const { open } = this.state;
		const ClickedOutsideMenu = ClickedOutside({
			component: Menu,
			props: {
				close: this.close
			}
		})
		return open && <ClickedOutsideMenu/>
	}
}