import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, BlogsRoutingModule, NgxPaginationModule],
})
export class BlogsModule {}
