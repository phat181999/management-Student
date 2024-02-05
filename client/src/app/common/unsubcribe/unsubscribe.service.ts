import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnsubscribeService implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  get unsubscribe$(): Subject<void> {
    return this.destroy$;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
