import React, {Component} from 'react';
import Product from './Product';
import Cart from './Cart';

class Home extends Component {
	render() {
		return(
			<div className="container">
				<h1>Thông Tin Sản Phẩm</h1>
				<div className="row">
					{
						this.props.data.map((product, id) => {
							return <Product data={product} key={id} />
						})
					}
				</div>				
			</div>
		);
	}
}

export default Home;