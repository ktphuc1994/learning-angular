import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';

// import local components
import { BookingComponent } from '../booking.component';
import { UnsaveComponent } from '../dialog/unsave/unsave.component';

// import angular material
import { MatDialog } from '@angular/material/dialog';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  const dialog = inject(MatDialog);
  if (component.canDeactivate()) return true;
  const dialogRef = dialog.open(UnsaveComponent);
  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      component.canDeactivate(true, nextState.url);
    }
  });
  return false;
};
