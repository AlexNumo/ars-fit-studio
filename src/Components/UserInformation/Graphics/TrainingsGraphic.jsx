import { ResponsivePie } from '@nivo/pie';
export const VisitTrainingsGraphic = ({ data, info }) => (
  <ResponsivePie 
    // data={console.log(data)}
    data={data}
    margin={{ top: -20, right: 140, bottom: 0, left: 10 }}
    // margin={{ top: 80, right: 10, bottom: 80, left: 10 }}
    innerRadius={0.1} // центральний радиус
    padAngle={2} // расстояние между секциями
    cornerRadius={2} // заокруглённость
    // sortByValue={true}
    activeOuterRadiusOffset={6} // видиление жирным при выборе
    borderWidth={0.1} // видиление жирным при выборе бордера
    colors={{ scheme: 'set1' }}
    // borderColor={'#000000'}
    borderColor={{
      from: 'color',
      modifiers: [
          ['darker', .6],
          ['opacity', .5]
      ]
    }}
    arcLinkLabelsSkipAngle={0} // не исчезает с 0 или исчезает с какого-то значения
    enableArcLinkLabels={false} // включает акри внутри круга
    motionConfig={'slow'} // animation
    onClick={info}
    // arcLabel={e => e.id + " (" + e.value + ")"}
    arcLabel='value'
    legends={[
      {
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: 130,
        translateY: 0,
        itemWidth: 115,
        itemHeight: 20,
        itemsSpacing: -4,
        symbolSize: 15,
        itemDirection: 'left-to-right'
      }
      
    ]}
  />
);