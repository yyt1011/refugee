const useData = () => {
  const [data, setData] = React.useState(initData);
  React.useEffect(() => {
    d3.csv(nationalityURL).then((d) => {
      //--work with only 2015 data first--//
      const d2015 = d.filter((e) => e.year == "2015");
      const nationality2015_ = d3
        .nest()
        .key((d) => d.nationality)
        .entries(d2015);
      const n15_ = nationality2015_.map((v) => {
        return v.values[0];
      });
      const n15 = n15_
        .sort((a, b) => b.nationality_total - a.nationality_total)
        .slice(0, 15);
      setData(n15);
    });
  }, []);
  return data;
};
