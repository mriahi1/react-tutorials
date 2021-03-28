import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';


class BarChart extends Component {
  render() {
    const data = [
        {x: "NOT DONE", y: this.props.todo_count.incomplete_task_count, label: "NOT DONE"},
        {x: "DONE", y: this.props.todo_count.complete_task_count, label: "DONE"}
    ]
    return (
      <div className="chart">
        <XYPlot
            xType="ordinal"
            width={300}
            height={300}>
          <HorizontalGridLines />
          <VerticalBarSeries
            color="blue"
            data={data}/>
        
            <YAxis />
           <XAxis />
        </XYPlot>
      </div>
    );
  }
}

export default BarChart;