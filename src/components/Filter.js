import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends Component {
	render() {
		console.log("length", this.props.filteredProducts.length);
		return (
			<div className="filter">
				<div className="filter-result">
					 {this.props.filteredProducts.length}
					Products
				</div>
				<div className="filter-sort">
					Order{" "}
					<select
						value={this.props.sort}
						onChange={(e) =>
							this.props.sortProducts(
								this.props.filteredProducts,
								e.target.value
							)
						}
					>
						<option>Latest</option>
						<option value="lowest">Lowest</option>
						<option value="highest">Highest</option>
					</select>
				</div>
				<div className="filter-size">
					Filter{" "}
					<select
						value={this.props.size}
						onChange={(e) =>
							this.props.filterProducts(this.props.products, e.target.value)
						}
					>
						<option value="">ALL</option>
						<option value="S">S</option>
						<option value="M">M</option>
						<option value="L">L</option>
						<option value="F">F</option>
					</select>
				</div>
			</div>
		);
	}
}
export default connect(
	(state) => ({
		pack: state.products.pack,
		sort: state.products.sort,
		products: state.products.items,
		filteredProducts: state.products.filteredItems,
	}),
	{
		filterProducts,
		sortProducts,
	}
)(Filter);