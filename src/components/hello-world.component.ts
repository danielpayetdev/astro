import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
  signal,
} from "@angular/core";
import { Overlay } from "@angular/cdk/overlay";
import { testService } from "./test.service";

@Component({
  selector: "app-hello",
  standalone: true,
  template: `
    @if(show()){
    <p>{{ helpText }}</p>
    }
    <button (click)="toggle()">Toggle {{ show() }}</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HelloComponent {
  @Input() helpText = "help";

  show = signal(false);

  test = inject(testService);
  overlay = inject(Overlay);

  toggle() {
    this.show.update((s) => !s);
    this.test.open();
  }
}
