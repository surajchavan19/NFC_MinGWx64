import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function BarChart({ result }) {
  const chartRef = useRef();

  useEffect(() => {
    if (result) {
      const data = result;
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      const x = d3.scaleBand().range([0, width]).padding(0.1);
      const y = d3.scaleLinear().range([height, 0]);

      const svg = d3.select(chartRef.current).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      x.domain(Object.keys(data));
      y.domain([0, d3.max(Object.values(data))]);

      svg.selectAll('.bar')
        .data(Object.entries(data))
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(d[0]))
        .attr('width', x.bandwidth())
        .attr('y', (d) => y(d[1]))
        .attr('height', (d) => height - y(d[1]));

      svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append('g').call(d3.axisLeft(y));
    }
  }, [result]);

  return <div ref={chartRef} id="chart"></div>;
}

export default BarChart;
