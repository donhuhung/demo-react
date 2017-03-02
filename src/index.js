import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

let data = [
	{
		thumbnail: 'src/images/product1.jpg',
		name: 'Sản phẩm 1',
		price: 6000000,
		is_buy: 'Mua'
	},{
		thumbnail: 'src/images/product2.jpg',
		name: 'Sản phẩm 2',
		price: 6000000,
		is_buy: 'Mua'
	},{
		thumbnail: 'src/images/product3.jpg',
		name: 'Sản phẩm 3',
		price: 6000000,
		is_buy: 'Mua'
	},
	{
		thumbnail: 'src/images/product4.jpg',
		name: 'Sản phẩm 4',
		price: 6000000,
		is_buy: 'Mua'
	},
	{
		thumbnail: 'src/images/product5.jpg',
		name: 'Sản phẩm 5',
		price: 4000000,
		is_buy: 'Mua'
	},
	{
		thumbnail: 'src/images/product6.jpg',
		name: 'Sản phẩm 6',
		price: 4000000,
		is_buy: 'Mua'
	}
]

class App extends Component {
	render() {
		return(
			<Home data={data} />
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);