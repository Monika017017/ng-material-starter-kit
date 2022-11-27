import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GenderUserService } from '../../services/gender-user.service';
import {GenderUserModel} from "../../models/gender-user.model";

@Component({
  selector: 'app-gender-user',
  templateUrl: './gender-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenderUserComponent {
  readonly genderUser$: Observable<GenderUserModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._genderUserService.getOne(data['name']))
  );

  constructor(private _activatedRoute: ActivatedRoute, private _genderUserService: GenderUserService) {
  }
}
