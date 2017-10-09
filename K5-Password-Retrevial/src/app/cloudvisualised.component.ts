import { CloudvisualisedService } from './services/cloudvisualised.service';
import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, OnChanges } from '@angular/core';
import * as d3Selection from 'd3-selection';
import * as d3Force from 'd3-force';
import * as d3Scale from 'd3-scale';
import * as d3Drag from 'd3-drag';
import * as d3Color from 'd3-color';

@Component({
  selector: 'app-cloudvisualised',
  templateUrl: './cloudvisualised.component.html',
  styleUrls: ['./cloudvisualised.component.css']
})
export class CloudvisualisedComponent implements OnInit, OnChanges {
  @ViewChild('chart') private chartContainer: ElementRef;

  nodeDetails: any;
  chartTester: any;

  constructor( private cloudvisualisedService: CloudvisualisedService ) {
                  this.cloudvisualisedService.currentVisualData.subscribe(newData => this.nodeDetails = newData);
                }

  ngOnInit() {
    this.createTest();
    if (this.nodeDetails != null) {
      this.createChart();
      console.log('INITIAL CHART');
    }
  }

  ngOnChanges() {
    this.createTest();
    this.createChart();
    console.log('CHANGES IN CHART');
  }

  createTest() {

    this.chartTester = '<p> Chart Tester </p>';

  }

  createChart() {
      console.log('START OF CREATECHART IN CHART');
      const element = this.chartContainer.nativeElement;
      // this.width = element.offsetWidth - this.margin.left - this.margin.right;
      // this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
      const width = 400;
      const height = 400;
      // let svg = d3Selection.select(element).append('svg')
      //   .attr('width', element.offsetWidth)
      //   .attr('height', element.offsetHeight);

            // Width and height


			// Original data
      const dataset = this.nodeDetails;

      // Initialize a simple force layout, using the nodes and edges in dataset
      let force = d3Force.forceSimulation(dataset.nodes)
              .force('charge', d3Force.forceManyBody())
              .force('link', d3Force.forceLink(dataset.edges))
              .force('center', d3Force.forceCenter().x(width / 2).y(height / 2));

      const colors = d3Scale.scaleOrdinal(d3Scale.schemeCategory10);

			// Create SVG element
      const svg = d3Selection.select(element)
                    .append('svg')
                    .attr('width', 400)
                    .attr('height', 400);
                    // .attr('width', element.offsetWidth)
                    // .attr('height', element.offsetHeight);

			// Create edges as lines
      const edges = svg.selectAll('line')
              .data(dataset.edges)
              .enter()
              .append('line')
              .style('stroke', '#ccc')
              .style('stroke-width', 1);

			// Create nodes as circles
      const nodes = svg.selectAll('circle')
              .data(dataset.nodes)
              .enter()
              .append('circle')
              .attr('r', 10)
              .style('fill', function(d, i) { return colors(i); })
              .call(d3Drag.drag()  // Define what to do on drag events
              .on('start', dragStarted)
              .on('drag', dragging)
              .on('end', dragEnded));

			// Add a simple tooltip
      nodes.append('title')
        .text(function(d: any) { return d.name; });

			// Every time the simulation "ticks", this will be called
      force.on('tick', function() {
          console.log('TICKING EDGES IN CHART');

          edges.attr('x1', function(d: any) { return d.source.x; })
              .attr('y1', function(d: any) { return d.source.y; })
              .attr('x2', function(d: any) { return d.target.x; })
              .attr('y2', function(d: any) { return d.target.y; });

          nodes.attr('cx', function(d: any) { return d.x; })
              .attr('cy', function(d: any) { return d.y; });

      });


			// Define drag event functions
      function dragStarted(d) {
        if (!d3Selection.event.active) {
          force.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }
      }

      function dragging(d) {
        d.fx = d3Selection.event.x;
        d.fy = d3Selection.event.y;
      }

      function dragEnded(d) {
        if (!d3Selection.event.active) {
          force.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }
      }
  }
}

