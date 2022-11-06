import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailsComponent } from './blog-details.component';
import { BlogDetailsRoutingModule } from './blog-details-routing.module';

@NgModule({
  declarations: [BlogDetailsComponent],
  imports: [CommonModule, BlogDetailsRoutingModule],
})
export class BlogDetailsModule {}
