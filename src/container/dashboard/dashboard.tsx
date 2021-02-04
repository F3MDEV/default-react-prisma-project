import React, { FunctionComponent, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from './../../store/actions/gamesAction';
// INSIDE COMPONENTS
import ValuesCard from '../../components/valuesCard/valuesCard'

//OUTSIDE COMPONENTS
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Chart from '../../components/charts/chart'

interface DashboardPageProps {
}

const useStyles = makeStyles((theme: any) => ({
  inputRoot: {
    '&.MuiAutocomplete-inputRoot': {
      paddingBottom: 3
    }
  },
  card:{
    height: 350
  }
}));

const DashboardPage: FunctionComponent<DashboardPageProps> = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    }, [dispatch]);
    const { popular, upcoming } = useSelector((state : any) => state.games);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Cards</h1>
            </div>
            {upcoming.slice(0, 4).map((game : any, ) =>
              <div className="col">
                <ValuesCard
                  colorOfValueSection = "#007eb0"
                  value = {game.added}
                  title = {game.name}
                  subTitle= {game.released}
                ></ValuesCard>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1>Chart Cards</h1>
            </div>
            <div className="col">
              <Paper className={`${classes.card} `}>
                <h3>Chart1</h3>
                  <Chart
                    typeOfChart="line"
                    chartClasses="w-100"
                    xAxisType='time'
                    firstBorderColorData={"#5B6AC1"}
                    firstBackgroundColorData={"#5B6AC1"}
                    firstData={[{
                        x: "2021.02.02",
                        y: 1
                    }, {
                        t: "2021.02.03",
                        y: 10
                    }, {
                        t: "2021.02.03",
                        y: 10
                    }, {
                        t: "2021.02.05",
                        y: 4
                    }, {
                        t: "2021.02.08",
                        y: 3
                    }]}
                    legendDisplay={false}
                    yAxesTicksMin={0}
                    yAxesTicksMax={11}
                    yAxesStepSize={1}
                    customTooltip={function (tooltip) {
                       // disable displaying the color box;
                       tooltip.displayColors = false;
                    }}
                    yAxesTicksCallback={(value, position, array) => {
                        if (position === 0) {
                            return value = '';
                        }
                        return value
                    }}
                    > </Chart>
              </Paper>
            </div>
            <div className="col">
              <Paper className={`${classes.card}`}>
                <h3 className={`pb-5`}>Chart2</h3>
                <Chart
                  typeOfChart='doughnut'
                  chartLabels={
                    ['Label1', 'Label2', 'Label3', 'Label4']
                  }
                  firstBackgroundColorData={[
                    '#F06292',
                    '#9575CD',
                    '#64B5F6',
                    '#4DB6AC',
                  ]}
                  firstBorderColorData={[
                    '#F06292',
                    '#9575CD',
                    '#64B5F6',
                    '#4DB6AC',
                  ]}
                  firstData={
                    [50, 16, 4, 30]
                  }
                  tooltipCallback={{
                    label: function(tooltipItem: any, data : any): string | string[] {
                   	  let dataset = (data.datasets || '')[tooltipItem.datasetIndex];
                      let total : number = (dataset.data || '').reduce(function(previousValue : number, currentValue : number) {
                        return previousValue + currentValue;
                      });
                      let currentValue = dataset.data[tooltipItem.index] as number;
                      let precentage = Math.floor(((currentValue/total) * 100)+0.5);
                        return precentage + "%";
                    }
                  }}
                >
                </Chart>
              </Paper>
            </div>
          </div>
        </div>
      </>
    )
}

export default DashboardPage;
