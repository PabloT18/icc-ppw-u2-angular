import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-detail-page',
  imports: [RouterLink],
  templateUrl: './student-detail-page.html',
  styleUrl: './student-detail-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDetailPage {
  // ActivatedRoute permite leer los parametros
  // de la ruta que definimos en app.routs.ts
  private route = inject(ActivatedRoute);
  readonly id = this.route.snapshot.paramMap.get('id');

}
