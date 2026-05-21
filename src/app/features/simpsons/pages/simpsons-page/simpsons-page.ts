import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SimpsonsService } from '../../services/simpsons.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-simpsons-page',
  imports: [RouterLink],
  templateUrl: './simpsons-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SimpsonsPage {

  private simpsonsService = inject(SimpsonsService);

  simpsonsResource = rxResource({
    stream: () => this.simpsonsService.getCharacters(1),
  });



}
