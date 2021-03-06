{
  /* <script type="text/babel"> */
}
import React from "react";

// const width = 800;
// const height = 600;
// const margin = { top: 20, right: 20, bottom: 20, left: 150 };
// const innerwidth = width - margin.left - margin.right;
// const innerheight = height - margin.top - margin.bottom;
// const destinationURL =
//   "https://gist.githubusercontent.com/yyt1011/b9bc2f18b4cc70a1ef4fa356355016e0/raw/880108566c7fb8ac41005950c54134d778f8e2b7/Total_by_destination";
// const nationalityURL =
//   "https://gist.githubusercontent.com/yyt1011/f02add39a15a4d25ac08318c5537a7f9/raw/fd50f2e5d844befc74b611e668e9e85ce4661971/Total_by_nationality";
// const initData = null;
// const useData = () => {
//   const [data, setData] = React.useState(initData);
//   React.useEffect(() => {
//     d3.csv(nationalityURL).then((d) => {
//       //--work with only 2015 data first--//
//       const d2015 = d.filter((e) => e.year == "2015");
//       const nationality2015_ = d3
//         .nest()
//         .key((d) => d.nationality)
//         .entries(d2015);
//       const n15_ = nationality2015_.map((v) => {
//         return v.values[0];
//       });
//       const n15 = n15_
//         .sort((a, b) => b.nationality_total - a.nationality_total)
//         .slice(0, 15);
//       setData(n15);
//     });
//   }, []);
//   return data;
// };

// //-----react related happens from here-------//
// const App = () => {
//   const data = useData();
//   if (!data) {
//     return <p>Loading...</p>;
//   }
//   //-----set up scales------//
//   const xScale = d3
//     .scaleLinear()
//     .range([0, innerwidth])
//     .domain([0, d3.max(data.map((d) => +d.nationality_total))]);

//   const yScale = d3
//     .scaleBand()
//     .domain(data.map((d) => d.nationality))
//     .range([0, innerheight]);

//   return (
//     <svg width={width} height={height}>
//       <g transform={`translate(${margin.left},${margin.top})`}>
//         {xScale.ticks().map((tickValue) => (
//           <g key={tickValue} transform={`translate(${xScale(tickValue)},${0})`}>
//             <line y2={innerheight} stroke={"#f0f0f0"} />
//             <text
//               y={innerheight + 5}
//               style={{ textAnchor: "middle" }}
//               dy=".71em"
//             >
//               {tickValue}
//             </text>
//           </g>
//         ))}
//         {yScale.domain().map((tickValue) => (
//           <text
//             key={tickValue}
//             y={yScale(tickValue) + yScale.bandwidth() / 2}
//             style={{ textAnchor: "end" }}
//             dx="-.71em"
//             dy=".32em"
//           >
//             {tickValue}
//           </text>
//         ))}
//         {data.map((d) => (
//           <rect
//             key={d.nationality}
//             x={0}
//             y={yScale(d.nationality)}
//             width={xScale(+d.nationality_total)}
//             height={yScale.bandwidth()}
//             fill={"#4dbf71"}
//           />
//         ))}
//       </g>
//     </svg>
//   );
// };
// const rootElement = document.getElementById("app");
// ReactDOM.render(<App />, rootElement);
// </script>
