import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import '../EmotionDetection.css';


function DataGridComponent({ rows, selectedValue }) {

	return (
		<div>
		{rows?(
		<div >
			<TableContainer component={Paper}>
				<Table className="dataGrid"  aria-label="caption table">
					<caption>A basic table example with a caption</caption>
					<TableHead>
						<TableRow>
							<TableCell style={{backgroundColor:'darkgrey', fontWeight:'bold'}} align="center">Col1</TableCell>
							<TableCell style={{backgroundColor:'darkgrey', fontWeight:'bold'}} align="center">Col2</TableCell>
							<TableCell style={{backgroundColor:'darkgrey', fontWeight:'bold'}} align="center">Col3</TableCell>
							<TableCell style={{backgroundColor:'darkgrey', fontWeight:'bold'}} align="center">Result</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name}>
							
								<TableCell align="center" >{row.col1}</TableCell>
								<TableCell align="center">{row.col2}</TableCell>
								<TableCell align="center">{selectedValue}</TableCell>
								<TableCell align="center" style={{color:row.col1===row.col2?'blue':'red'}}>{row.Result}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
		): <div>Loading...</div>}
		</div>

	);
}

export default DataGridComponent;
