import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ProfileService} from '../../data/services/profile.service';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  profileService = inject(ProfileService);

  ngOnInit(): void {
    this.profileService.getMe().subscribe(value => {
      console.log(value);
    })
  }
}
