import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-chid',
  templateUrl: './test-chid.component.html',
  styleUrls: ['./test-chid.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TestChidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  render() {
    console.log("Render in TestChidComponent");
    return 'Test Child'
  }

}
