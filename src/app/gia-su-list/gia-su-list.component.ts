import { Component, OnInit } from '@angular/core';
import { Giasu } from '../Giasu';
import { GiasuService } from '../giasu.service';

@Component({
  selector: 'app-gia-su-list',
  templateUrl: './gia-su-list.component.html',
  styleUrls: ['./gia-su-list.component.css']
})
export class GiaSuListComponent implements OnInit {
  giasus : Giasu[];
  constructor(
    private giasuService: GiasuService
  ) { }

  ngOnInit() {
    this.getGiasus();
  }

  getGiasus(){
    this.giasuService.getGiasus().subscribe(data => this.giasus = data);
  }
}