import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ParentComponent } from './parent/parent.component';
import { LessonTextInterpolationComponent } from './lesson-text-interpolation/lesson-text-interpolation.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { OneFriendComponent } from './one-friend/one-friend.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tp1', component: ParentComponent },
    { path: 'lessontextinterpolation', component: LessonTextInterpolationComponent },
    { path: 'listfriends', component: ListFriendsComponent },
    { path: 'onefriend', component: OneFriendComponent },

];
