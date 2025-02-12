import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ParentComponent } from './parent/parent.component';
import { LessonTextInterpolationComponent } from './lesson-text-interpolation/lesson-text-interpolation.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { TPComponent } from './tp/tp.component';
import { OneFriendComponent } from './one-friend/one-friend.component';
import { DataBindingComponent } from './databinding/databinding.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tp1', component: ParentComponent },
    { path: 'lessontextinterpolation', component: LessonTextInterpolationComponent },
    { path: 'leTP', component: TPComponent },
    { path: 'listfriends', component: ListFriendsComponent },
    { path: 'onefriend', component: OneFriendComponent },
    { path: 'tp2', component: DataBindingComponent },

];
