import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ParentComponent } from './parent/parent.component';
import { LessonTextInterpolationComponent } from './lesson-text-interpolation/lesson-text-interpolation.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { TPComponent } from './tp/tp.component';
import { DragonballListComponent } from './dragonball-list/dragonball-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogControlCenterComponent } from './blog-control-center/blog-control-center.component';
import { OneFriendComponent } from './one-friend/one-friend.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { AuthGuardService } from './auth-guard.service';
import { UserManagementComponent } from './user-management/user-management.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tp1', component: ParentComponent },
    { path: 'lessontextinterpolation', component: LessonTextInterpolationComponent },
    { path: 'leTP', component: TPComponent },
    { path: 'exo7', component: BlogControlCenterComponent },
    { path: 'api', component: DragonballListComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard',canActivate: [AuthGuardService], component: DashboardComponent },
    { path: 'leTP4', component: UserManagementComponent },
    { path: 'listfriends', component: ListFriendsComponent },
    { path: 'onefriend', component: OneFriendComponent },
    { path: 'tp2', component: DataBindingComponent },
];
