import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";
import {option1, option2, option3, option4} from "../../mock/ChartData";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    setTimeout(()=>{
      // 基于准备好的dom，初始化echarts实例
      const chart1 = echarts.init(document.getElementById('option1'));
      chart1.setOption(option1);

      const chart2 = echarts.init(document.getElementById('option2'));
      chart2.setOption(option2);

      const chart3 = echarts.init(document.getElementById('option3'));
      chart3.setOption(option3);

      const chart4 = echarts.init(document.getElementById('option4'));
      chart4.setOption(option4);


    },0)

  }

}
