import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post.component';
import { ProjectsComponent } from './projects/projects.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog/:slug', component: BlogPostComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'todo', component: TodosComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

