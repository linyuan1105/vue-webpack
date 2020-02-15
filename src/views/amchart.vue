<template>
	<div>
		<button @click="es6">es6</button>
		<div class="hello" ref="chartdiv"> </div>
	</div>
	
</template>

<script>
	import * as am4core from "@amcharts/amcharts4/core";
	import * as am4charts from "@amcharts/amcharts4/charts";
	// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
	
	// am4core.useTheme(am4themes_animated);
	export default{
		
		data(){
			return{
				value:"es6"
			}
		},
		methods:{
			es6(){
				let m =2016
				console.log(m)
			}
		},
		 mounted() {
			 let chart = am4core.create(this.$refs.chartdiv, am4charts.PieChart);/*创建图表实例*/
			 //内联数据
			 chart.data = [{
			   "country": "Lithuania",
			   "litres": 501.9
			 }, {
			   "country": "Czech Republic",
			   "litres": 301.9
			 }, {
			   "country": "Ireland",
			   "litres": 201.1
			 }];
			 
			 //使用外部数据亦可以
			 // chart.dataSource.url = "pie_chart_data.json";
			 let pieSeries = chart.series.push(new am4charts.PieSeries());
			 pieSeries.dataFields.value = "litres";
			 pieSeries.dataFields.category = "country";
		//     let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
		
		//     chart.paddingRight = 20;
		
		//     let data = [];
		//     let visits = 10;
		//     for (let i = 1; i < 366; i++) {
		//       visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
		//       data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
		//     }
		
		//     chart.data = data;
		
		//     let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		//     dateAxis.renderer.grid.template.location = 0;
		
		//     let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		//     valueAxis.tooltip.disabled = true;
		//     valueAxis.renderer.minWidth = 35;
		
		//     let series = chart.series.push(new am4charts.LineSeries());
		//     series.dataFields.dateX = "date";
		//     series.dataFields.valueY = "value";
		
		//     series.tooltipText = "{valueY.value}";
		//     chart.cursor = new am4charts.XYCursor();
		
		//     let scrollbarX = new am4charts.XYChartScrollbar();
		//     scrollbarX.series.push(series);
		//     chart.scrollbarX = scrollbarX;
		
		//     this.chart = chart;
		  },
		
		  
		
		
	}
</script>

<style>
</style>
