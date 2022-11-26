import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CardDetailsModel } from '../../models/card-details.model';
import { CardDetailsService } from '../../services/card-details.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDetailsComponent {
  readonly cardDetails$: Observable<CardDetailsModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._cardDetailsService.getOne(data['id']))
  );

  constructor(private _activatedRoute: ActivatedRoute, private _cardDetailsService: CardDetailsService) {
  }
}
