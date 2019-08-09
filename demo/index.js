import  React  from 'react';
import ClickOutside from '@bit/rishiraj824.react-components.clicked-outside';
import './menu.css';

const Menu = () => (<div class='menu'>
	<div class='menubar'>Menu 1</div>
	<div class='menubar'>Menu 2</div>
	<div class='menubar'>Menu 3</div>
	</div>)

class MenuBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: false
		}
	}
	close = () => this.setState({ open: false })
	openMenu = () => this.setState({ open: true })
	render() {
		const { open } = this.state;
		const ClickedOutsideMenu = ClickOutside({
			component: Menu,
			props: {
				close: this.close
			}
		})
		return <div>
			<a class='link' onClick={this.openMenu}>Click</a>
			{open && <ClickedOutsideMenu />}
			</div>
	}
}

export default <MenuBar />