import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { ComponentRef, Injectable, inject, signal } from "@angular/core";
import NameComponent from "./selected.component";

@Injectable({ providedIn: "root" })
export class testService {
  #overlay = inject(Overlay);

  overlayRef?: OverlayRef;

  open() {
    if (!this.overlayRef) {
      const positionStrategy = this.#overlay
        .position()
        .global()
        .bottom("0")
        .left("0")
        .right("0");
      this.overlayRef = this.#overlay.create({
        minWidth: "100%",
        height: 200,
        positionStrategy,
      });
      const userProfilePortal = new ComponentPortal(NameComponent);
      this.overlayRef.attach(userProfilePortal);
    } else {
      this.overlayRef.dispose();
      this.overlayRef = undefined;
    }
  }
}
