import PieChart, {
  Connector, Export, Font, Format, Label, Legend, Series, Tooltip
} from 'devextreme-react/pie-chart';
import React from 'react';



export const dataSource = [{
  country: 'USA',
  medals: 110
}, {
  country: 'China',
  medals: 100
}, {
  country: 'Russia',
  medals: 72
}, {
  country: 'Britain',
  medals: 47
}, {
  country: 'Australia',
  medals: 46
}, {
  country: 'Germany',
  medals: 41
}, {
  country: 'France',
  medals: 40
}, {
  country: 'South Korea',
  medals: 31
}];

class App extends React.Component {

  render() {
    return (
      <PieChart id="pie"
        palette="Bright"
        dataSource={dataSource}
        title="Olympic Medals in 2008"
      >
        <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={4} />
        <Export enabled={true} />
        <Series argumentField="country" valueField="medals">
          <Label
            visible={true}
            position="columns"
            customizeText={customizeText}>
            <Font size={16} />
            <Connector visible={true} width={0.5} />
          </Label>
        </Series>

        <Tooltip enabled={true} customizeTooltip={this.customizeTooltip}>
          <Format type="millions" />
        </Tooltip>
      </PieChart>
    );
  }
  customizeTooltip(arg) {
    return {
      text: `${arg.valueText} - ${(arg.percent * 100).toFixed(2)}%`
    };
  }
}

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

export default App;