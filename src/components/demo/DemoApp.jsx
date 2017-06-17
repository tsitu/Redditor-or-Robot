import React from "react";

import Clock from "./Clock.jsx";
import Toggle from "./Toggle.jsx";
import LoginControl from "./LoginControl.jsx";
import NameForm from "./NameForm.jsx";
import Calculator from "./Calculator.jsx";
import FilterableProductTable from "./FilterableProductTable.jsx";

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

// DemoApp: main functional component
function DemoApp() {
    return (
        <div>
            <FilterableProductTable products={PRODUCTS} /> <br />
            <Calculator /> <br />
            <NameForm /> <br />
            <LoginControl /> <br />
            <Toggle /> <br />
            <Clock /> <br />
        </div>
    );
}

module.exports = DemoApp;