import React from 'react';
import {  ThemeProvider, createMuiTheme, Select, MenuItem, InputLabel, FormControl, TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './EmotionDetection.css';
import DataGridComponent from './components/DataGridComponent';
import { Col, Container, Row } from 'react-bootstrap';


// const dataList = () => async (dispatch) => {
// 	try {
// 		dataList = await axios.get('http://jsonplaceholder.typicode.com/users');
// 		consol.log(dataList);
// 	} catch (error) {
// 	}
// }
// state = {
// 	dataList: []
// };

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Averta',
		fontWeightRegular: 500
	},
	overrides: {
		MuiOutlinedInput: {
			root: {
				fontSize: '20px'
			},
			input: {
				padding: '16px 14px',
				height: 56,
				boxSizing: 'border-box'
			}
		},
		MuiInputLabel: {
			root: {
				fontSize: '20px'
			},
			outlined: {
				transform: 'translate(14px, 10px) scale(1)'
			}
		}
	}
});




function EmotionDetection() {
  const [selectedValue, setSelectedValue] = React.useState('');
  const [rows, setRows] = React.useState('');
  const [textValue, settextValue] = React.useState('');
  const handleChange = (event) => {
		console.log('event.target.value: ' + event.target.value);
		setSelectedValue(event.target.value);
	};
	const handleTextFieldChange=(e)=> {
        settextValue({
            textValue: e.target.value
        })

    };
	const handleSendData = () => {
		fetch('http://localhost:5000/api/fabeec?text='+ textValue+';'+ selectedValue )
		.then(res => res.json())
		.then((data) => {
			// console.log(data);
			setRows(data.message);
		})
		.catch(console.log);


		// consol.log(dataList);
	// 	setRows(
	// 		// { col1: 'cell-1-1', col2: 'cell-1-2', col3: 'cell-1-3', Result: 'False' },
	// 		// { col1: 'cell-1-1', col2: 'cell-1-1', col3: 'cell-2-3', Result: 'True' },
	// 		// { col1: 'cell-3-1', col2: 'cell-3-2', col3: 'cell-3-3', Result: 'False' }
	// 		dataList
	// 	]
	// );
		setSelectedValue(selectedValue);

	};


	return (
		<Container fluid>
			<Row>
				<Col>
					<div className="mui-textfield-form">
						<ul className="form-container">
							<li>
								
								<div className="myli">
									<ThemeProvider theme={theme}>
										{/* <TextField
											// className="mui-textfield"
											label="Enter Your Text"
											variant="outlined"

										/> */}
										<TextareaAutosize onChange={handleTextFieldChange} id="textareaId" aria-label="empty textarea" placeholder="Enter Your Text" style={{height:200, width:500, fontSize:20,fontFamily:'system-ui'}} />
									</ThemeProvider>
									<ThemeProvider theme={theme}>
										<FormControl style={{ width: 100, marginLeft: 20 }}>
											<InputLabel id="demo-controlled-open-select-label">emotion</InputLabel>
											<Select
												value={selectedValue}
												onChange={handleChange}
												// onChange={this.handleChange(e.target.value)}
												labelId="demo-controlled-open-select-label"
												id="demo-controlled-open-select"
												defaultValue="Anger"
											>
												<MenuItem value="Joy">Joy</MenuItem>
												<MenuItem value="Sad">Sad</MenuItem>
												<MenuItem value="Disgust">Disgust</MenuItem>
												<MenuItem value="Anger">Anger</MenuItem>
											</Select>
										</FormControl>
									
									</ThemeProvider>
								</div>
							</li>
							<li>
							<Button
											variant="contained"
											color="primary"
											size="large"
											label="Send"
											style={{ width: 100, marginLeft: 20 }}
											onClick={handleSendData}
										>
											Send
										</Button>
							</li>
						</ul>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<DataGridComponent  rows={rows}  />

				</Col>
			</Row>
		</Container>
	);
}

export default EmotionDetection;
