import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddBlogDialogComponent } from './add-blog-dialog/add-blog-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditBlogDialogComponent } from './edit-blog-dialog/edit-blog-dialog.component';

@NgModule({
  declarations: [AdminDashboardComponent, AddBlogDialogComponent, EditBlogDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    AdminDashboardRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminDashboardModule {}
