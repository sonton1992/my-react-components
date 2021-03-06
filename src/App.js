/* ***************************************************************** */
/*                                                                   */
/* Licensed Materials - Property of Son Ton                          */
/*                                                                   */
/* (C) Copyright 4CX Corp. 2018 All Rights Reserved.                 */
/*                                                                   */
/* ***************************************************************** */

// Library
import React, { Component } from 'react';

// Components
import HomePage from 'components/modules/home';

// Constants
import { COLORS_SCHEME_LIST } from 'lib/colorsListConfig';

// Image
import logo from './logo.svg';

// Style
import './App.css';

export default class App extends Component {

	render() {
		return (
			<div className="App">
				<HomePage/>
			</div>
		);
	}
}
