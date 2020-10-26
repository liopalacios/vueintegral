<template>
  <div>
      <h1>Pagina Pie chart basic</h1>
      <div class="hello" ref="chartdiv"></div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
export default {
    data(){
        return {
            data: [],
            
        }
        
    },
    mounted() {  
        let chart= am4core.create(this.$refs.chartdiv, am4charts.PieChart);      
        chart.paddingRight = 20;
        let data = [{
                    "country": "Lithuania",
                    "litres": 501.9
                    }, {
                    "country": "Czech Republic",
                    "litres": 301.9
                    }, {
                    "country": "Ireland",
                    "litres": 201.1
                    }, {
                    "country": "Germany",
                    "litres": 165.8
                    }, {
                    "country": "Australia",
                    "litres": 139.9
                    }, {
                    "country": "Austria",
                    "litres": 128.3
                    }, {
                    "country": "UK",
                    "litres": 99
                    }, {
                    "country": "Belgium",
                    "litres": 60
                    }, {
                    "country": "The Netherlands",
                    "litres": 50
                    }];        

        chart.data = data;

        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        
    },

    beforeUnmount() {
        if (this.chart) {
        this.chart.dispose();
        }
    }
}
</script>

<style>

</style>