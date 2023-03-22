import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DataModel } from 'src/app/models/chart';

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.scss']
})

export class OutlineComponent implements OnInit {
  public isOpen = false;
  curentTab: string = '';
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  public data: DataModel = {
    labels: [
    ],
    datasets: [
      {
        label: "",
        data: ['300', '300', '300'],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
      },
    ]
  }

  public option = {
    aspectRatio: 2.5
  }
  constructor(
    private shareService: ShareService,
  ) {
    this.shareService.currentStatus.subscribe(el => this.isOpen = el);
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  ngOnInit(): void {
  }

  openCity(event: any, tab: string): void {
    this.curentTab = tab;
  }
}
interface FoodNode {
  name: string;
  children?: FoodNode[];
}
