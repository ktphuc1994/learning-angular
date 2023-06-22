import { inject } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { MatDialog } from '@angular/material/dialog';
import { UnsaveComponent } from '../dialog/unsave/unsave.component';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  console.log({ currentRoute, currentState, nextState });
  const dialog = inject(MatDialog);
  const router = inject(Router);
  return component.canDeactivate();
  if (component.bookingForm.pristine) return true;
  const dialogRef = dialog.open(UnsaveComponent);
  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      component.bookingForm.reset();
      router.navigate([nextState.url]);
    }
  });
  return false;
};
