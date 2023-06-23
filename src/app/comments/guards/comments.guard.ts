import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CommentService } from '../comment.service';

export const commentsResolver: ResolveFn<InterfaceComment[]> = (
  route,
  state
) => {
  const commentService = inject(CommentService);
  return commentService.getComments();
};
