import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CatFactsModel } from '../../models/cat-facts.model';
import { CatFactsService } from '../../services/cat-facts.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactsComponent {
  readonly catFacts$: Observable<CatFactsModel> = this._catFactsService.getOne('fact').pipe(
    switchMap(data => this._catFactsService.getOne(data['fact'])));

  constructor(private _catFactsService: CatFactsService) {
  }
}
